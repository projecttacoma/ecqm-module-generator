const _ = require('lodash');
const { mapDeep } = require('deepdash')(_);


// Group similar functions (e.g. getDataType and getExpressionRefs together 

/*
function doSomething(def, condition) {
  return _.compact(mapDeep(def, (value, key) => if (condition(value,key)) return value));
}

doSomething(def, (value, key) => {
  return value.dataType !== undefined; 
})
doSomething(def, (value, key) => {
  return value.libraryName !== undefined; 
})
*/

function getDataType(def) {
  return _.compact(
    mapDeep(def, (value) => {
      // return value.dataType ? value : null
      if (value.dataType) { // maybe keep this???????????>????
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
    mapDeep(def, (value) => {
      if (value.libraryName && value.type === 'ExpressionRef') {
        return value;
      }
      return null;
    })
  );
}

// add docstring
// add inline comments to more complex code (like finds, maps, etc.)
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
