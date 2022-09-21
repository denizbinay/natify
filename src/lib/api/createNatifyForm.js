import { checkValidityAllForm } from "./checkValidityAll";
import { reportValidityAllForm } from "./reportValidityAll";

function createNatifyForm(config, form) {
  form.checkValidityAll = checkValidityAllForm;
  form.reportValidityAll = reportValidityAllForm;

  // Set Submit Options after Config
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (config.onSubmit) form.reportValidityAll();
    if (config.formSubmit) form.submit();
  });
  return form;
}

export default createNatifyForm;
