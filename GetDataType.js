const data = require('./response.json');
const dataTypes = [];
function loadData(e) {
  const deff = data.library.statements.def;
  const filtered = deff.filter(defined);
  for (let i = 0; i < filtered.length; i++) {
    dataTypes.push(filtered[i].expression.operand.dataType);
  }
  function defined(set) {
    for (let j = 0; j < deff.length; j++) {
      if (set.expression.operand !== undefined) return set;
    }
  }
  return dataTypes;
}

module.exports = loadData;
