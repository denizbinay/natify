function setValidationState(state) {
  if (state.length === 0) return;
  state.forEach((condition) => {
    condition.isValid = condition.validation();
  });
  return state;
}

export default setValidationState;
