import { correctGuess, actionTypes } from './';

describe('correctGuess', () => {
  test('returns an action with type `CORRECT_GUESS`', () => {
    const action = correctGuess();

    // toBe works only for immutable data types like numbers and strings
    // cannot use toBe (===) for comparing mutable data types like arrays and objects
    // it also compares the deep levels of that obj
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  })
});
