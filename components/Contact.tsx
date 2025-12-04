import React, { useState } from 'react';
import { PROFILE } from '../constants';
import { Mail, Linkedin, Globe, Send, Lock, CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'encrypting' | 'sent'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('encrypting');

    // Simulate encryption/sending delay
    setTimeout(() => {
      setFormState('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormState('idle'), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 scroll-mt-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-2">
              <span className="text-emerald-400">07.</span> Secure Channel
            </h2>
            <p className="text-slate-400">
              Whether you have a question about my research, want to discuss a project, or just say hi,
              establish a connection below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">Contact Coordinates</h3>

              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all group"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="text-slate-200 font-medium group-hover:text-emerald-400 transition-colors">{PROFILE.email}</p>
                </div>
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-all group"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">LinkedIn</p>
                  <p className="text-slate-200 font-medium group-hover:text-blue-400 transition-colors">Connect professionally</p>
                </div>
              </a>

              <a
                href={PROFILE.blog}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-500 transition-all group"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Blog</p>
                  <p className="text-slate-200 font-medium group-hover:text-orange-400 transition-colors">Read my articles</p>
                </div>
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700 relative">
              {formState === 'encrypting' && (
                <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-2xl border border-emerald-500/50">
                  <Loader2 className="w-10 h-10 text-emerald-500 animate-spin mb-4" />
                  <p className="font-mono text-emerald-400 animate-pulse">Encrypting Payload...</p>
                  <div className="w-48 h-1 bg-slate-700 mt-4 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 animate-[slideUp_2s_ease-out] w-full origin-left"></div>
                  </div>
                </div>
              )}

              {formState === 'sent' && (
                <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-2xl border border-emerald-500">
                  <CheckCircle className="w-16 h-16 text-emerald-500 mb-4 animate-bounce" />
                  <p className="text-white font-bold text-lg">Transmission Secure</p>
                  <p className="text-slate-400 text-sm mt-2">Message received.</p>
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-6">Send Transmission</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Identity</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Frequency (Email)</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Payload</label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Initiate handshake protocol..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formState !== 'idle'}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-emerald-500/25 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Lock size={18} />
                  <span>Encrypt & Send</span>
                  <Send size={18} className="ml-1 opacity-70" />
                </button>
              </div>
            </form>
          </div>

          <footer className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 mt-16">
            <p>&copy; {new Date().getFullYear()} {PROFILE.name}. Secured by {PROFILE.name}.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="hover:text-emerald-400 cursor-pointer">Protocol v2.0</span>
              <span className="hover:text-emerald-400 cursor-pointer">System Status: Nominal</span>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;