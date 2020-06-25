const states = require('./states.js');

function factory(input) {
  let newState;
  switch (input) {
    case '{http://hl7.org/fhir}Encounter':
      newState = new states.EncounterState('Encounter', 'encounter_class', ['codes']);
      break;
    case '{http://hl7.org/fhir}Condition':
      newState = new states.ConditionOnsetState('Condition', 'target_encounter', ['codes']);
      break;
    case '{http://hl7.org/fhir}AllergyIntolerance':
      newState = new states.AllergyOnsetState('AllergyIntolerance', 'target_encounter', ['codes']);
      break;
    case '{http://hl7.org/fhir}Medication':
      newState = new states.MedicationOrderState('Medication', ['codes']);
      break;
    case '{http://hl7.org/fhir}CarePlan':
      newState = new states.CarePlanStartState('CarePlan', ['codes']);
      break;
    case '{http://hl7.org/fhir}Procedure':
      newState = new states.ProcedureState('Procedure', ['codes']);
      break;
    case '{http://hl7.org/fhir}ImagingStudy':
      newState = new states.ImagingStudyState('ImagingStudy', 'procedure_code', ['series']);
      break;
    case '{http://hl7.org/fhir}Device':
      newState = new states.DeviceState('Device', 'code');
      break;
    case '{http://hl7.org/fhir}SupplyDelivery':
      newState = new states.SupplyListState('SupplyDelivery', 'supplies');
      break;
    case '{http://hl7.org/fhir}Observation':
      newState = new states.ObservationState('Observation', 'category', 'unit', ['codes']);
      break;
    case '{http://hl7.org/fhir}DiagnosticReport':
      newState = new states.DiagnosticReportState('DiagnosticReport', 'number_of_observations', ['codes']);
      break;
    default:
      newState = null;
      break;
  }
  return newState;
}
module.exports = factory;
