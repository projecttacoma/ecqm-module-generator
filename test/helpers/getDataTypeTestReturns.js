const simpleDataTypesReturn = [
  { dataType: '{http://hl7.org/fhir}Patient', type: 'Retrieve' },
  {
    dataType: '{http://hl7.org/fhir}Encounter',
    codeProperty: 'code',
    type: 'Retrieve',
    codes: { name: 'Colonoscopy', type: 'ValueSetRef' },
  },
  {
    dataType: '{http://hl7.org/fhir}Procedure',
    codeProperty: 'code',
    type: 'Retrieve',
    codes: { name: 'Colonoscopy', type: 'ValueSetRef' },
  },
];
const simpleNestingDataTypesReturn = [
  { dataType: '{http://hl7.org/fhir}Patient', type: 'Retrieve' },
  {
    dataType: '{http://hl7.org/fhir}Procedure',
    codeProperty: 'code',
    type: 'Retrieve',
    codes: { name: 'Colonoscopy', type: 'ValueSetRef' },
  },
  {
    dataType: '{http://hl7.org/fhir}Encounter',
    codeProperty: 'type',
    type: 'Retrieve',
    codes: { name: 'Colonoscopy', type: 'ValueSetRef' },
  },
];
const layeredNestingDataTypesReturn = [
  { dataType: '{http://hl7.org/fhir}Patient', type: 'Retrieve' },
  {
    dataType: '{http://hl7.org/fhir}Procedure',
    codeProperty: 'code',
    type: 'Retrieve',
    codes: { name: 'Colonoscopy', type: 'ValueSetRef' },
  },
  {
    dataType: '{http://hl7.org/fhir}Encounter',
    codeProperty: 'type',
    type: 'Retrieve',
    codes: { name: 'Office Visit', type: 'ValueSetRef' },
  },
  {
    dataType: '{http://hl7.org/fhir}Medication',
    codeProperty: 'medication',
    type: 'Retrieve',
    codes: { name: 'Colonoscopy', type: 'ValueSetRef' },
  },
];
const expressionRefReturn = [
  {
    dataType: '{http://hl7.org/fhir}Procedure',
    templateId: 'http://hl7.org/fhir/StructureDefinition/Procedure',
    codeProperty: 'code',
    type: 'Retrieve',
    codes: { name: 'Colonoscopy', type: 'ValueSetRef' },
  },
];
const twoExpressionRefsReturn = [
  {
    dataType: '{http://hl7.org/fhir}Procedure',
    templateId: 'http://hl7.org/fhir/StructureDefinition/Procedure',
    codeProperty: 'code',
    type: 'Retrieve',
    codes: {
      name: 'Colonoscopy',
      type: 'ValueSetRef',
    },
  },
];

module.exports = {
  simpleDataTypesReturn,
  simpleNestingDataTypesReturn,
  layeredNestingDataTypesReturn,
  expressionRefReturn,
  twoExpressionRefsReturn,
};
