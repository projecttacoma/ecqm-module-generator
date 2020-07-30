const _ = require('lodash');
const { mapDeep } = require('deepdash')(_);

function loadData(data) {
  const dataTypes = [];
  function getDataType(file) {
    _.compact(
      mapDeep(file.library.statements.def, (value, key) => {
        if (value.dataType && (key === 'expression' || key === 'operand')) {
          dataTypes.push(value);
        }
      })
    );
  }
  if (data.mainLibrary.library.valueSets !== undefined) {
    getDataType(data.mainLibrary);
  } else if (data.mainLibrary.library.includes !== undefined && data.dependencies !== undefined) {
    const names = [];
    _.compact(
      mapDeep(data.mainLibrary.library.statements.def, (value, key) => {
        if (key === 'expression' || key === 'operand') names.push(value.name);
        return null;
      })
    );
    data.dependencies.forEach((dependency) => {
      names.forEach((name) => {
        dependency.library.statements.def.forEach((file) => {
          if (file.name === name) getDataType(dependency);
        });
      });
    });
  }
  return dataTypes;
}
module.exports = loadData;
