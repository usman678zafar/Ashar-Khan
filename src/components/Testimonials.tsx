import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Zaid Ahmed',
    role: 'Bodybuilding Client',
    text: 'Ashar transformed my physique in just 12 weeks. His attention to detail in contest prep is unmatched in Karachi.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop',
    result: '+15lbs Muscle'
  },
  {
    name: 'Sara Khan',
    role: 'Home Fitness Client',
    text: 'I never thought I could get these results at home. The minimal equipment workouts are intense and effective.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    result: '-12kg Fat Loss'
  },
  {
    name: 'Omar Farooq',
    role: 'Strength Athlete',
    text: 'My deadlift went up by 40kg under Ashar\'s guidance. He understands biomechanics better than anyone I know.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    result: '+40kg Deadlift'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-4">Client <span className="text-brand-accent">Success</span></h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Real people, real results. Join the elite group of individuals who have redefined their limits.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-brand-charcoal p-8 rounded-3xl border border-white/5 relative group hover:border-brand-accent/30 transition-all"
            >
              <Quote className="absolute top-6 right-8 text-brand-accent/20 group-hover:text-brand-accent/40 transition-colors" size={48} />
              
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-lg">{item.name}</h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest">{item.role}</p>
                </div>
              </div>

              <p className="text-white/70 italic mb-8 leading-relaxed">
                "{item.text}"
              </p>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-white/30">Result</span>
                <span className="text-brand-accent font-display text-xl">{item.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
