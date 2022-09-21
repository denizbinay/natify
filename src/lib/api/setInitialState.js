import registerCondition from "./registerCondition";

// If condition exists create initial state
function setInitialState(input) {
  let state = [];

  if (input.hasAttribute("minlength")) {
    state.push(registerCondition("minlength", input, () => !input.validity.tooShort));
  }

  if (input.hasAttribute("maxlength")) {
    state.push(registerCondition("maxlength", input, () => !input.validity.tooLong));
  }

  if (input.hasAttribute("min")) {
    state.push(registerCondition("min", input, () => !input.validity.rangeUnderflow));
  }

  if (input.hasAttribute("max")) {
    state.push(registerCondition("max", input, () => !input.validity.rangeOverflow));
  }

  if (input.hasAttribute("pattern")) {
    state.push(registerCondition("pattern", input, () => !input.validity.patternMismatch));
  }

  if (input.hasAttribute("required")) {
    state.push(registerCondition("required", input, () => !input.validity.valueMissing));
  }

  if (input.hasAttribute("type")) {
    state.push(registerCondition("type", input, () => !input.validity.typeMismatch));
  }

  if (input.hasAttribute("step")) {
    state.push(registerCondition("step", input, () => !input.validity.stepMismatch));
  }

  if (input.hasAttribute("accept")) {
    state.push(registerCondition("accept", input, () => !input.validity.acceptMismatch()));
  }

  if (input.hasAttribute("maxsize")) {
    state.push(registerCondition("maxsize", input, () => !input.validity.tooLarge()));
  }

  return state;
}

export default setInitialState;
