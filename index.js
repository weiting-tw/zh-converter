#!/usr/bin/env node

const converter = require('./zh-converter');
var program = require('commander');
var pkg = require('./package');

program
  .version(pkg.version)
  .description(pkg.description)
  .option('-t, --traditional', 'Convert to traditional chinese.')
  .option('-s, --simplified', 'Convert to simplified chinese.')
  .option('-p, --path [PATH]', 'Set path.')
  .option('-e, --extname [type]', 'filter extension name, ex. .json .txt', '')
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
  throw new Error('argument is empty');
}

let toTraditional = !program.simplified;
let filterExtname = '' || program.extname;

if (toTraditional) {
  console.log(`converting to traditional chinese...\r\n`);
} else {
  console.log(`converting to simplified chinese...\r\n`);
}
if (program.path) {
  process.chdir(program.path)
}

converter.run(process, toTraditional, filterExtname);
