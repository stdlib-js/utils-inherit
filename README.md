<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Prototypical Inheritance

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Implement prototypical inheritance by replacing the prototype of one constructor with the prototype of another constructor.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import inherit from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@esm/index.mjs';
```

#### inherit( ctor, superCtor )

Implements prototypical inheritance by replacing the prototype of one constructor with the prototype of another constructor.

<!-- eslint-disable no-restricted-syntax -->

```javascript
function Foo() {
    return this;
}

Foo.prototype.beep = function beep() {
    return 'boop';
};

function Bar() {
    Foo.call( this );
    return this;
}

inherit( Bar, Foo );
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function is not designed to work with ES2015/ES6 classes. For ES2015/ES6 classes, use `class` with `extends`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import inherit from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@esm/index.mjs';

function Foo() {
    return this;
}
Foo.prototype = {};
Foo.prototype.beep = function beep() {
    return 'boop';
};

function Bar() {
    Foo.call( this );
    this._super = Foo.prototype;
    return this;
}

// Set up prototypical inheritance:
inherit( Bar, Foo );

var bar = new Bar();

var bool = ( bar instanceof Bar );
// returns true

bool = ( bar instanceof Foo );
// returns true

bool = bar.beep();
// returns 'boop'

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-inherit.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-inherit

[test-image]: https://github.com/stdlib-js/utils-inherit/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-inherit/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-inherit/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-inherit?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-inherit.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-inherit/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-inherit/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-inherit/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-inherit/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-inherit/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-inherit/main/LICENSE

</section>

<!-- /.links -->
