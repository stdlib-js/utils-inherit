// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function r(t){var r=typeof t;return null===t||"object"!==r&&"function"!==r?new TypeError(e("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `%s`.",t)):null}var o=Object.create;function n(){}var i="function"==typeof o?o:function(t){return n.prototype=t,new n};function p(o,n){var p=r(o);if(p)throw p;if(p=r(n))throw p;if(void 0===n.prototype)throw new TypeError(e("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `%s`.",n.prototype));return o.prototype=i(n.prototype),t(o.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:o}),o}export{p as default};
//# sourceMappingURL=index.mjs.map
