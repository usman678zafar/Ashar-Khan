/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import ExperienceBar from './components/ExperienceBar';
import ServiceGrid from './components/ServiceGrid';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-black">
      <Header />
      <main>
        <Hero />
        <ExperienceBar />
        <ServiceGrid />
        <About />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
