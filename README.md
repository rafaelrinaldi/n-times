# n-times [![Build Status](https://semaphoreci.com/api/v1/rafaelrinaldi/n-times/branches/master/badge.svg)](https://semaphoreci.com/rafaelrinaldi/n-times)

> Run a function 𝘕 times

## Install

```sh
$ npm install n-times --save
```

## Usage

```js
const times = require('n-times');
const beep = bop => console.log(bop);

times(3, beep, 'yadda');
// => yadda
// => yadda
// => yadda
```

## API

## `times(n, fn, ...args)`

### `n`

*Required*  
Type: `integer`  

Number of times to run a function.

### `fn`

*Required*  
Type: `function`  

Function to run N times.  
Receives the value of current iteration as the last argument.

#### `...args`

Type: `arguments`  

List of arguments to pass to `fn` on every call.

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
