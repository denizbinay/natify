// Set Config to default if not set
function configDefault(config) {
  if (!config.selector) config.selector = "#natifyForm";
  if (!config.createUi) config.createUi = true;
  if (!config.successColor) config.successColor = "#bef264";
  if (!config.errorColor) config.errorColor = "#fb923c";
  if (!config.successIcon) config.successIcon = "✔";
  if (!config.errorIcon) config.errorIcon = "🞭";
  if (!config.fontSize) config.fontSize = "15px";
  if (!config.borderWidth) config.borderWidth = "2px";
  if (!config.borderStyle) config.borderStyle = "solid";
  if (!config.formSubmit) config.formSubmit = false;
  if (!config.onSubmit) config.onSubmit = true;
  return config;
}

export default configDefault;
