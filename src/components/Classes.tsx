import { motion } from 'motion/react';

const classes = [
  {
    title: 'BODY BUILDING',
    description: 'Praesent a nibh eget diam pellentesque venenatis non eget diam. Nam in massa metus. Donec porta, ligula non feugiat vulputate, odio leo condimentum sapien.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'BODY BUILDING',
    description: 'Praesent a nibh eget diam pellentesque venenatis non eget diam. Nam in massa metus. Donec porta, ligula non feugiat vulputate, odio leo condimentum sapien.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'BODY BUILDING',
    description: 'Praesent a nibh eget diam pellentesque venenatis non eget diam. Nam in massa metus. Donec porta, ligula non feugiat vulputate, odio leo condimentum sapien.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Classes() {
  return (
    <section className="py-24 bg-brand-charcoal">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16">
          <span className="text-brand-accent text-xs uppercase tracking-[0.3em] font-bold">Pro Selected</span>
          <h2 className="text-4xl md:text-5xl mt-2">OUR CLASSES</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {classes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-brand-accent/20 mb-8 group cursor-pointer">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-bold text-brand-accent mb-4">{item.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-16 bg-brand-accent text-brand-black px-10 py-3 rounded-full font-bold uppercase tracking-widest text-xs shadow-lg"
        >
          More Classes
        </motion.button>
      </div>
    </section>
  );
}
