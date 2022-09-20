function deleteMessages(input, container) {
  container.querySelectorAll(`[msgfor="${input.getAttribute("name")}"]`).forEach((elem) => elem.remove());
}

export default deleteMessages;
