function loadData(data) {
  const dataTypes = [];
  function traverseELM(array) {
    if (array.operand === undefined) {
      for (let h = 0; h < array.length; h += 1) {
        if (array[h].operand.dataType === undefined) {
          traverseELM(array[h].operand);
        } else dataTypes.push(array[h].operand);
      }
    }
    return array;
  }
  function getDataType(file) {
    const deff = file.library.statements.def;
    const filtered = deff.filter((d) => {
      return d.expression.operand !== undefined;
    });
    let section;
    for (let i = 0; i < filtered.length; i += 1) {
      section = filtered[i].expression.operand;
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
    getDataType(data.mainLibrary);
  } else if (data.mainLibrary.library.includes !== undefined && data.dependencies !== undefined) {
    let p;
    data.mainLibrary.library.includes.def.forEach((part) => {
      p = part.path;
      data.dependencies.forEach((dependency) => {
        if (dependency.library.identifier.id === p && dependency.library.valueSets !== undefined) {
          getDataType(dependency);
        }
      });
    });
  }
  return dataTypes;
}
module.exports = loadData;
