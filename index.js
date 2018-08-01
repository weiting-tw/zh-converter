#!/usr/bin/env node
const converter = require('./zh-converter');

const args = process.argv.slice(2);
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

let toTraditional = true;

for (let i = 0; i < args.length; i++) {
  let arg = args[i];
  if (arg === '--help' || arg === '-h') {
    console.log(help_page);
    process.exit();
  } else if (arg === '--traditional' || arg === '-t') {
    console.log(`converting to traditional chinese...\r\n`);
    toTraditional = true;
  } else if (arg === '--simplified' || arg === '-s') {
    console.log(`converting to simplified chinese...\r\n`);
    toTraditional = false;
  } else if (arg === '-p' && args[i + 1]) {
    process.chdir(args[++i])
  } else {
    console.log(help_page);
    throw new Error(`invalid command line argument ${arg}`);
  }
}

converter.run(process, toTraditional);