import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-20 max-w-4xl"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-blue-400 font-mono text-xs tracking-[0.4em] uppercase mb-6 block"
        >
          Software Artisanry • Since 2024
        </motion.span>
        
        <h1 className="text-6xl md:text-8xl font-sans font-bold text-white mb-8 tracking-tighter leading-none">
          Blue <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Moon</span>
          <br />
          Software
        </h1>
        
        <p className="text-lg md:text-xl text-blue-100/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          We craft digital experiences that resonate with the celestial rhythm. 
          Precision, elegance, and distinctiveness in every line of code.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium flex items-center gap-2 group shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all"
          >
            Launch Project
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-blue-400/30 text-blue-100 rounded-full font-medium backdrop-blur-sm hover:bg-white/5 transition-all"
          >
            Our Identity
          </motion.button>
        </div>
      </motion.div>

      {/* Down Arrow Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-blue-400/50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-400/0 via-blue-400 to-blue-400/0" />
      </motion.div>
    </section>
  );
}
