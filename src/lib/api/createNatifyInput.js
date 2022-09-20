import checkValidityAll from "./checkValidityAll";
import setValidationState from "./setValidationState";
import extractConditions from "./extractConditions";

function createNatifyInput(input) {
  // Extract all conditions from html attributes
  input.validity.state = extractConditions(input);

  // Update the validity state on input
  input.addEventListener("input", () => {
    input.validity.state = setValidationState(input.validity.state);
  });

  // Add Function that checks all rules custom and build-in.
  input.checkValidityAll = checkValidityAll;

  // Trigger Invalid and valid Event on input
  input.addEventListener("input", (event) => {
    if (input.checkValidityAll()) {
      input.dispatchEvent(new Event("valid"));
    } else {
      input.dispatchEvent(new Event("invalid"));
    }
  });

  return input;
}

export default createNatifyInput;
