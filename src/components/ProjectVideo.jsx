import { useState } from 'react';
import { Play } from 'lucide-react';

export default function ProjectVideo({ project }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
      <div className="project-video">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${project.videoId}?autoplay=1`}
            title={`${project.title} video documentation`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button type="button" className="project-video__play" onClick={() => setIsPlaying(true)}>
            <img src={project.videoThumbnail} alt="" />
            <span className="project-video-cover__play" aria-hidden="true"><Play size={28} fill="currentColor" /></span>
            <span className="sr-only">Watch {project.title} documentation on YouTube</span>
          </button>
        )}
      </div>
  );
}
