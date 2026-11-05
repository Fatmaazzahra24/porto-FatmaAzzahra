import Header from './components/layout/Header.jsx';
import Hero from './sections/Hero.jsx';
import Education from './sections/Education.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Skills from './sections/Skills.jsx';
import Contact from './sections/Contact.jsx';
import usePageMotion from './hooks/usePageMotion.js';
import './styles/app.css';
import './styles/motion.css';
import './styles/mobile.css';

export default function App() {
  usePageMotion();
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" className="app" tabIndex={-1}>
        <Hero />
        <Education />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
