const loadValueSet = require('../GetValueSet.js');
const testJSON = require('./testJSON.json');
const test2JSON = require('./test2JSON.json');
const test3JSON = require('./test3JSON.json');

const tests = [testJSON, test2JSON, test3JSON];
const officeID = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.101.12.1001";
const colonID ='http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1020';
tests.forEach((testNum)=>{
test(`GetValueSet.js returns the correct link corresponding to the Colonoscopy value set in ${testNum}`, () => {
  expect(loadValueSet(testNum).Colonoscopy).toEqual(colonID);
});
});
test(`GetValueSet.js returns the correct link corresponding to the Office Visit value set in test3JSON`, () => {
  expect(loadValueSet(test3JSON)['Office Visit']).toEqual(officeID);
});
