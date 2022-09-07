import { printReceived, matcherHint } from "jest-matcher-utils";

export function toBeSameStory(date, after) {
  const passMessage =
    matcherHint(".not.toBeAfter", "received", "") +
    "\n\n" +
    `Expected date to be after ${printReceived(after)} but received:\n` +
    `  ${printReceived(date)}`;

  const failMessage =
    matcherHint(".toBeAfter", "received", "") +
    "\n\n" +
    `Expected date to be after ${printReceived(after)} but received:\n` +
    `  ${printReceived(date)}`;

  const pass = date > after;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
