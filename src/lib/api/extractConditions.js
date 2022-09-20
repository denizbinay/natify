// Find all conditions on Input and Set iniatial State
function extractConditions(input) {
  let state = [];
  if (input.hasAttribute("minlength")) {
    let minlength = {};
    minlength.attribute = "minlength";
    minlength.value = input.getAttribute("minlength");
    minlength.message = input.hasAttribute("minlength-msg") ? input.getAttribute("minlength-msg") : false;
    minlength.validation = () => !input.validity.tooShort;
    minlength.isValid = undefined;
    state.push(minlength);
  }
  if (input.hasAttribute("maxlength")) {
    let maxlength = {};
    maxlength.attribute = "maxlength";
    maxlength.value = input.getAttribute("maxlength");
    maxlength.message = input.hasAttribute("maxlength-msg") ? input.getAttribute("maxlength-msg") : false;
    maxlength.validation = () => !input.validity.tooLong;
    maxlength.isValid = undefined;
    state.push(maxlength);
  }
  if (input.hasAttribute("min")) {
    let min = {};
    min.attribute = "min";
    min.value = input.getAttribute("min");
    min.message = input.hasAttribute("min-msg") ? input.getAttribute("min-msg") : false;
    min.validation = () => !input.validity.rangeUnderflow;
    min.isValid = undefined;
    state.push(min);
  }
  if (input.hasAttribute("max")) {
    let max = {};
    max.attribute = "max";
    max.value = input.getAttribute("max");
    max.message = input.hasAttribute("max-msg") ? input.getAttribute("max-msg") : false;
    max.validation = () => !input.validity.rangeOverflow;
    max.isValid = undefined;
    state.push(max);
  }
  if (input.hasAttribute("pattern")) {
    let pattern = {};
    pattern.attribute = "pattern";
    pattern.value = input.getAttribute("pattern");
    pattern.message = input.hasAttribute("pattern-msg") ? input.getAttribute("pattern-msg") : false;
    pattern.validation = () => !input.validity.patternMismatch;
    pattern.isValid = undefined;
    state.push(pattern);
  }
  if (input.hasAttribute("required")) {
    let required = {};
    required.attribute = "required";
    required.value = input.getAttribute("required");
    required.message = input.hasAttribute("required-msg") ? input.getAttribute("required-msg") : false;
    required.validation = () => !input.validity.valueMissing;
    required.isValid = undefined;
    state.push(required);
  }
  if (input.hasAttribute("type")) {
    let type = {};
    type.attribute = "type";
    type.value = input.getAttribute("type");
    type.message = input.hasAttribute("type-msg") ? input.getAttribute("type-msg") : false;
    type.validation = () => !input.validity.typeMismatch;
    type.isValid = undefined;
    state.push(type);
  }
  return state;
}

export default extractConditions;
