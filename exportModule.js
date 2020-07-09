const loadData = require('./GetDataType.js');
const loadValueSet = require('./GetValueSet.js');
const states = require('./states.js');
const factory = require('./factory.js');
const logger = require('./winston.js');

function exportModule(data) {
  const dataTypes = loadData(data);
  const moduleJSON = {
    name: data.library.identifier.id,
    remarks: [],
    states: {
      Initial: new states.InitialState('Initial').toJSON(),
      Terminal: new states.TerminalState('Terminal').toJSON(),
    },
  };
  const valueSet = { code: '', system: '', display: '', value_set: loadValueSet(data) };
  dataTypes.forEach((temp, i) => {
    const stateName = `${temp.substring(21)}_${i}`;
    const StateClass = factory(temp);
    if (StateClass !== null) {
      if (StateClass.codes !== undefined) {
        StateClass.codes[0] = valueSet;
      }
      logger.info(`adding state of type: ${StateClass.name}`);
      moduleJSON.states[stateName] = StateClass.toJSON();
    }
  });
  logger.info(`name of module: ${data.library.identifier.id}`);
  return moduleJSON;
}
module.exports = exportModule;
