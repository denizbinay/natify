export function checkValidityAllInput() {
  return this.validity.state.every((condition) => condition.validation());
}

export function checkValidityAllForm() {
  return Array.from(this.querySelectorAll("[natify]")).every((input) => input.checkValidityAll());
}
