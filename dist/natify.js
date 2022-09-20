!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("natify",[],e):"object"==typeof exports?exports.natify=e():t.natify=e()}(self,(()=>(()=>{"use strict";var t={d:(e,i)=>{for(var r in i)t.o(i,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:i[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{default:()=>o});const i=function(){return this.validity.state.every((t=>t.isValid))},r=function(t){const e=document.querySelector(t.selector),r=e.querySelectorAll("[natify]");let a=e,n=[];return r.forEach((t=>{n.push(function(t){return t.validity.state=function(t){let e=[];if(t.hasAttribute("minlength")){let i={attribute:"minlength"};i.value=t.getAttribute("minlength"),i.message=!!t.hasAttribute("minlength-msg")&&t.getAttribute("minlength-msg"),i.validation=()=>!t.validity.tooShort,i.isValid=void 0,e.push(i)}if(t.hasAttribute("maxlength")){let i={attribute:"maxlength"};i.value=t.getAttribute("maxlength"),i.message=!!t.hasAttribute("maxlength-msg")&&t.getAttribute("maxlength-msg"),i.validation=()=>!t.validity.tooLong,i.isValid=void 0,e.push(i)}if(t.hasAttribute("min")){let i={attribute:"min"};i.value=t.getAttribute("min"),i.message=!!t.hasAttribute("min-msg")&&t.getAttribute("min-msg"),i.validation=()=>!t.validity.rangeUnderflow,i.isValid=void 0,e.push(i)}if(t.hasAttribute("max")){let i={attribute:"max"};i.value=t.getAttribute("max"),i.message=!!t.hasAttribute("max-msg")&&t.getAttribute("max-msg"),i.validation=()=>!t.validity.rangeOverflow,i.isValid=void 0,e.push(i)}if(t.hasAttribute("pattern")){let i={attribute:"pattern"};i.value=t.getAttribute("pattern"),i.message=!!t.hasAttribute("pattern-msg")&&t.getAttribute("pattern-msg"),i.validation=()=>!t.validity.patternMismatch,i.isValid=void 0,e.push(i)}if(t.hasAttribute("required")){let i={attribute:"required"};i.value=t.getAttribute("required"),i.message=!!t.hasAttribute("required-msg")&&t.getAttribute("required-msg"),i.validation=()=>!t.validity.valueMissing,i.isValid=void 0,e.push(i)}if(t.hasAttribute("type")){let i={attribute:"type"};i.value=t.getAttribute("type"),i.message=!!t.hasAttribute("type-msg")&&t.getAttribute("type-msg"),i.validation=()=>!t.validity.typeMismatch,i.isValid=void 0,e.push(i)}return e}(t),t.addEventListener("input",(()=>{t.validity.state=function(t){if(0!==t.length)return t.forEach((t=>{t.isValid=t.validation()})),t}(t.validity.state)})),t.checkValidityAll=i,t.addEventListener("input",(e=>{t.checkValidityAll()?t.dispatchEvent(new Event("valid")):t.dispatchEvent(new Event("invalid"))})),t}(t))})),{container:a,inputs:n}},a=function(t,e){e.querySelectorAll(`[msgfor="${t.getAttribute("name")}"]`).forEach((t=>t.remove()))},n=function(t,e){e.inputs.forEach((i=>{i.addEventListener("invalid",(()=>{!function(t,e,i){const r=e.validity.state.filter((t=>!1!==t.message));a(e,i),r.forEach((i=>{console.log(i);const r=i.isValid,a=document.createElement("span");a.style.color=r?t.successColor:t.errorColor,a.style.fontSize=t.fontSize,a.textContent=`${r?t.successIcon:t.errorIcon} ${i.message}`,a.setAttribute("msgfor",e.getAttribute("name")),e.after(a)}))}(t,i,e.container)})),i.addEventListener("valid",(()=>{a(i,e.container)})),i.addEventListener("blur",(()=>{i.style.borderColor=i.checkValidityAll()?t.successColor:t.errorColor}))}))},o=function(t){t=function(t){return t.selector||(t.selector="#natifyForm"),t.createUi||(t.createUi=!0),t.successColor||(t.successColor="#4CAF50"),t.errorColor||(t.errorColor="#F44336"),t.successIcon||(t.successIcon="✔"),t.errorIcon||(t.errorIcon="🞭"),t.fontSize||(t.fontSize="15px"),t.borderWidth||(t.borderWidth="2px"),t.borderStyle||(t.borderStyle="solid"),t.preventDefault||(t.preventDefault=!0),t.formSubmit||(t.formSubmit=!1),t.onSubmit||(t.onSubmit=!0),t}(t||{});const e=r(t);return t.createUi&&n(t,e),e};return e.default})()));