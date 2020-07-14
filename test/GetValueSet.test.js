const loadValueSet = require('../GetValueSet.js');
const testJSON = require('./testJSON.json');
const test2JSON = require('./test2JSON.json');
const test3JSON = require('./test3JSON.json');
const test4JSON = require('../response.json');
const tests = [testJSON, test2JSON, test3JSON];
const testID = 'link';
const colonID ='http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1020';
tests.forEach((testNum)=>{
test(`GetValueSet.js returns the correct link corresponding to the Colonoscopy value set in ${testNum}`, () => {
  expect(loadValueSet(testNum)['Colonoscopy']).toEqual(colonID);
});
});
test (`GetValueSet.js returns the correct link corresponding to the test value set in response.json`,()=>{
    expect(loadValueSet(test4JSON)['test']).toEqual(testID);

})
