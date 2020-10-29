const { Command } = require('commander');
const fs = require('fs');

const Generator = require('./generator.js');

const program = new Command();
program
  .version('0.0.1')
  .requiredOption('-b, --bundle <bundle>', 'elm json to turn to synthea module')
  .parse(process.argv);

const bundle = JSON.parse(fs.readFileSync(program.bundle, 'utf8'));
// false for logs, true for no logs
const generator = new Generator(bundle, false);
let moduleJSON;
try {
  moduleJSON = generator.generate();
} catch (err) {
  console.error(err.message);
  process.exit(1);
}

console.log(`exporting file with name: ${moduleJSON.name}.json`);
fs.writeFileSync(`${moduleJSON.name}.json`, JSON.stringify(moduleJSON));
console.log(`${moduleJSON.name}.json was exported successfully`);
