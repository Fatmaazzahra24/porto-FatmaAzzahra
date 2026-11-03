import { Image, Play } from 'lucide-react';

export default function ProjectVisual({ project }) {
  if (project.videoThumbnail) {
    return (
      <span className="project-video-cover">
        <img className="project-visual__image" src={project.videoThumbnail} alt={`${project.title} video documentation thumbnail`} loading="lazy" width="480" height="360" />
        <span className="project-video-cover__play" aria-hidden="true"><Play size={22} fill="currentColor" /></span>
      </span>
    );
  }
  const cover = project.images?.[0] || project.image;
  if (cover) {
    return <img className="project-visual__image" src={cover} alt={`${project.title} project preview`} loading="lazy" width="640" height="360" />;
  }

  return (
    <div className={`project-visual project-visual--${project.id}`} aria-hidden="true">
      <Image className="project-visual__icon" size={22} strokeWidth={1.4} />
      <span className="project-visual__name">{project.shortName}</span>
      <span className="project-visual__caption">Preview coming soon</span>
    </div>
  );
}
