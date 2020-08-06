const loadData = require('../../src/helpers/getDataType');
const simpleDataTypes = require('../elm/simpleDataTypes.json');
const simpleNestingDataTypes = require('../elm/simpleNestingDataTypes.json');
const layeredNestingDataTypes = require('../elm/layeredNestingDataTypes.json');
const expressionRef = require('../elm/expressionRef.json');
const twoExpressionRefs = require('../elm/twoExpressionRefs.json');
const dependentLib = require('../../Library_References/ExpressionRefsHelper.json');
const resultsFile = require('./getDataTypeTestReturns');

const simpleDataTypesObject = { mainLibrary: simpleDataTypes };
const simpleNestingDataTypesObject = { mainLibrary: simpleNestingDataTypes };
const layeredNestingDataTypesObject = { mainLibrary: layeredNestingDataTypes };
const expressionRefObject = { mainLibrary: expressionRef, dependencies: [dependentLib] };
const twoExpressionRefsObject = { mainLibrary: twoExpressionRefs, dependencies: [dependentLib] };

const { simpleDataTypesReturn } = resultsFile;
const { simpleNestingDataTypesReturn } = resultsFile;
const { layeredNestingDataTypesReturn } = resultsFile;
const { expressionRefReturn } = resultsFile;
const { twoExpressionRefsReturn } = resultsFile;

test(`GetDataType.js returns the correct data types for testJSON file`, () => {
  expect(loadData(simpleDataTypesObject)).toEqual(simpleDataTypesReturn);
});
test(`GetDataType.js returns the correct data types for test2JSON file`, () => {
  expect(loadData(simpleNestingDataTypesObject)).toEqual(simpleNestingDataTypesReturn);
});
test(`GetDataType.js returns the correct data types for test3JSON file`, () => {
  expect(loadData(layeredNestingDataTypesObject)).toEqual(layeredNestingDataTypesReturn);
});
test(`GetDataType.js returns the correct data types for ExpressionRefs file`, () => {
  expect(loadData(expressionRefObject)).toEqual(expressionRefReturn);
});
test(`GetDataType.js returns the correct data types for TwoExpressionRefs file`, () => {
  expect(loadData(twoExpressionRefsObject)).toEqual(twoExpressionRefsReturn);
});
