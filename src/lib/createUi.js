import showMessages from "./ui/showMessages";
import deleteMessages from "./ui/deleteMessages";

function createUi(config, form) {
  form.inputs.forEach((input) => {
    input.addEventListener("invalid", () => {
      // On invalid show messages
      showMessages(config, input, form.container);
      // If input or required the color the border
      if (input.value.length > 0 || input.required) {
        input.style.border = `${config.errorColor} ${config.borderWidth} ${config.borderStyle}`;
      } else {
        input.style.border = null;
      }
    });

    input.addEventListener("valid", () => {
      // On valid delete messages
      deleteMessages(input, form.container);
      // If input or required the color the border
      if (input.value.length > 0 || input.required) {
        input.style.border = `${config.successColor} ${config.borderWidth} ${config.borderStyle}`;
      } else {
        input.style.border = null;
      }
    });
  });
}

export default createUi;
