const _ = require('lodash');
const { mapDeep } = require('deepdash')(_);

function getDataTypesAndRefs(def, condition) {
  return _.compact(
    mapDeep(def, (value) => {
      return condition(value) ? value : null;
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

/**
 * function takes in contents of main library and all dependencies and returns all of the objects containing data types regardless of nesting or expression references
 *
 * @param {Object} ELMFiles - object containing the contents of the main library file and any dependencies
 * @returns {Object} dataTypes - array of objects that contain the dataTypes retrived from the main file and any dependencies
 */
function loadData(ELMFiles) {
  let dataTypes = getDataTypesAndRefs(ELMFiles.mainLibrary.library.statements.def, (value) => {
    return value.dataType ? value : null;
  });
  if (ELMFiles.mainLibrary.library.includes !== undefined && ELMFiles.dependencies !== undefined) {
    // creates a map of the localIdentifier to the path of the helper library from the mainFile if there are any dependencies
    const dependencyMap = loadDependencies(ELMFiles.mainLibrary.library.includes.def);
    // creates an array of all the objects that contain expression refs
    const expressionRefs = getDataTypesAndRefs(ELMFiles.mainLibrary.library.statements.def, (value) => {
      return value.libraryName && value.type === 'ExpressionRef' ? value : null;
    });
    expressionRefs.forEach((ref) => {
      const libraryIdentifier = dependencyMap[ref.libraryName];

      // finds the ELM file with the corresponding id to the path from the main library
      const elm = ELMFiles.dependencies.find((dependency) => {
        return (
          dependency.library.identifier.id === libraryIdentifier ||
          `${dependency.library.identifier.system}/${dependency.library.identifier.id}` === libraryIdentifier
        );
      });
      // returns the object from the dependent library that has the corresponding name to the expression ref object in the main library
      let expression = elm.library.statements.def.find((e) => {
        return ref.name === e.name;
      });
      // creates an array containing objects from the dependent libraries that have expression refs
      const moreRefs = getDataTypesAndRefs(expression, (value) => {
        return value.name && value.type === 'ExpressionRef' ? value : null;
      });
      if (moreRefs !== []) {
        moreRefs.forEach((reff) => {
          expression = elm.library.statements.def.find((e) => {
            return reff.name === e.name;
          });
        });
        dataTypes = dataTypes.concat(
          getDataTypesAndRefs(expression, (value) => {
            return value.dataType ? value : null;
          })
        );
      } else {
        dataTypes = dataTypes.concat(
          getDataTypesAndRefs(expression, (value) => {
            return value.dataType ? value : null;
          })
        );
      }
    });
  }
  return dataTypes;
}
module.exports = loadData;
