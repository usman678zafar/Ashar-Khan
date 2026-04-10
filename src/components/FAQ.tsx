import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Do I need a gym membership for the Home Transformation plan?',
    answer: 'No! The Home Transformation plan is specifically designed for minimal equipment. We focus on bodyweight exercises, resistance bands, and common household items to ensure you get a killer workout anywhere.'
  },
  {
    question: 'How long does it take to see visible results?',
    answer: 'While everyone is different, most clients see noticeable changes in energy and strength within 2 weeks, and visible physical changes within 4-6 weeks of consistent training and nutrition adherence.'
  },
  {
    question: 'Do you provide customized meal plans?',
    answer: 'Yes, all our plans include personalized nutrition guidance. The Elite and Transformation plans include detailed meal-by-meal plans tailored to your specific macros, preferences, and goals.'
  },
  {
    question: 'Can I switch between gym and home training?',
    answer: 'Absolutely. Our Transformation plan is a hybrid model that allows you to mix both environments based on your schedule and availability.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl mb-6">Common <span className="text-brand-accent">Questions</span></h2>
            <p className="text-white/50 text-lg mb-8">Everything you need to know before starting your transformation journey with AK FIT.</p>
            <div className="p-8 rounded-3xl bg-brand-charcoal border border-white/5">
              <h4 className="text-xl mb-4 text-brand-accent">Still have questions?</h4>
              <p className="text-white/60 mb-6">If you couldn't find the answer you were looking for, feel free to reach out to us directly.</p>
              <button className="text-white font-bold uppercase tracking-widest text-xs border-b border-brand-accent pb-1 hover:text-brand-accent transition-colors">
                Contact Support
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className={`text-lg font-medium transition-colors ${openIndex === index ? 'text-brand-accent' : 'text-white/80 group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    {openIndex === index ? <Minus size={20} className="text-brand-accent" /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-white/50 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
