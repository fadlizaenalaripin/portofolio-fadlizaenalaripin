'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink, Calendar, Award, Briefcase, Zap } from 'lucide-react';

export default function Certificates() {
  // Data sertifikat asli Fadli dengan update Link & Image
  const myCertificates = [
    {
      id: 1,
      title: "Stanford Introduction to Statistics",
      issuer: "Stanford University | Coursera",
      category: "Mathematical",
      date: "2024",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop",
      url: "https://www.coursera.org/account/accomplishments/verify/0Z2RZOONVDGS"
    },
    {
      id: 2,
      title: "Data Analysis with Python",
      issuer: "FreeCodeCamp",
      category: "Data & ML",
      date: "2024",
      image: "/data analisis.jpg",
      url: "https://www.freecodecamp.org/certification/fdlznl/data-analysis-with-python-v7"
    },
    {
      id: 3,
      title: "Scientific Computing with Python",
      issuer: "FreeCodeCamp",
      category: "Programming",
      date: "2024",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
      url: "https://www.freecodecamp.org/certification/fdlznl/scientific-computing-with-python-v7"
    },
    {
      id: 4,
      title: "Data Analyst Internship",
      issuer: "PT. GIT SOLUTION",
      category: "Experience",
      date: "2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      // Update: Link sertifikat LinkedIn asli
      url: "https://www.linkedin.com/in/fadli-zaenal-aripin/details/certifications/1746284311164/single-media-viewer/?profileId=ACoAAEoHkdABzu9ts9Kwwux41G2mdGrnHBHOdak"
    }
  ];

  return (
    <section className="h-auto min-h-screen bg-black pt-32 pb-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-3 mb-6">
              <Zap size={14} className="text-cyan-500 fill-cyan-500 shadow-[0_0_10px_#06b6d4]" />
              <span className="text-[10px] tracking-[0.5em] text-white/40 uppercase font-black">Verification_Protocol</span>
            </motion.div>
            <h2 className="text-6xl md:text-9xl font-black text-white leading-[0.8] uppercase tracking-tighter">
              SKILL <br />
              <span className="text-white/10 italic">CREDENTIALS</span>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest leading-relaxed border-l border-white/10 pl-4">
              Academic certifications and professional industrial training records verified via secure nodes.
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {myCertificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-zinc-950 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-cyan-500/40 transition-all duration-700"
            >
              <div className="flex flex-col md:flex-row h-full">
                
                {/* Visual Side */}
                <div className="relative w-full md:w-48 h-48 md:h-auto bg-zinc-900 overflow-hidden shrink-0">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {cert.category === "Experience" ? 
                      <Briefcase className="text-white/10 group-hover:text-cyan-500 transition-colors" size={40} /> : 
                      <Award className="text-white/10 group-hover:text-cyan-500 transition-colors" size={40} />
                    }
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-10 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-black text-white/40 uppercase tracking-widest group-hover:border-cyan-500/30 group-hover:text-cyan-500 transition-all">
                        {cert.category}
                      </span>
                      <div className="flex items-center gap-2">
                         <Calendar size={10} className="text-white/20" />
                         <span className="text-[9px] font-mono text-white/20">{cert.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-2xl font-black text-white tracking-tighter uppercase leading-[1.1] mb-2 group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest italic mb-8">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <ShieldCheck size={16} className="text-cyan-500 opacity-30" />
                    <button 
                      onClick={() => window.open(cert.url, '_blank')}
                      className="flex items-center gap-2 text-white font-black text-[9px] uppercase tracking-widest hover:gap-4 transition-all group/btn"
                    >
                      Verify License <ExternalLink size={14} className="group-hover/btn:text-cyan-500" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* DECORATIVE LINE */}
        <div className="mt-32 flex justify-center">
          <div className="flex flex-col items-center gap-4">
             <div className="w-px h-20 bg-gradient-to-b from-cyan-500/50 to-transparent" />
             <p className="text-[8px] font-mono text-white/10 uppercase tracking-[1em]">All Credentials Verified</p>
          </div>
        </div>

      </div>
    </section>
  );
}