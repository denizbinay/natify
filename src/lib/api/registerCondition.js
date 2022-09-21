// Regoster new condition for api
function registerCondition(attribute, input, validation) {
  let condition = {};
  condition.attribute = attribute;
  condition.value = input.getAttribute(attribute);
  condition.message = input.hasAttribute(`${attribute}-msg`) ? input.getAttribute(`${attribute}-msg`) : false;
  condition.isValid = undefined;
  condition.validation = () => {
    if (input.value.length > 0) {
      return validation();
    } else if (input.required) {
      return false;
    } else {
      return true;
    }
  };
  return condition;
}

export default registerCondition;
