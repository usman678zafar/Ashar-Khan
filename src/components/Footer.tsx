import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-black pt-24 border-t border-white/5 relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1">
            <a href="/" className="text-2xl font-display tracking-tight flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded-full border-2 border-brand-accent flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-brand-accent" />
              </div>
              <span className="text-white font-bold">FIT</span>
              <span className="text-brand-accent font-bold">FACTORY</span>
            </a>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h4>
                <ul className="space-y-3 text-white/40 text-[10px] uppercase tracking-widest">
                  <li><a href="#" className="hover:text-brand-accent">Classess Details</a></li>
                  <li><a href="#" className="hover:text-brand-accent">Trainers Profile</a></li>
                  <li><a href="#" className="hover:text-brand-accent">F.A.Q</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Lorem Ipsum</h4>
                <ul className="space-y-3 text-white/40 text-[10px] uppercase tracking-widest">
                  <li><a href="#" className="hover:text-brand-accent">Messace Facilites</a></li>
                  <li><a href="#" className="hover:text-brand-accent">Owner Profile</a></li>
                  <li><a href="#" className="hover:text-brand-accent">lorem ipsum</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-white/40 text-[10px] uppercase tracking-widest block">Gallery</span>
                <h4 className="text-brand-accent font-display text-2xl">GYM PHOTO</h4>
              </div>
              <button className="bg-brand-accent text-brand-black px-8 py-2 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-all">
                Gallery
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" className="aspect-square object-cover rounded-lg" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" className="aspect-square object-cover rounded-lg" referrerPolicy="no-referrer" />
              <div className="grid grid-cols-2 gap-2">
                <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" className="aspect-square object-cover rounded-lg" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" className="aspect-square object-cover rounded-lg" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" className="aspect-square object-cover rounded-lg" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" className="aspect-square object-cover rounded-lg" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end justify-end">
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 bg-brand-charcoal border border-white/10 rounded-lg flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-black transition-all"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-brand-accent py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-brand-black text-[10px] font-bold uppercase tracking-widest">
            Copyright © 2026 FitFactory
          </div>
          <button 
            onClick={scrollToTop}
            className="w-8 h-8 bg-brand-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ArrowUp size={16} />
          </button>
          <div className="text-brand-black text-[10px] font-bold uppercase tracking-widest">
            Brought you by IDEA. DRIVEN.
          </div>
        </div>
      </div>
    </footer>
  );
}
