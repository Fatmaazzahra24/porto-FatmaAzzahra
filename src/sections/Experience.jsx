import Container from '../components/layout/Container.jsx';
import ExperienceItem from '../components/ExperienceItem.jsx';
import TypingText from '../components/TypingText.jsx';
import { experiences } from '../data/experience.js';
import '../styles/experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience" aria-labelledby="experience-title" lang="en">
      <Container>
        <div className="experience__heading">
          <h2 id="experience-title"><TypingText text="Experience" /></h2>
          <span aria-hidden="true">(02)</span>
        </div>
        <ol className="experience__list">
          {experiences.map((experience) => <ExperienceItem key={experience.id} experience={experience} />)}
        </ol>
      </Container>
    </section>
  );
}
