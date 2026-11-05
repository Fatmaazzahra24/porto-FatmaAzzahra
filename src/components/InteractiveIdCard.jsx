import { useRef } from 'react';
import { heroContent } from '../data/hero.js';
import { profile } from '../data/profile.js';
import useIdCardMotion from '../hooks/useIdCardMotion.js';

export default function InteractiveIdCard() {
  const figureRef = useRef(null);
  const buttonRef = useRef(null);
  const poseRef = useRef(null);
  useIdCardMotion(figureRef, buttonRef, poseRef);

  return (
    <figure ref={figureRef} className="identity-visual identity-visual--asset">
      <span className="identity-visual__arrival">
        <button
          ref={buttonRef}
          className="identity-visual__interactive"
          type="button"
          aria-label={`Play with ${profile.name}'s ID card`}
          aria-describedby="id-card-instructions"
        >
          <span ref={poseRef} className="identity-visual__pose">
            <img
              className="identity-visual__asset"
              src={heroContent.idCardUrl}
              alt={`ID card and lanyard of ${profile.name}, ${heroContent.role}`}
              width="523"
              height="477"
              fetchPriority="high"
              decoding="async"
              draggable="false"
            />
          </span>
        </button>
      </span>
      <figcaption id="id-card-instructions" className="sr-only">
        Drag sideways and release to gently bounce the card, or press Enter or Space. Swipe vertically to scroll.
      </figcaption>
    </figure>
  );
}
