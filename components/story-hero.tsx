'use client';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

export function StoryHero() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!reduced.matches)
      void video.current
        ?.play()
        .then(() => setPlaying(true))
        .catch(() => {});
    const stop = () => {
      if (reduced.matches) {
        video.current?.pause();
        setPlaying(false);
      }
    };
    reduced.addEventListener('change', stop);
    return () => reduced.removeEventListener('change', stop);
  }, []);
  function toggle() {
    if (playing) {
      video.current?.pause();
      setPlaying(false);
    } else
      void video.current
        ?.play()
        .then(() => setPlaying(true))
        .catch(() => {});
  }
  return (
    <section className="story-hero" aria-labelledby="hero-title">
      <div className="hero-film" aria-hidden="true">
        <video
          ref={video}
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/director-reel-poster.jpg"
        >
          <source src="/media/clayton-boen-director-reel.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="hero-kicker">
          <span /> CLAYTON BOEN / STORY-DRIVEN CREATIVE
        </p>
        <h1 id="hero-title">
          IT STARTS
          <br />
          WITH A <span>STORY.</span>
        </h1>
        <div className="hero-details">
          <p>
            I’m an instructional designer and former Nickelodeon producer and
            director. I bring that storytelling experience to training, fiction,
            and the games I build.
          </p>
            <a className="round-link" href="#production-reel">
            <span>
              Watch
              <br />
              the reel
            </span>
            <span aria-hidden="true">↘</span>
          </a>
        </div>
      </div>
      <div className="hero-bottom-line">
        <span>LEARNING. FILM. FICTION. PLAY.</span>
        <Button variant="ghost" onClick={toggle} className="motion-control">
          {playing ? 'Ⅱ Pause motion' : '▷ Play motion'}
        </Button>
        <span className="hero-location">MESA, AZ / AVAILABLE REMOTELY</span>
      </div>
    </section>
  );
}
