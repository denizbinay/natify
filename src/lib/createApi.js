import createNatifyInput from "./api/createNatifyInput";
import createNatifyForm from "./api/createNatifyForm";

function createApi(config) {
  const nativForm = document.querySelector(config.selector);
  const nativInputs = nativForm.querySelectorAll("[natify]");

  // Create natify inputs
  let natifyInputs = [];
  nativInputs.forEach((input) => {
    natifyInputs.push(createNatifyInput(input));
  });

  // Create natify form
  let natifyForm = createNatifyForm(config, nativForm);

  return {
    container: natifyForm,
    inputs: natifyInputs,
  };
}

export default createApi;
