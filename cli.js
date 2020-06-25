const { Command } = require('commander');
const fs = require('fs');
const exportModule = require('./exportModule.js');
const program = new Command();
program.version('0.0.1');
function data() {
  program.option('--elmJSON <file>', 'elm json to turn to synthea module').parse(process.argv);
  const contents = JSON.parse(fs.readFileSync(program.elmJSON, 'utf8'));
  return contents;
}

const moduleJSON = exportModule(data());
fs.writeFileSync(`${data().library.identifier.id}.json`, JSON.stringify(moduleJSON));
//node cli.js --elmJSON 'test' for test to be output
