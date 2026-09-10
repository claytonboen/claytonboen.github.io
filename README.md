# Clayton Boen — Learning. Film. Fiction. Play.

A story-driven portfolio spanning instructional design, Nickelodeon television production, the forthcoming novel **Born to Blood**, and the independent Unity game **Space Force**.

The presentation uses a cinematic opening, a four-project editorial grid, a playable communication scenario, a production reel, a novel excerpt, and actual game footage. Built with the Sites scaffold, React, Vinext, and shadcn/Base UI. Published as a static site on GitHub Pages without analytics or collected scenario responses.

## Develop and verify

Use Node.js 24 or newer, then `npm ci`, `npm run dev`, and `npm run build`. Run checks with `node --experimental-strip-types --test tests/*.test.ts` and `npx tsc --noEmit`. The static output is `dist/client`.

## Project and media credits

- Learning: Clayton's Finance New Hire Storyline redevelopment, branching dialogue, and collaborative military-student-support design. Collaborators and the original Bianca Woods scenario template are credited in the project details.
- Television: Clayton's archival production reel. Every Witch Way and Talia in the Kitchen feature directing/producing work; iCarly and Victorious reflect digital production. Program footage belongs to the respective rights holders.
- Fiction: **Born to Blood: The Last Knight Trilogy**, Book One. Title, series, synopsis, and uploaded cover verified against the author's KDP listing. The portfolio displays the front of the existing cover artwork and a short manuscript excerpt; the book remains forthcoming.
- Space Force: actual Unity development captures, gameplay, and Emberwing fighter art from Clayton's game project. The game is in development.
- Portrait supplied by Clayton. No stock portraits or fabricated project screenshots.
- The web implementation and condensed interactive adaptation were developed with AI assistance. Employer-owned source courses, full manuscripts, and private application material are not distributed in this repository.

## Design references

Devlin Peck's focused case studies and visible demos, Cat Ellis's scannable work presentation, and Zoey Wu's clear project context informed the organization. The visual direction is original: condensed display typography, oversized editorial composition, film-led motion, and distinct learning, fiction, and game treatments.

## Interaction and accessibility

The opening film is muted, has a pause control, and respects reduced-motion preferences. Reel and gameplay playback use native video controls. The novel reader and gameplay overlay use Base UI dialogs, and the scenario supports keyboard interaction and announced feedback. The archival reel has no caption track. No claim of a formal accessibility audit is made.

## Deployment

GitHub Actions builds the site, runs tests and the type check, and deploys `dist/client` to GitHub Pages. Public URL: https://claytonboen.github.io/.
