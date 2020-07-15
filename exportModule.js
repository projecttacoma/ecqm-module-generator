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
    if (object.dataType !== null && factory(object.dataType) !== null) {
      let StateClass;
      if (object.codes !== undefined && object.type === 'Retrieve') {
        logger.info(`adding value_set with id of: ${valueSets[object.codes.name]}`);
        logger.info(`adding state of type: ${object.dataType}`);
        StateClass = factory(object.dataType, valueSets[object.codes.name]);
      } else {
        logger.info(`adding state of type: ${object.dataType}`);
        StateClass = factory(object.dataType);
      }
      const stateName = `${object.dataType.substring(21)}_${i}`;

      moduleJSON.states[stateName] = StateClass.toJSON();
    }
  });

  logger.info(`name of module: ${data.library.identifier.id}`);
  return moduleJSON;
}
module.exports = exportModule;
