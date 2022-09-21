function tooLarge() {
  return this.files[0].size > +this.getAttribute("maxsize");
}

export default tooLarge;
