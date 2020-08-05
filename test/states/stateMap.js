const classes = require('../../src/states/states.js'); // .js

const prefix = '{http://hl7.org/fhir}';
const STATE_LOOKUP = {
  [`${prefix}Encounter`]: classes.EncounterState,
  [`${prefix}Condition`]: classes.ConditionOnsetState,
  [`${prefix}AllergyIntolerance`]: classes.AllergyOnsetState,
  [`${prefix}Medication`]: classes.MedicationOrderState,
  [`${prefix}CarePlan`]: classes.CarePlanStartState,
  [`${prefix}Procedure`]: classes.ProcedureState,
  [`${prefix}ImagingStudy`]: classes.ImagingStudyState,
  [`${prefix}Device`]: classes.DeviceState,
  [`${prefix}SupplyDelivery`]: classes.SupplyListState,
  [`${prefix}Observation`]: classes.ObservationState,
  [`${prefix}DiagnosticReport`]: classes.DiagnosticReportState,
};

module.exports = STATE_LOOKUP;
