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
  const [activeSection, setActiveSection] = useState('home');

  // --- ANIMASI TRANSISI HALUS & SINEMATIK ---
  const sectionVariants = {
    initial: { 
      opacity: 0, 
      x: 30,             // Datang dari kanan
      filter: "blur(10px)" 
    },
    animate: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)" 
    },
    exit: { 
      opacity: 0, 
      x: -30,            // Pergi ke kiri
      filter: "blur(10px)" 
    }
  };

  // --- LOGIKA RENDER HALAMAN ---
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
      case 'hero':
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
      {/* Background global agar tidak berkedip saat transisi */}
      <div className="fixed inset-0 bg-black -z-20" /> 
      
      {/* Header tetap di atas (tidak ikut teranimasi pindah) */}
      <Header activeSection={activeSection} onNavClick={setActiveSection} />
      
      {/* Content Area dengan AnimatePresence */}
      <div className="absolute inset-0 overflow-y-auto overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}           // Key unik memicu animasi saat state berubah
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ 
              duration: 0.6,              // Durasi sedikit lebih lama agar blur terasa
              ease: [0.22, 1, 0.36, 1]    // Efek perlambatan yang halus
            }}
            className="min-h-full w-full"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}