"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=i(function(A,n){
var m=require('@stdlib/error-tools-fmtprodmsg/dist');function q(e){var r=typeof e;return e===null||r!=="object"&&r!=="function"?new TypeError(m('1UTBE',e)):null;}n.exports=q
});var c=i(function(P,a){
a.exports=Object.create
});var s=i(function(S,f){
function p(){}function w(e){return p.prototype=e,new p}f.exports=w
});var y=i(function(k,v){
var l=c(),j=s(),o;typeof l=="function"?o=l:o=j;v.exports=o
});var h=i(function(z,d){
var x=require('@stdlib/utils-define-property/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),b=u(),O=y();function E(e,r){var t=b(e);if(t||(t=b(r),t))throw t;if(typeof r.prototype=="undefined")throw new TypeError(g('1UTBD',r.prototype));return e.prototype=O(r.prototype),x(e.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:e}),e}d.exports=E
});var T=h();module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
