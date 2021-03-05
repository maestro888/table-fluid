<h3 align="center">Responsive Tables JavaScript Plugin</h3>

## Table of contents

- [Quick start](#quick-start)
- [Best practises](#best-practises)
- [Status](#status)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Versioning](#versioning)
- [Copyright and license](#copyright-and-license)


## Quick start

Several quick start options are available:

- [Download the latest release.](https://github.com/maestro888/table-fluid/archive/1.0.2.zip)
- Clone the repo: `git clone https://github.com/maestro888/table-fluid.git`
- Install with [npm](https://www.npmjs.com/): `npm install table-fluid`

<p>Add code to you page</p>

```html
<link rel="stylesheet" href=".../dist/css/table-fluid.css">
<script src=".../dist/js/table-fluid.js"></script>
```

<p>Use JavaScript function</p>

```js
window.tableFluid('.table-fluid');
```


## Best practises

- Install with [npm](https://www.npmjs.com/): `npm install table-fluid`
- Create a folder `table-fluid` inside you `js` project directory
- In the project directory `table-fluid` create file `table-fluid.js`
- In the file `table-fluid.js` add code:

```js
// Import js from table-fluid
//=include .../node_modules/table-fluid/src/js/table-fluid.js
```

- Create a folder `table-fluid` inside you `scss` project directory
- In the project directory `table-fluid` create two files `table-fluid.scss`, `_variables.scss`
- In the file `table-fluid.scss` add:

```scss
@import 'variables';
@import '.../node_modules/table-fluid/src/scss/variables';
@import '.../node_modules/table-fluid/src/scss/table';
```

- In the created file `_variables.scss` replace the values of the variables as you need. All variables examples are inside the file:

```text
.../node_modules/table-fluid/src/scss/_variables.scss
```

<p>Add code to you page</p>

```html
<link rel="stylesheet" href=".../css/table-fluid/table-fluid.css">
<script src=".../js/table-fluid/table-fluid.js"></script>
```

<p>Use JavaScript function</p>

```js
window.tableFluid('.table-fluid');
```


## Status

[![npm version](https://img.shields.io/npm/v/table-fluid)](https://www.npmjs.com/package/table-fluid)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing compiled or source variations. You'll see something like this:

```text
table-fluid/
└── dist/
    ├── css/
    │   ├── table-fluid.css
    │   ├── table-fluid.css.map
    ├── js/
    │   ├── table-fluid.js
    │   └── table-fluid.js.map
    src/
    └── js/
        ├── table-fluid.js
        scss/
        ├── _table.scss
        ├── _variables.scss
        └── table-fluid.scss
```


## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/maestro888/table-fluid/issues) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/twbs/bootstrap/issues/new).


## Versioning

See [the Releases section of our GitHub project](https://github.com/maestro888/table-fluid/releases) for changelogs for each release version.


## Copyright and license

Code and documentation copyright 2021 the [maestro888](https://github.com/maestro888/table-fluid/graphs/contributors) Code released under the [MIT License](https://github.com/maestro888/table-fluid/blob/master/LICENSE).
