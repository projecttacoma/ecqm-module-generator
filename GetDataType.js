const dataTypes = [];
function loadData(data) {
  const deff = data.library.statements.def;
  const filtered = deff.filter((d) => {
    return d.expression.operand !== undefined;
  });
  function recursion(array) {
    if (array.operand === undefined) {
      for (let h = 0; h < array.length; h += 1) {
        if (array[h].operand.dataType === undefined) {
          recursion(array[h].operand);
        } else dataTypes.push(array[h].operand.dataType);
      }
    }
    return array.dataType;
  }
  let section;
  for (let i = 0; i < filtered.length; i += 1) {
    section = filtered[i].expression.operand;
    if (section.dataType !== undefined) {
      dataTypes.push(section.dataType);
    } else {
      section.forEach((o) => {
        if (recursion(o.operand) !== undefined) {
          dataTypes.push(recursion(o.operand));
        }
      });
    }
  }

  return dataTypes;
}
module.exports = loadData;
