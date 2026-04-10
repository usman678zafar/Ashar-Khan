import { motion } from 'motion/react';
import { Calendar, Users, Trophy, Smile } from 'lucide-react';

const stats = [
  { label: 'Working Days', value: '586', icon: Calendar },
  { label: 'Happy Clients', value: '2,036', icon: Users },
  { label: 'Successful Stories', value: '874', icon: Trophy },
  { label: 'Perfect Bodies', value: '1,625', icon: Smile },
];

export default function ExperienceBar() {
  return (
    <section className="py-20 bg-brand-black relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-brand-accent mb-4 group-hover:scale-110 transition-transform">
                <stat.icon size={40} />
              </div>
              <div className="text-white font-display text-4xl mb-1">
                {stat.value}
              </div>
              <div className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
