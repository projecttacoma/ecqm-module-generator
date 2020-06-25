const loadData = require('./GetDataType.js');
const states = require('./states.js');
const factory = require('./factory.js');

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
  dataTypes.forEach((temp, i) => {
    const stateName = `${temp.substring(21)}_${i}`;
    const StateClass = factory(temp);
    if (StateClass !== null) {
      moduleJSON.states[stateName] = factory(temp).toJSON();
    }
  });
  return moduleJSON;
}
module.exports = exportModule;
