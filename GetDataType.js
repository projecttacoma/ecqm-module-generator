const data = require('./response.json');

const dataTypes = [];
function loadData() {
  const deff = data.library.statements.def;
  const filtered = deff.filter((d) => {
    return d.expression.operand !== undefined;
  });
  for (let i = 0; i < filtered.length; i += 1) {
    dataTypes.push(filtered[i].expression.operand.dataType);
  }

  return dataTypes;
}
module.exports = loadData;
