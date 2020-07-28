const factory = require('../../src/states/factory.js');
const JSONMap = require('./toJSONMap.js');

Object.entries(JSONMap).forEach(([dataType, stateJSON]) => {
  test('toJSON method returns an correct representation of a toJSON string for the specified class', () => {
    expect(
      factory(dataType, 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1020').toJSON()
    ).toEqual(stateJSON);
  });
});
