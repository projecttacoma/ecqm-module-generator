const _ = require('lodash');
const { mapDeep } = require('deepdash')(_);

function loadData(data) {
  const expressions = data.mainLibrary.library.statements.def.map((e) => e.expression);
  const dataTypes = _.compact(
    mapDeep(expressions, (value, key) => {
      if (value.dataType && (key === 'expression' || key === 'operand')) return value;
      return null;
    })
  );
  return dataTypes;
}
module.exports = loadData;
