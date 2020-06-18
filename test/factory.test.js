const factory = require('../factory.js');
const STATE_LOOKUP = require('../stateMap.js');

for(var dataType in STATE_LOOKUP){
    test(`factory returns an instance of the correct class when the ${dataType.substring(21)} data type is inputted`, () => {
        expect(factory(dataType)).toBeInstanceOf(STATE_LOOKUP[dataType]);
    });
}
