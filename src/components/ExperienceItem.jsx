export default function ExperienceItem({ experience }) {
  return (
    <li className="experience-item">
      <div className="experience-item__period">
        <h3>{experience.period}{experience.endPeriod ? ` – ${experience.endPeriod}` : ''}</h3>
      </div>
      <span className="experience-item__timeline" aria-hidden="true"><span /></span>
      <div className="experience-item__organization">
        <h4>{experience.organization}</h4>
        <p>{experience.type}</p>
      </div>
      <p className="experience-item__description">{experience.description}</p>
    </li>
  );
}
