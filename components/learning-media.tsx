'use client';

import type { SyntheticEvent } from 'react';

// A visitor can switch samples without several recordings playing at once.
function focusPlayback(event: SyntheticEvent<HTMLMediaElement>) {
  document.querySelectorAll<HTMLMediaElement>('audio, video[controls]').forEach((media) => {
    if (media !== event.currentTarget) media.pause();
  });
}

export function EpisodeAudio({ src, title }: { src: string; title: string }) {
  return <div className="episode-player">
    <audio controls preload="metadata" onPlay={focusPlayback} aria-label={`${title}: 15-second sample`}>
      <source src={src} type="audio/mpeg" />
      Your browser cannot play this recording. <a href={src}>Open the MP3</a>.
    </audio>
  </div>;
}

export function PoppyExcerpt() {
  return <video controls playsInline preload="none" onPlay={focusPlayback}
    poster="/media/samples/poppy-15s-poster.jpg"
    aria-label="A Day in the Life of Poppy: 15-second rider support sample">
    <source src="/media/samples/poppy-15s.mp4" type="video/mp4" />
    Your browser cannot play this film. <a href="/media/samples/poppy-15s.mp4">Open the excerpt</a>.
  </video>;
}
