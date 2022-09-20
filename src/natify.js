import configDefault from "./lib/configDefault";
import createNatifyForm from "./lib/createNatifyForm";
import createUi from "./lib/createUi";

function natify(config) {
  // Set default Config
  config = configDefault(config ? config : {});

  // Create Natify Form
  const form = createNatifyForm(config);

  // Create natify ui
  if (config.createUi) createUi(config, form);

  return form;
}

export default natify;
