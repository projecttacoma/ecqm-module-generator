class BaseState {
    constructor(name) {
        this.name = name;
        this.remarks = [];
    }
}
class InitialState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'Initial';
    }
    toJSON() {
        return {
            "type": this.type,
            "direct_transition": this.name
        }
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
            "type": this.type,
            "encounter_class":this.encounter_class,
            "codes":this.codes,
            "direct_transition":this.name
        }
    }
}
class EncounterEndState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'EncounterEnd';
    }
    toJSON() {
        return {
            "type": this.type,
            "direct_transition": this.name
        }
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
            "type":this.type,
            "target_encounter":this.target_encounter,
            "codes":this.codes,
            "direct_transition":this.name
        }
    }
}
class ConditionEndState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'ConditionEnd';
    }
    toJSON() {
        return {
            "type":this.type,
            "direct_transition":this.name
        }
    }
}
class AlleryOnsetState extends BaseState {
    constructor(name, target_encounter, codes) {
        super(name);
        this.type = 'AllergyOnset';
        this.target_encounter = target_encounter;
        this.codes = codes;
    }
    toJSON() {
        return {
            "type":this.type,
            "target_encounter":this.target_encounter,
            "codes":this.codes,
            "direct_transition":this.name
        }
    }
}
class AllergyEndState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'AllergyEnd';
    }
    toJSON() {
        return {
            "type":this.type,
            "direct_transition":this.name
        }
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
            "type":this.type,
            "codes":this.codes,
            "direct_transition":this.name
        }
    }
}
class MedicationEndState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'MedicationEnd';
    }
    toJSON() {
        return {
            "type":this.type,
            "direct_transition":this.name
        }
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
            "type":this.type,
            "codes":this.codes,
            "direct_transition":this.name
        }
    }
}
class CarePlanEndState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'CarePlanEnd';
    }
    toJSON() {
        return {
            "type":this.type,
            "direct_transition":this.name
        }
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
            "type": this.type,
            "codes": this.codes,
            "duration": this.duration,
            "direct_transition": this.name
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
            "type":this.type,
            "procedure_code":this.procedure_code,
            "series":this.series,
            "direct_transition":this.name
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
            "type":this.type,
            "code":this.code,
            "direct_transition":this.name
        }
    }
}
class DeviceEndState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'DeviceEnd';
    }
    toJSON() {
        return {
            "type":this.type,
            "direct_transition":this.name
        }
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
            "type":this.type,
            "supplies":this.supplies,
            "direct_transition":this.name
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
            "type":this.type,
            "vital_sign":this.vital_sign,
            "unit":this.unit,
            "direct_transition":this.name
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
            "type":this.type,
            "category":this.category,
            "unit":this.unit,
            "codes":this.codes,
            "direct_transition":this.name
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
            "type":this.type,
            "category":this.category,
            "number_of_observations":this.number_of_observations,
            "codes":this.codes,
            "direct_transition":this.name
        }
    }
}
class DiagnosticReportState extends BaseState {
    constructor(name, number_of_observations, codes) {
        super(name);
        this.type = 'DiagnosticReport',
        this.number_of_observations = number_of_observations,
        this.codes = codes;
    }
    toJSON() {
        return {
            "type":this.type,
            "number_of_observations":this.number_of_observations,
            "codes":this.codes,
            "direct_transition":this.name
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
            "type":this.type,
            "symptom":this.symptom,
            "cause":this.cause,
            "probability":this.probability,
            "direct_transition":this.name
        }
    }
}
class DeathState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'Death';
    }
    toJSON() {
        return {
            "type":this.type,
            "direct_transition":this.name
        }
    }
}
class TerminalState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'Terminal';
    }
    toJSON() {
        return {
            "type":this.type,
            "direct_transition":this.name
        }
    }
}

module.exports = {
    InitialState, EncounterState, EncounterEndState,
    ConditionOnsetState, ConditionEndState, AlleryOnsetState,
    AllergyEndState, MedicationOrderState, MedicationEndState,
    CarePlanStartState, CarePlanEndState, ProcedureState,
    ImagingStudyState, DeviceState, DeviceEndState,
    SupplyListState, VitalSignState, ObservationState, MultiObservationState,
    DiagnosticReportState, SymptomState, DeathState, TerminalState
}