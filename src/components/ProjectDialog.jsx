import { useEffect, useRef } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import ProjectGallery from './ProjectGallery.jsx';

export default function ProjectDialog({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const previousGutter = document.documentElement.style.scrollbarGutter;
    document.documentElement.style.scrollbarGutter = 'stable';
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.scrollbarGutter = previousGutter;
      opener?.focus({ preventScroll: true });
    };
  }, []);

  const closeOnBackdrop = (event) => {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
  };

  const keepFocusInside = (event) => {
    if (event.key !== 'Tab') return;
    const focusable = [...event.currentTarget.querySelectorAll('button, a[href], iframe, [tabindex="0"]')].filter((element) => !element.closest('[inert]'));
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <dialog ref={dialogRef} className="project-dialog" aria-labelledby="project-dialog-title" onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={closeOnBackdrop} onKeyDown={keepFocusInside}>
      <div className="project-dialog__bar">
        <span>Project details</span>
        <button className="project-dialog__close" type="button" aria-label="Close project details" onClick={onClose} autoFocus><X size={21} /></button>
      </div>
      <div className="project-dialog__body">
        <p className="project-dialog__meta">{project.year} · {project.category}</p>
        <h2 id="project-dialog-title">{project.detailTitle || project.title}</h2>
        {project.competition && <p className="project-dialog__competition">Competition: {project.competition}</p>}
        <ProjectGallery project={project} />
        <section className="project-dialog__section" aria-labelledby="project-overview">
          <h3 id="project-overview">Overview</h3>
          <p>{project.overview}</p>
        </section>
        <section className="project-dialog__section" aria-labelledby="project-problem">
          <h3 id="project-problem">The problem</h3>
          <p>{project.problem}</p>
        </section>
        <section className="project-dialog__section project-dialog__contribution" aria-labelledby="project-contribution">
          <h3 id="project-contribution">My contribution</h3>
          {project.role && <p className="project-dialog__role">{project.role}</p>}
          <p>{project.contribution}</p>
        </section>
        <section className="project-dialog__section" aria-labelledby="project-features">
          <h3 id="project-features">Key features</h3>
          <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        </section>
        <section className="project-dialog__section" aria-labelledby="project-technologies">
          <h3 id="project-technologies">Technologies</h3>
          <div className="project-tags">{[...project.technologies, ...(project.additionalTechnologies || [])].map((technology) => <span key={technology}>{technology}</span>)}</div>
        </section>
        {project.repository && <a className="project-dialog__repository" href={project.repository} target="_blank" rel="noopener noreferrer">Repository on GitHub <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}
      </div>
    </dialog>
  );
}
