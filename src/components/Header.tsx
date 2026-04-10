import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-brand-black/80 backdrop-blur-md py-4 border-white/10' 
          : 'bg-transparent py-6 border-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-display tracking-tighter flex items-center gap-2 group">
          <span className="text-brand-accent group-hover:text-white transition-colors">AK</span>
          <span className="text-white">FIT</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-white/70 hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={scrollToContact}
            className="bg-brand-accent text-brand-black px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white transition-all transform hover:scale-105 active:scale-95"
          >
            Book Training
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-charcoal border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-display uppercase tracking-widest text-white hover:text-brand-accent"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={scrollToContact}
              className="bg-brand-accent text-brand-black px-6 py-3 rounded-full font-bold uppercase text-sm tracking-widest"
            >
              Book Training
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
