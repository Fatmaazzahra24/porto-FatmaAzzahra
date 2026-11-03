import { useState } from 'react';
import Container from '../components/layout/Container.jsx';
import ProjectRow from '../components/ProjectRow.jsx';
import ProjectDialog from '../components/ProjectDialog.jsx';
import TypingText from '../components/TypingText.jsx';
import { projects } from '../data/projects.js';
import '../styles/projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <Container>
        <div className="projects__heading">
          <h2 id="projects-title"><TypingText text="Projects" /></h2>
          <p>A selection of projects I’ve contributed to, from web and mobile applications to systems analysis and testing.</p>
        </div>
        <ol className="projects__list">
          {projects.map((project, index) => <ProjectRow key={project.id} project={project} number={index + 1} onOpen={setSelectedProject} />)}
        </ol>
      </Container>
      {selectedProject && <ProjectDialog key={selectedProject.id} project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
