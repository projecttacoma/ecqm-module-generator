const fs = require('fs');
const data = require('./response.json');
const loadData = require('./GetDataType.js');
const states = require('./states.js');
const factory = require('./factory.js');

function exportModule() {
  const dataTypes = loadData();
  const moduleJSON = {
    name: data.library.identifier.id,
    remarks: [],
    states: {
      Initial: new states.InitialState('Initial').toJSON(),
      Terminal: new states.TerminalState().toJSON(),
    },
  };
  dataTypes.forEach(function (temp, i) {
    try {
      const stateName = `${temp.substring(21)}_${i}`;
      moduleJSON.states[stateName] = factory(temp).toJSON();
    } catch {
      return;
    }
  });
  return JSON.stringify(moduleJSON);
}

fs.writeFileSync(`${data.library.identifier.id}.json`, exportModule(data));
module.exports = exportModule;
