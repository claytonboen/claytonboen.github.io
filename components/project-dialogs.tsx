'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { novelExcerpt } from '@/lib/novel-excerpt';

export function NovelPreview() {
  return (
    <Dialog>
      <DialogTrigger render={<Button className="feature-button book-button" />}>
        Read the opening <span aria-hidden="true">↗</span>
      </DialogTrigger>
      <DialogContent className="excerpt-dialog">
        <div className="excerpt-heading">
          <p className="eyebrow">BORN TO BLOOD / A NOVEL BY CLAYTON BOEN</p>
          <DialogTitle>The Girl Behind the Glass</DialogTitle>
          <DialogDescription>
            Prologue · An excerpt from the forthcoming novel
          </DialogDescription>
        </div>
        <div className="excerpt-prose">
          {novelExcerpt.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <p className="excerpt-end">Born to Blood is coming soon.</p>
      </DialogContent>
    </Dialog>
  );
}

export function GamePreview() {
  return (
    <Dialog>
      <DialogTrigger render={<Button className="feature-button game-button" />}>
        <span aria-hidden="true">▷</span> Watch gameplay{' '}
        <span className="button-time">00:22</span>
      </DialogTrigger>
      <DialogContent className="game-dialog">
        <DialogTitle>Space Force gameplay</DialogTitle>
        <DialogDescription>
          Development capture · Coastal flight · 22 seconds, silent
        </DialogDescription>
        <video
          controls
          playsInline
          preload="metadata"
          poster="/media/space-force-gameplay.png"
          aria-label="Space Force development gameplay"
        >
          <source src="/media/space-force-development.mp4" type="video/mp4" />
          Your browser does not support video.{' '}
          <a href="/media/space-force-development.mp4">
            Open the gameplay video.
          </a>
        </video>
      </DialogContent>
    </Dialog>
  );
}
