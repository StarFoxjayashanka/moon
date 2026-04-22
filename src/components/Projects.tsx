import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: "Celestial AI",
    category: "Neural Networks",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
    description: "A self-optimizing cloud infrastructure powered by predictive astronomy algorithms."
  },
  {
    id: 2,
    title: "LunaPay",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
    description: "Decentralized payment gateway with sub-millisecond settlement times across global nodes."
  },
  {
    id: 3,
    title: "Midnight Shield",
    category: "Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    description: "Enterprise-grade cybersecurity monitoring platform for high-risk data environments."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">02 / Completed Phase</span>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight">Our Masterpieces</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-100/50 max-w-md text-right hidden md:block"
          >
            Each project is a testament to our commitment to perfection and the Blue Moon standard of quality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm relative transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-blue-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/60 text-sm line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {project.description}
                  </p>
                </div>
                
                <div className="absolute top-6 right-6 flex gap-2 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white hover:text-blue-400 transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white hover:text-blue-400 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
