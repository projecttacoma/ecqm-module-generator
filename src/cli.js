const { Command } = require('commander');
const { Base64 } = require('js-base64');
const fs = require('fs');
const path = require('path');
const exportModule = require('./exportModule');
const logger = require('./helpers/logger');

const program = new Command();
program.version('0.0.1');
function loadELM() {
  program
    .version('0.0.1')
    .requiredOption('--elmJSONBundle <bundle>', 'elm json to turn to synthea module')
    .parse(process.argv);

  const ELMFiles = {};
  try {
    const bundle = JSON.parse(fs.readFileSync(program.elmJSONBundle, 'utf8'));
    logger.info(`Sucessfully loaded in bundle with id: ${bundle.id}`);
    const measure = bundle.entry.find(({ resource }) => resource.resourceType === 'Measure').resource.library[0];
    const ID = measure.substring(measure.indexOf('/') + 1);
    logger.info(`finding main library with id: ${ID}`);
    const dataResource = bundle.entry.find(({ resource }) => resource.id === ID);
    const encodedData = JSON.stringify(
      dataResource.resource.content.find((c) => c.contentType === 'application/elm+json').data
    );
    logger.info(`decoding data...`);
    Base64.extendString();
    const mainFile = Base64.decode(encodedData);
    logger.info(`data decoded successfully and added to mainFile variable`);
    ELMFiles.mainLibrary = JSON.parse(mainFile);
  } catch (err) {
    logger.error(err.message);
    process.exit(1);
  }
  return ELMFiles;
}
const mainELM = loadELM();
logger.info(`exporting file with name: ${mainELM.mainLibrary.library.identifier.id}.json`);
const moduleJSON = exportModule(mainELM);
fs.writeFileSync(`${mainELM.mainLibrary.library.identifier.id}.json`, JSON.stringify(moduleJSON));
logger.info(`${mainELM.mainLibrary.library.identifier.id}.json was exported successfully`);
