const { Command } = require('commander');
const fs = require('fs');
const logger = require('./helpers/logger');
const Generator = require('./helpers/generator.js');

const program = new Command();
program
  .version('0.0.1')
  .requiredOption('-b, --bundle <bundle>', 'elm json to turn to synthea module')
  .parse(process.argv);

const bundle = JSON.parse(fs.readFileSync(program.bundle, 'utf8'));
const generator = new Generator(bundle, true);
const ELM = generator.generate();

logger.info(`exporting file with name: ${ELM.name}.json`);
fs.writeFileSync(`${ELM.name}.json`, generator);
logger.info(`${ELM.name}.json was exported successfully`);
