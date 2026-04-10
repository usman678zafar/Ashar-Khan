/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Classes from './components/Classes';
import ExperienceBar from './components/ExperienceBar';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Classes />
        <ExperienceBar />
        <Testimonials />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
