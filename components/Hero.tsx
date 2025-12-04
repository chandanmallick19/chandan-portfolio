import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Shield, Server, Terminal, Lock } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState(PROFILE.name);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

  const animateText = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return PROFILE.name[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iteration >= PROFILE.name.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    animateText();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        {/* Animated Blobs */}
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating 3D Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[5%] text-emerald-500/20 animate-float">
          <Shield size={64} strokeWidth={1} />
        </div>
        <div className="absolute bottom-[20%] left-[15%] text-blue-500/20 animate-float-delayed">
          <Server size={48} strokeWidth={1} />
        </div>
        <div className="absolute top-[25%] right-[10%] text-purple-500/20 animate-float" style={{ animationDuration: '8s' }}>
          <Terminal size={56} strokeWidth={1} />
        </div>
        <div className="absolute bottom-[10%] right-[20%] text-red-500/20 animate-float-delayed" style={{ animationDuration: '7s' }}>
          <Lock size={40} strokeWidth={1} />
        </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 lg:order-1 space-y-8 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-emerald-400 text-sm font-medium backdrop-blur-sm shadow-sm">
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Available for freelance & full-time roles
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Hello, I'm <br />
            <span
              className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-500 bg-clip-text text-transparent drop-shadow-sm cursor-pointer hover:opacity-80 transition-opacity"
              onMouseEnter={animateText}
              title="Click to decipher"
            >
              {displayText}
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed border-l-4 border-emerald-500/50 pl-6">
            {PROFILE.tagline}
          </p>

          <p className="text-slate-500 text-sm font-mono flex items-center">
            <span className="mr-2">📍</span> {PROFILE.location}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all flex items-center shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1"
            >
              Hire Me
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <button
              onClick={() =>
                window.location.href =
                "mailto:chandansoumya28@gmail.com?subject=Request%20for%20Resume&body=Hi%2C%0A%0AI%20would%20like%20to%20request%20your%20resume.%0A%0AThanks!"
              }
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl border border-slate-700 hover:border-slate-500 transition-all flex items-center shadow-lg hover:-translate-y-1"
            >
              <Download className="mr-2 w-5 h-5" />
              Download CV
            </button>
          </div>

          <div className="flex items-center gap-6 pt-8 border-t border-slate-800/50">
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-500/10 rounded-lg transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-emerald-400/10 rounded-lg transition-all">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Animated Code Window */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in relative">
          {/* Glow Effects behind the card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/20 blur-[60px] rounded-full -z-10"></div>

          <div className="relative w-full max-w-lg bg-[#0f172a] rounded-xl shadow-2xl border border-slate-700 overflow-hidden backdrop-blur-xl transform transition-transform hover:scale-[1.02] duration-500">
            {/* Window Title Bar */}
            <div className="bg-[#1e293b] px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-xs text-slate-400 font-mono">profile.ts — Chandan Mallick</span>
            </div>

            {/* Code Editor Area */}
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <div className="flex">
                <div className="text-slate-600 select-none text-right pr-4 mr-4 border-r border-slate-700">
                  1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11
                </div>
                <div className="text-slate-300">
                  <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-400">{'{'}</span><br />
                  &nbsp;&nbsp;<span className="text-emerald-400">name</span>: <span className="text-orange-300">'{PROFILE.name}'</span>,<br />
                  &nbsp;&nbsp;<span className="text-emerald-400">role</span>: <span className="text-orange-300">'Cybersecurity & Dev'</span>,<br />
                  &nbsp;&nbsp;<span className="text-emerald-400">skills</span>: <span className="text-purple-400">[</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-300">'Java'</span>, <span className="text-orange-300">'Python'</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-300">'Spring Boot'</span>, <span className="text-orange-300">'Cloud Forensics'</span><br />
                  &nbsp;&nbsp;<span className="text-purple-400">]</span>,<br />
                  &nbsp;&nbsp;<span className="text-emerald-400">hardWorker</span>: <span className="text-blue-400">true</span>,<br />
                  &nbsp;&nbsp;<span className="text-purple-400">hire</span>: <span className="text-blue-400">function</span>() <span className="text-yellow-400">{'{'}</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-orange-300">"Let's build the future!"</span>;<br />
                  &nbsp;&nbsp;<span className="text-yellow-400">{'}'}</span><br />
                  <span className="text-yellow-400">{'}'}</span>;
                </div>
              </div>
            </div>

            {/* Footer Status Bar */}
            <div className="bg-[#1e293b] px-4 py-1 flex justify-between items-center border-t border-slate-700/50 text-[10px] text-slate-500 font-mono">
              <div className="flex gap-4">
                <span>UTF-8</span>
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span>Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;