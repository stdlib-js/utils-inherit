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

> Implement prototypical inheritance by replacing the prototype of one constructor with the prototype of another constructor.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-inherit
```

</section>

<section class="usage">

## Usage

```javascript
var inherit = require( '@stdlib/utils-inherit' );
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

```javascript
var inherit = require( '@stdlib/utils-inherit' );

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
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-inherit/main/LICENSE

</section>

<!-- /.links -->
