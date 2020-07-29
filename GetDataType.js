const _ = require('lodash');
const { mapDeep } = require('deepdash')(_);

function loadData(data) {
  const expressions = data.mainLibrary.library.statements.def.map((e) => e.expression);
  const dataTypes = _.compact(
    // eslint-disable-next-line consistent-return
    mapDeep(expressions, (value, key) => {
      if (value.dataType && (key === 'expression' || key === 'operand')) return value;
    })
  );
  return dataTypes;
}
module.exports = loadData;
