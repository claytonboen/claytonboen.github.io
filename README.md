# Clayton Boen | Learning, Film, Fiction and Games

A story-driven portfolio spanning instructional design, Nickelodeon television production, the forthcoming novel **Born to Blood**, and the independent Unity game **Space Force**.

The presentation leads with Clayton's director's reel, followed by selected learning samples, a novel excerpt, and actual game footage. Built with React, Vinext, and shadcn/Base UI. Published as a static site on GitHub Pages without analytics.

## Develop and verify

Use Node.js 24 or newer, then `npm ci`, `npm run dev`, and `npm run build`. Run checks with `node --experimental-strip-types --test tests/*.test.ts` and `npx tsc --noEmit`. The static output is `dist/client`.

## Project and media credits

- Learning: three physically trimmed 15-second Chaos to Calm podcast samples and only the cover of the Finance New Hire Facilitator Guide. Clayton owned its instructional design and maintenance; the program guide spans nearly 1,200 pages. No guide interiors or source courses are published.
- Poppy: a physically trimmed 15-second excerpt from the internal instructional film. The full film is not included.
- Television: Clayton's archival production reel. Every Witch Way and Talia in the Kitchen feature directing/producing work; iCarly and Victorious reflect digital production. Program footage belongs to the respective rights holders.
- Fiction: **Born to Blood: The Last Knight Trilogy**, Book One. Title, series, synopsis, and uploaded cover verified against the author's KDP listing. The portfolio displays the front of the existing cover artwork and a short manuscript excerpt; the book remains forthcoming.
- Space Force: actual Unity development captures, gameplay, and Emberwing fighter art from Clayton's game project. The game is in development.
- Portrait supplied by Clayton. No stock portraits or fabricated project screenshots.
- Full recordings, scripts, employer source documents, and private application materials are excluded from the current site build.

## Design references

Devlin Peck's focused case studies and visible demos, Cat Ellis's scannable work presentation, and Zoey Wu's clear project context informed the organization. The visual direction is original: condensed display typography, oversized editorial composition, film-led motion, and distinct learning, fiction, and game treatments.

## Interaction and accessibility

The opening film is muted, has a pause control, and respects reduced-motion preferences. Media use native playback controls. Poppy retains its original on-screen captions. The novel reader and gameplay overlay use Base UI dialogs. The archival reel has no caption track. No claim of a formal accessibility audit is made.

## Deployment

GitHub Actions builds the site, runs tests and the type check, and deploys `dist/client` to GitHub Pages. Public URL: https://claytonboen.github.io/.
