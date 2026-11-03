import Container from '../components/layout/Container.jsx';
import EducationItem from '../components/EducationItem.jsx';
import TypingText from '../components/TypingText.jsx';
import { education } from '../data/education.js';
import '../styles/education.css';

export default function Education() {
  return (
    <section id="education" className="education" aria-labelledby="education-title">
      <Container className="education__layout">
        <div className="education__title">
          <h2 id="education-title"><TypingText text="Education" /></h2>
          <div className="education__accent" aria-hidden="true" />
        </div>
        <ul className="education__list">
          {education.map((item) => <EducationItem key={item.id} item={item} />)}
        </ul>
      </Container>
    </section>
  );
}
