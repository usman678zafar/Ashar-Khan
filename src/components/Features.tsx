import { motion } from 'motion/react';
import { Dumbbell, Heart, User, Clock } from 'lucide-react';

const features = [
  {
    title: 'Rehab/medical experience',
    description: 'No license to diagnose or prescribe, but years of experience from injuries and working in the pre medical path',
    icon: Dumbbell
  },
  {
    title: 'All encompassing',
    description: 'Life is our greatest gift. Training is a way to enhance life while strengthening you to take life\'s ever lasting punches.',
    icon: Heart
  },
  {
    title: 'Remote',
    description: 'I honestly always worked solo because it allowed me to stay consistent and adapt for life\'s schedule.',
    icon: User
  },
  {
    title: 'Second quote?',
    description: 'consistency is what transforms the average into excellence',
    icon: Clock
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      {/* Smoke background simulated with images/gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover blur-xl"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-accent text-xs uppercase tracking-[0.3em] font-bold">Awsome Features</span>
            <h2 className="text-4xl md:text-5xl mt-2 mb-12">WHY CHOOSE ME</h2>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <div className="text-brand-accent">
                    <feature.icon size={32} />
                  </div>
                  <h4 className="text-xl font-bold">{feature.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-10 bg-brand-accent/10 blur-3xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
              alt="Fitness Model"
              className="relative z-10 w-full rounded-3xl grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-10 right-0 z-20 text-right">
              <h3 className="text-6xl md:text-8xl font-display leading-[0.8] text-brand-accent">WORK OUT</h3>
              <h3 className="text-6xl md:text-8xl font-display leading-[0.8] text-white">RIGHT NOW</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
