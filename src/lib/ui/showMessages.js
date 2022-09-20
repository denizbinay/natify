import deleteMessages from "./deleteMessages";

function showMessages(config, input, container) {
  // Get all conditions with messages etc.
  const conditions = input.validity.state.filter((condition) => condition.message !== false);

  // Delete previous errors/success
  deleteMessages(input, container);

  // Create new Messages
  conditions.forEach((condition) => {
    const isValid = condition.isValid;
    const element = document.createElement("span");
    element.style.color = isValid ? config.successColor : config.errorColor;
    element.style.fontSize = config.fontSize;
    element.textContent = `${isValid ? config.successIcon : config.errorIcon} ${condition.message}`;
    element.setAttribute("msgfor", input.getAttribute("name"));
    input.after(element);
  });
}

export default showMessages;
