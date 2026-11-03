import { useEffect } from 'react';

export default function usePageMotion() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const targets = document.querySelectorAll(
      '.education__title, .education-item, .projects__heading, .project-row, .experience__heading, .experience-item, .skills__heading, .skills-category',
    );
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('motion-entered');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    targets.forEach((target, index) => {
      target.style.setProperty('--motion-delay', `${(index % 3) * 65}ms`);
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);
}
