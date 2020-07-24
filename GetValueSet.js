function loadValueSet(data) {
  const valueSetMap = [];
  function getValueSet(file) {
    file.library.valueSets.def.forEach((set) => {
      valueSetMap[set.name] = set.id;
    });
  }
  if (data.mainLibrary.library.valueSets !== undefined) {
    getValueSet(data.mainLibrary);
  } else if (data.dependencies !== undefined) {
    data.dependencies.forEach((dependency) => {
      getValueSet(dependency);
    });
  }
  return valueSetMap;
}
module.exports = loadValueSet;
