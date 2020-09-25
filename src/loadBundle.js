const { Base64 } = require('js-base64');
const logger = require('./helpers/logger');

function loadELM(bundle) {
  const ELMFiles = {};
  try {
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
  return ELMFiles;
}

module.exports = loadELM;
