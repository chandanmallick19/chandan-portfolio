import React from 'react';
import { PROFILE } from '../constants';
import { Mail, Phone, Linkedin, Github, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-slate-400 mb-12">
            Whether you have a question about my research, want to discuss a project, or just say hi, 
            I'll try my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
            <a 
              href={`mailto:${PROFILE.email}`}
              className="flex items-center justify-center gap-3 p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all group"
            >
              <Mail className="text-emerald-500 group-hover:scale-110 transition-transform" />
              <span className="text-slate-300">{PROFILE.email}</span>
            </a>
            
            <a 
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all group"
            >
              <Linkedin className="text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="text-slate-300">LinkedIn Profile</span>
            </a>

             <a 
              href={PROFILE.blog}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-orange-500 transition-all group"
            >
              <Globe className="text-orange-500 group-hover:scale-110 transition-transform" />
              <span className="text-slate-300">Read my Blog</span>
            </a>
          </div>

          <footer className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
               <a href="#" className="hover:text-emerald-400">Privacy Policy</a>
               <a href="#" className="hover:text-emerald-400">Terms of Service</a>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;