const factory = require('../factory.js');
const JSONMap = require('../toJSONMap.js');

Object.entries(JSONMap).forEach(([dataType, stateJSON]) => {
  test('toJSON method returns an correct representation of a toJSON string for the specified class', () => {
    expect(factory(dataType).toJSON()).toEqual(stateJSON);
  });
});
