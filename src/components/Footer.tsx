import { Instagram, Twitter, Youtube, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-black pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-2">
            <a href="/" className="text-3xl font-display tracking-tighter flex items-center gap-2 mb-8">
              <span className="text-brand-accent">AK</span>
              <span className="text-white">FIT</span>
            </a>
            <p className="text-white/50 text-lg max-w-sm mb-8">
              Elite personal training and bodybuilding coaching. Build your legacy with science-backed training.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/40 hover:text-brand-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/40 hover:text-brand-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-white/40 hover:text-brand-accent transition-colors"><Youtube size={20} /></a>
              <a href="#" className="text-white/40 hover:text-brand-accent transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-white/40 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-white/40 hover:text-white transition-colors">About</a></li>
              <li><a href="#pricing" className="text-white/40 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-white/40 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-white/40 hover:text-white transition-colors">Book Training</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Contact</h4>
            <ul className="space-y-4 text-white/40">
              <li>Karachi, Pakistan</li>
              <li>hello@asharkhan.fit</li>
              <li>+92 300 1234567</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-6">
          <div className="text-white/30 text-xs uppercase tracking-[0.2em]">
            © 2026 AK FIT. All Rights Reserved.
          </div>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-white/30 hover:text-brand-accent transition-colors uppercase text-xs tracking-[0.2em]"
          >
            Back to top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
