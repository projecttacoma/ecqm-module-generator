const logger = require('./winston.js');

function loadValueSet(data) {
  if (data.library.valueSets.def[0].id === undefined) {
    console.log('no value set');
  }
  logger.info(`retrieved value set with id: ${data.library.valueSets.def[0].id}`);
  return data.library.valueSets.def[0].id;
}

module.exports = loadValueSet;
