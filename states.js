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
}
class EncounterState extends BaseState {
    constructor(name, encounter_class, codes) {
        super(name);
        this.type = 'Encounter';
        this.encounter_class = encounter_class;
        this.codes = codes;
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
}
class ConditionEndState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'ConditionEnd';
    }
}
class AlleryOnsetState extends BaseState {
    constructor(name, target_encounter, codes) {
        super(name);
        this.type = 'AllergyOnset';
        this.target_encounter = target_encounter;
        this.codes = codes;
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
}
class CarePlanEndState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'CarePlanEnd';
    }
}
class ProcedureState extends BaseState {
    constructor(name, codes, duration, unit) {
        super(name);
        this.type = 'Procedure';
        this.codes = codes;
        //these are in a object 'duration'
        this.duration = duration;
        this.unit=unit;
    }
}
class ImagingStudyState extends BaseState {
    constructor(name, procedure_code, series) {
        super(name);
        this.type = 'ImagingStudy';
        this.procedure_code = procedure_code;
        this.series = series;
    }
}
class DeviceState extends BaseState {
    constructor(name, code) {
        super(name);
        this.type = 'Device';
        this.code = code;
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
}
class VitalSignState extends BaseState {
    constructor(name, vital_sign, unit) {
        super(name);
        this.type = 'VitalSign';
        this.vital_sign = vital_sign;
        this.unit = unit;
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
}
class MultiObservationState extends BaseState {
    constructor(name, category, number_of_observations, codes) {
        super(name);
        this.type = 'MultiObservation';
        this.category = category;
        this.number_of_observations = number_of_observations;
        this.codes = codes;
    }
}
class DiagnosticReportState extends BaseState {
    constructor(name, number_of_observations, codes) {
        super(name);
        this.type = 'DiagnosticReport';
        this.number_of_observations = number_of_observations;
        this.codes = codes;
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
    ConditionOnsetState, ConditionEndState, AlleryOnsetState,
    AllergyEndState, MedicationOrderState, MedicationEndState,
    CarePlanStartState, CarePlanEndState, ProcedureState,
    ImagingStudyState, DeviceState, DeviceEndState,
    SupplyListState, VitalSignState, ObservationState, MultiObservationState,
    DiagnosticReportState, SymptomState, DeathState, TerminalState
}