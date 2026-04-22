import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="identity" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">01 / Identity</span>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-8">
              We are the quiet pioneers of the <span className="italic text-blue-400">digital night</span>.
            </h2>
            <div className="space-y-6 text-blue-100/70 text-lg leading-relaxed">
              <p>
                Founded under the rare brilliance of a blue moon, our company stands for those distinct, 
                once-in-a-lifetime breakthroughs. We don't just build software; we engineer legacies.
              </p>
              <p>
                Our philosophy is simple: technology should be as stable as the lunar cycles yet as 
                extraordinary as the phenomenon we're named after. We prioritize deep focus and 
                technical excellence over high-frequency noise.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-white mb-1 tracking-tight">12+</div>
                <div className="text-blue-400 text-sm font-mono uppercase tracking-tighter">Global Awards</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1 tracking-tight">150+</div>
                <div className="text-blue-400 text-sm font-mono uppercase tracking-tighter">Systems Built</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                alt="Cyberpunk high tech"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 p-6 backdrop-blur-md bg-black/40 border border-white/10 rounded-xl">
                <p className="text-white italic font-serif text-lg leading-relaxed">
                  "Our work bridges the gap between impossible dreams and functional reality."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500" />
                  <div>
                    <div className="text-white font-bold text-sm">Orion Black</div>
                    <div className="text-blue-400 text-xs uppercase tracking-widest">Lead Architect</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-[60px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 blur-[60px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
