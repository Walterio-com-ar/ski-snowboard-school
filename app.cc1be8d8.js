parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KByA":[function(require,module,exports) {
var e=document.querySelector(".hamburger"),n=document.querySelector(".nav-menu");function t(){e.classList.toggle("change"),n.classList.toggle("show")}e.addEventListener("click",function(){return t()}),n.addEventListener("click",function(){return t()});
},{}],"WNaP":[function(require,module,exports) {
var e=document.querySelector("#sticky"),t={rootMargin:"100px 0px 0px 0px"},s=new IntersectionObserver(function(t){!t[0].isIntersecting&&document.body.clientWidth>640?e.classList.add("sticky-nav"):e.classList.remove("sticky-nav")},t);s.observe(e);
},{}],"CxF0":[function(require,module,exports) {
"use strict";function e(e){return e.classList.add("modal-show")}function s(e){return e.classList.remove("modal-show")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.open=e,exports.close=s;
},{}],"MxBI":[function(require,module,exports) {
"use strict";var e,t=require("./toggleModal"),r=document.querySelector(".gallery-images"),n=document.querySelector(".gallery .modal"),l=document.querySelector(".gallery .modal-overlay"),c=n.querySelector(".modal-prev"),o=n.querySelector(".modal-next");function i(t){var r=t.querySelector("img")||t;n.querySelector("img").src=r.src,e=t.closest("div")||t}function a(){i(e.nextElementSibling||r.firstElementChild)}function d(){i(e.previousElementSibling||r.lastElementChild)}function s(e){"Escape"===e.key&&(0,t.close)(l),"ArrowRight"===e.key&&a(),"ArrowLeft"===e.key&&d()}r.addEventListener("click",function(e){e.target.matches(".gallery-image")&&((0,t.open)(l),i(e.target))}),l.addEventListener("click",function(){return(0,t.close)(l)}),n.addEventListener("click",function(e){e.stopPropagation(),e.target.matches(".modal-next")&&a(),e.target.matches(".modal-prev")&&d()}),window.addEventListener("keyup",s),o.addEventListener("click",a),c.addEventListener("click",d);
},{"./toggleModal":"CxF0"}],"xStd":[function(require,module,exports) {
var e,t,n=14800,a=1200,i=document.querySelector(".slider"),l=Array.from(i.children),r=document.querySelector(".slider-dots"),c=0,s=l.length-1;function d(e,t){e||(e=c+1<l.length?c+2:1),e-=1,l[s].style.animationName="",t?(l[e].style.animationName="rightNext",l[c].style.animationName="rightCurr"):(l[e].style.animationName="leftNext",l[c].style.animationName="leftCurr"),s=c,c=e,r.children[c].classList.add("dot-active"),r.children[s].classList.remove("dot-active")}function o(a){a!==c&&(clearTimeout(t),clearInterval(e),a>c?d(a+1):d(a+1,!0),e=setInterval(d,n))}l.forEach(function(e){e.style.animationDuration="".concat(a,"ms");var t=document.createElement("div");t.classList.add("slider-dot"),r.appendChild(t),t.addEventListener("click",o.bind(null,r.children.length-1),!1)}),r.children[0].classList.add("dot-active"),l[0].style.left="0",t=setTimeout(function(){d(),l[0].style.left="",e=setInterval(d,n)},n-a);
},{}],"V3iK":[function(require,module,exports) {
var r=document.querySelectorAll("[data-src]");function t(r){var t=r.getAttribute("data-src");r.src=t}var e=new IntersectionObserver(function(r){r.forEach(function(r){r.isIntersecting&&(t(r.target),e.unobserve(r.target))})});r.forEach(function(r){return e.observe(r)});
},{}],"jqnp":[function(require,module,exports) {
"use strict";var e=require("./toggleModal"),t=document.querySelector(".booking .modal-overlay"),n=document.querySelector(".hero-button"),o=document.querySelector(".offers-blocks"),r=document.querySelector(".booking form"),c=document.querySelector("[type=text]"),a=document.querySelector("[type=email]"),u=document.querySelector("[name=age]"),l=document.querySelector("[name=level]"),s=document.querySelector(".modal-submitted"),i=document.querySelector(".modal-submitted__result");function d(n){(0,e.open)(t),l.value=n}function m(e,t){e?(i.querySelector("p").textContent=t,i.querySelector("pre").textContent=e,i.classList.add("modal-show"),setTimeout(function(){return i.classList.remove("modal-show")},7e3)):(s.classList.add("modal-show"),setTimeout(function(){return s.classList.remove("modal-show")},2e3))}function y(){var e={name:c.value,email:a.value,age:u.value,level:l.value};try{fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(function(e){return e.json()}).then(function(e){return m(JSON.stringify(e,null," "),"Data sent successfully")})}catch(t){m(t,"Error")}}n.addEventListener("click",function(){return(0,e.open)(t)}),o.addEventListener("click",function(e){e.target.matches("[name=beginner]")&&d("beginner"),e.target.matches("[name=intermediate]")&&d("intermediate"),e.target.matches("[name=advanced]")&&d("advanced")}),t.addEventListener("click",function(n){n.target===n.currentTarget&&(0,e.close)(t)}),r.addEventListener("submit",function(n){n.preventDefault(),y(),n.target.reset(),(0,e.close)(t),m()}),window.addEventListener("keyup",function(n){"Escape"===n.key&&(0,e.close)(t)});
},{"./toggleModal":"CxF0"}],"TJpn":[function(require,module,exports) {
var e=document.querySelectorAll("[data-speed]"),t=document.querySelector("header");window.addEventListener("scroll",function(){var r=window.scrollY;r<t.clientHeight&&e.forEach(function(e){var t=parseFloat(e.getAttribute("data-speed"));e.style.transform="translateY(".concat(r*-t,"px)")})});
},{}],"dPdB":[function(require,module,exports) {
"use strict";require("./navMenu"),require("./stickyNav"),require("./gallery"),require("./slider"),require("./lazyLoading"),require("./bookingModal"),require("./parallax");
},{"./navMenu":"KByA","./stickyNav":"WNaP","./gallery":"MxBI","./slider":"xStd","./lazyLoading":"V3iK","./bookingModal":"jqnp","./parallax":"TJpn"}]},{},["dPdB"], null)
//# sourceMappingURL=app.cc1be8d8.js.map