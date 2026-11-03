import SkillPill from './SkillPill.jsx';

export default function SkillsMarquee({ category, number, paused }) {
  return (
    <div className="skills-category">
      <h3 id={`skills-${category.id}`}><span>{String(number).padStart(2, '0')}</span>{category.title}</h3>
      <div className={`skills-marquee${paused ? ' skills-marquee--paused' : ''}`} tabIndex={0} role="region" aria-labelledby={`skills-${category.id}`}>
        <div className={`skills-marquee__track skills-marquee__track--${category.direction}`} style={{ '--marquee-duration': category.duration }}>
          {[0, 1].map((copy) => (
            <ul className="skills-marquee__group" key={copy} aria-hidden={copy === 1 || undefined}>
              {[0, 1].flatMap((repeat) => category.items.map((skill) => <SkillPill key={`${repeat}-${skill.name}`} skill={skill} duplicate={repeat === 1} />))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
