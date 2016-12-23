# parse-package-name

[![NPM version](https://img.shields.io/npm/v/parse-package-name.svg?style=flat)](https://npmjs.com/package/parse-package-name) [![NPM downloads](https://img.shields.io/npm/dm/parse-package-name.svg?style=flat)](https://npmjs.com/package/parse-package-name) [![Build Status](https://img.shields.io/circleci/project/egoist/parse-package-name/master.svg?style=flat)](https://circleci.com/gh/egoist/parse-package-name) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
$ npm install --save parse-package-name
```

## Usage

```js
const parse = require('parse-package-name')

const pkg = parse('@angular/core/dist/xxx.js@^2.0.0')
//=>
{
  name: '@angular/core',
  path: 'dist/xxx.js',
  version: '^2.0.0'
}

const pkg = parse('vue/dist/vue.js@2')
//=>
{
  name: 'vue',
  path: 'dist/vue.js',
  version: '2'
}
```

## API

### parsePackageName(input)

`@user/package or package` + `path`(?) + `version`(?)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**parse-package-name** © [EGOIST](https://github.com/egoist), Released under the [MIT](https://egoist.mit-license.org/) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/parse-package-name/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
