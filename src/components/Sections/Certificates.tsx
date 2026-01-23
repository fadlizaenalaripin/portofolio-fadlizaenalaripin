'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { ShieldCheck, ExternalLink, Calendar, Binary, Database, Calculator } from 'lucide-react';
import { useState } from 'react';

export default function Certificates() {
  const [activeTab, setActiveTab] = useState('Data & ML');

  // Mapping Ikon untuk tiap kategori
  const categories = [
    { name: 'Data & ML', icon: <Database size={14} /> },
    { name: 'Programming', icon: <Binary size={14} /> },
    { name: 'Mathematical', icon: <Calculator size={14} /> },
  ];

  // Data Sertifikat dengan masing-masing kelompok 4-5 contoh
  const certificates = (portfolioData as any).certificates || [
    // --- DATA & ML (5 Data) ---
    { id: 1, title: "Deep Learning Specialization", issuer: "Coursera", category: "Data & ML", date: "2025", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4", url: "#" },
    { id: 2, title: "TensorFlow Developer Certificate", issuer: "Google", category: "Data & ML", date: "2024", image: "https://images.unsplash.com/photo-1509228468518-180dd4864904", url: "#" },
    { id: 3, title: "Data Science Professional", issuer: "IBM", category: "Data & ML", date: "2024", image: "https://images.unsplash.com/photo-1551288049-bbda38a5f452", url: "#" },
    { id: 4, title: "Machine Learning Engineering", issuer: "Udacity", category: "Data & ML", date: "2023", image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc", url: "#" },
    { id: 5, title: "AI Business Strategy", issuer: "MIT", category: "Data & ML", date: "2023", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e", url: "#" },

    // --- PROGRAMMING (4 Data) ---
    { id: 6, title: "Advanced Python Engineering", issuer: "HackerRank", category: "Programming", date: "2024", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5", url: "#" },
    { id: 7, title: "Full Stack Web Development", issuer: "FreeCodeCamp", category: "Programming", date: "2024", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", url: "#" },
    { id: 8, title: "Java Gold Certified", issuer: "Oracle", category: "Programming", date: "2023", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97", url: "#" },
    { id: 9, title: "AWS Cloud Practitioner", issuer: "Amazon", category: "Programming", date: "2023", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa", url: "#" },

    // --- MATHEMATICAL (4 Data) ---
    { id: 10, title: "Linear Algebra for ML", issuer: "Imperial College", category: "Mathematical", date: "2024", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb", url: "#" },
    { id: 11, title: "Calculus & Optimization", issuer: "Stanford Online", category: "Mathematical", date: "2024", image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d", url: "#" },
    { id: 12, title: "Probabilistic Systems", issuer: "MITx", category: "Mathematical", date: "2023", image: "https://images.unsplash.com/photo-1509869175650-ff19c46623f0", url: "#" },
    { id: 13, title: "Discrete Mathematics", issuer: "Coursera", category: "Mathematical", date: "2023", image: "https://images.unsplash.com/photo-1596495573105-d14658ca9b51", url: "#" },
  ];

  const filteredCerts = certificates.filter((c: any) => c.category === activeTab);

  return (
    <section className="h-auto min-h-screen bg-black pt-32 pb-40 px-6 md:px-12 overflow-visible">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-3 mb-6">
            <div className="h-1 w-1 bg-cyan-500 rounded-full shadow-[0_0_10px_#06b6d4]" />
            <span className="text-[10px] tracking-[0.5em] text-white/40 uppercase font-black">Skill_Authorization</span>
          </motion.div>
          <h2 className="text-6xl md:text-9xl font-black text-white leading-[0.8] uppercase tracking-tighter">
            CERTIFIED <br />
            <span className="text-white/10 italic">EXPERTISE</span>
          </h2>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap gap-4 mb-16 border-b border-white/5 pb-8">
          {categories.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-3 px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                activeTab === tab.name
                  ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  : 'bg-transparent text-white/30 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* GRID KONTEN */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCerts.map((cert: any, i: number) => (
              <motion.div
                key={cert.id || i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-zinc-950 border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/40 transition-all duration-500"
              >
                <div className="relative h-48 bg-zinc-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 z-10" />
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover opacity-30 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000"
                  />
                  <div className="absolute top-6 right-6 z-20">
                    <ShieldCheck size={20} className="text-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={12} className="text-white/20" />
                    <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">{cert.date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase leading-tight mb-2 group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-8 italic">
                    {cert.issuer}
                  </p>
                  
                  <div className="pt-6 border-t border-white/5 flex justify-end">
                    <button 
                      onClick={() => window.open(cert.url, '_blank')}
                      className="flex items-center gap-2 text-white font-black text-[9px] uppercase tracking-widest hover:tracking-[0.3em] transition-all"
                    >
                      VERIFY CREDENTIAL <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredCerts.length === 0 && (
          <div className="py-20 text-center border border-dashed border-white/10 rounded-3xl">
            <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">No records found in this sector.</span>
          </div>
        )}

      </div>
    </section>
  );
}