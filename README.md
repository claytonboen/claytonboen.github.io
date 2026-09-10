# Clayton Boen — selected work

Public portfolio of instructional design, writing, and television production. Built with the OpenAI Sites scaffold, React, Vinext, and shadcn/Base UI controls. Published as a static export on GitHub Pages; no server, database, analytics, or collected scenario responses.

## Develop and verify

Use Node.js 24 or newer, then `npm ci`, `npm run dev`, and `npm run build`. Run the scenario logic tests with `node --experimental-strip-types --test tests/scenario.test.ts` and the type check with `npx tsc --noEmit`. The static output is `dist/client`.

## Content boundaries

- Military learning case study: course maintenance/redevelopment and collaborative instructional design, not a claim of sole original authorship.
- Communication practice: a new, sanitized web adaptation of Clayton's Storyline scenario work. The source package credits an existing Bianca Woods template. The new web implementation and adapted wording were created with AI assistance.
- Reel: archival 2015 production reel; contributions vary by project. Programme footage remains the property of respective rights holders. No endorsement is implied. The current reel does not have captions; an accompanying description explains its visual content.
- Full scripts, internal training exports, student information, employment application documents, and source-drive inventories are deliberately excluded from this public repository.
- No learner-performance gains or business results are asserted without evidence.

## Design references

Research informed the information architecture, not copied code, writing, or artwork: Devlin Peck's focused case studies and visible demos; Cat Ellis's scannable project presentation; Zoey Wu's explicit role, tools, and project context. The presentation here is original to this portfolio.

## Deployment

GitHub Actions builds the site, runs tests and the type check, and deploys `dist/client` to GitHub Pages. Public URL: https://claytonboen.github.io/.
