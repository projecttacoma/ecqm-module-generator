function loadData(data) {
  const dataTypes = [];
  function traverseELM(array) {
    if (array.operand === undefined) {
      for (let h = 0; h < array.length; h += 1) {
        if (array[h].operand.dataType === undefined) {
          traverseELM(array[h].operand);
        } else {
          dataTypes.push(array[h].operand);
        }
      }
    }
    return array;
  }
  function getDataType(array) {
    let section;
    for (let i = 0; i < array.length; i += 1) {
      section = array[i].expression.operand;
      if (section.dataType !== undefined) {
        dataTypes.push(section);
      } else {
        section.forEach((o) => {
          const returnResult = traverseELM(o.operand);
          if (returnResult.dataType !== undefined) {
            dataTypes.push(returnResult);
          }
        });
      }
    }
  }
  if (data.mainLibrary.library.valueSets !== undefined) {
    const deff = data.mainLibrary.library.statements.def;
    const filtered = deff.filter((d) => {
      return d.expression.operand !== undefined;
    });
    getDataType(filtered);
  } else if (data.mainLibrary.library.includes !== undefined && data.dependencies !== undefined) {
    const deff = data.mainLibrary.library.statements.def;
    const filteredMain = deff.filter((d) => {
      return d.expression.libraryName !== undefined;
    });
    const filtered = [];
    data.dependencies.forEach((dependency) => {
      const deff2 = dependency.library.statements.def;
      const filteredDependency = deff2.filter((d) => {
        return d.expression.operand !== undefined;
      });
      filteredMain.forEach((main) => {
        filteredDependency.forEach((fDepend) => {
          if (main.expression.name === fDepend.name) filtered.push(fDepend);
        });
      });
    });
    getDataType(filtered);
  }
  return dataTypes;
}
module.exports = loadData;
