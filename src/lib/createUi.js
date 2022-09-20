import showMessages from "./ui/showMessages";
import deleteMessages from "./ui/deleteMessages";

function createUi(config, form) {
  form.inputs.forEach((input) => {
    // On invalid show messages
    input.addEventListener("invalid", () => {
      showMessages(config, input, form.container);
    });

    // On valid delete messages
    input.addEventListener("valid", () => {
      deleteMessages(input, form.container);
    });

    // On Blur change color of border
    input.addEventListener("blur", () => {
      input.style.borderColor = input.checkValidityAll() ? config.successColor : config.errorColor;
    });
  });
}

export default createUi;
