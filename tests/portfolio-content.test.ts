import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { novelExcerpt } from '../lib/novel-excerpt.ts';

const root = new URL('../', import.meta.url);
const read = (path: string) => readFileSync(new URL(path, root), 'utf8');
const publicSources = [
  'app/page.tsx',
  'app/layout.tsx',
  'components/story-hero.tsx',
  'components/project-dialogs.tsx',
  'components/learning-showcase.tsx',
  'components/learning-media.tsx',
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
    'IN PRACTICE.',
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

test('portfolio copy follows the requested punctuation style', () => {
  assert.doesNotMatch(
    publicSources,
    /[\u2013\u2014]/,
  );
});

test('learning presentation shares only approved samples and the guide cover', () => {
  const cases = read('components/learning-showcase.tsx');
  for (const text of ['id="chaos-to-calm"', 'id="finance-new-hire"', 'id="poppy"', 'Nearly 1,200 pages', 'Cover page only', '15-second sample'])
    assert.ok(cases.includes(text), `Missing case context: ${text}`);
  assert.doesNotMatch(cases, /apolloedu|uopx\.rehearsal\.com|forms\.cloud\.microsoft|\.story["<]|Poppy_IM|appgprj_|\bKB #/);
  assert.doesNotMatch(cases, /Microsoft Forms|Rehearsal|STRUCTURAL QA|release gates|ai-workflow|guide-spread/);
  assert.ok(read('app/page.tsx').indexOf('<LearningShowcase />') > read('app/page.tsx').indexOf('id="production-reel"'));
  assert.ok(cases.indexOf('id="chaos-to-calm"') < cases.indexOf('id="poppy"'));
  assert.doesNotMatch(cases, /ScenarioDemo|Try a short advising scenario/);
  assert.equal((cases.match(/<EpisodeAudio /g) ?? []).length, 3);
  for (const episode of ['01', '02', '04']) {
    assert.ok(statSync(fileURLToPath(new URL(`public/media/samples/chaos-to-calm-${episode}-15s.mp3`, root))).size > 10000);
  }
  assert.ok(cases.split(/\s+/).length < 800, 'Keep the learning presentation concise.');
  assert.doesNotMatch(publicSources, /\/media\/review\/|Read episode script|id="military"/);
});

test('the public directory excludes full employer media and course sources', () => {
  assert.deepEqual(readdirSync(new URL('public/media/samples/', root)).sort(), [
    'chaos-to-calm-01-15s.mp3',
    'chaos-to-calm-02-15s.mp3',
    'chaos-to-calm-04-15s.mp3',
    'finance-new-hire-cover.png',
    'poppy-rider-experience-15s.mp4',
    'poppy-rider-experience-poster.jpg',
  ]);
  for (const path of ['public/media/review', 'public/media/story-in-motion.mp4', 'public/media/military-course-title.jpg'])
    assert.equal(existsSync(new URL(path, root)), false, `${path} must stay outside the public build`);
});
