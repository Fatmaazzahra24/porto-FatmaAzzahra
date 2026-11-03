import { useEffect, useRef, useState } from 'react';

export default function TypingText({ text, words, loop = false, delay = 100 }) {
  const elementRef = useRef(null);
  const [display, setDisplay] = useState('');
  const labels = words || [text];

  useEffect(() => {
    const values = words || [text];
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    let timer;
    let index = 0;
    let position = 0;
    let deleting = false;
    let complete = false;

    const stop = () => {
      clearTimeout(timer);
      timer = undefined;
    };
    const tick = () => {
      timer = undefined;
      if (!visible || document.hidden || preference.matches || complete) return;
      const value = values[index];
      position += deleting ? -1 : 1;
      setDisplay(value.slice(0, position));
      let duration = deleting ? 35 : 65;
      if (!deleting && position === value.length) {
        if (!loop) {
          complete = true;
          return;
        }
        deleting = true;
        duration = 2800;
      } else if (deleting && position === 0) {
        deleting = false;
        index = (index + 1) % values.length;
        duration = 320;
      }
      timer = setTimeout(tick, duration);
    };
    const resume = () => {
      if (!timer && visible && !document.hidden && !preference.matches && !complete) timer = setTimeout(tick, delay);
    };
    const update = () => {
      stop();
      resume();
    };
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    }, { threshold: 0.1 }) : null;
    if (observer) observer.observe(elementRef.current);
    else {
      visible = true;
      resume();
    }
    document.addEventListener('visibilitychange', update);
    preference.addEventListener('change', update);
    return () => {
      stop();
      observer?.disconnect();
      document.removeEventListener('visibilitychange', update);
      preference.removeEventListener('change', update);
    };
  }, [text, words, loop, delay]);

  return (
    <span ref={elementRef} className={`typing-text${loop ? ' typing-text--loop' : ''}`} data-typing={loop || display !== text}>
      <span className="sr-only">{labels.join(', ')}</span>
      {labels.map((label) => <span className="typing-text__reserve" aria-hidden="true" key={label}>{label}</span>)}
      <span className="typing-text__visual" aria-hidden="true">{display}</span>
    </span>
  );
}
