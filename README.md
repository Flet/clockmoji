# clockmoji

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/clockmoji.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/clockmoji
[travis-image]: https://img.shields.io/travis/flet/clockmoji.svg?style=flat-square
[travis-url]: https://travis-ci.org/flet/clockmoji

Returns an emoji representation of the current time.

Inspired by [moonmoji](https://www.npmjs.com/package/moonmoji), [mooon](https://github.com/bcomnes/mooon) and the [oh-my-zsh emoji-clock plugin](https://github.com/robbyrussell/oh-my-zsh/blob/master/plugins/emoji-clock/emoji-clock.plugin.zsh)

## Install

To use as a command:
```
npm install -g clockmoji
```

To use in JS:
```
npm install --save clockmoji
```

## Usage

### Command Line Usage:

```bash
❯ date
Tue May 26 18:19:10 CDT 2015
                
# no arguments will return the current time                                                                
❯ clockmoji
🕡

# Pass a time in the format mm:ss                                                         
❯ clockmoji 10:00
🕙

# Military time supported                                                         
❯ clockmoji 14:00
🕑
                        
# any arbitrary time works -- rounds down if its less than :15                                                        
❯ clockmoji 12:04
🕛

# rounds up if the minutes are > :15                                                                 
❯ clockmoji 12:24
🕧
                           
# supports piping                                             
❯ echo 6:30 | clockmoji
🕡
                                                                                               
# invalid time returns ⚠                                                            
❯ clockmoji 9999 
⚠
```

```js
var clockmoji = require('clockmoji')

console.log(clockmoji())
console.log(clockmoji('12:00'))
console.log(clockmoji('18:30'))
```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)
