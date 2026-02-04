'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  Terminal, 
  Cpu, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function Contact() {
  return (
    <section className="min-h-screen bg-black pt-32 pb-20 px-6 md:px-12 relative overflow-hidden" id="contact">
      {/* Background Effect: Lebih subtle tapi techy */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black opacity-50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* LEFT COLUMN: BRANDING & INFO (4 Columns) */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6"
              >
                <ShieldCheck size={12} className="text-cyan-500" />
                <span className="text-[9px] tracking-[0.3em] text-cyan-500 uppercase font-black">Ready for Deployment</span>
              </motion.div>
              
              <h2 className="text-7xl md:text-8xl font-black text-white leading-[0.8] uppercase tracking-tighter mb-8">
                LET'S <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>BUILD.</span>
              </h2>
              
              <p className="text-white/40 text-lg max-w-sm leading-relaxed font-medium">
                Have a complex problem? Let's engineer a solution. Open for collaborations in <span className="text-white">Web Architecture</span> and <span className="text-white">AI Systems</span>.
              </p>
            </div>

            {/* Contact Cards with Glassmorphism */}
            <div className="space-y-4">
              <a href={`mailto:${portfolioData.contact.email}`} className="group block p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent transition-all">
                <div className="bg-zinc-950 p-6 rounded-[calc(1.5rem-1px)] flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Inbox_Direct</p>
                    <p className="text-white font-mono text-sm">{portfolioData.contact.email}</p>
                  </div>
                </div>
              </a>

              <div className="group p-1 rounded-3xl bg-zinc-900/50 transition-all border border-white/5">
                <div className="p-6 flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Current_Node</p>
                    <p className="text-white font-mono text-sm">{portfolioData.contact.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Large Social Icons */}
            <div className="flex items-center gap-6 pt-6">
              <a href={`https://${portfolioData.contact.linkedin}`} className="text-white/20 hover:text-white transition-colors"><Linkedin size={24} /></a>
              <a href={`https://${portfolioData.contact.github}`} className="text-white/20 hover:text-white transition-colors"><Github size={24} /></a>
              <div className="h-px flex-1 bg-white/10" />
            </div>
          </div>

          {/* RIGHT COLUMN: THE FORM (7 Columns) */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-zinc-950 border border-white/5 p-8 md:p-12 rounded-[3rem] relative overflow-hidden shadow-2xl"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 p-8">
                <Terminal size={40} className="text-white/[0.02]" />
              </div>

              <form 
                action={`https://formsubmit.co/${portfolioData.contact.email}`} 
                method="POST"
                className="space-y-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-1">01. Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-white/5"
                      placeholder="Identify yourself..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-1">02. Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-white/5"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-1">03. Project Details</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-white/5 border border-white/5 rounded-3xl px-6 py-4 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none placeholder:text-white/5"
                    placeholder="Describe the mission..."
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-2xl bg-white px-8 py-6 text-black transition-all hover:bg-cyan-500"
                >
                  <div className="relative z-10 flex items-center justify-center gap-3 font-black text-[11px] uppercase tracking-[0.4em]">
                    Transmit Data <Zap size={16} className="fill-current" />
                  </div>
                </button>

                <p className="text-center text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]">
                  Security Protocol: Encrypted Transmission via FormSubmit
                </p>
              </form>
            </motion.div>

            {/* Floating Info Tag */}
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <div className="bg-cyan-500 text-black p-6 rounded-3xl shadow-2xl rotate-3 flex flex-col items-center">
                <p className="text-[10px] font-black uppercase tracking-tighter">Response Time</p>
                <p className="text-2xl font-black leading-none italic">{"<"} 24H</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}