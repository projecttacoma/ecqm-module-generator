const loadValueSet = require('../../src/helpers/getValueSet.js'); // .js
const simpleDataTypes = require('../elm/simpleDataTypes.json');
const simpleNestingDataTypes = require('../elm/simpleNestingDataTypes.json');
const layeredNestingDataTypes = require('../elm/layeredNestingDataTypes.json');
const expressionRef = require('../elm/expressionRef.json');
const dependentLib = require('../../Library_References/ExpressionRefsHelper.json');

const simpleDataTypesObject = { mainLibrary: simpleDataTypes };
const simpleNestingDataTypesObject = { mainLibrary: simpleNestingDataTypes };
const layeredNestingDataTypesObject = { mainLibrary: layeredNestingDataTypes };
const expressionRefObject = { mainLibrary: expressionRef, dependencies: [dependentLib] };
const tests = [simpleDataTypesObject, simpleNestingDataTypesObject, layeredNestingDataTypesObject];
const officeID = 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.101.12.1001';
const colonID = 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1020';
tests.forEach((testNum) => {
  test(`GetValueSet.js returns the correct link corresponding to the Colonoscopy value set in ${testNum}`, () => {
    expect(loadValueSet(testNum).Colonoscopy).toEqual(colonID);
  });
});
test(`GetValueSet.js returns the correct link corresponding to the Office Visit value set in test3JSON`, () => {
  expect(loadValueSet(layeredNestingDataTypesObject)['Office Visit']).toEqual(officeID);
});
test(`GetValueSet.js returns the correct link corresponding to the Example.json value set in Example.json`, () => {
  expect(loadValueSet(expressionRefObject).Colonoscopy).toEqual(colonID);
});
