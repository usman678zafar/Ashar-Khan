import { motion } from 'motion/react';

const stats = [
  { label: '1-on-1 Coaching', value: 'Personalized' },
  { label: 'Contest Prep', value: 'Elite Level' },
  { label: 'Custom Diet Plans', value: 'Science Based' },
  { label: 'Years Experience', value: '10+' },
];

export default function ExperienceBar() {
  return (
    <section id="experience" className="py-12 border-y border-white/10 bg-brand-charcoal overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center md:text-left group"
            >
              <div className="text-brand-accent font-display text-4xl mb-1 group-hover:scale-110 transition-transform inline-block">
                {stat.value}
              </div>
              <div className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
