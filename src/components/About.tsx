import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Our Story / Video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="text-brand-accent text-xs uppercase tracking-[0.3em] font-bold">Overview Intro</span>
              <h2 className="text-4xl md:text-5xl mt-2">OUR STORY</h2>
            </div>
            
            <div className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-video shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
                alt="Gym Visit"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-black/40 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Play size={24} fill="white" />
                </div>
              </div>
              {/* YouTube Style Overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md" />
                <span className="text-white text-sm font-medium">Your Gym Visit in 60 Seconds</span>
              </div>
            </div>
          </motion.div>

          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="text-brand-accent text-xs uppercase tracking-[0.3em] font-bold">About Us</span>
              <h2 className="text-4xl md:text-5xl mt-2">WHO WE ARE</h2>
            </div>
            
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                A health coaching group that helps busy people control their weight while consistently hitting new goals. All this, without losing time to life's ever changing demands. Regardless if you work less than 40 hours, or more than 70 hours in a week, results come from you putting the effort to grow 1% each day.
              </p>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-brand-accent text-brand-black px-10 py-3 rounded-full font-bold uppercase tracking-widest text-xs shadow-lg"
            >
              Read More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
