'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const getLogoUrl = (name: string) => {
    const n = name.toLowerCase().trim();
    
    // 1. PRIORITAS FILE LOKAL (Folder /public)
    if (n === 'css3') return '/css3.png';
    if (n === 'matplotlib') return '/matplotlib.png';
    if (n.includes('tableau')) return '/tableau.png';
    if (n.includes('power bi')) return '/Power Bi.png';

    // 2. MAPPING SLUG MANUAL UNTUK CDN
    let slug = '';
    if (n === 'html5') slug = 'html5';
    if (n === 'javascript') slug = 'javascript';
    if (n === 'typescript') slug = 'typescript';
    if (n === 'react.js') slug = 'react';
    if (n === 'next.js') slug = 'nextdotjs';
    if (n === 'php') slug = 'php';
    if (n === 'jquery') slug = 'jquery';
    if (n === 'tailwind css') slug = 'tailwindcss';
    if (n === 'bootstrap') slug = 'bootstrap';
    if (n === 'python') slug = 'python';
    if (n === 'postgresql') slug = 'postgresql';
    if (n === 'pandas') slug = 'pandas';
    if (n === 'numpy') slug = 'numpy';
    if (n === 'scikit-learn') slug = 'scikitlearn';
    if (n === 'jupyter') slug = 'jupyter';

    // Jika slug ditemukan gunakan CDN, jika tidak pakai logo default
    return slug 
      ? `https://cdn.simpleicons.org/${slug}/white`
      : `https://cdn.simpleicons.org/codeigniter/white`; 
  };

  const webSkills = [
    { name: 'HTML5' }, { name: 'CSS3' }, { name: 'JavaScript' },
    { name: 'TypeScript' }, { name: 'React.js' }, { name: 'Next.js' },
    { name: 'PHP' }, { name: 'jQuery' }, { name: 'Tailwind CSS' },
    { name: 'Bootstrap' },
  ];

  const dataSkills = [
    { name: 'Python' }, { name: 'PostgreSQL' }, { name: 'Tableau' },
    { name: 'Power BI' }, { name: 'Pandas' }, { name: 'NumPy' },
    { name: 'Scikit-Learn' }, { name: 'Matplotlib' }, { name: 'Jupyter' },
  ];

  const languages = [
    { name: 'Indonesian', level: 'Native Speaker' },
    { name: 'English', level: 'Intermediate / Conversational' } // Sudah diubah
  ];

  return (
    <section id="skills" className="relative min-h-screen bg-black py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-cyan-500" />
            <span className="text-cyan-500 text-[10px] tracking-[0.8em] font-black uppercase">Capabilities</span>
          </div>
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase leading-none">
            TECH <span className="text-white/10 italic">SYSTEM</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12">
          
          {/* Column 1: Web Dev */}
          <div className="space-y-10">
            <div className="flex items-baseline gap-3 border-b border-white/10 pb-4">
              <span className="text-cyan-500 font-mono text-xs">01.</span>
              <h3 className="text-white font-black text-xl tracking-widest uppercase">Web Development</h3>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-3 gap-y-12 gap-x-2">
              {webSkills.map((skill, idx) => (
                <SkillIcon key={idx} skill={skill} getLogoUrl={getLogoUrl} delay={idx * 0.05} />
              ))}
            </div>
          </div>

          {/* Column 2: Data Science */}
          <div className="space-y-10">
            <div className="flex items-baseline gap-3 border-b border-white/10 pb-4">
              <span className="text-cyan-500 font-mono text-xs">02.</span>
              <h3 className="text-white font-black text-xl tracking-widest uppercase">Data Science</h3>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-3 gap-y-12 gap-x-2">
              {dataSkills.map((skill, idx) => (
                <SkillIcon key={idx} skill={skill} getLogoUrl={getLogoUrl} delay={idx * 0.05} />
              ))}
            </div>
          </div>

          {/* Column 3: Languages */}
          <div className="space-y-10">
            <div className="flex items-baseline gap-3 border-b border-white/10 pb-4">
              <span className="text-cyan-500 font-mono text-xs">03.</span>
              <h3 className="text-white font-black text-xl tracking-widest uppercase">Languages</h3>
            </div>
            <div className="flex flex-col gap-12">
              {languages.map((lang, idx) => (
                <motion.div 
                  key={lang.name} 
                  initial={{ opacity: 0, x: 20 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  transition={{ delay: idx * 0.1 }} 
                  className="group/lang"
                >
                  <span className="text-4xl font-black text-white group-hover/lang:text-cyan-400 transition-all duration-500 block leading-none uppercase tracking-tighter">
                    {lang.name}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mt-2 block group-hover/lang:text-white transition-colors">
                    {lang.level}
                  </span>
                  <div className="h-[1px] w-6 group-hover/lang:w-full bg-cyan-500/50 mt-4 transition-all duration-700" />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function SkillIcon({ skill, getLogoUrl, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ delay }} 
      className="group flex flex-col items-center gap-3"
    >
      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/20 blur-xl rounded-full transition-all duration-500" />
        <img 
          src={getLogoUrl(skill.name)} 
          alt={skill.name}
          className="max-w-full max-h-full object-contain opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest text-white/20 group-hover:text-cyan-400 text-center transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
}