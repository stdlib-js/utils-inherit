// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).inherit=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=n,p=s,v=t()?l:p,g=v;var d=function(r,e,t){g(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},h=d;var m=function(r){return"string"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return b&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,j=w;var E=function(r){return j.call(r)},P=Object.prototype.hasOwnProperty;var _=function(r,e){return null!=r&&P.call(r,e)},T="function"==typeof Symbol?Symbol.toStringTag:"",O=_,x=T,V=w;var S=E,k=function(r){var e,t,n;if(null==r)return V.call(r);t=r[x],e=O(r,x);try{r[x]=void 0}catch(e){return V.call(r)}return n=V.call(r),e?r[x]=t:delete r[x],n},I=y()?k:S,A=String.prototype.valueOf;var R=I,$=function(r){try{return A.call(r),!0}catch(r){return!1}},F=y();var M=function(r){return"object"==typeof r&&(r instanceof String||(F?$(r):"[object String]"===R(r)))},C=m,N=M;var B=h,G=function(r){return C(r)||N(r)},L=M;B(G,"isPrimitive",m),B(G,"isObject",L);var Z=G,W=Math.floor;var X=function(r){return W(r)===r},z=X;var U=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&z(r.length)&&r.length>=0&&r.length<=9007199254740991};var Y=function(r){return"number"==typeof r},D=Number,q=D.prototype.toString;var H=I,J=D,K=function(r){try{return q.call(r),!0}catch(r){return!1}},Q=y();var rr=function(r){return"object"==typeof r&&(r instanceof J||(Q?K(r):"[object Number]"===H(r)))},er=Y,tr=rr;var nr=h,ir=function(r){return er(r)||tr(r)},or=rr;nr(ir,"isPrimitive",Y),nr(ir,"isObject",or);var ar=ir,ur=Number.POSITIVE_INFINITY,cr=D.NEGATIVE_INFINITY,fr=ur,sr=cr,lr=X;var pr=function(r){return r<fr&&r>sr&&lr(r)},vr=ar.isPrimitive,gr=pr;var dr=function(r){return vr(r)&&gr(r)},hr=ar.isObject,mr=pr;var br=function(r){return hr(r)&&mr(r.valueOf())},yr=dr,wr=br;var jr=h,Er=function(r){return yr(r)||wr(r)},Pr=br;jr(Er,"isPrimitive",dr),jr(Er,"isObject",Pr);var _r=Er;var Tr=function(r){return r!=r},Or=ar.isPrimitive,xr=Tr;var Vr=function(r){return Or(r)&&xr(r)},Sr=ar.isObject,kr=Tr;var Ir=function(r){return Sr(r)&&kr(r.valueOf())},Ar=Vr,Rr=Ir;var $r=h,Fr=function(r){return Ar(r)||Rr(r)},Mr=Ir;$r(Fr,"isPrimitive",Vr),$r(Fr,"isObject",Mr);var Cr=U,Nr=_r.isPrimitive,Br=Z.isPrimitive,Gr=Fr.isPrimitive;var Lr=function(r,e,t){var n,i,o;if(!Cr(r)&&!Br(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Nr(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Br(r)){if(!Br(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Gr(e)){for(o=i;o<n;o++)if(Gr(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},Zr=Lr,Wr=Z.isPrimitive;var Xr=function(r){if(!Wr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},zr=Z.isPrimitive;var Ur=function(r){if(!zr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Yr=Xr,Dr=Ur,qr=Z.isPrimitive;var Hr=function(r){return qr(r)&&r===Dr(r)&&r!==Yr(r)},Jr=ur,Kr=cr;var Qr=function(r){return r==r&&r>Kr&&r<Jr},re=_r.isPrimitive;var ee=function(r){return re(r)&&r>=0},te=_r.isObject;var ne=function(r){return te(r)&&r.valueOf()>=0},ie=ee,oe=ne;var ae=h,ue=function(r){return ie(r)||oe(r)},ce=ne;ae(ue,"isPrimitive",ee),ae(ue,"isObject",ce);var fe=ue.isPrimitive,se=Z.isPrimitive;var le=function(r,e){var t,n;if(!se(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!fe(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},pe=_r.isPrimitive,ve=Z.isPrimitive;var ge=function(r,e,t){var n,i;if(!ve(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!ve(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!pe(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},de=le,he=ge;var me=function(r,e,t){var n=!1,i=e-r.length;return i<0||(he(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+de("0",i):de("0",i)+r,n&&(r="-"+r)),r},be=Hr,ye=Ur,we=Xr,je=Qr,Ee=ar.isPrimitive,Pe=me;var _e=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!je(n)){if(!Ee(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Pe(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Pe(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=be(r.specifier)?ye(t):we(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Te=Z.isPrimitive,Oe=/[-\/\\^$*+?.()|[\]{}]/g;var xe=function(r){var e,t;if(!Te(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Oe,"\\$&"):(e=(e=r.substring(1,t)).replace(Oe,"\\$&"),r=r[0]+e+r.substring(t))},Ve=/./;var Se=function(r){return"boolean"==typeof r},ke=Boolean.prototype.toString;var Ie=I,Ae=function(r){try{return ke.call(r),!0}catch(r){return!1}},Re=y();var $e=function(r){return"object"==typeof r&&(r instanceof Boolean||(Re?Ae(r):"[object Boolean]"===Ie(r)))},Fe=Se,Me=$e;var Ce=h,Ne=function(r){return Fe(r)||Me(r)},Be=$e;Ce(Ne,"isPrimitive",Se),Ce(Ne,"isObject",Be);var Ge=Ne;var Le=function(){return new Function("return this;")()},Ze="object"==typeof self?self:null,We="object"==typeof window?window:null,Xe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ze="object"==typeof Xe?Xe:null;module.exports=ze;var Ue=Ge.isPrimitive,Ye=Le,De=Ze,qe=We,He=r(Object.freeze({__proto__:null}));var Je=function(r){if(arguments.length){if(!Ue(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Ye()}if(De)return De;if(qe)return qe;if(He)return He;throw new Error("unexpected error. Unable to resolve global object.")},Ke=Je(),Qe=Ke.document&&Ke.document.childNodes,rt=Int8Array,et=Ve,tt=Qe,nt=rt;var it=function(){return"function"==typeof et||"object"==typeof nt||"function"==typeof tt};var ot=function(){return/^\s*function\s*([^(]*)/i},at=ot;h(at,"REGEXP",ot());var ut=at,ct=I;var ft=Array.isArray?Array.isArray:function(r){return"[object Array]"===ct(r)};var st=function(r){return null!==r&&"object"==typeof r};h(st,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!ft(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(st));var lt=st;var pt=I,vt=ut.REGEXP,gt=function(r){return lt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var dt=function(r){var e,t,n;if(("Object"===(t=pt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=vt.exec(n.toString()))return e[1]}return gt(r)?"Buffer":t},ht=dt;var mt=dt;var bt=function(r){var e;return null===r?"null":"object"===(e=typeof r)?ht(r).toLowerCase():e},yt=function(r){return mt(r).toLowerCase()},wt=it()?yt:bt;var jt=function(r){return"function"===wt(r)},Et=RegExp.prototype.exec;var Pt=I,_t=function(r){try{return Et.call(r),!0}catch(r){return!1}},Tt=y();var Ot=xe,xt=jt,Vt=Z.isPrimitive,St=function(r){return"object"==typeof r&&(r instanceof RegExp||(Tt?_t(r):"[object RegExp]"===Pt(r)))};var kt=Hr,It=Ur,At=Xr,Rt=function(r,e,t){if(!Vt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Vt(e))e=Ot(e),e=new RegExp(e,"g");else if(!St(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Vt(t)&&!xt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},$t=Qr,Ft=ar.isPrimitive,Mt=function(r){return Math.abs(r)},Ct=/e\+(\d)$/,Nt=/e-(\d)$/,Bt=/^(\d+)$/,Gt=/^(\d+)e/,Lt=/\.0$/,Zt=/\.0*e/,Wt=/(\..*[^0])0*e/;var Xt=function(r){var e,t,n=parseFloat(r.arg);if(!$t(n)){if(!Ft(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Mt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Rt(t,Wt,"$1e"),t=Rt(t,Zt,"e"),t=Rt(t,Lt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Rt(t,Ct,"e+0$1"),t=Rt(t,Nt,"e-0$1"),r.alternate&&(t=Rt(t,Bt,"$1."),t=Rt(t,Gt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=kt(r.specifier)?It(t):At(t)},zt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Ut=le;var Yt=Z.isPrimitive,Dt=Zr,qt=Tr,Ht=_e,Jt=Xt,Kt=function(r){var e,t,n,i,o;for(e=0,n=[],o=zt.exec(r);o;)(t=r.slice(e,zt.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=zt.lastIndex,o=zt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Qt=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Ut(" ",n):Ut(" ",n)+r},rn=me,en=String.fromCharCode;var tn=function(r){var e,t,n,i,o,a,u,c,f;if(!Yt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Kt(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],Yt(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Dt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,qt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,qt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Ht(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!qt(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=qt(o)?String(n.arg):en(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Jt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=rn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Qt(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},nn=tn,on=nn;var an=function(r){var e=typeof r;return null===r||"object"!==e&&"function"!==e?new TypeError(on("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `%s`.",r)):null},un=Object.create;function cn(){}var fn=v,sn=nn,ln=an,pn="function"==typeof un?un:function(r){return cn.prototype=r,new cn};return function(r,e){var t=ln(r);if(t)throw t;if(t=ln(e))throw t;if(void 0===e.prototype)throw new TypeError(sn("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `%s`.",e.prototype));return r.prototype=pn(e.prototype),fn(r.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:r}),r}}));
//# sourceMappingURL=bundle.js.map
