const data = require('./response.json');
const loadData = require('./GetDataType.js');
const states = require('./states.js');
const stateLookup = require('./stateMap.js');
function exportModule(data) {
    const dataTypes = loadData();
    const moduleJSON = {
        "name": data.library.identifier.id,
        "remarks": [],
        "states": {
            "Initial": new states.InitialState('Initial').toJSON(),
            "Terminal": new states.TerminalState().toJSON()
        }
    };
    dataTypes.forEach(function (temp, i) {
        try {
            const map = stateLookup[temp];
            const stateName = `${temp.substring(21)}_${i}`;
            const state = new map(stateName, [], {})
            moduleJSON.states[stateName] = state.toJSON();
        }
        catch{
            console.log('no corresponding state for that data type');
            return;
        }
    })
    return moduleJSON
}
module.exports = exportModule;