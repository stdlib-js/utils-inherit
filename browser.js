// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=t?e+i(n):i(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,i,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,s=parseInt(i,10),!isFinite(s)){if(!t(i))throw new Error("invalid integer. Value: "+i);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(i=(-s).toString(r),e.precision&&(i=a(i,e.precision,e.padRight)),i="-"+i):(i=s.toString(r),s||e.precision?e.precision&&(i=a(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):n.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var c=Math.abs,p=String.prototype.toLowerCase,l=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function v(e){var r,i,a=parseFloat(e.arg);if(!isFinite(a)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);a=e.arg}switch(e.specifier){case"e":case"E":i=a.toExponential(e.precision);break;case"f":case"F":i=a.toFixed(e.precision);break;case"g":case"G":c(a)<1e-4?((r=e.precision)>0&&(r-=1),i=a.toExponential(r)):i=a.toPrecision(e.precision),e.alternate||(i=u.call(i,y,"$1e"),i=u.call(i,b,"e"),i=u.call(i,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=u.call(i,f,"e+0$1"),i=u.call(i,g,"e-0$1"),e.alternate&&(i=u.call(i,d,"$1."),i=u.call(i,h,"$1.e")),a>=0&&e.sign&&(i=e.sign+i),i=e.specifier===l.call(e.specifier)?l.call(i):p.call(i)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,E=isNaN,x=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,i,n,o,c,p,l,u,f,g,d,h;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,l=0;l<e.length;l++)if("string"==typeof(i=e[l]))c+=i;else{if(r=void 0!==i.precision,!(i=k(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,E(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,E(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!E(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=E(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=v(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+m(h):m(h)+f)),c+=i.arg||"",p+=1}return c}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,i,a;for(t=[],a=0,i=j.exec(e);i;)(r=e.slice(a,j.lastIndex-i[0].length)).length&&t.push(r),t.push(S(i)),a=j.lastIndex,i=j.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function $(e){var r,t;if("string"!=typeof e)throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var F=Object.prototype,I=F.toString,C=F.__defineGetter__,A=F.__defineSetter__,R=F.__lookupGetter__,O=F.__lookupSetter__,P=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(R.call(e,r)||O.call(e,r)?(i=e.__proto__,e.__proto__=F,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&C&&C.call(e,r,t.get),o&&A&&A.call(e,r,t.set),e};function U(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}function Z(e){var r=typeof e;return null===e||"object"!==r&&"function"!==r?new TypeError(U("1UTBE",e)):null}var G=Object.create;function W(){}var L="function"==typeof G?G:function(e){return W.prototype=e,new W};return function(e,r){var t=Z(e);if(t)throw t;if(t=Z(r))throw t;if(void 0===r.prototype)throw new TypeError(U("1UTBD",r.prototype));return e.prototype=L(r.prototype),P(e.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:e}),e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).inherit=r();
//# sourceMappingURL=browser.js.map
