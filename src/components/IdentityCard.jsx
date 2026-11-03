import { UserRound } from 'lucide-react';
import { profile } from '../data/profile.js';
import { heroContent } from '../data/hero.js';
import '../styles/identity-card.css';

export default function IdentityCard() {
  if (heroContent.idCardUrl) {
    return (
      <figure className="identity-visual identity-visual--asset">
        <img
          className="identity-visual__asset"
          src={heroContent.idCardUrl}
          alt={`ID card and lanyard of ${profile.name}, ${heroContent.role}`}
          width="523"
          height="477"
          fetchPriority="high"
          decoding="async"
        />
      </figure>
    );
  }

  return (
    <figure className="identity-visual" aria-label="ID card and lanyard preview">
      <div className="lanyard" aria-hidden="true">
        <div className="lanyard__ribbon lanyard__ribbon--left">
          <span>INFORMATION TECHNOLOGY</span>
        </div>
        <div className="lanyard__ribbon lanyard__ribbon--right">
          <span>FATMA AZZAHRA</span>
        </div>
        <div className="lanyard__clasp" />
      </div>
      <div className="identity-card">
        <div className="identity-card__badge">
          <span className="identity-card__slot" aria-hidden="true" />
          <span>STUDENT ID</span>
          <span>IT / {profile.entryYear}</span>
        </div>
        <div className="identity-card__body">
          {heroContent.portraitUrl ? (
            <img
              className="identity-card__portrait"
              src={heroContent.portraitUrl}
              alt={`Portrait of ${profile.name}`}
              width="248"
              height="210"
              fetchPriority="high"
              decoding="async"
            />
          ) : (
            <div className="identity-card__portrait identity-card__portrait--placeholder">
              <UserRound size={58} strokeWidth={0.8} aria-hidden="true" />
              <span>Your portrait here</span>
            </div>
          )}
          <p className="identity-card__name">{profile.name}</p>
          <p className="identity-card__role">{heroContent.role}</p>
          <div className="identity-card__institution">{profile.institution}</div>
        </div>
      </div>
      <figcaption className="identity-visual__caption">
        {heroContent.portraitUrl ? 'ID card & lanyard preview' : 'ID card preview · portrait coming soon'}
      </figcaption>
    </figure>
  );
}
