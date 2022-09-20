import createNatifyInput from "./api/createNatifyInput";

function createNatifyForm(config) {
  const nativForm = document.querySelector(config.selector);
  const nativInputs = nativForm.querySelectorAll("[natify]");

  // Create natify form
  let natifyForm = nativForm;

  // Create natify inputs
  let natifyInputs = [];
  nativInputs.forEach((input) => {
    natifyInputs.push(createNatifyInput(input));
  });

  return {
    container: natifyForm,
    inputs: natifyInputs,
  };
}

export default createNatifyForm;
