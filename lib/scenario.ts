export const decisions = [
  {
    title: 'The first response.',
    caller: '“I was counting on this payment. I need to know what happened.”',
    context: 'You have not reviewed the account yet. What do you say first?',
    choices: [
      {
        text: '“I understand you were relying on that payment. Let me look into what’s holding it up.”',
        good: true,
        feedback:
          'You acknowledged the concern and offered to investigate. You haven’t guessed at the cause or promised a payment date.',
      },
      {
        text: '“Payments take time. You will need to wait.”',
        good: false,
        feedback:
          'You haven’t checked the account yet, so you don’t know whether waiting will help. Acknowledge the concern and find out what happened.',
      },
    ],
  },
  {
    title: 'Explain the hold.',
    caller: '“Okay, but please don’t just put me on hold again.”',
    context:
      'Identity verification is complete. You need a few minutes to review the record.',
    choices: [
      {
        text: '“I need to put you on hold.”',
        good: false,
        feedback:
          'The student has already asked about being put on hold. Explain why you need the time and tell them you’ll return with an update.',
      },
      {
        text: '“I need a few minutes to review the record. Is it okay if I place you on a brief hold? I’ll return with an update.”',
        good: true,
        feedback:
          'The student knows why you need a few minutes and what to expect when you return.',
      },
    ],
  },
  {
    title: 'Don’t guess at the payment date.',
    caller:
      '“If I finish that step, will the money definitely arrive tomorrow?”',
    context:
      'Your research identifies a required follow-up step, but no confirmed payment date.',
    choices: [
      {
        text: '“Yes. Complete that step and I guarantee it will arrive tomorrow.”',
        good: false,
        feedback:
          'There’s no confirmed payment date. If the money doesn’t arrive tomorrow, the student will have relied on an incorrect promise.',
      },
      {
        text: '“I can walk you through the next step. I can’t confirm a payment date yet, but I can explain how we will check the status.”',
        good: true,
        feedback:
          'You explained what the student can do without promising when the payment will arrive. Document the next step and the plan to check its status.',
      },
    ],
  },
] as const;

export type ScenarioState = {
  step: number;
  selected: number | null;
  completed: boolean;
  firstTry: number;
  attempted: boolean;
};
export const initialState: ScenarioState = {
  step: 0,
  selected: null,
  completed: false,
  firstTry: 0,
  attempted: false,
};
export type ScenarioAction =
  | { type: 'choose'; choice: number }
  | { type: 'retry' }
  | { type: 'next' }
  | { type: 'reset' };
export function scenarioReducer(
  state: ScenarioState,
  action: ScenarioAction,
): ScenarioState {
  if (action.type === 'reset') return { ...initialState };
  if (state.completed) return state;
  const decision = decisions[state.step];
  if (
    action.type === 'choose' &&
    state.selected === null &&
    Number.isInteger(action.choice) &&
    decision.choices[action.choice]
  ) {
    return {
      ...state,
      selected: action.choice,
      attempted: true,
      firstTry:
        state.firstTry +
        (!state.attempted && decision.choices[action.choice].good ? 1 : 0),
    };
  }
  if (
    action.type === 'retry' &&
    state.selected !== null &&
    !decision.choices[state.selected].good
  )
    return { ...state, selected: null };
  if (
    action.type === 'next' &&
    state.selected !== null &&
    decision.choices[state.selected].good
  ) {
    return state.step === decisions.length - 1
      ? { ...state, completed: true }
      : { ...state, step: state.step + 1, selected: null, attempted: false };
  }
  return state;
}
