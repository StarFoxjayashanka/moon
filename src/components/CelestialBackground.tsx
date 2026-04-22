import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { getMoonPhase } from '../utils/lunar';

export default function CelestialBackground() {
  const { scrollY } = useScroll();
  const [moonInfo, setMoonInfo] = useState(getMoonPhase());
  const starsRef = useRef<HTMLDivElement>(null);

  // Parallax for moon
  const moonY = useTransform(scrollY, [0, 1000], [0, 200]);
  const moonScale = useTransform(scrollY, [0, 1000], [1, 1.2]);

  useEffect(() => {
    // Update moon phase every hour if needed, but for now just once
    setMoonInfo(getMoonPhase());
  }, []);

  // Generate stars
  const stars = Array.from({ length: 150 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 105}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 5,
  }));

  /**
   * The moon "darkness" (covered part) logic:
   * For a more realistic look, we can use a combination of gradients and masks.
   * phase: 0 (new), 0.25 (first quarter), 0.5 (full), 0.75 (last quarter), 1 (new)
   */
  const moonPhaseShift = moonInfo.phase * 100; // 0 to 100

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      {/* Custom Cursor Trail (Client-side interactive) */}
      <CursorTrail />

      {/* Deep Space Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#1e293b_0%,#0f172a_50%,#000000_100%)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#1e1b4b_0%,transparent_50%)] opacity-40" />
      
      {/* Animated Stars */}
      <div ref={starsRef} className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-blue-100 shadow-[0_0_8px_rgba(191,219,254,0.8)]"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating Nebula clouds (Optional, for "Blue Moon" atmosphere) */}
      <motion.div 
        className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Giant Parallax Moon */}
      <motion.div
        id="hero-moon"
        style={{ y: moonY, scale: moonScale }}
        className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] z-10"
      >
        <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.3)]">
          {/* High-Resolution Moon Image */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg" 
            alt="Real Moon"
            className="w-full h-full object-cover transition-transform duration-700"
            referrerPolicy="no-referrer"
            style={{
              filter: 'grayscale(0.1) brightness(1.1) contrast(1.1) hue-rotate(190deg)',
            }}
          />
          
          {/* Blue luminescence overlay */}
          <div className="absolute inset-0 bg-blue-500/10 mix-blend-color pointer-events-none" />

          {/* Lunar Phase Shadow Mask */}
          <div className="absolute inset-0 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <mask id="moonShadowMask">
                  <rect x="0" y="0" width="100" height="100" fill="white" />
                  <path 
                    d={getMoonShadowPath(moonInfo.phase)} 
                    fill="black" 
                  />
                </mask>
              </defs>
              <circle cx="50" cy="50" r="51" fill="#020617" opacity="0.94" mask="url(#moonShadowMask)" />
            </svg>
          </div>

          {/* Glow and Atmosphere */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(59,130,246,0.3)] pointer-events-none" />
          <div className="absolute -inset-4 rounded-full bg-blue-400/5 blur-xl pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
}

/**
 * Generates an SVG path for the moon shadow based on its phase (0-1)
 * This creates a realistic terminator line transition.
 */
function getMoonShadowPath(phase: number): string {
  const r = 50;
  const sweep = phase <= 0.5 ? 0 : 1;
  const intensity = Math.cos(phase * 2 * Math.PI); // -1 to 1
  const xRadius = Math.abs(intensity * r);
  const largeArc = phase > 0.25 && phase < 0.75 ? 0 : 1;

  // Simplified realistic terminator
  if (phase === 0.5) return "M 0 0 L 0 0"; // Full Moon - no shadow
  
  if (phase < 0.5) {
    // Waxing
    return `M 50 0 A 50 50 0 0 0 50 100 A ${xRadius} 50 0 0 ${intensity > 0 ? 1 : 0} 50 0`;
  } else {
    // Waning
    return `M 50 0 A 50 50 0 0 1 50 100 A ${xRadius} 50 0 0 ${intensity < 0 ? 1 : 0} 50 0`;
  }
}

function CursorTrail() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] mix-blend-difference hidden md:block"
      animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
      transition={{ type: 'spring', damping: 25, stiffness: 250, restDelta: 0.001 }}
    >
      <div className="w-full h-full rounded-full border border-blue-400 opacity-50 relative">
         <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-sm" />
      </div>
    </motion.div>
  );
}
