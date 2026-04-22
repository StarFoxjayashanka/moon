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
        className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] rounded-full z-10"
      >
        {/* Moon Base Texture - Using a high quality Unsplash moon */}
        <div 
          className="w-full h-full rounded-full relative group shadow-[0_0_100px_rgba(59,130,246,0.3)] transition-shadow duration-700"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1520690214124-2405c52470bb?auto=format&fit=crop&q=80&w=1200')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'hue-rotate(190deg) brightness(1.2) contrast(1.1)',
          }}
        >
          {/* Celestial Glow */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(59,130,246,0.5)] bg-blue-500/10" />
          
          {/* Real Lunar Phase Masking */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {/* The Shadow Overlay */}
            <motion.div 
              className="absolute inset-0 bg-[#020617]/95"
              style={{
                borderRadius: '50%',
                // Moving shadow based on phase
                // 0%: Full coverage (New), 50%: Half (Quarter), 100%: None (Full), then reveals again
                x: moonInfo.phase <= 0.5 
                    ? `${-100 + (moonInfo.phase * 200)}%` // -100 to 0 (New to Full)
                    : `${(moonInfo.phase - 0.5) * 200}%`   // 0 to 100 (Full to New)
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* Soft inner shadow for depth */}
            <div className="absolute inset-0 rounded-full shadow-[inset_-10px_-10px_40px_rgba(0,0,0,0.8),inset_10px_10px_40px_rgba(59,130,246,0.2)]" />
          </div>
          
          {/* Surface blue luminescence */}
          <div className="absolute inset-0 rounded-full mix-blend-screen opacity-40 bg-[radial-gradient(circle_at_30%_30%,#60a5fa,transparent_70%)]" />
        </div>
      </motion.div>
    </div>
  );
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
