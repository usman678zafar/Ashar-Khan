import { motion } from 'motion/react';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '15k',
    period: 'month',
    description: 'Perfect for those starting their fitness journey at home.',
    features: ['Custom Home Workout Plan', 'Basic Nutrition Guide', 'Weekly Check-ins', 'WhatsApp Support'],
    accent: false
  },
  {
    name: 'Elite Performance',
    price: '35k',
    period: 'month',
    description: 'The ultimate bodybuilding and hypertrophy experience.',
    features: ['1-on-1 Gym Coaching', 'Advanced Nutrition & Macros', 'Daily Form Correction', 'Contest Prep Ready', 'Priority Support'],
    accent: true
  },
  {
    name: 'Transformation',
    price: '25k',
    period: 'month',
    description: 'Intensive fat loss and body recomposition program.',
    features: ['Hybrid Gym/Home Plan', 'Personalized Meal Plans', 'Bi-weekly Body Scans', 'Supplement Guide'],
    accent: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-brand-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-4">Training <span className="text-brand-accent">Packages</span></h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Investment in yourself is the only investment that guarantees a return.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                plan.accent 
                  ? 'bg-brand-black border-brand-accent shadow-[0_0_40px_rgba(204,255,0,0.1)]' 
                  : 'bg-brand-black/50 border-white/10'
              } flex flex-col`}
            >
              {plan.accent && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                  <Zap size={10} /> Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display text-brand-accent">PKR {plan.price}</span>
                  <span className="text-white/40 text-sm uppercase tracking-widest">/{plan.period}</span>
                </div>
                <p className="mt-4 text-white/50 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                    <Check size={16} className="text-brand-accent mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all ${
                plan.accent 
                  ? 'bg-brand-accent text-brand-black hover:bg-white' 
                  : 'bg-white/5 text-white border border-white/10 hover:border-brand-accent hover:text-brand-accent'
              }`}>
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
