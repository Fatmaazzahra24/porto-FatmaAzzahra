import { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import Container from '../components/layout/Container.jsx';
import SkillsMarquee from '../components/SkillsMarquee.jsx';
import TypingText from '../components/TypingText.jsx';
import { skillCategories } from '../data/skills.js';
import '../styles/skills.css';

export default function Skills() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="skills" className="skills" aria-labelledby="skills-title">
      <Container>
        <div className="skills__heading">
          <div>
            <h2 id="skills-title"><TypingText text="Skills & Tools" /></h2>
            <p>Technologies, tools, and capabilities I use to build, design, and develop digital solutions.</p>
          </div>
          <button className="skills__pause" type="button" aria-pressed={paused} onClick={() => setPaused((current) => !current)}>
            {paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
            {paused ? 'Resume animation' : 'Pause animation'}
          </button>
        </div>
        <div className="skills__categories">
          {skillCategories.map((category, index) => <SkillsMarquee key={category.id} category={category} number={index + 1} paused={paused} />)}
        </div>
      </Container>
    </section>
  );
}
