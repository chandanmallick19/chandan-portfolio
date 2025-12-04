import React from 'react';
import { SKILLS } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import SkillRadar from './SkillRadar';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 scroll-mt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center justify-center">
          <span className="text-emerald-400 mr-2">02.</span> Technical Arsenal
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left Column: Radar Chart */}
          <div className="w-full lg:w-1/3 flex justify-center sticky top-24">
            <SkillRadar />
          </div>

          {/* Right Column: Skills Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SKILLS.map((category, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-colors duration-300 group"
                >
                  <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                    {category.title}
                    <span className="text-xs font-mono text-slate-600 group-hover:text-emerald-500/50">{category.skills.length} items</span>
                  </h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-start text-slate-400 text-sm hover:text-white transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 shrink-0 group-hover:scale-110 transition-transform" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
