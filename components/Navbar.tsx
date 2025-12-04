import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Swords } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  currentTheme: 'blue' | 'red';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentTheme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [logoRotation, setLogoRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Handle background style
      setIsScrolled(window.scrollY > 20);

      // Handle progress bar
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));

      // Handle Logo Rotation (Gear Effect)
      // Rotate 1 degree for every 3 pixels scrolled
      setLogoRotation(window.scrollY / 3);
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

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-emerald-500 to-blue-500 transition-all duration-150 ease-out z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      ></div>

      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, '#home')}
          className="flex items-center gap-2 cursor-pointer group perspective-1000"
        >
          {/* Logo with Scroll Rotation */}
          {/* We use inline styles for the rotation to avoid tailwind compilation overhead for dynamic values */}
          <div
            style={{ transform: `rotate(${logoRotation}deg)` }}
            className="transition-transform duration-100 ease-linear"
          >
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
              onClick={(e) => handleScrollTo(e, link.href)}
              className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer group overflow-hidden rounded-lg"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute inset-0 bg-emerald-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg origin-center"></span>
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`ml-2 px-3 py-1.5 rounded-full border text-xs font-bold flex items-center gap-2 transition-all ${currentTheme === 'blue'
                ? 'border-emerald-500 text-emerald-400 hover:bg-emerald-500/10'
                : 'border-red-500 text-red-400 hover:bg-red-500/10'
              }`}
            title={`Switch to ${currentTheme === 'blue' ? 'Red Team (Attack)' : 'Blue Team (Defense)'}`}
          >
            {currentTheme === 'blue' ? <Shield size={14} /> : <Swords size={14} />}
            <span>{currentTheme === 'blue' ? 'Blue Team' : 'Red Team'}</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
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
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 py-3 px-4 rounded-lg block transition-all cursor-pointer border-l-2 border-transparent hover:border-emerald-500"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={() => { toggleTheme(); setMobileMenuOpen(false); }}
            className={`w-full text-left py-3 px-4 rounded-lg flex items-center gap-2 border-l-2 border-transparent transition-all ${currentTheme === 'blue' ? 'hover:text-emerald-400' : 'hover:text-red-400'
              }`}
          >
            {currentTheme === 'blue' ? <Shield size={16} /> : <Swords size={16} />}
            <span>Switch to {currentTheme === 'blue' ? 'Red Team' : 'Blue Team'}</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
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