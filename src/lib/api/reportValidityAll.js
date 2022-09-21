export function reportValidityAllForm() {
  this.querySelectorAll("[natify]").forEach((input) => input.dispatchEvent(new Event("input")));
}
