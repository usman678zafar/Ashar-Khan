import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-brand-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Bodybuilder training"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Smoke Effect Overlay (Simulated with gradients) */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-brand-black/20 to-brand-black/80 z-15 pointer-events-none" />
      </motion.div>

      {/* Social Sidebar */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-8">
        <div className="w-[1px] h-20 bg-white/20" />
        <a href="#" className="text-white/60 hover:text-brand-accent transition-colors"><Facebook size={18} /></a>
        <a href="#" className="text-white/60 hover:text-brand-accent transition-colors"><Twitter size={18} /></a>
        <a href="#" className="text-white/60 hover:text-brand-accent transition-colors"><Linkedin size={18} /></a>
        <div className="w-[1px] h-20 bg-white/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-[120px] font-display leading-[0.9] mb-8 flex flex-col items-center">
            <span className="text-brand-accent">YOU DON'T HAVE</span>
            <span className="text-brand-accent">TO BE EXTREME</span>
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">JUST CONSISTENT</span>
          </h1>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-accent text-brand-black px-12 py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(255,184,0,0.3)]"
          >
            Know More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
