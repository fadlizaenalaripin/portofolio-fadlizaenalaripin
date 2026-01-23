'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Sections/Hero';
import About from '@/components/Sections/About';
import Skills from '@/components/Sections/Skills';
import Projects from '@/components/Sections/Projects';
import Contact from '@/components/Sections/Contact';
import Blog from '@/components/Sections/Blog';
import Certificates from '@/components/Sections/Certificates';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home'); // Kita mulai dari 'home'

  const sectionVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  // --- LOGIKA PEMANGGILAN HALAMAN (PENTING!) ---
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
      case 'hero': // Biar aman kalau terpanggil 'hero'
        return <Hero key="hero" onNavClick={setActiveSection} />;
      case 'about':
        return <About key="about" />;
      case 'skills':
        return <Skills key="skills" />;
      case 'projects':
        return <Projects key="projects" />;
      case 'blog':
        return <Blog key="blog" />;
      case 'certificates':
        return <Certificates key="certificates" />;
      case 'contact':
        return <Contact key="contact" />;
      default:
        return <Hero key="hero" onNavClick={setActiveSection} />;
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background global */}
      <div className="fixed inset-0 bg-black -z-20" /> 
      
      {/* Header dipanggil di sini agar muncul di SEMUA halaman */}
      <Header activeSection={activeSection} onNavClick={setActiveSection} />
      
      {/* Content Area */}
      <div className="absolute inset-0 overflow-y-auto overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="min-h-full w-full"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}