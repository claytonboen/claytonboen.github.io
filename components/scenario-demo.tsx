'use client';

import { useEffect, useReducer, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { decisions, initialState, scenarioReducer } from '@/lib/scenario';

export function ScenarioDemo() {
  const [state, dispatch] = useReducer(scenarioReducer, initialState);
  const heading = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    heading.current?.focus({ preventScroll: true });
  }, [state.step, state.completed]);
  const decision = decisions[state.step];
  const answer =
    state.selected === null ? null : decision.choices[state.selected];
  return (
    <div
      className="scenario-demo"
      aria-label="Interactive communication practice"
    >
      <div className="demo-top">
        <span className="eyebrow">TRY THE SCENARIO</span>
        <span>
          {state.completed
            ? 'Complete'
            : `${state.step + 1} / ${decisions.length} decisions`}
        </span>
      </div>
      {state.completed ? (
        <>
          <h3 ref={heading} tabIndex={-1}>
            A clearer next step.
          </h3>
          <p>
            You acknowledged the concern, set expectations, and offered a
            verified action without guaranteeing an unknown outcome.
          </p>
          <p className="demo-result">
            {state.firstTry} of {decisions.length} effective choices on your
            first try. Practice is the point—not a perfect score.
          </p>
          <Button
            className="demo-action"
            onClick={() => dispatch({ type: 'reset' })}
          >
            Replay scenario ↺
          </Button>
        </>
      ) : (
        <>
          <h3 ref={heading} tabIndex={-1}>
            {decision.title}
          </h3>
          <blockquote>{decision.caller}</blockquote>
          <p>{decision.context}</p>
          <div className="choice-list" aria-label="Choose your response">
            {decision.choices.map((choice, index) => (
              <Button
                key={`${state.step}-${index}`}
                variant="outline"
                className={`demo-choice ${state.selected === index ? 'selected' : ''}`}
                disabled={state.selected !== null}
                onClick={() => dispatch({ type: 'choose', choice: index })}
              >
                <span className="choice-letter">
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{choice.text}</span>
              </Button>
            ))}
          </div>
          <div
            className="feedback-region"
            aria-live="polite"
            aria-atomic="true"
          >
            {answer && (
              <div
                className={`demo-feedback ${answer.good ? 'effective' : 'rethink'}`}
              >
                <strong>
                  {answer.good
                    ? 'An effective response.'
                    : 'Consider another approach.'}
                </strong>
                <p>{answer.feedback}</p>
                {answer.good ? (
                  <Button
                    className="demo-action"
                    onClick={() => dispatch({ type: 'next' })}
                  >
                    {state.step === decisions.length - 1
                      ? 'Finish practice'
                      : 'Next decision →'}
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="demo-action"
                    onClick={() => dispatch({ type: 'retry' })}
                  >
                    Try another response
                  </Button>
                )}
              </div>
            )}
          </div>
        </>
      )}
      <p className="demo-disclosure">
        Portfolio adaptation · Fictional practice scenario
      </p>
    </div>
  );
}
