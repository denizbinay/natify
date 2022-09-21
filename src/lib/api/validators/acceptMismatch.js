function acceptMismatch() {
  return !this.files[0].type.match(this.getAttribute("accept"));
}

export default acceptMismatch;
