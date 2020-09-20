const { Command } = require('commander');
const { Base64 } = require('js-base64');
const fs = require('fs');
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
    const measure = bundle.entry.find(({ resource }) => resource.resourceType === 'Measure');
    const measureID = measure.resource.library[0];
    const ID = measureID.substring(measureID.indexOf('/') + 1);
    logger.info(`finding main library with ID: ${ID}`);
    const dataResource = bundle.entry.find(({ resource }) => resource.id === ID);
    const encodedData = dataResource.resource.content.find((c) => c.contentType === 'application/elm+json').data;
    const mainFile = Base64.decode(encodedData);
    ELMFiles.mainLibrary = JSON.parse(mainFile);
    const dependencies = measure.resource.relatedArtifact.filter((d) => {
      return d.type === 'depends-on';
    });
    try {
      ELMFiles.dependencies = [];
      const dependenciesID = [];
      dependencies.forEach((dd) => {
        if (dd.resource !== undefined) dependenciesID.push(dd.resource.substring(measureID.indexOf('/') + 1));
      });
      logger.info(`finding dependencies with IDs: ${dependenciesID}`);
      dependenciesID.forEach((dependencyID) => {
        const dataResource1 = bundle.entry.find(({ resource }) => resource.id === dependencyID);
        const encodedData1 = dataResource1.resource.content.find((c) => c.contentType === 'application/elm+json').data;
        const dependency = Base64.decode(encodedData1);
        ELMFiles.dependencies.push(JSON.parse(dependency));
      });
      logger.info(`adding dependencies to ELMFiles`);
    } catch (err) {
      logger.error(err.message);
      process.exit(1);
    }
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
