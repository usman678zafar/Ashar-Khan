import { motion } from 'motion/react';
import { Dumbbell, Home, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Gym Performance',
    description: 'Focused on bodybuilding and muscle hypertrophy. Professional coaching in a high-performance environment.',
    icon: Dumbbell,
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop',
    features: ['Muscle Hypertrophy', 'Strength Training', 'Bodybuilding Prep', 'Form Correction']
  },
  {
    title: 'Home Transformation',
    description: 'Focused on personal training, fat loss, and flexibility using minimal equipment in your own space.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
    features: ['Fat Loss', 'Functional Fitness', 'Flexibility', 'Minimal Equipment']
  }
];

export default function ServiceGrid() {
  return (
    <section id="services" className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl mb-4">Choose Your <span className="text-brand-accent">Path</span></h2>
            <p className="text-white/60 text-lg">Tailored training solutions designed to fit your lifestyle and goals, whether you prefer the iron of the gym or the comfort of your home.</p>
          </div>
          <div className="hidden md:block h-[1px] flex-grow mx-12 bg-white/10 mb-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative h-[600px] overflow-hidden rounded-3xl cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent z-10" />
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center text-brand-black">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-3xl md:text-4xl">{service.title}</h3>
                </div>
                
                <p className="text-white/70 text-lg mb-8 max-w-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {service.features.map(feature => (
                    <span key={feature} className="px-4 py-1 rounded-full border border-white/20 text-xs uppercase tracking-widest bg-white/5 backdrop-blur-sm">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-brand-accent font-bold uppercase tracking-[0.2em] text-sm">
                  Learn More <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
