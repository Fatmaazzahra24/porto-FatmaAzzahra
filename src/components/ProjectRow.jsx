import { ArrowRight } from 'lucide-react';
import ProjectVisual from './ProjectVisual.jsx';

export default function ProjectRow({ project, number, onOpen }) {
  return (
    <li>
      <button className="project-row" type="button" onClick={() => onOpen(project)} aria-haspopup="dialog" aria-label={`View ${project.title} project details`}>
        <span className="project-row__visual"><ProjectVisual project={project} /></span>
        <span className="project-row__content">
          <span className="project-row__number">{String(number).padStart(2, '0')}</span>
          <span className="project-row__title">{project.title}</span>
          <span className="project-row__meta">{project.year} · {project.category}</span>
          <span className="project-row__summary">{project.summary}</span>
          <span className="project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</span>
        </span>
        <span className="project-row__arrow" aria-hidden="true"><ArrowRight size={17} /></span>
      </button>
    </li>
  );
}
