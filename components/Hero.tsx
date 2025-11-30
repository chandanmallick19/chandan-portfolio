import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 space-y-6 animate-slide-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-medium">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for work
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              {PROFILE.name}
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            {PROFILE.tagline}
          </p>

          <p className="text-slate-500 text-sm italic">{PROFILE.location}</p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-lg transition-all flex items-center group"
            >
              Contact Me
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-all flex items-center">
              <Download className="mr-2 w-4 h-4" />
              Download CV
            </button>
          </div>

          <div className="flex items-center gap-6 pt-8 border-t border-slate-800">
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-emerald-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 border-2 border-emerald-500/20 rounded-2xl rotate-6"></div>
            <div className="absolute inset-0 border-2 border-blue-500/20 rounded-2xl -rotate-6"></div>
            <div className="absolute inset-0 bg-slate-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center border border-slate-700 group">
              {/* Placeholder for Profile Image - would ideally be replaced by a real photo */}
              <img
                src="/assets/profile.jpg"
                alt="Chandan Kumar Mallick"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Tech badges floating */}
            <div className="absolute -right-4 top-10 bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-xl animate-pulse-slow">
              <span className="text-2xl">🛡️</span>
            </div>
            <div className="absolute -left-4 bottom-10 bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-xl animate-pulse-slow" style={{ animationDelay: '2s' }}>
              <span className="text-2xl">💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;