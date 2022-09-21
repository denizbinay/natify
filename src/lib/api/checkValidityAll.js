export function checkValidityAllInput() {
  return this.validity.state.every((condition) => condition.isValid);
}

export function checkValidityAllForm() {
  return Array.from(this.querySelectorAll("[natify]")).every((input) => input.checkValidityAll());
}
