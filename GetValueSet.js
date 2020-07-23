function loadValueSet(data) {
  const valueSetMap = [];
  if (data.mainLibrary.library.valueSets !== undefined) {
    data.mainLibrary.library.valueSets.def.forEach((set) => {
      valueSetMap[set.name] = set.id;
    });
  }
  return valueSetMap;
}
module.exports = loadValueSet;
