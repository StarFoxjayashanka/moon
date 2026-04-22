import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Identity', href: '#identity' },
    { label: 'Projects', href: '#projects' },
    { label: 'Expertise', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5' : 'py-8'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-blue-500 relative flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-blue-500/20" />
             <div className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
          </div>
          <span className="text-white text-xl font-bold tracking-tighter uppercase font-sans">Blue Moon</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-blue-100/60 hover:text-white text-sm font-mono tracking-widest uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-medium shadow-[0_0_15px_rgba(37,99,235,0.3)]"
          >
            Get Studio
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/5 p-8 md:hidden"
        >
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg font-mono tracking-widest uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
