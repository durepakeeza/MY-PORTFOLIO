import React, { useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const handleContactClick = useCallback(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Focus name input after a short scroll settlement
      setTimeout(() => {
        const input = document.getElementById('name');
        if (input) input.focus();
      }, 700);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F3F1ED] selection:bg-[#C9C7FF]/20 selection:text-[#F3F1ED]">
      {/* Top Sticky Navigation */}
      <Navbar onContactClick={handleContactClick} />

      {/* Main Content Area */}
      <main>
        <Hero onContactClick={handleContactClick} />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Services />
        <Process />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
