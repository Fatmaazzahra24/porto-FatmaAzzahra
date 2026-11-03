import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '../../data/hero.js';
import { profile } from '../../data/profile.js';
import Container from './Container.jsx';
import '../../styles/header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const toggleRef = useRef(null);

  useEffect(() => {
    const updateActiveSection = () => {
      const headerHeight = document.querySelector('.site-header').offsetHeight;
      const sections = [...document.querySelectorAll('main > section[id]')].map((section) => ({ href: `#${section.id}` }));
      let active = '#home';
      for (const item of sections) {
        const section = document.querySelector(item.href);
        if (section && section.getBoundingClientRect().top <= headerHeight + 120) {
          active = item.href;
        }
      }
      if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        active = sections.at(-1).href;
      }
      setActiveSection(active);
    };
    const initialFrame = requestAnimationFrame(updateActiveSection);
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      cancelAnimationFrame(initialFrame);
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const desktop = window.matchMedia('(min-width: 961px)');
    const closeOnDesktop = (event) => {
      if (event.matches) setIsOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    desktop.addEventListener('change', closeOnDesktop);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      desktop.removeEventListener('change', closeOnDesktop);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a className="wordmark" href="#home" aria-label={`${profile.name} — Home`} onClick={() => setIsOpen(false)}>
          fatma<span className="wordmark__dot" aria-hidden="true">.</span>
        </a>
        <button
          ref={toggleRef}
          className="nav-toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
        <nav
          id="primary-navigation"
          className={`site-nav${isOpen ? ' site-nav--open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="site-nav__list">
            {navigation.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a
                    className={`site-nav__link${item.href === activeSection ? ' site-nav__link--active' : ''}`}
                    href={item.href}
                    aria-current={item.href === activeSection ? 'location' : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="site-nav__pending" aria-disabled="true" title="Coming soon">
                    {item.label}
                    <span className="sr-only"> — coming soon</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
