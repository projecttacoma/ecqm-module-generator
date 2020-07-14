function loadValueSet(data) {
  const valueSetMap = [];
  data.library.valueSets.def.forEach((set) => {
    valueSetMap[set.name] = set.id;
  });
  return valueSetMap;
}
module.exports = loadValueSet;
