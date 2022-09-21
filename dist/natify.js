!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("natify",[],e):"object"==typeof exports?exports.natify=e():t.natify=e()}(self,(()=>(()=>{"use strict";var t={d:(e,i)=>{for(var r in i)t.o(i,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:i[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{default:()=>f});function i(){return this.validity.state.every((t=>t.isValid))}function r(){return Array.from(this.querySelectorAll("[natify]")).every((t=>t.checkValidityAll()))}const n=function(t,e,i){let r={};return r.attribute=t,r.value=e.getAttribute(t),r.message=!!e.hasAttribute(`${t}-msg`)&&e.getAttribute(`${t}-msg`),r.isValid=void 0,r.validation=()=>e.value.length>0?i():!e.required,r},o=function(){return this.files[0].size>+this.getAttribute("maxsize")},a=function(){return!this.files[0].type.match(this.getAttribute("accept"))},s=function(t){return(t=function(t){return t.validity.tooLarge=o.bind(t),t.validity.acceptMismatch=a.bind(t),t}(t)).validity.state=function(t){let e=[];return t.hasAttribute("minlength")&&e.push(n("minlength",t,(()=>!t.validity.tooShort))),t.hasAttribute("maxlength")&&e.push(n("maxlength",t,(()=>!t.validity.tooLong))),t.hasAttribute("min")&&e.push(n("min",t,(()=>!t.validity.rangeUnderflow))),t.hasAttribute("max")&&e.push(n("max",t,(()=>!t.validity.rangeOverflow))),t.hasAttribute("pattern")&&e.push(n("pattern",t,(()=>!t.validity.patternMismatch))),t.hasAttribute("required")&&e.push(n("required",t,(()=>!t.validity.valueMissing))),t.hasAttribute("type")&&e.push(n("type",t,(()=>!t.validity.typeMismatch))),t.hasAttribute("step")&&e.push(n("step",t,(()=>!t.validity.stepMismatch))),t.hasAttribute("accept")&&e.push(n("accept",t,(()=>!t.validity.acceptMismatch()))),t.hasAttribute("maxsize")&&e.push(n("maxsize",t,(()=>!t.validity.tooLarge()))),e}(t),t.addEventListener("input",(()=>{t.validity.state=function(t){if(0!==t.length)return t.forEach((t=>{t.isValid=t.validation()})),t}(t.validity.state)})),t.checkValidityAll=i,t.addEventListener("input",(e=>{t.checkValidityAll()?t.dispatchEvent(new Event("valid")):t.dispatchEvent(new Event("invalid"))})),t};function l(){this.querySelectorAll("[natify]").forEach((t=>t.dispatchEvent(new Event("input"))))}const u=function(t,e){return e.checkValidityAll=r,e.reportValidityAll=l,e.addEventListener("submit",(i=>{i.preventDefault(),t.onSubmit&&e.reportValidityAll(),t.formSubmit&&e.submit()})),e},c=function(t,e){e.querySelectorAll(`[msgfor="${t.getAttribute("name")}"]`).forEach((t=>t.remove()))},d=function(t,e){e.inputs.forEach((i=>{i.addEventListener("invalid",(()=>{(function(t,e,i){const r=e.validity.state.filter((t=>!1!==t.message));c(e,i),r.forEach((i=>{const r=i.isValid,n=document.createElement("span");n.style.color=r?t.successColor:t.errorColor,n.style.fontSize=t.fontSize,n.textContent=`${r?t.successIcon:t.errorIcon} ${i.message}`,n.setAttribute("msgfor",e.getAttribute("name")),e.after(n)}))})(t,i,e.container),i.value.length>0||i.required?i.style.borderColor=t.errorColor:i.style.borderColor=null})),i.addEventListener("valid",(()=>{c(i,e.container),i.value.length>0||i.required?i.style.borderColor=t.successColor:i.style.borderColor=null}))}))},f=function(t){const e=function(t){const e=document.querySelector(t.selector),i=e.querySelectorAll("[natify]");let r=[];return i.forEach((t=>{r.push(s(t))})),{container:u(t,e),inputs:r}}(t=function(t){return t.selector||(t.selector="#natifyForm"),t.createUi||(t.createUi=!0),t.successColor||(t.successColor="#4CAF50"),t.errorColor||(t.errorColor="#F44336"),t.successIcon||(t.successIcon="✔"),t.errorIcon||(t.errorIcon="🞭"),t.fontSize||(t.fontSize="15px"),t.borderWidth||(t.borderWidth="2px"),t.borderStyle||(t.borderStyle="solid"),t.preventDefault||(t.preventDefault=!0),t.formSubmit||(t.formSubmit=!1),t.onSubmit||(t.onSubmit=!0),t}(t||{}));return t.createUi&&d(t,e),e};return e.default})()));