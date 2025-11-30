import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { Award, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-950 scroll-mt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center justify-center">
          <span className="text-emerald-400 mr-2">05.</span> Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert, idx) => (
            <div key={idx} className="flex items-start bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-colors">
              <div className="shrink-0 mr-4">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500">
                  <Award size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                <div className="flex items-center text-sm text-slate-400 mb-2">
                  <span className="font-semibold text-emerald-400 mr-2">{cert.issuer}</span>
                  <span className="text-slate-600">•</span>
                  <span className="ml-2">{cert.date}</span>
                </div>
                {cert.description && (
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;