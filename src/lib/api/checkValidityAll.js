function checkValidityAll() {
  return this.validity.state.every((condition) => condition.isValid);
}

export default checkValidityAll;
