# Go Facebook [![NPM version](https://badge.fury.io/js/gofacebook.svg)](http://badge.fury.io/js/gofacebook) [![GitHub version](https://badge.fury.io/gh/vitorbritto%2Fgofacebook.svg)](http://badge.fury.io/gh/vitorbritto%2Fgofacebook)

Search for hashtags, contents in groups or fanpages at Facebook.

> IMPORTANT: **you need to be logged in on Facebook!**

## Install

```bash
$ npm install gofacebook -g
```

This will make `gofb` and the shorter `fb` alias available on the command line.

## Usage

```bash
$ fb [options] <query>
```

**Help:** run `fb -h` to output instructions.

### Available Options

#### -t or --type [option: page|group|hash]

- `page`: Search for fanpages
- `group`: Search for contents in specific group (you need to set a _query string_ too)
- `hash`: Search for hashtags

## Example

```bash
# fb (-t or --type) [option] [name of group] [query string]
$ fb -t group frontendbrasil responsive web design
```

## Contribute

Feel free to [contribute](https://github.com/vitorbritto/gofacebook/pulls) with this project or leave a [suggestion](https://github.com/vitorbritto/gofacebook/issues).


## License

[MIT License](http://vitorbritto.mit-license.org/) © Vitor Britto
