import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/60 to-brand-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Bodybuilder training"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ opacity }}
        >
          <h1 className="text-6xl md:text-9xl font-display leading-none mb-4">
            Build Your <span className="text-brand-accent">Legacy</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto font-light tracking-wide mb-10">
            Elite Personal Training at the gym or in the comfort of your home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-brand-accent text-brand-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 active:scale-95">
              Start Your Journey
            </button>
            <button className="w-full sm:w-auto border border-white/20 hover:border-brand-accent text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all backdrop-blur-sm">
              View Services
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent" />
      </motion.div>
    </section>
  );
}
