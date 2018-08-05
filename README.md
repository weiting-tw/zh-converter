# zh-converter

[![pipeline status](https://gitlab.com/a26007565/zh-converter/badges/master/pipeline.svg)](https://gitlab.com/a26007565/zh-converter/commits/master) [![coverage report](https://gitlab.com/a26007565/zh-converter/badges/master/coverage.svg)](https://gitlab.com/a26007565/zh-converter/commits/master)

## About

對檔案進行簡轉繁，繁轉簡
Conversion Simplified Chinese <-> Traditional Chinese.

## Install

```bash
npm install -g zh-converter
```

## Usage

```bash
Usage: zh-converter [options]

Options:
-V, --version         output the version number
-t, --traditional     Convert to traditional chinese.
-s, --simplified      Convert to simplified chinese.
-p, --path [PATH]     Set path.
-e, --extname [type]  filter extension name, ex. .json .txt (default: )
-h, --help            output usage information
```

## Related

- [chinese-conv][chinese-conv]

## License

[MIT](LICENSE)

[chinese-conv]: https://github.com/Pleasurazy/chinese-conv