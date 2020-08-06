const states = require('./states');

/**
 * creates an instance of a specified class with default values
 *
 * @param {string} dataType - the dataType from the object returned by getDataType.js
 * @param {string} name - the name from the object returned by getDataType.js
 * @param {string} link - link to the corresponding specific valueset, if there is no valueset then there is no link
 * @returns {Object} - instance of the state class from the data type with corresponding name
 */
function factory(dataType, name, link = null) {
  let codes;
  if (link !== null) {
    codes = [{ code: '', system: '', display: '', value_set: link }];
  } else {
    codes = [];
  }

  switch (dataType) {
    case '{http://hl7.org/fhir}Encounter':
      return new states.EncounterState(name, null, codes);
    case '{http://hl7.org/fhir}Condition':
      return new states.ConditionOnsetState(name, null, codes);
    case '{http://hl7.org/fhir}AllergyIntolerance':
      return new states.AllergyOnsetState(name, null, codes);
    case '{http://hl7.org/fhir}Medication':
      return new states.MedicationOrderState(name, codes);
    case '{http://hl7.org/fhir}CarePlan':
      return new states.CarePlanStartState(name, codes);
    case '{http://hl7.org/fhir}Procedure':
      return new states.ProcedureState(name, codes);
    case '{http://hl7.org/fhir}ImagingStudy':
      return new states.ImagingStudyState(name, null, []);
    case '{http://hl7.org/fhir}Device':
      return new states.DeviceState(name, null);
    case '{http://hl7.org/fhir}SupplyDelivery':
      return new states.SupplyListState(name, null);
    case '{http://hl7.org/fhir}Observation':
      return new states.ObservationState(name, null, null, codes);
    case '{http://hl7.org/fhir}DiagnosticReport':
      return new states.DiagnosticReportState(name, null, codes);
    default:
      return null;
  }
}

module.exports = factory;
