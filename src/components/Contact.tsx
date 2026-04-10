import { motion } from 'motion/react';
import { Send, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-charcoal relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-4">Book Your <span className="text-brand-accent">Session</span></h2>
            <p className="text-white/50 text-lg">Ready to start? Fill out the form below and Ashar will get back to you within 24 hours.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-white/40 mb-1">Call Us</h4>
                  <p className="text-lg">03132724254</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-white/40 mb-1">Email Us</h4>
                  <p className="text-lg">Asharmuhammad255@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-white/40 mb-1">Working Hours</h4>
                  <p className="text-lg">Mon - Sat: 6AM - 10PM</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-brand-black border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-brand-black border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Interested In</label>
                  <select className="w-full bg-brand-black border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors text-white appearance-none">
                    <option>Gym Performance</option>
                    <option>Home Transformation</option>
                    <option>Contest Prep</option>
                    <option>Custom Diet Plan</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your goals..."
                    className="w-full bg-brand-black border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors text-white resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-brand-accent text-brand-black py-5 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
