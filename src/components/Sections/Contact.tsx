'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { Mail, MapPin, Github, Linkedin, Send, Terminal, Cpu, Globe, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section className="min-h-screen bg-black pt-32 pb-20 px-6 md:px-12 relative overflow-hidden" id="contact">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* HEADER SECTION */}
        <div className="mb-20 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center md:justify-start gap-3 mb-6"
          >
            <Cpu className="text-cyan-500 animate-pulse" size={20} />
            <span className="text-[10px] tracking-[0.5em] text-white/40 uppercase font-black">Secure_Connection</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-9xl font-black text-white leading-[0.8] uppercase tracking-tighter"
          >
            INITIATE <br />
            <span className="text-white/10 italic">CONTACT</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: CONNECTION INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="max-w-md">
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight flex items-center gap-3">
                <Terminal size={24} className="text-cyan-500" />
                System.Link()
              </h3>
              <p className="text-white/40 text-lg leading-relaxed">
                Ready to optimize your data architecture or build custom AI solutions? 
                Connect with my secure nodes in <span className="text-white">Cirebon, ID</span> for collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {/* Email Card */}
              <a href={`mailto:${portfolioData.contact.email}`} className="block">
                <motion.div 
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="p-6 rounded-2xl border border-white/5 bg-zinc-950 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Electronic_Mail</p>
                      <p className="text-white font-medium truncate">{portfolioData.contact.email}</p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-white/10 group-hover:text-cyan-500 transition-colors" />
                </motion.div>
              </a>

              {/* Location Card */}
              <motion.div 
                className="p-6 rounded-2xl border border-white/5 bg-zinc-950 flex items-center gap-6"
              >
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Base_Operations</p>
                  <p className="text-white font-medium">{portfolioData.contact.location}</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links Updated */}
            <div className="flex gap-4">
              <a 
                href={`https://${portfolioData.contact.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 hover:text-black transition-all duration-500"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`https://${portfolioData.contact.github}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 hover:text-black transition-all duration-500"
              >
                <Github size={20} />
              </a>
              <div className="flex-1 border-t border-white/5 self-center ml-4" />
            </div>
          </motion.div>

          {/* RIGHT: FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <form 
              action={`https://formsubmit.co/${portfolioData.contact.email}`} 
              method="POST"
              className="relative bg-zinc-950 border border-white/10 p-10 md:p-14 rounded-[2.5rem] space-y-8 shadow-2xl"
            >
              <div className="space-y-6">
                <div className="group/input relative">
                  <label className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em] mb-3 block">User_Identity</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:outline-none focus:border-cyan-500 transition-all placeholder:text-white/10"
                    placeholder="Enter full name..."
                  />
                </div>

                <div className="group/input relative">
                  <label className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em] mb-3 block">Access_Point</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:outline-none focus:border-cyan-500 transition-all placeholder:text-white/10"
                    placeholder="Enter email address..."
                  />
                </div>

                <div className="group/input relative">
                  <label className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em] mb-3 block">Data_Payload</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:outline-none focus:border-cyan-500 transition-all resize-none placeholder:text-white/10"
                    placeholder="Briefly describe your requirements..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 bg-white text-black text-[10px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-4 hover:bg-cyan-500 transition-all group/btn"
              >
                Execute Transmission
                <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </motion.button>

              <div className="flex items-center justify-center gap-2 text-[9px] font-medium text-white/20 uppercase tracking-widest pt-4">
                <Globe size={12} />
                Node: 6.753° S, 108.558° E (Cirebon)
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}