import { test } from 'node:test';
import assert from 'node:assert/strict';
import { initialState, scenarioReducer, decisions } from '../lib/scenario.ts';

test('all first-choice success paths complete with three effective first attempts', () => {
  let s = { ...initialState };
  for (const d of decisions) {
    s = scenarioReducer(s, {
      type: 'choose',
      choice: d.choices.findIndex((c) => c.good),
    });
    s = scenarioReducer(s, { type: 'next' });
  }
  assert.equal(s.completed, true);
  assert.equal(s.firstTry, 3);
  assert.deepEqual(scenarioReducer(s, { type: 'reset' }), initialState);
});
test('ineffective decisions explain, require retry, and cannot inflate first-attempt score', () => {
  let s = { ...initialState };
  for (const d of decisions) {
    s = scenarioReducer(s, {
      type: 'choose',
      choice: d.choices.findIndex((c) => !c.good),
    });
    assert.deepEqual(scenarioReducer(s, { type: 'next' }), s);
    s = scenarioReducer(s, { type: 'retry' });
    s = scenarioReducer(s, {
      type: 'choose',
      choice: d.choices.findIndex((c) => c.good),
    });
    const twice = scenarioReducer(s, { type: 'choose', choice: 0 });
    assert.deepEqual(twice, s);
    s = scenarioReducer(s, { type: 'next' });
  }
  assert.equal(s.completed, true);
  assert.equal(s.firstTry, 0);
});
test('premature and invalid transitions are harmless', () => {
  for (const action of [
    { type: 'next' },
    { type: 'retry' },
    { type: 'choose', choice: -1 },
    { type: 'choose', choice: 8 },
    { type: 'choose', choice: 0.5 },
  ] as const)
    assert.deepEqual(scenarioReducer(initialState, action), initialState);
});
