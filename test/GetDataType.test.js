const loadData = require('../GetDataType.js');
const testJSON = require('./testJSON.json');
const test2JSON = require('./test2JSON.json');
const test3JSON = require('./test3JSON.json');

const results1 = [
  { dataType: '{http://hl7.org/fhir}Patient', type: 'Retrieve' },
  {
    dataType: '{http://hl7.org/fhir}Encounter',
    codeProperty: 'code',
    type: 'Retrieve',
    codes: { name: 'Colonoscopy', type: 'ValueSetRef' }
  },
  {
    dataType: '{http://hl7.org/fhir}Procedure',
    codeProperty: 'code',
    type: 'Retrieve',
    codes: { name: 'Colonoscopy', type: 'ValueSetRef' }
  }
];
const results2 = [
  { dataType: '{http://hl7.org/fhir}Patient', type: 'Retrieve' },
  {
    dataType: '{http://hl7.org/fhir}Procedure',
    codeProperty: 'code',
    type: 'Retrieve',
    codes: { name: 'Colonoscopy', type: 'ValueSetRef' }
  },
  {
    dataType: '{http://hl7.org/fhir}Encounter',
    codeProperty: 'type',
    type: 'Retrieve',
    codes: { name: 'Colonoscopy', type: 'ValueSetRef' }
  }
]
const results3 = [
  { dataType: '{http://hl7.org/fhir}Patient', type: 'Retrieve' },
  {
    dataType: '{http://hl7.org/fhir}Procedure',
    codeProperty: 'code',
    type: 'Retrieve',
    codes: { name: 'Colonoscopy', type: 'ValueSetRef' }
  },
  {
    dataType: '{http://hl7.org/fhir}Encounter',
    codeProperty: 'type',
    type: 'Retrieve',
    codes: { name: 'Office Visit', type: 'ValueSetRef' }
  },
  {
    dataType: '{http://hl7.org/fhir}Medication',
    codeProperty: 'medication',
    type: 'Retrieve',
    codes: { name: 'Colonoscopy', type: 'ValueSetRef' }
  }
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
