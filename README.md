# sss - sugarss

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]
[![XO code style][xo-img]][xo]


[npm-img]:         https://img.shields.io/npm/v/@tadashi/sss.svg
[npm]:             https://www.npmjs.com/package/@tadashi/sss
[ci-img]:          https://travis-ci.org/lagden/sss.svg
[ci]:              https://travis-ci.org/lagden/sss
[xo-img]:          https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:              https://github.com/sindresorhus/xo

-----

Convert `css` to `sss` or vice versa

## Install

```
$ npm i -g @tadashi/sss
```


## Usage

CSS to SSS:

```
$ sss my/style.css
==> Created my/style.sss

$ sss my/style.css -o main.sss
==> Created main.sss
```

SSS to CSS:

```
$ sss my/style.sss
==> Created my/style.css

$ sss my/style.sss -o main.css
==> Created main.css
```


## License

MIT © [Thiago Lagden](http://lagden.in)
