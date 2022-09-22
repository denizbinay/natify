!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("natify",[],e):"object"==typeof exports?exports.natify=e():t.natify=e()}(self,(()=>(()=>{"use strict";var t={d:(e,r)=>{for(var i in r)t.o(r,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:r[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{default:()=>f});function r(){return this.validity.state.every((t=>t.isValid))}function i(){return Array.from(this.querySelectorAll("[natify]")).every((t=>t.checkValidityAll()))}const n=function(t,e,r){let i={};return i.attribute=t,i.value=e.getAttribute(t),i.message=!!e.hasAttribute(`${t}-msg`)&&e.getAttribute(`${t}-msg`),i.isValid=void 0,i.validation=()=>e.value.length>0?r():!e.required,i},o=function(){return this.files[0].size>+this.getAttribute("maxsize")},a=function(){return!this.files[0].type.match(this.getAttribute("accept"))},s=function(t){return(t=function(t){return t.validity.tooLarge=o.bind(t),t.validity.acceptMismatch=a.bind(t),t}(t)).validity.state=function(t){let e=[];return t.hasAttribute("minlength")&&e.push(n("minlength",t,(()=>!t.validity.tooShort))),t.hasAttribute("maxlength")&&e.push(n("maxlength",t,(()=>!t.validity.tooLong))),t.hasAttribute("min")&&e.push(n("min",t,(()=>!t.validity.rangeUnderflow))),t.hasAttribute("max")&&e.push(n("max",t,(()=>!t.validity.rangeOverflow))),t.hasAttribute("pattern")&&e.push(n("pattern",t,(()=>!t.validity.patternMismatch))),t.hasAttribute("required")&&e.push(n("required",t,(()=>!t.validity.valueMissing))),t.hasAttribute("type")&&e.push(n("type",t,(()=>!t.validity.typeMismatch))),t.hasAttribute("step")&&e.push(n("step",t,(()=>!t.validity.stepMismatch))),t.hasAttribute("accept")&&e.push(n("accept",t,(()=>!t.validity.acceptMismatch()))),t.hasAttribute("maxsize")&&e.push(n("maxsize",t,(()=>!t.validity.tooLarge()))),e}(t),t.addEventListener("input",(()=>{t.validity.state=function(t){if(0!==t.length)return t.forEach((t=>{t.isValid=t.validation()})),t}(t.validity.state)})),t.checkValidityAll=r,t.addEventListener("input",(e=>{t.checkValidityAll()?t.dispatchEvent(new Event("valid")):t.dispatchEvent(new Event("invalid"))})),t};function l(){this.querySelectorAll("[natify]").forEach((t=>t.dispatchEvent(new Event("input"))))}const u=function(t,e){return e.checkValidityAll=i,e.reportValidityAll=l,e.addEventListener("submit",(r=>{r.preventDefault(),t.onSubmit&&e.reportValidityAll(),t.formSubmit&&e.submit()})),e},c=function(t,e){e.querySelectorAll(`[msgfor="${t.getAttribute("name")}"]`).forEach((t=>t.remove()))},d=function(t,e){e.inputs.forEach((r=>{r.addEventListener("invalid",(()=>{(function(t,e,r){const i=e.validity.state.filter((t=>!1!==t.message));c(e,r),i.forEach((r=>{const i=r.isValid,n=document.createElement("span"),o=i?t.successColor:t.errorColor;e.style.border=`${o} ${t.borderWidth} ${t.borderStyle}`,n.style.color=o,n.style.fontSize=t.fontSize,n.textContent=`${i?t.successIcon:t.errorIcon} ${r.message}`,n.setAttribute("msgfor",e.getAttribute("name")),e.after(n)}))})(t,r,e.container),r.value.length>0||r.required?r.style.borderColor=t.errorColor:r.style.borderColor=null})),r.addEventListener("valid",(()=>{c(r,e.container),r.value.length>0||r.required?r.style.borderColor=t.successColor:r.style.borderColor=null}))}))},f=function(t){const e=function(t){const e=document.querySelector(t.selector),r=e.querySelectorAll("[natify]");let i=[];return r.forEach((t=>{i.push(s(t))})),{container:u(t,e),inputs:i}}(t=function(t){return t.selector||(t.selector="#natifyForm"),t.createUi||(t.createUi=!0),t.successColor||(t.successColor="#4CAF50"),t.errorColor||(t.errorColor="#F44336"),t.successIcon||(t.successIcon="✔"),t.errorIcon||(t.errorIcon="🞭"),t.fontSize||(t.fontSize="15px"),t.borderWidth||(t.borderWidth="2px"),t.borderStyle||(t.borderStyle="solid"),t.formSubmit||(t.formSubmit=!1),t.onSubmit||(t.onSubmit=!0),t}(t||{}));return t.createUi&&d(t,e),e};return e.default})()));