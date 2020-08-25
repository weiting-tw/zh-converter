const fs = require('fs');
const path = require('path');
const chineseConv = require('chinese-conv');

exports.run = (process, toTraditional = true, filterExtname = '') => {
  fs.readdir(process.cwd(), (err, data) => {
    data.filter((file) => {
      return filterExtname === '' || filterExtname === '*'
        ? true
        : path.extname(file) === filterExtname;
    }).map(file => {
      this.convertFile(file, toTraditional);
    });
  });
}

exports.convertFile = async (file, toTraditional, callback) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    try {
      doConvert(file, toTraditional, data);
    } catch (error) {
      console.log(`%s ${file} be converted fail !`, "\x1b[31m");
      if (callback)
        callback(`${file} be converted fail !`);
    }
  });
}

function doConvert(file, toTraditional, data) {
  fs.writeFile(
    file,
    toTraditional ? chineseConv.tify(data) : chineseConv.sify(data),
    () => {
      console.log(`%s ${file} be converted! success.`, "\x1b[37m");
    });
}
