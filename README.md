# rollup-plugin-header
from [rollup-plugin-banner](https://github.com/yingye/rollup-plugin-banner)

## Introduction

Rollup plugin to append content before js bundle.

## Usage

Install the plugin with NPM:

```
npm install --save-dev rollup-plugin-header
```

Add it to your rollup configuration:

```js
import header from 'rollup-plugin-header'

export default {
  plugins: [
    header({header:'someheader' , footer:'somefooter'})
  ]
}
```

Input:

```
header({header:'someheader' , footer:'somefooter'})
```

Output:

```
someheader
...code...
somefooter
```