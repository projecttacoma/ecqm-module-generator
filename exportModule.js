const loadData = require('./GetDataType.js');
const loadValueSet = require('./GetValueSet.js');
const states = require('./states.js');
const factory = require('./factory.js');
const logger = require('./winston.js');

function exportModule(data) {
  const dataTypes = loadData(data);
  const valueSets = loadValueSet(data);
  const moduleJSON = {
    name: data.library.identifier.id,
    remarks: [],
    states: {
      Initial: new states.InitialState('Initial').toJSON(),
      Terminal: new states.TerminalState('Terminal').toJSON(),
    },
  };
  dataTypes.forEach((object, i) => {
    if (object.dataType !== null && object.codes !== undefined && object.type === 'Retrieve') {
      const link = valueSets[object.codes.name];
      const StateClass = factory(object.dataType, link);
      const stateName = `${object.dataType.substring(21)}_${i}`;
      logger.info(`adding state of type: ${StateClass.name}`);
      logger.info(`adding value_set with id of: ${link}`);
      moduleJSON.states[stateName] = StateClass.toJSON();
    }
  });

  logger.info(`name of module: ${data.library.identifier.id}`);
  return moduleJSON;
}
module.exports = exportModule;
