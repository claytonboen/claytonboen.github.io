import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { novelExcerpt } from '../lib/novel-excerpt.ts';

const root = new URL('../', import.meta.url);
const read = (path: string) => readFileSync(new URL(path, root), 'utf8');
const publicSources = [
  'app/page.tsx',
  'app/layout.tsx',
  'components/story-hero.tsx',
  'components/project-dialogs.tsx',
  'components/scenario-demo.tsx',
]
  .map(read)
  .join('\n');

test('all local media references resolve to nonempty public files', () => {
  const paths = [
    ...new Set(
      [...publicSources.matchAll(/(?:src|poster)="(\/media\/[^\"]+)"/g)].map(
        (match) => match[1],
      ),
    ),
  ];
  assert.ok(
    paths.length >= 8,
    'The four work features must retain their actual media.',
  );
  for (const path of paths)
    assert.ok(
      statSync(fileURLToPath(new URL(`public${path}`, root))).size > 0,
      `${path} is missing or empty`,
    );
});

test('every in-page navigation target exists', () => {
  const ids = new Set(
    [...publicSources.matchAll(/\bid="([^\"]+)"/g)].map((match) => match[1]),
  );
  for (const [, target] of publicSources.matchAll(/href="#([^\"]+)"/g))
    assert.ok(ids.has(target), `Missing #${target}`);
});

test('the public presentation retains the full creative story without working notes', () => {
  for (const heading of [
    'MAKE SENSE.',
    'Nickelodeon',
    'Born to',
    'SPACE',
    'agentic coding',
  ])
    assert.ok(publicSources.includes(heading));
  assert.match(publicSources, /COMING SOON/);
  assert.match(publicSources, /IN DEVELOPMENT/);
  for (const phrase of [
    'AI Observation',
    'A recorded QA pass',
    'not a claim',
    'Codex under my supervision',
    '/Volumes/',
    '/Users/',
  ])
    assert.ok(
      !publicSources.includes(phrase),
      `Unexpected working note: ${phrase}`,
    );
});

test('the novel offers a substantial excerpt, not the full manuscript', () => {
  const words = novelExcerpt.join(' ').split(/\s+/).length;
  assert.equal(novelExcerpt.length, 15);
  assert.ok(words > 400 && words < 800);
  assert.ok(novelExcerpt[0].startsWith('Today it was raining.'));
});
