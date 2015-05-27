# clockmoji

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/clockmoji.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/clockmoji
[travis-image]: https://img.shields.io/travis/Flet/clockmoji.svg?style=flat-square
[travis-url]: https://travis-ci.org/Flet/clockmoji

Get an emoji clock representation of the current time.

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
date
Tue May 26 18:19:10 CDT 2015

# no arguments will return the current time
clockmoji
🕡

# Pass a time in the format mm:ss
clockmoji 10:00
🕙

# Military time supported
clockmoji 14:00
🕑

# any arbitrary time works -- rounds down if its less than :15
clockmoji 12:04
🕛

# rounds up if the minutes are :15
clockmoji 12:24
🕧

# supports piping
echo 6:30 | clockmoji
🕡

# invalid time returns ⚠
clockmoji 9999
⚠
```

```js
var clockmoji = require('clockmoji')

console.log(clockmoji())
console.log(clockmoji('12:00'))
console.log(clockmoji('18:30'))
```

### Stay Prompt while at the prompt
Once installed globally, `clockmoji` can be used to keep time on your bash/zsh prompt!

Example:
Add this to your bash config (`.bashrc`) to prefix your prompt with the current time!

```bash
PS1='$(clockmoji)'\ $PS1; export PS1;
```

Or if you use the excellent [pure](https://github.com/sindresorhus/pure) prompt with zsh, add this to your `.zshrc`
```bash
PURE_PROMPT_SYMBOL='$(clockmoji)'\ ❯
```

## FAQ

### I don't see any emoji on my command line, what should I do?
If you're a linux user, you may need to install a special font in order for them to work. Here are a few ways to do it:

- Ubuntu: `sudo apt-get install ttf-ancient-fonts`
- Fedora: `yum install gdouros-symbola-fonts`
- Others: Download and install the Symbola 7.21 font from [here](http://users.teilar.gr/~g1951d/)

More Info https://www.kirsle.net/blog/entry/make-emoji-work-in-linux

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)
