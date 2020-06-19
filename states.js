class BaseState {
    constructor(name) {
        this.name = name;
        this.remarks = [];
    }
    toJSON(){
        return{
        "type":this.type,
        "direct_transition":this.name
        }
    }
}
class InitialState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'Initial';
    }
}
class EncounterState extends BaseState {
    constructor(name, encounter_class, codes) {
        super(name);
        this.type = 'Encounter';
        this.encounter_class = encounter_class;
        this.codes = codes;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            "codes":this.codes,
            "encounter_class":this.encounter_class
        };
    }
}
class EncounterEndState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'EncounterEnd';
    }
}
class ConditionOnsetState extends BaseState {
    constructor(name, target_encounter, codes) {
        super(name);
        this.type = 'ConditionOnset';
        this.target_encounter = target_encounter;
        this.codes = codes;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            "target_encounter":this.target_encounter,
            "codes":this.codes
        }
    }
}
class ConditionEndState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'ConditionEnd';
    }
}
class AllergyOnsetState extends BaseState {
    constructor(name, target_encounter, codes) {
        super(name);
        this.type = 'AllergyOnset';
        this.target_encounter = target_encounter;
        this.codes = codes;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            "target_encounter":this.target_encounter,
            "codes":this.codes
        }
    }
}
class AllergyEndState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'AllergyEnd';
    }
}
class MedicationOrderState extends BaseState {
    constructor(name, codes) {
        super(name);
        this.type = 'MedicationOrder';
        this.codes = codes;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            "codes":this.codes
        }
    }
}
class MedicationEndState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'MedicationEnd';
    }
}
class CarePlanStartState extends BaseState {
    constructor(name, codes) {
        super(name);
        this.type = 'CarePlanStart';
        this.codes = codes;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            "codes":this.codes
        }
    }
}
class CarePlanEndState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'CarePlanEnd';
    }
}
class ProcedureState extends BaseState {
    constructor(name, codes, duration) {
        super(name);
        this.type = 'Procedure';
        this.codes = codes;
        this.duration = duration;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            "codes": this.codes,
            "duration": this.duration
        }
    }
}
class ImagingStudyState extends BaseState {
    constructor(name, procedure_code, series) {
        super(name);
        this.type = 'ImagingStudy';
        this.procedure_code = procedure_code;
        this.series = series;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            "procedure_code":this.procedure_code,
            "series":this.series

        }
    }
}
class DeviceState extends BaseState {
    constructor(name, code) {
        super(name);
        this.type = 'Device';
        this.code = code;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            "code":this.code
        }
    }
}
class DeviceEndState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'DeviceEnd';
    }
}
class SupplyListState extends BaseState {
    constructor(name, supplies) {
        super(name);
        this.type = 'SupplyList';
        this.supplies = supplies;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            "supplies":this.supplies
 
        }
    }
}
class VitalSignState extends BaseState {
    constructor(name, vital_sign, unit) {
        super(name);
        this.type = 'VitalSign';
        this.vital_sign = vital_sign;
        this.unit = unit;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            "vital_sign":this.vital_sign,
            "unit":this.unit

        }
    }
}
class ObservationState extends BaseState {
    constructor(name, category, unit, codes) {
        super(name);
        this.type = 'Observation';
        this.category = category;
        this.unit = unit;
        this.codes = codes;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            "category":this.category,
            "unit":this.unit,
            "codes":this.codes

        }
    }
}
class MultiObservationState extends BaseState {
    constructor(name, category, number_of_observations, codes) {
        super(name);
        this.type = 'MultiObservation';
        this.category = category;
        this.number_of_observations = number_of_observations;
        this.codes = codes;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            "category":this.category,
            "number_of_observations":this.number_of_observations,
            "codes":this.codes
        }
    }
}
class DiagnosticReportState extends BaseState {
    constructor(name, number_of_observations, codes) {
        super(name);
        this.type = 'DiagnosticReport';
        this.number_of_observations = number_of_observations;
        this.codes = codes;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            "number_of_observations":this.number_of_observations,
            "codes":this.codes
            
        }
    }
}
class SymptomState extends BaseState {
    constructor(name, symptom, cause, probability) {
        super(name);
        this.type = 'Symptom';
        this.symptom = symptom;
        this.cause = cause;
        this.probability = probability;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            "symptom":this.symptom,
            "cause":this.cause,
            "probability":this.probability
        }
    }
}
class DeathState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'Death';
    }
}
class TerminalState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'Terminal';
    }
}

module.exports = {
    InitialState, EncounterState, EncounterEndState,
    ConditionOnsetState, ConditionEndState, AllergyOnsetState,
    AllergyEndState, MedicationOrderState, MedicationEndState,
    CarePlanStartState, CarePlanEndState, ProcedureState,
    ImagingStudyState, DeviceState, DeviceEndState,
    SupplyListState, VitalSignState, ObservationState, MultiObservationState,
    DiagnosticReportState, SymptomState, DeathState, TerminalState, 
}