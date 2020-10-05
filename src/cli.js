const { Command } = require('commander');
const fs = require('fs');
const logger = require('./helpers/logger');
const Generator = require('./generator.js');

const program = new Command();
program
  .version('0.0.1')
  .requiredOption('-b, --bundle <bundle>', 'elm json to turn to synthea module')
  .parse(process.argv);

const bundle = JSON.parse(fs.readFileSync(program.bundle, 'utf8'));
// false for logs, true for no logs
const generator = new Generator(bundle, false);
const moduleJSON = generator.generate();

logger.info(`exporting file with name: ${moduleJSON.name}.json`);
fs.writeFileSync(`${moduleJSON.name}.json`, JSON.stringify(moduleJSON));
logger.info(`${moduleJSON.name}.json was exported successfully`);
