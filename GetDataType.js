function loadData(data) {
  const dataTypes = [];
  const deff = data.library.statements.def;

  const filtered = deff.filter((d) => {
    return d.expression.operand !== undefined;
  });
  function traverseELM(array) {
    if (array.operand === undefined) {
      for (let h = 0; h < array.length; h += 1) {
        if (array[h].operand.dataType === undefined) {
          traverseELM(array[h].operand);
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
        const returnResult = traverseELM(o.operand);
        if (returnResult !== undefined) {
          dataTypes.push(returnResult);
        }
      });
    }
  }

  return dataTypes;
}
module.exports = loadData;
