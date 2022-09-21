import configDefault from "./lib/configDefault";
import createApi from "./lib/createApi";
import createUi from "./lib/createUi";

function natify(config) {
  // Set default Config
  config = configDefault(config ? config : {});

  // Create Natify Form
  const form = createApi(config);

  // Create natify ui
  if (config.createUi) createUi(config, form);

  return form;
}

export default natify;
