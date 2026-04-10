import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
  { name: 'Plan / Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Blog', href: '#blog' },
  { name: 'BMR', href: '#' },
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-brand-black/90 backdrop-blur-md py-4' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-display tracking-tight flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full border-2 border-brand-accent flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-brand-accent" />
          </div>
          <span className="text-white font-bold">FIT</span>
          <span className="text-brand-accent font-bold">FACTORY</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-white hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={scrollToContact}
            className="bg-brand-accent text-brand-black px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white transition-all transform hover:scale-105 active:scale-95"
          >
            Free Trial
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
