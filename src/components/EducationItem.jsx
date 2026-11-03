import { GraduationCap, School } from 'lucide-react';

export default function EducationItem({ item }) {
  return (
    <li className="education-item">
      <div className="education-item__logo">
        {item.logo ? (
          <img src={item.logo} alt={`Logo ${item.institution}`} width="112" height="112" loading="lazy" />
        ) : (
          <School size={44} aria-hidden="true" />
        )}
      </div>
      <article className="education-item__content" aria-labelledby={`${item.id}-title`}>
        <div className="education-item__heading">
          <div>
            <h3 id={`${item.id}-title`}>{item.institution}</h3>
            <p className="education-item__program">{item.program}</p>
          </div>
          <span className="education-item__period">
            <GraduationCap size={16} aria-hidden="true" />
            {item.period}
          </span>
        </div>
        <p className="education-item__description">{item.description}</p>
        {item.topics.length > 0 && (
          <ul className="education-item__topics" aria-label="Areas of study">
            {item.topics.map((topic) => <li key={topic}>{topic}</li>)}
          </ul>
        )}
      </article>
    </li>
  );
}
