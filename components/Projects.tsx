import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, FileText, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900/30 scroll-mt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center justify-center">
          <span className="text-emerald-400 mr-2">04.</span> Projects & Research
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-800 rounded-xl border border-slate-700 p-8 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 shadow-lg"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-900 rounded-lg text-emerald-500 group-hover:text-emerald-400 transition-colors">
                  {project.type === 'publication' ? <FileText size={24} /> : <Github size={24} />}
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>

              <div className="flex items-center text-xs text-slate-500 mb-4">
                  <Calendar className="w-3 h-3 mr-1" />
                  {project.duration}
              </div>

              <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies?.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-medium text-emerald-500/80 bg-emerald-500/10 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;