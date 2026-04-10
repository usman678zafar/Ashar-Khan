import { motion } from 'motion/react';

const posts = [
  {
    title: 'How to grow your muscle in our gym hall',
    date: 'September 28, 2021',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'How to grow your muscle in our gym hall',
    date: 'September 28, 2021',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Smoke Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover blur-2xl"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-12">
              <span className="text-brand-accent text-xs uppercase tracking-[0.3em] font-bold">Recent News</span>
              <h2 className="text-4xl md:text-5xl mt-2">TODAY IN THE GYM</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-brand-charcoal rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-sm mb-4 group-hover:text-brand-accent transition-colors">{post.title}</h4>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest">{post.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <h3 className="text-[120px] font-display leading-[0.8] text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-0">LATEST BLOG POSTS</h3>
            <img 
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" 
              alt="Trainer"
              className="relative z-10 w-full grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-10 left-0 z-20">
              <h3 className="text-6xl md:text-8xl font-display leading-[0.8] text-white">BLOG POSTS</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
