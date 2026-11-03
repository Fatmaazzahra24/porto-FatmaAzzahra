import { ArrowUpRight, FileText } from 'lucide-react';
import Container from '../components/layout/Container.jsx';
import DocumentButton from '../components/DocumentButton.jsx';
import IdentityCard from '../components/IdentityCard.jsx';
import TypewriterHeading from '../components/TypewriterHeading.jsx';
import TypingText from '../components/TypingText.jsx';
import SocialLinks from '../components/SocialLinks.jsx';
import { heroContent } from '../data/hero.js';
import { profile } from '../data/profile.js';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <Container className="hero__layout">
        <div className="hero__content">
          <TypewriterHeading name={profile.name} />
          <div className="hero__focus">
            <span className="hero__accent" aria-hidden="true" />
            <TypingText words={heroContent.interests} loop delay={1400} />
          </div>
          <div className="hero__description">
            {heroContent.description.split('\n\n').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="hero__actions">
            <DocumentButton
              href={heroContent.resumeUrl}
              icon={ArrowUpRight}
              leadingIcon={FileText}
              ariaLabel="View resume (PDF, opens in a new tab)"
              primary
            >
              View Resume
            </DocumentButton>
          </div>
          {!heroContent.resumeUrl && (
            <p id="document-status" className="hero__availability">
              Resume coming soon.
            </p>
          )}
          <div className="hero__connect">
            <p className="hero__connect-label">Let&apos;s Connect</p>
            <SocialLinks />
          </div>
        </div>
        <IdentityCard />
      </Container>
    </section>
  );
}
