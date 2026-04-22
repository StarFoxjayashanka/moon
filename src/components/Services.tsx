import { motion } from 'motion/react';
import { Code2, Cpu, Globe, Rocket, Shield, Zap } from 'lucide-react';

const SERVICES = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Architecture",
    description: "Highly distributed systems built for extreme availability and low latency across all continents."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Celestial Engineering",
    description: "Custom software solutions engineered with the precision of a master watchmaker."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Night Watch Security",
    description: "Multi-layered defensive protocols designed to protect your most valuable digital assets."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Neural Optimization",
    description: "AI-driven algorithms that evolve with your business, finding efficiency in every byte."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Hyperscale Launch",
    description: "Infrastructure that scales from a small spark to a massive blaze without breaking a sweat."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Legacy Crafting",
    description: "We don't just ship code; we build digital artifacts that stand the test of time."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16 max-w-2xl">
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">04 / Expertise</span>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6">Mastering the <span className="italic text-blue-400">Digital Void</span>.</h2>
          <p className="text-blue-100/50 text-lg">
            Our capabilities extend beyond standard development. We specialize in the complex, 
            the high-stakes, and the "impossible" digital challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-blue-100/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
