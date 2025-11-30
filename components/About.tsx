import React from 'react';
import { PROFILE } from '../constants';
import { Terminal } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <div className="w-full md:w-1/3">
             <div className="sticky top-24">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="text-emerald-400 mr-2">01.</span> About Me
                </h2>
                <div className="w-16 h-1 bg-emerald-500 rounded-full mb-6"></div>
                <p className="text-slate-400 text-sm italic border-l-2 border-slate-700 pl-4">
                  "Advocate for digital skill enhancement, leveraging my knowledge in crypto and blockchain forensics to foster innovation and secure digital assets."
                </p>
             </div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Terminal className="w-24 h-24 text-emerald-500" />
              </div>
              
              <div className="prose prose-invert max-w-none text-slate-300">
                <p className="leading-relaxed mb-4">
                  {PROFILE.summary}
                </p>
                <p className="leading-relaxed">
                  As a <strong>Beta Microsoft Learn Student Ambassador</strong>, I thrive on educating and nurturing a community that values technology literacy. This role complements my technical competencies, as I contribute to the Microsoft ecosystem.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-700">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-white">20+</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mt-1">Internships</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-white">4+</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mt-1">Years Coding</p>
                </div>
                 <div className="text-center">
                  <h4 className="text-2xl font-bold text-white">10+</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mt-1">Certifications</p>
                </div>
                 <div className="text-center">
                  <h4 className="text-2xl font-bold text-white">100k+</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mt-1">Impacted</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;