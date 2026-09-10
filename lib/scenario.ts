export const decisions = [
  {
    title: 'Start with the person.',
    caller: '“I was counting on this payment. I need to know what happened.”',
    context: 'You have not reviewed the account yet. What do you say first?',
    choices: [
      {
        text: '“I can hear how stressful this is. Let’s look into what is happening together.”',
        good: true,
        feedback:
          'Acknowledging the impact makes room for problem-solving without making an unverified promise.',
      },
      {
        text: '“Payments take time. You will need to wait.”',
        good: false,
        feedback:
          'This closes the conversation before you know the cause. Recognize the concern, then investigate.',
      },
    ],
  },
  {
    title: 'Make the research visible.',
    caller: '“Okay, but please don’t just put me on hold again.”',
    context:
      'Identity verification is complete. You need a few minutes to review the record.',
    choices: [
      {
        text: '“I need to put you on hold.”',
        good: false,
        feedback:
          'The abrupt transition leaves the caller uncertain. Explain what you are doing and set an expectation for an update.',
      },
      {
        text: '“I need a few minutes to review the record. Is it okay if I place you on a brief hold? I’ll return with an update.”',
        good: true,
        feedback:
          'Permission, a reason, and an update expectation help the caller stay informed while you research.',
      },
    ],
  },
  {
    title: 'Be useful without overpromising.',
    caller:
      '“If I finish that step, will the money definitely arrive tomorrow?”',
    context:
      'Your research identifies a required follow-up step, but no confirmed payment date.',
    choices: [
      {
        text: '“Yes. Complete that step and I guarantee it will arrive tomorrow.”',
        good: false,
        feedback:
          'A reassuring guess is still a guess. A commitment outside your control can create a bigger problem later.',
      },
      {
        text: '“I can walk you through the next step. I can’t confirm a payment date yet, but I can explain how we will check the status.”',
        good: true,
        feedback:
          'This separates a verified next action from an unknown outcome. Close with a clear plan and document the conversation.',
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
