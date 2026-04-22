import { motion } from 'motion/react';
import { Mail, MessageSquare, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-6">Let's build the <span className="text-blue-400">extraordinary</span> together.</h3>
            <p className="text-blue-100/50 mb-8 max-w-sm">
              We're always looking for ambitious projects and partners who share our celestial vision.
            </p>
            <div className="flex gap-4">
              <motion.button className="p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all">
                <Mail className="w-6 h-6" />
              </motion.button>
              <motion.button className="p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all">
                <MessageSquare className="w-6 h-6" />
              </motion.button>
              <motion.button className="p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all">
                <Linkedin className="w-6 h-6" />
              </motion.button>
              <motion.button className="p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all">
                <Twitter className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-blue-100/50 hover:text-white transition-colors">Home</a></li>
              <li><a href="#identity" className="text-blue-100/50 hover:text-white transition-colors">Identity</a></li>
              <li><a href="#projects" className="text-blue-100/50 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#gallery" className="text-blue-100/50 hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <li className="text-blue-100/50">info@bluemoon.io</li>
              <li className="text-blue-100/50">+1 (555) CEL-ESTL</li>
              <li className="text-blue-100/50">Silicon Valley • Earth</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
            </div>
            <span className="text-white font-bold tracking-tighter">Blue Moon</span>
          </div>
          
          <div className="text-blue-100/30 text-xs">
            © 2024 Blue Moon Software. All rights reserved. Made under the full moon.
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group p-4 bg-blue-600/10 hover:bg-blue-600 rounded-full border border-blue-500/20 transition-all overflow-hidden relative"
          >
            <ArrowUp className="w-5 h-5 text-blue-400 group-hover:text-white relative z-10 transition-colors" />
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
      
      {/* Decorative moon arc */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[120%] border-t border-blue-500/5 rounded-[100%] pointer-events-none" />
    </footer>
  );
}
