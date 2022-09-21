import tooLarge from "./validators/tooLarge";
import acceptMismatch from "./validators/acceptMismatch";

function addBuildInCustomValidators(input) {
  input.validity.tooLarge = tooLarge.bind(input);
  input.validity.acceptMismatch = acceptMismatch.bind(input);
  return input;
}

export default addBuildInCustomValidators;
