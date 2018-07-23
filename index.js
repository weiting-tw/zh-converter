const fs = require('fs');
const chineseConv = require('chinese-conv');

const args = process.argv.slice(2);
let isTraditional = true;
const help_page = `
zh-converter
https://github.com/a26007565/zh-converter

Usage: zh-converter <command>
Options:
  -h, --help                    Display this information.
  -t, --traditional             Convert to traditional chinese.
  -s, --simplified              Convert to traditional chinese.
  -p <PATH>                     Set path.
`;

for (let i = 0; i < args.length; i++) {
  let arg = args[i];
  if (arg === '--help' || arg === '-h') {
    console.log(help_page);
    process.exit();
  } else if (arg === '--traditional' || arg === '-t') {
    console.log(`converting to traditional chinese...\r\n`);
    isTraditional = true;
  } else if (arg === '--simplified' || arg === '-s') {
    console.log(`converting to simplified chinese...\r\n`);
    isTraditional = false;
  } else if (arg === '-p' && args[i + 1]) {
    process.chdir(args[++i])
  } else {
    console.log(help_page);
    throw new Error(`invalid command line argument ${arg}`);
  }
}

fs.readdir(process.cwd(), (err, data) => {
  data.filter((file) => {
    return file.substr(-5) === '.json';
  }).map(async (file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      fs.writeFile(
        file,
        isTraditional ? chineseConv.tify(data) : chineseConv.sify(data),
        (err) => {
          if (err) throw err;
          console.log(`${file} be converted!`);
        });
    });
  });
});