import { useEffect, useState } from 'react';

export default function TypewriterHeading({ name }) {
  const introduction = "Hi, I'm ";
  const fullName = `${name}!`;
  const length = introduction.length + fullName.length;
  const [characters, setCharacters] = useState(0);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame;
    let started;
    const tick = (time) => {
      started ??= time;
      const count = preference.matches ? length : Math.max(0, Math.floor((time - started - 180) / 55));
      setCharacters(Math.min(count, length));
      if (count < length) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [length]);

  return (
    <h1 id="hero-heading" className="hero__heading typewriter" aria-label={`${introduction}${fullName}`}>
      <span className="typewriter__reserve" aria-hidden="true">
        Hi, I&apos;m <span className="hero__name">{name}<span className="hero__punctuation">!</span></span>
      </span>
      <span className="typewriter__text" aria-hidden="true">
        <span className={characters < introduction.length ? 'typewriter__cursor' : undefined}>{introduction.slice(0, characters)}</span>
        <span className="hero__name">
          <span className={characters >= introduction.length && characters < length ? 'typewriter__cursor' : undefined}>{fullName.slice(0, Math.max(0, Math.min(name.length, characters - introduction.length)))}</span>
          {characters === length && <span className="hero__punctuation">!</span>}
        </span>
      </span>
    </h1>
  );
}
