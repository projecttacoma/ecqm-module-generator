const factory = require('./factory.js');
const states = require('./states.js');
const test = { "type": "Encounter", "direct_transition": "name", "codes": ["codes"], "encounter_class": "encounter_class" };
const JSONMap = {
    '{http://hl7.org/fhir}Encounter':{ "type": "Encounter", "direct_transition": "name", "codes": ["codes"], "encounter_class": "encounter_class" },
    '{http://hl7.org/fhir}Condition': {"type":"Condition","direct_transition":"name","target_encounter":"target_encounter","codes":["codes"]},
    '{http://hl7.org/fhir}AllergyIntolerance':{"type":"AllergyOnset","direct_transition":"name","target_encounter":"target_encounter","codes":["codes"]},
    '{http://hl7.org/fhir}MedicationOrder':{"type":"CarePlanStart","direct_transition":"name","codes":["codes"]},
    '{http://hl7.org/fhir}CarePlan':{"type":"MedicationOrder","direct_transition":"name","codes":["codes"]},
    '{http://hl7.org/fhir}Procedure':{"type":"Procedure","direct_transition":"name","codes":["codes"],"duration":"duration"},
    '{http://hl7.org/fhir}ImagingStudy':{"type":"ImagingStudy","direct_transition":"name","procedure_code":"procedure_code","series":"series"},
    '{http://hl7.org/fhir}Device':{"type":"Device","direct_transition":"name","code":"code"},
    '{http://hl7.org/fhir}SupplyDelivery':{"type":"SupplyDelivery","direct_transition":"name","supplies":"supplies"},
    '{http://hl7.org/fhir}Observation':{"type":"Observation","direct_transition":"name","category":"category","unit":"unit","codes":["codes"]},
    '{http://hl7.org/fhir}DiagnosticReport':{"type":"DiagnosticReport","direct_transition":"name","number_of_observations":"number_of_observations","codes":["codes"]}
};


module.exports = JSONMap;
