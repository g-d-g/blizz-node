# blizz

> Performant and extra-unique UUID generation in Node

[![blizz on NPM](https://nodei.co/npm/blizz.png)](https://www.npmjs.com/package/blizz)

[![blizz - Downloads Total](https://img.shields.io/npm/dt/blizz.svg)](https://www.npmjs.com/package/blizz) [![blizz - Version](https://img.shields.io/npm/v/blizz.svg)](https://www.npmjs.com/package/blizz) [![blizz - License](https://img.shields.io/npm/l/blizz.svg)](https://www.npmjs.com/package/blizz) [![blizz - Github Stars](https://img.shields.io/github/stars/FuturisticCake/blizz-node.svg?style=social&label=Star)](https://github.com/FuturisticCake/blizz-node)

---

## Usage

```javascript
const blizz = require("blizz");

console.log(blizz()); // '1489289344571-SHNzAri4E4wQTcjY3bB2SEV75'
```


## Performance Information

In tests on some older laptops, blizz was able to generate 100,000 unique blizz IDs in approximately 75ms. blizz is a highly performant and scalable UUID generation system.


## License

Copyright (c) 2017 Ethan Davis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.