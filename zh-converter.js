const fs = require('fs');
const path = require('path');
const chineseConv = require('chinese-conv');

exports.run = (process, toTraditional = true) => {
  fs.readdir(process.cwd(), (err, data) => {
    data.filter((file) => {
      return path.extname(file) === '.json';
    }).map(async (file) => {
      await this.convertFile(file, toTraditional);
    });
  });
}

exports.convertFile = async (file, toTraditional) => {
  fs.readFile(file, 'utf-8', async (err, data) => {
    await fs.writeFile(
      file,
      toTraditional ? chineseConv.tify(data) : chineseConv.sify(data),
      (err) => {
        if (err) throw err;
        console.log(`${file} be converted!`);
      });
  });
}
