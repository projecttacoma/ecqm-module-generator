const JSONMap = {
  '{http://hl7.org/fhir}Encounter': {
    type: 'Encounter',
    direct_transition: 'Encounter',
    codes: [],
    encounter_class: 'encounter_class',
  },
  '{http://hl7.org/fhir}Condition': {
    type: 'ConditionOnset',
    direct_transition: 'Condition',
    target_encounter: 'target_encounter',
    codes: [],
  },
  '{http://hl7.org/fhir}AllergyIntolerance': {
    type: 'AllergyOnset',
    direct_transition: 'AllergyIntolerance',
    target_encounter: 'target_encounter',
    codes: [],
  },
  '{http://hl7.org/fhir}Medication': {
    type: 'MedicationOrder',
    direct_transition: 'Medication',
    codes: [],
  },
  '{http://hl7.org/fhir}CarePlan': {
    type: 'CarePlanStart',
    direct_transition: 'CarePlan',
    codes: [],
  },
  '{http://hl7.org/fhir}Procedure': {
    type: 'Procedure',
    direct_transition: 'Procedure',
    codes: [],
    duration: undefined,
  },
  '{http://hl7.org/fhir}ImagingStudy': {
    type: 'ImagingStudy',
    direct_transition: 'ImagingStudy',
    procedure_code: 'procedure_code',
    series: [],
  },
  '{http://hl7.org/fhir}Device': {
    type: 'Device',
    direct_transition: 'Device',
    code: 'code',
  },
  '{http://hl7.org/fhir}SupplyDelivery': {
    type: 'SupplyList',
    direct_transition: 'SupplyDelivery',
    supplies: 'supplies',
  },
  '{http://hl7.org/fhir}Observation': {
    type: 'Observation',
    direct_transition: 'Observation',
    category: 'category',
    unit: 'unit',
    codes: [],
  },
  '{http://hl7.org/fhir}DiagnosticReport': {
    type: 'DiagnosticReport',
    direct_transition: 'DiagnosticReport',
    number_of_observations: 'number_of_observations',
    codes: [],
  },
};

module.exports = JSONMap;
