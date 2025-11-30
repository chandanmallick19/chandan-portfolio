import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-900/30 scroll-mt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center justify-center">
          <span className="text-emerald-400 mr-2">06.</span> Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center hover:bg-slate-800/50 transition-colors flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 text-emerald-500 border border-slate-700">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{edu.institution}</h3>
              <p className="text-emerald-400 font-medium text-sm mb-4">{edu.degree}</p>
              <span className="inline-block px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-400 border border-slate-700">
                {edu.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;