const states = require('./states.js');
function factory(input) {
    let newState;
    switch (input) {
        case '{http://hl7.org/fhir}Encounter':
            newState = new states.EncounterState('name', 'encounter_class', ['codes']);
            break;
            case '{http://hl7.org/fhir}Condition':
                newState = new states.ConditionOnsetState('name', 'target_encounter', ['codes']);
                break;
            case '{http://hl7.org/fhir}AllergyIntolerance':
                newState = new states.AllergyOnsetState('name', 'target_encounter', ['codes']);
                break;
            case '{http://hl7.org/fhir}MedicationOrder':
                newState = new states.MedicationOrderState('name',['codes']);
                break;
            case '{http://hl7.org/fhir}CarePlan':
                newState = new states.CarePlanStartState('name',['codes']);
                break;
            case '{http://hl7.org/fhir}Procedure':
                newState = new states.ProcedureState('name',['codes'],'duration');
                break;
            case '{http://hl7.org/fhir}ImagingStudy':
                newState = new states.ImagingStudyState('name', 'procedure_code', 'series');
                break;
            case '{http://hl7.org/fhir}Device':
                newState = new states.DeviceState('name','code');
                break;
            case '{http://hl7.org/fhir}SupplyDelivery':
                newState = new states.SupplyListState('name','supplies');
                break;
            case '{http://hl7.org/fhir}Observation':
                newState = new states.ObservationState('name', 'category', 'unit', ['codes']);
                break;
            case '{http://hl7.org/fhir}DiagnosticReport':
                newState = new states.DiagnosticReportState('name', 'number_of_observations', ['codes']);
                break;
            default:
                newState = 'no corresponding state for that datatype'
    }
    return newState;
}
module.exports = factory;