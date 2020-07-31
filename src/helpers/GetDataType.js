const _ = require('lodash');
const { mapDeep } = require('deepdash')(_);

function getDataType(def) {
  return _.compact(
    mapDeep(def, (value, key) => {
      if (value.dataType && (key === 'expression' || key === 'operand')) {
        return value;
      }
      return null;
    })
  );
}
function loadDependencies(def) {
  const dependencyMap = {};
  def.forEach((d) => {
    dependencyMap[d.localIdentifier] = d.path;
  });
  return dependencyMap;
}
function getExpressionRefs(def) {
  return _.compact(
    mapDeep(def, (value, key) => {
      if (value.libraryName && value.type === 'ExpressionRef' && (key === 'expression' || key === 'operand')) {
        return value;
      }
      return null;
    })
  );
}
function loadData(data) {
  let dataTypes = getDataType(data.mainLibrary.library.statements.def);
  if (data.mainLibrary.library.includes !== undefined && data.dependencies !== undefined) {
    const dependencyMap = loadDependencies(data.mainLibrary.library.includes.def);
    const expressionRefs = getExpressionRefs(data.mainLibrary.library.statements.def);
    expressionRefs.forEach((ref) => {
      const libraryIdentifier = dependencyMap[ref.libraryName];
      const elm = data.dependencies.find((dependency) => {
        return dependency.library.identifier.id === libraryIdentifier;
      });
      const expression = elm.library.statements.def.find((e) => {
        return ref.name === e.name;
      });
      dataTypes = dataTypes.concat(getDataType([expression]));
    });
  }
  return dataTypes;
}
module.exports = loadData;
