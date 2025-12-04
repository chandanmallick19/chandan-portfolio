import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import AIChatBot from './components/AIChatBot';
import TechBackground from './components/TechBackground';
import TerminalSection from './components/TerminalSection';
import GodModeModal from './components/GodModeModal';
import CodingProfile from './components/CodingProfile';

function App() {
  const [theme, setTheme] = useState<'blue' | 'red'>('blue');
  const [godModeOpen, setGodModeOpen] = useState(false);
  // Buffer to store the last 10 keys pressed
  const [keyBuffer, setKeyBuffer] = useState<string[]>([]);

  // Konami Code Sequence: Up, Up, Down, Down, Left, Right, Left, Right, b, a
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  // Apply Theme Class
  useEffect(() => {
    if (theme === 'red') {
      document.body.classList.add('theme-red');
    } else {
      document.body.classList.remove('theme-red');
    }
  }, [theme]);

  // Ensure the page always starts at the top when loaded/refreshed
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Listen for Konami Code using a rolling buffer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeyBuffer((prev) => {
        // Add new key and keep only the last N keys (where N is length of konami code)
        const updatedBuffer = [...prev, e.key].slice(-konamiCode.length);

        // Check if buffer matches konami code
        if (updatedBuffer.length === konamiCode.length &&
          updatedBuffer.every((key, index) => key === konamiCode[index])) {
          setGodModeOpen(true);
          return []; // Reset buffer after success
        }

        return updatedBuffer;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'blue' ? 'red' : 'blue');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500 selection:text-white relative">
      <TechBackground theme={theme} />
      <Navbar currentTheme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <CodingProfile />
        <Experience />
        <TerminalSection />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <AIChatBot />
      {godModeOpen && <GodModeModal onClose={() => setGodModeOpen(false)} />}
    </div>
  );
}

export default App;
