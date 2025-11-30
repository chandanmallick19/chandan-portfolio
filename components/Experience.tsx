import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, EXPERIENCE.length));
  };

  return (
    <section id="experience" className="py-20 bg-slate-900/50 scroll-mt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
          <span className="text-emerald-400 mr-2">03.</span> Experience
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {EXPERIENCE.slice(0, visibleCount).map((job, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center w-full`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-slate-900 border-4 border-emerald-500 z-10 transform -translate-x-1/2 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">{job.logoInitial}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] pl-20 md:pl-0 ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-500/30 transition-all shadow-lg group">
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {job.role}
                      </h3>
                      <h4 className="text-emerald-500 font-medium mb-2">{job.company}</h4>
                      
                      <div className={`flex flex-wrap gap-3 text-xs text-slate-500 mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {job.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {job.location}
                        </div>
                      </div>

                      <p className="text-slate-400 text-sm leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {visibleCount < EXPERIENCE.length && (
            <div className="text-center mt-12 relative z-20">
              <button 
                onClick={showMore}
                className="px-6 py-2 bg-slate-800 text-white rounded-full border border-slate-700 hover:bg-slate-700 transition-colors text-sm font-medium"
              >
                Show More Experience ({EXPERIENCE.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;