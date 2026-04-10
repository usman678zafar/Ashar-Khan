import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sean Silva',
    role: '10 Weeks / Private Training',
    text: 'Phasellus lobortis dui ac tellus dictum vehicula. Nunc ullamcorper lorem vitae scelerisque molestie. Dincidunt bibendum elit et semper.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Sean Silva',
    role: '10 Weeks / Private Training',
    text: 'Phasellus lobortis dui ac tellus dictum vehicula. Nunc ullamcorper lorem vitae scelerisque molestie. Dincidunt bibendum elit et semper.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Smoke Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover blur-2xl"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <h3 className="text-6xl md:text-8xl font-display leading-[0.8] text-brand-accent">HARD WORK</h3>
            <h3 className="text-6xl md:text-8xl font-display leading-[0.8] text-white">PAYS OFF</h3>
            
            {/* Overlay Image */}
            <div className="absolute -top-20 -right-20 w-full h-full pointer-events-none hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-contain grayscale opacity-50"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div>
            <div className="mb-12">
              <span className="text-brand-accent text-xs uppercase tracking-[0.3em] font-bold">Testimonials</span>
              <h2 className="text-4xl md:text-5xl mt-2">WHAT CLIENTS SAY</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="space-y-6"
                >
                  <Quote className="text-brand-accent" size={32} fill="currentColor" />
                  <p className="text-white/60 text-sm leading-relaxed italic">
                    {item.text}
                  </p>
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-brand-accent/20"
                      referrerPolicy="no-referrer"
                    />
                    <h4 className="font-bold text-sm">{item.name}</h4>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest">{item.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
