const factory = require('../../src/states/factory.js');
const STATE_LOOKUP = require('../../src/states/stateMap.js');

Object.entries(STATE_LOOKUP).forEach(([dataType, stateClass]) => {
  test(`factory returns an instance of the correct class when the ${dataType.substring(
    21
  )} data type is inputted`, () => {
    expect(factory(dataType)).toBeInstanceOf(stateClass);
  });
});
