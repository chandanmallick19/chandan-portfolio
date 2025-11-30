import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-emerald-900/30 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, '#home')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="transform transition-transform duration-300 group-hover:rotate-180">
            <Logo className="w-10 h-10" />
          </div>
          <div className="relative">
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              CKM<span className="text-slate-500">.dev</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer group overflow-hidden rounded-lg"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute inset-0 bg-emerald-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg origin-center"></span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="ml-4 px-6 py-2.5 text-xs font-bold text-slate-950 bg-emerald-400 rounded-full hover:bg-emerald-300 transition-all cursor-pointer shadow-[0_0_10px_rgba(52,211,153,0.3)] hover:shadow-[0_0_20px_rgba(52,211,153,0.6)] hover:scale-105 active:scale-95"
          >
            HIRE ME
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-emerald-400 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 py-4 px-6 flex flex-col space-y-2 shadow-2xl animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 py-3 px-4 rounded-lg block transition-all cursor-pointer border-l-2 border-transparent hover:border-emerald-500"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="text-center font-bold text-slate-950 bg-emerald-500 hover:bg-emerald-400 py-3 rounded-lg mt-4 cursor-pointer shadow-lg"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;