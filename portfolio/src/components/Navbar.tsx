import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const NAV_LINKS = [
    { label: t.nav.skills,  href: '#skills'  },
    { label: t.nav.shaders, href: '#shaders' },
    { label: t.nav.llm,     href: '#llm'     },
    { label: t.nav.lore,    href: '#lore'    },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['skills', 'shaders', 'llm', 'lore', 'contact'];
    const observers: IntersectionObserver[] = [];

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cp-black/95 backdrop-blur-md border-b border-cp-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={e => handleNav(e, '#hero')}
          className="font-orbitron font-bold text-lg text-cp-yellow neon-yellow tracking-widest hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          GFX.DEV
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                onClick={e => handleNav(e, href)}
                className={`text-sm font-mono tracking-wider transition-colors duration-200 ${
                  isActive ? 'text-cp-cyan neon-cyan' : 'text-cp-muted hover:text-cp-cyan'
                }`}
                style={{ fontFamily: "'Share Tech Mono', monospace" }}
              >
                {label}
              </a>
            );
          })}
          <LanguageSwitcher />
          <a
            href={`${import.meta.env.BASE_URL}CV_David_Velasco_Herruzo.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-1.5 border border-cp-yellow text-cp-yellow text-sm font-mono tracking-wider hover:bg-cp-yellow hover:text-cp-black transition-all duration-200 clip-corner"
          >
            {t.nav.resume}
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2 text-cp-cyan"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-6 h-0.5 bg-cp-cyan transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cp-cyan transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cp-cyan transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-cp-black/98 border-t border-cp-border px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={e => handleNav(e, href)}
              className="text-cp-muted hover:text-cp-cyan text-sm font-mono tracking-wider transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="flex items-center justify-between pt-2 border-t border-cp-border">
            <LanguageSwitcher />
            <a
              href={`${import.meta.env.BASE_URL}CV_David_Velasco_Herruzo.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 border border-cp-yellow text-cp-yellow text-sm font-mono hover:bg-cp-yellow hover:text-cp-black transition-all"
            >
              {t.nav.resume}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
