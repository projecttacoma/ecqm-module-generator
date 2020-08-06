const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const exportModule = require('./exportModule');
const logger = require('./helpers/logger');

const program = new Command();
program.version('0.0.1');
function loadELM() {
  program
    .version('0.0.1')
    .requiredOption('--elmJSON <file>', 'elm json to turn to synthea module')
    .option('--dependency <library>', 'directory of dependent libraries')
    .parse(process.argv);
  const ELMFiles = {};
  try {
    const mainFile = fs.readFileSync(program.elmJSON, 'utf8');
    ELMFiles.mainLibrary = JSON.parse(mainFile);
  } catch (err) {
    logger.error(err.message);
    process.exit(1);
  }
  if (program.dependency !== undefined) {
    const directoryPath = path.resolve(program.dependency, './');
    ELMFiles.dependencies = [];
    const dependentFiles = fs.readdirSync(directoryPath).filter((file) => {
      return file.split('.').pop() === 'json' ? file : null;
    });
    try {
      dependentFiles.forEach((file) => {
        logger.info(`parsing ${file}`);
        const dependency = fs.readFileSync(`${directoryPath}/${file}`, 'utf8');
        ELMFiles.dependencies.push(JSON.parse(dependency));
      });
    } catch (err) {
      logger.error(err.message);
      process.exit(1);
    }
  }
  return ELMFiles;
}
const mainELM = loadELM();
logger.info(`exporting file with name: ${mainELM.mainLibrary.library.identifier.id}.json`);
const moduleJSON = exportModule(mainELM);
fs.writeFileSync(`${mainELM.mainLibrary.library.identifier.id}.json`, JSON.stringify(moduleJSON));
logger.info(`${mainELM.mainLibrary.library.identifier.id}.json was exported successfully`);
