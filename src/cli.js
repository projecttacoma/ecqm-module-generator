const { Command } = require('commander');
const fs = require('fs');
const exportModule = require('./exportModule');
const logger = require('./helpers/logger');
const loadELM = require('./loadBundle.js');

const program = new Command();
program
  .version('0.0.1')
  .requiredOption('-b, --bundle <bundle>', 'elm json to turn to synthea module')
  .parse(process.argv);

const bundle = JSON.parse(fs.readFileSync(program.bundle, 'utf8'));
const mainELM = loadELM(bundle);
logger.info(`exporting file with name: ${mainELM.mainLibrary.library.identifier.id}.json`);
const moduleJSON = exportModule(mainELM);
fs.writeFileSync(`${mainELM.mainLibrary.library.identifier.id}.json`, JSON.stringify(moduleJSON));
logger.info(`${mainELM.mainLibrary.library.identifier.id}.json was exported successfully`);
