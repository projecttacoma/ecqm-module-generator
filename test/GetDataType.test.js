const loadData = require('../GetDataType.js');
const testJSON = require('./testJSON.json');
const test2JSON = require('./test2JSON.json');
const test3JSON = require('./test3JSON.json');

const results1 = ['{http://hl7.org/fhir}Patient', '{http://hl7.org/fhir}Encounter', '{http://hl7.org/fhir}Procedure'];
const results2 = ['{http://hl7.org/fhir}Patient', '{http://hl7.org/fhir}Procedure', '{http://hl7.org/fhir}Encounter'];
const results3 = [
  '{http://hl7.org/fhir}Patient',
  '{http://hl7.org/fhir}Procedure',
  '{http://hl7.org/fhir}Encounter',
  '{http://hl7.org/fhir}Medication',
];

test(`GetDataType.js returns the correct data types for testJSON file`, () => {
  expect(loadData(testJSON)).toEqual(results1);
});
test(`GetDataType.js returns the correct data types for test2JSON file`, () => {
  expect(loadData(test2JSON)).toEqual(results2);
});
test(`GetDataType.js returns the correct data types for test3JSON file`, () => {
  expect(loadData(test3JSON)).toEqual(results3);
});
