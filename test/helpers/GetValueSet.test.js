const loadValueSet = require('../../src/helpers/GetValueSet.js');
const testJSON = require('../elm/testJSON.json');
const test2JSON = require('../elm/test2JSON.json');
const test3JSON = require('../elm/test3JSON.json');
const example = require('../../Example.json');
const exampleRef = require('../../Library_References/ExampleHelperRef.json');

const returnObject1 = { mainLibrary: testJSON };
const returnObject2 = { mainLibrary: test2JSON };
const returnObject3 = { mainLibrary: test3JSON };
const returnObject4 = { mainLibrary: example, dependencies: [exampleRef] };
const tests = [returnObject1, returnObject2, returnObject3];
const officeID = 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.101.12.1001';
const colonID = 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1020';
tests.forEach((testNum) => {
  test(`GetValueSet.js returns the correct link corresponding to the Colonoscopy value set in ${testNum}`, () => {
    expect(loadValueSet(testNum).Colonoscopy).toEqual(colonID);
  });
});
test(`GetValueSet.js returns the correct link corresponding to the Office Visit value set in test3JSON`, () => {
  expect(loadValueSet(returnObject3)['Office Visit']).toEqual(officeID);
});
test(`GetValueSet.js returns the correct link corresponding to the Example.json value set in Example.json`, () => {
  expect(loadValueSet(returnObject4).Colonoscopy).toEqual(colonID);
});
