const JSONMap = {
  '{http://hl7.org/fhir}Encounter': {
    type: 'Encounter',
    direct_transition: 'Encounter',
    codes: [
      {
        code: '',
        system: '',
        display: '',
        value_set: 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1020',
      },
    ],
    encounter_class: 'encounter_class',
  },
  '{http://hl7.org/fhir}Condition': {
    type: 'ConditionOnset',
    direct_transition: 'Condition',
    target_encounter: 'target_encounter',
    codes: [
      {
        code: '',
        system: '',
        display: '',
        value_set: 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1020',
      },
    ],
  },
  '{http://hl7.org/fhir}AllergyIntolerance': {
    type: 'AllergyOnset',
    direct_transition: 'AllergyIntolerance',
    target_encounter: 'target_encounter',
    codes: [
      {
        code: '',
        system: '',
        display: '',
        value_set: 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1020',
      },
    ],
  },
  '{http://hl7.org/fhir}Medication': {
    type: 'MedicationOrder',
    direct_transition: 'Medication',
    codes: [
      {
        code: '',
        system: '',
        display: '',
        value_set: 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1020',
      },
    ],
  },
  '{http://hl7.org/fhir}CarePlan': {
    type: 'CarePlanStart',
    direct_transition: 'CarePlan',
    codes: [
      {
        code: '',
        system: '',
        display: '',
        value_set: 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1020',
      },
    ],
  },
  '{http://hl7.org/fhir}Procedure': {
    type: 'Procedure',
    direct_transition: 'Procedure',
    codes: [
      {
        code: '',
        system: '',
        display: '',
        value_set: 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1020',
      },
    ],
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
    codes: [
      {
        code: '',
        system: '',
        display: '',
        value_set: 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1020',
      },
    ],
  },
  '{http://hl7.org/fhir}DiagnosticReport': {
    type: 'DiagnosticReport',
    direct_transition: 'DiagnosticReport',
    number_of_observations: 'number_of_observations',
    codes: [
      {
        code: '',
        system: '',
        display: '',
        value_set: 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1020',
      },
    ],
  },
};

module.exports = JSONMap;