/**
 * creates a map from the name of a valueset to the corresponding link from all of the ELM Files in use
 *
 * @param {Object} ELMFiles - object containing the contents of the main library file and any dependencies
 * @returns {Object} valueSetMap - a valueset name to link map
 */
function loadValueSet(ELMFiles) {
  const valueSetMap = {};
  function getValueSet(file) {
    file.library.valueSets.def.forEach((set) => {
      valueSetMap[set.name] = set.id;
    });
  }
  if (ELMFiles.mainLibrary.library.valueSets !== undefined) {
    getValueSet(ELMFiles.mainLibrary);
  }
  if (ELMFiles.dependencies !== undefined) {
    ELMFiles.dependencies.forEach((dependency) => {
      if (dependency.library.valueSets !== undefined) getValueSet(dependency);
    });
  }
  return valueSetMap;
}
module.exports = loadValueSet;
