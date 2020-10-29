const loadData = require('./helpers/getDataType');
const loadValueSet = require('./helpers/getValueSet');
const states = require('./states/states');
const factory = require('./states/factory');

/**
 * exports the inputted ELM Files as module JSON that can be uploaded or pasted into Synthea
 *
 * @param {Object} ELMFiles - object containing the contents of the main library file and any dependencies
 * @returns {Object} moduleJSON - an object with the all of the necessary states and valuesets from the inputted ELM File
 */
function exportModule(ELMFiles) {
  const dataTypes = loadData(ELMFiles);
  const valueSets = loadValueSet(ELMFiles);
  const moduleJSON = {
    name: ELMFiles.mainLibrary.library.identifier.id,
    remarks: [],
    states: {
      Initial: new states.InitialState('Initial').toJSON(),
      Terminal: new states.TerminalState('Terminal').toJSON(),
    },
  };

  dataTypes.forEach((object, i) => {
    const stateName = `${object.dataType.substring(21)}_${i}`;
    if (object.dataType !== null && factory(object.dataType, stateName) !== null) {
      let StateClass;
      if (object.codes !== undefined && object.type === 'Retrieve') {
        console.log(`adding state of type: ${object.dataType}`);
        console.log(`adding value_set with id of: ${valueSets[object.codes.name]}`);
        StateClass = factory(object.dataType, stateName, valueSets[object.codes.name]);
      } else {
        console.log(`adding state of type: ${object.dataType}`);
        StateClass = factory(object.dataType, stateName);
      }
      moduleJSON.states[stateName] = StateClass.toJSON();
    }
  });

  return moduleJSON;
}

module.exports = exportModule;
