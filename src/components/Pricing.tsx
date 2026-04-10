import { motion } from 'motion/react';

const plans = [
  {
    name: 'GROUP TRAINING',
    price: '59',
    period: 'month',
    description: 'Coach and Exercise',
    features: ['Training Session Includes', '60 Minute Sessions', 'Private Gym', 'Get 1-on-1 training'],
    accent: false
  },
  {
    name: 'GROUP TRAINING',
    price: '59',
    period: 'month',
    description: 'Coach and Exercise',
    features: ['Training Session Includes', '60 Minute Sessions', 'Private Gym', 'Get 1-on-1 training'],
    accent: true
  },
  {
    name: 'GROUP TRAINING',
    price: '59',
    period: 'month',
    description: 'Coach and Exercise',
    features: ['Training Session Includes', '60 Minute Sessions', 'Private Gym', 'Get 1-on-1 training'],
    accent: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-accent text-xs uppercase tracking-[0.3em] font-bold">Start The Process</span>
          <h2 className="text-4xl md:text-5xl mt-2">CHOOSE YOUR PLAN</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-10 rounded-2xl border transition-all duration-500 ${
                plan.accent 
                  ? 'bg-brand-accent text-brand-black border-brand-accent scale-110 z-10 shadow-2xl' 
                  : 'bg-brand-charcoal border-white/5 text-white'
              } flex flex-col items-center text-center`}
            >
              {plan.accent && (
                <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.accent ? 'text-brand-black' : 'text-brand-accent'}`}>{plan.name}</h3>
                <p className={`text-xs uppercase tracking-widest mb-6 ${plan.accent ? 'text-brand-black/60' : 'text-white/40'}`}>{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-6xl font-display ${plan.accent ? 'text-brand-black' : 'text-brand-accent'}`}>${plan.price}</span>
                  <span className={`text-xs uppercase tracking-widest ${plan.accent ? 'text-brand-black/60' : 'text-white/40'}`}>/per {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map(feature => (
                  <li key={feature} className={`text-sm ${plan.accent ? 'text-brand-black/80' : 'text-white/60'}`}>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`px-10 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all ${
                plan.accent 
                  ? 'bg-brand-black text-white hover:bg-white hover:text-brand-black' 
                  : 'bg-brand-accent text-brand-black hover:bg-white'
              }`}>
                Choose
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
