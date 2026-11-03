import { useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import ProjectVisual from './ProjectVisual.jsx';
import ProjectVideo from './ProjectVideo.jsx';

export default function ProjectGallery({ project }) {
  const touchStart = useRef(null);
  const [active, setActive] = useState(0);
  const images = project.images || (project.image ? [project.image] : []);
  const slides = [
    ...(project.videoId ? [{ type: 'video', id: project.videoId, thumbnail: project.videoThumbnail }] : []),
    ...images.map((src, index) => ({ type: 'image', id: src, thumbnail: src, number: index + 1 })),
  ];

  if (!slides.length) {
    return <div className="project-dialog__visual"><ProjectVisual project={project} /></div>;
  }

  const goTo = (index) => setActive(Math.max(0, Math.min(slides.length - 1, index)));
  const slide = slides[active];

  return (
    <div className="project-gallery" role="region" aria-label={`${project.title} image gallery`} aria-roledescription="carousel">
      <div
        className="project-gallery__track"
        tabIndex={0}
        aria-label="Project images. Swipe or use arrow keys to browse."
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            goTo(active + (event.key === 'ArrowRight' ? 1 : -1));
          }
        }}
        onTouchStart={(event) => {
          const { clientX, clientY } = event.touches[0];
          touchStart.current = { x: clientX, y: clientY };
        }}
        onTouchEnd={(event) => {
          if (!touchStart.current) return;
          const dx = event.changedTouches[0].clientX - touchStart.current.x;
          const dy = event.changedTouches[0].clientY - touchStart.current.y;
          if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) goTo(active + (dx < 0 ? 1 : -1));
          touchStart.current = null;
        }}
        onTouchCancel={() => { touchStart.current = null; }}
      >
        <div className="project-gallery__slide" key={slide.id} role="group" aria-roledescription="slide" aria-label={`${active + 1} of ${slides.length}${slide.type === 'video' ? ' — Video' : ''}`}>
          {slide.type === 'video'
            ? <ProjectVideo project={project} />
            : <img src={slide.id} alt={`${project.title} — image ${slide.number}`} loading="eager" decoding="async" draggable="false" />}
        </div>
      </div>
      {slides.length > 1 && (
        <>
          <div className="project-gallery__controls">
            <button type="button" aria-label="Previous project image" aria-disabled={active === 0} onClick={() => goTo(active - 1)}><ChevronLeft size={18} /></button>
            <span className="project-gallery__counter" aria-live="polite" aria-atomic="true">{active + 1} / {slides.length}</span>
            <button type="button" aria-label="Next project image" aria-disabled={active === slides.length - 1} onClick={() => goTo(active + 1)}><ChevronRight size={18} /></button>
          </div>
          <div className="project-gallery__thumbnails" aria-label="Choose a project image">
            {slides.map((item, index) => (
              <button type="button" key={item.id} aria-label={item.type === 'video' ? 'Show project video' : `Show project image ${item.number}`} aria-current={active === index ? 'true' : undefined} onClick={() => goTo(index)}>
                <img src={item.thumbnail} alt="" loading="eager" />
                {item.type === 'video' && <Play size={14} aria-hidden="true" />}
              </button>
            ))}
          </div>
        </>
      )}
      {project.videoUrl && <a className="project-gallery__video-link" href={project.videoUrl} target="_blank" rel="noopener noreferrer">Watch on YouTube <ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}
    </div>
  );
}
