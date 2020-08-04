const loadData = require('../../src/helpers/GetDataType.js');
const testJSON = require('../elm/testJSON.json'); // maybe different file names
const test2JSON = require('../elm/test2JSON.json');
const test3JSON = require('../elm/test3JSON.json');
const example = require('../elm/Example.json');
const dependentLib = require('../../Library_References/ExampleHelperRef.json');

// variable names
const returnObject1 = { mainLibrary: testJSON };
const returnObject2 = { mainLibrary: test2JSON };
const returnObject3 = { mainLibrary: test3JSON };
const returnObject4 = { mainLibrary: example, dependencies: [dependentLib] };

// consider moving results to their own file
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
const results4 = [
  {
    dataType: '{http://hl7.org/fhir}Procedure',
    codeProperty: 'code',
    type: 'Retrieve',
    codes: {
      name: 'Colonoscopy',
      type: 'ValueSetRef',
    },
  },
];
test(`GetDataType.js returns the correct data types for testJSON file`, () => {
  expect(loadData(returnObject1)).toEqual(results1);
});
test(`GetDataType.js returns the correct data types for test2JSON file`, () => {
  expect(loadData(returnObject2)).toEqual(results2);
});
test(`GetDataType.js returns the correct data types for test3JSON file`, () => {
  expect(loadData(returnObject3)).toEqual(results3);
});
test(`GetDataType.js returns the correct data types for Example file`, () => {
  expect(loadData(returnObject4)).toEqual(results4);
});
