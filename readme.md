# NATIFY - Ultralight Form Validation (<2kb)

> **Warning**
> Don't use this in production! Read below Background / What is Missing

Natify is an ultra-light dependency-free javascript library that extends the Constaint Api. It's actually quite wonderful. Many checks and validations are available directly in HTML/JS. Unfortunately, some elements behave strangely. Natify creates in the first step an api on form elements with which you can easily do user friendly form validation. If you want you can use the built-in UI and its styling options. Or you can turn off the ui completely and create your own UI with the api.

[DEMO HERE](https://natifydemo.netlify.app/demo/example.html)

---

## Installation

`npm i natify`

## Minimal Usage

Import natify and and run. It returns the prepared Node Elements.

```js
import natify from "natify";
const form = natify();
```

Write your Conditions and Messages in HTML.

```html
<form id="natifyForm" novalidate>
  <input
    natify
    type="text"
    name="name"
    minlength="3"
    minlength-msg="at least 3 characters"
    maxlength="20"
    maxlength-msg="at most 20 characters"
    required="false"
    required-msg="Username is required"
  />

  <input
    natify
    type="password"
    name="password"
    title="password"
    pattern="(?=.*\d)(?=.*[a-zA-Z]).+"
    pattern-msg="at least one number and one letter"
    required="true"
    required-msg="Please provide a password"
  />
</form>
```

## Default Config

```js
const form = natify({
  selector: "#natifyForm", // CSS Selector for form container
  formSubmit: false, // Submit form or prevent default
  onSubmit: true, // Validate Fields on submit event
  createUi: true, // Enable build in ui
  successColor: "#4CAF50", // Color used for success in build in ui
  errorColor: "#F44336", // Color used for error in build in ui
  successIcon: "✔", // Icon used for success in build in ui
  errorIcon: "🞭", // Icon used for error in build in ui
  fontSize: "15px", // Fontsize used for build in ui
  borderWidth: "2px", // Borderwidth used for build in ui
  borderStyle: "solid", // Bordercolor used for build in ui
});
```

## Supported Validations

Most of them are native HTML validations. Especially thanks to Regex you can do a lot here. We supplement these with build in custom validations which are obvious for the existing html attributes and fields but missing.

```
minlength // Minimum length of input (nativ)
maxlength // Maximum length of input (native)
min // Minimum value of input (native)
max // Maximum value of input (native)
out // Minimum value of input (native)
required // Required input (native)
type // Type of input (native)
step // Step of input (native)
pattern // Regex Pattern of input (native)
accept // Mimetype of File (native attribute + custom validation)
maxsize // Maximum size of File (custom)
```

## New Api in Natify Form Elements

On each natify form element new functions are available. The prototype has not been modified. Only elements returned by natify have these properties. But no native functions were changed. They should work like normal elements.

```js
const form = natify();

// Check all Validitys nativ + build in custom validations
form.container.checkValidityAll();

// Trigger Validation (Event) for all nativ + build in custom validations
form.container.reportValidityAll();

// Check all Validitys nativ + build in custom validations
form.inputs[0].checkValidityAll();

// Contains like normal all nativ Validitys plus build in custom validations
form.inputs[0].validity.acceptMismatch(); // validate accept html attribute (mime)
form.inputs[0].validity.tooLarge(); // validate custom size html attribute (bytes)

// CAUTION: Unlike the Build-In readOnly props, the custom validators are functions. So they have to be called.
```

# Validation State

Validity also contains a State of all registered Validations. You can iterate over the list. This way you can find out which conditions have been set on the HTML element at all. The built-in UI does the same. Turn it off and build your own with it.

```js
console.log(form.inputs[0].validity.state);
```

Following Output

```
(2) [{…}, {…}]
0: {
    attribute: "required", // Name of HTML Attribute
    value: "true", // value of HTML Attribute
    message: "Username is required" // Message from HTML otherwhise false
    isValid: true, // is now valid?
    validation: f() // validation function
    // Used only given Validation function if a value is given.
    // Else If the value is required false else true.
    // Don't fire invalid for empty non required fields.
},
1: {
...
```

## Events

There are two events that can occur on an input element. "Invalid" and "Valid".

```js
form.inputs[0].addEventListener("invalid", (e) => {
  console.log("invalid");
  // fires on every input if at least one state.validation() === false;
});

form.inputs[0].addEventListener("valid", (e) => {
  console.log("valid");
  // fires on every input with every state.validation() === true;
});
```

## Custom Validations with Regex (Recommend)

For most text validations, the native pattern attribute is perfectly adequate. But I know that many find regex awful. So here is a list of tested patterns for common tasks:

```
coming soon
```

## Custom Validation with Config (coming soon)

So far there is no way to create your own validations. But this is planned. It is obvious how this should look like. You can pass a string and a function in the config. This will be the HTML attributes and the validation function. So you could also use functions from validation libraries like validator.js. But it is not implemented yet.

---

## Background

Looking for a lightweight form validation library that also allows frontend warning I got frustrated. Either it was too expensive, too heavy or too cumbersome. Thereby I became aware of the constraint api of the browsers. This works wonderfully and with a few lines a lot is done. But sometimes it behaves strange. It has only one invalid event and none for valid. The pseudo class invalid fires at pageload which is very bad for the UX and so on. I wanted to keep this very lean approach and so i'm started working on a library that extends the native API.

## What is Missing

Unfortunately, I am not an experienced library developer. I would be really happy if someone could help me. It doesn't have to be actively writing code. If someone with more experience could take a look at the code and give me tips for improvements would be a lot of help. Feel free to use the discussion tab in the repo.
