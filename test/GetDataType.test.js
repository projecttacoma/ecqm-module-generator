const loadData = require('../GetDataType.js');
const testJSON = require('./testJSON.json');
const test2JSON = require('./test2JSON.json');
const test3JSON = require('./test3JSON.json');
const example = require('../Example.json');

const returnObject1 = { mainLibrary: testJSON };
const returnObject2 = { mainLibrary: test2JSON };
const returnObject3 = { mainLibrary: test3JSON };
const returnObject4 = { mainLibrary: example };
const results1 = [
  { dataType: '{http://hl7.org/fhir}Patient', type: 'Retrieve' },
  {
    dataType: '{http://hl7.org/fhir}Encounter',
    codeProperty: 'code',
    type: 'Retrieve',
    codes: { name: 'Colonoscopy', type: 'ValueSetRef' },
  },
  {
    dataType: '{http://hl7.org/fhir}Procedure',
    codeProperty: 'code',
    type: 'Retrieve',
    codes: { name: 'Colonoscopy', type: 'ValueSetRef' },
  },
];
const results2 = [
  { dataType: '{http://hl7.org/fhir}Patient', type: 'Retrieve' },
  {
    dataType: '{http://hl7.org/fhir}Procedure',
    codeProperty: 'code',
    type: 'Retrieve',
    codes: { name: 'Colonoscopy', type: 'ValueSetRef' },
  },
  {
    dataType: '{http://hl7.org/fhir}Encounter',
    codeProperty: 'type',
    type: 'Retrieve',
    codes: { name: 'Colonoscopy', type: 'ValueSetRef' },
  },
];
const results3 = [
  { dataType: '{http://hl7.org/fhir}Patient', type: 'Retrieve' },
  {
    dataType: '{http://hl7.org/fhir}Procedure',
    codeProperty: 'code',
    type: 'Retrieve',
    codes: { name: 'Colonoscopy', type: 'ValueSetRef' },
  },
  {
    dataType: '{http://hl7.org/fhir}Encounter',
    codeProperty: 'type',
    type: 'Retrieve',
    codes: { name: 'Office Visit', type: 'ValueSetRef' },
  },
  {
    dataType: '{http://hl7.org/fhir}Medication',
    codeProperty: 'medication',
    type: 'Retrieve',
    codes: { name: 'Colonoscopy', type: 'ValueSetRef' },
  },
];

const results4 = [];
test(`GetDataType.js returns the correct data types for testJSON file`, () => {
  expect(loadData(returnObject1)).toEqual(results1);
});
test(`GetDataType.js returns the correct data types for test2JSON file`, () => {
  expect(loadData(returnObject2)).toEqual(results2);
});
test(`GetDataType.js returns the correct data types for test3JSON file`, () => {
  expect(loadData(returnObject3)).toEqual(results3);
});
test(`GetDataType.js returns the correct data types for test3JSON file`, () => {
  expect(loadData(returnObject4)).toEqual(results4);
});
