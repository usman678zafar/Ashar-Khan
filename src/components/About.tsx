import { motion } from 'motion/react';
import { Instagram, Twitter, Youtube, Mail, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-accent" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-accent" />
              <img 
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" 
                alt="Ashar Khan"
                className="w-full aspect-[4/5] object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl mb-8">The Mind Behind <span className="text-brand-accent">AK FIT</span></h2>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                Ashar Khan is an elite personal trainer and bodybuilding coach dedicated to helping individuals unlock their ultimate physical potential. With over a decade of experience in the fitness industry, Ashar has transformed hundreds of lives through science-backed training and nutrition.
              </p>
              <p>
                Based in Karachi, Ashar offers a unique blend of high-intensity gym performance coaching and flexible home transformation programs. His philosophy centers on building a legacy—not just a body—through discipline, consistency, and expert guidance.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Location</div>
                  <div className="text-sm font-bold">Karachi, Pakistan</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Contact</div>
                  <div className="text-sm font-bold">hello@asharkhan.fit</div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-black hover:border-brand-accent transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-black hover:border-brand-accent transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-black hover:border-brand-accent transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
