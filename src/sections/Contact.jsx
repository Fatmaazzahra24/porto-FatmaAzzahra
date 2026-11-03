import { useEffect, useRef, useState } from 'react';
import Container from '../components/layout/Container.jsx';
import ContactLinks from '../components/ContactLinks.jsx';
import TypingText from '../components/TypingText.jsx';
import { contact } from '../data/contact.js';
import '../styles/contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className={`contact${visible ? ' contact--visible' : ''}`} aria-labelledby="contact-title">
      <Container>
        <div className="contact__layout">
          <div className="contact__invitation">
            <h2 id="contact-title">{contact.headline.map((line, index) => <span key={line}>{line}{index < contact.headline.length - 1 ? ' ' : ''}</span>)}</h2>
            <p className="contact__greeting"><TypingText text={contact.greeting} /></p>
          </div>
          <div className="contact__details">
            <a className="contact__email" href={`mailto:${contact.email}`}>{contact.email}</a>
            <ContactLinks socials={contact.socials} />
          </div>
        </div>
        <footer className="contact__footer">
          <p>{contact.copyright}</p>
          <p>{contact.credit}</p>
        </footer>
      </Container>
    </section>
  );
}
