const loadValueSet = require('../GetValueSet.js');
const testJSON = require('./testJSON.json');
const test2JSON = require('./test2JSON.json');
const test3JSON = require('./test3JSON.json');

const tests = [testJSON, test2JSON, test3JSON];
const results = 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1020';
tests.forEach((testNum) => {
  test(`GetDataType.js returns the correct data types for testJSON file`, () => {
    expect(loadValueSet(testNum)).toEqual(results);
  });
});
