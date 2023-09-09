[npm-image]: https://img.shields.io/npm/v/rollup-plugin-header.svg
[npm-url]: https://github.com/tinysets/rollup-plugin-header

[npm-package-image]: https://github.com/tinysets/rollup-plugin-header/actions/workflows/npm-publish.yml/badge.svg
[npm-package-url]: https://github.com/tinysets/rollup-plugin-header/actions/workflows/npm-publish.yml

[rollup-plugin-banner]: https://github.com/yingye/rollup-plugin-banner

# rollup-plugin-header

[![Node.js Package][npm-package-image]][npm-package-url]
[![npm version][npm-image]][npm-url]

from [rollup-plugin-banner][rollup-plugin-banner]

## Introduction

Rollup plugin to append content before or after js bundle.

## Usage

Install the plugin with NPM:

```
npm install --save-dev rollup-plugin-header
```

Add it to your rollup configuration:

```js
import { header } from 'rollup-plugin-header'

export default {
  plugins: [
    header({ 'header': '#!/usr/bin/env node\n' ,footer:'\nsomefooter'})
  ]
}
```

Input:

```
header({ 'header': '#!/usr/bin/env node\n' ,footer:'\nsomefooter'})
```

Output:

```
#!/usr/bin/env node
...code...
somefooter
```