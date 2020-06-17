class BaseState {
    constructor(name) {
        this.name = name;
        this.remarks = [];
    }
<<<<<<< Updated upstream
    toJSON(){
        return{
        "type":this.type,
        "direct_transition":this.name
=======
    toJSON() {
        return {
            "type": this.type,
            "direct_transition": this.name
>>>>>>> Stashed changes
        }
    }
}
class InitialState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'Initial';
    }
    toJSON() {
        return {
            ...super.toJSON()
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
            ...super.toJSON(),
<<<<<<< Updated upstream
            "codes":this.codes,
            "encounter_class":this.encounter_class
=======
            "codes": this.codes,
            "encounter_class": this.encounter_class
>>>>>>> Stashed changes
        };
    }
}
class EncounterEndState extends BaseState {
    constructor(name) {
        super(name);
        this.type = 'EncounterEnd';
    }
    toJSON() {
        return {
            ...super.toJSON()
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
            ...super.toJSON(),
<<<<<<< Updated upstream
            "target_encounter":this.target_encounter,
            "codes":this.codes
=======
            "target_encounter": this.target_encounter,
            "codes": this.codes
>>>>>>> Stashed changes
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
            ...super.toJSON()
        }
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
<<<<<<< Updated upstream
            "target_encounter":this.target_encounter,
            "codes":this.codes
=======
            "target_encounter": this.target_encounter,
            "codes": this.codes,
>>>>>>> Stashed changes
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
            ...super.toJSON()
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
            ...super.toJSON(),
<<<<<<< Updated upstream
            "codes":this.codes
=======
            "codes": this.codes
>>>>>>> Stashed changes
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
            ...super.toJSON()
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
            ...super.toJSON(),
<<<<<<< Updated upstream
            "codes":this.codes
=======
            "codes": this.codes
>>>>>>> Stashed changes
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
            ...super.toJSON()
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
            ...super.toJSON(),
            "codes": this.codes,
<<<<<<< Updated upstream
            "duration": this.duration
=======
            "duration": this.duration,
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            "procedure_code":this.procedure_code,
            "series":this.series
=======
            "procedure_code": this.procedure_code,
            "series": this.series,
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
            "code":this.code
=======
            "code": this.code
>>>>>>> Stashed changes
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
            ...super.toJSON()
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
            ...super.toJSON(),
<<<<<<< Updated upstream
            "supplies":this.supplies
 
=======
            "supplies": this.supplies

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            "vital_sign":this.vital_sign,
            "unit":this.unit
=======
            "vital_sign": this.vital_sign,
            "unit": this.unit
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
            "category":this.category,
            "unit":this.unit,
            "codes":this.codes
=======
            "category": this.category,
            "unit": this.unit,
            "codes": this.codes
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
            "category":this.category,
            "number_of_observations":this.number_of_observations,
            "codes":this.codes
=======
            "category": this.category,
            "number_of_observations": this.number_of_observations,
            "codes": this.codes
>>>>>>> Stashed changes
        }
    }
}
class DiagnosticReportState extends BaseState {
    constructor(name, number_of_observations, codes) {
        super(name);
        this.type = 'DiagnosticReport',
<<<<<<< Updated upstream
        this.number_of_observations = number_of_observations,
        this.codes = codes;
=======
            this.number_of_observations = number_of_observations,
            this.codes = codes;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            "number_of_observations": this.number_of_observations,
            "codes": this.codes

        }
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            "symptom":this.symptom,
            "cause":this.cause,
            "probability":this.probability
=======
            "symptom": this.symptom,
            "cause": this.cause,
            "probability": this.probability
>>>>>>> Stashed changes
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
            ...super.toJSON()
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
            ...super.toJSON()
        }
    }
}

module.exports = {
    InitialState, EncounterState, EncounterEndState,
    ConditionOnsetState, ConditionEndState, AllergyOnsetState,
    AllergyEndState, MedicationOrderState, MedicationEndState,
    CarePlanStartState, CarePlanEndState, ProcedureState,
    ImagingStudyState, DeviceState, DeviceEndState,
    SupplyListState, VitalSignState, ObservationState, MultiObservationState,
<<<<<<< Updated upstream
    DiagnosticReportState, SymptomState, DeathState, TerminalState, 
=======
    DiagnosticReportState, SymptomState, DeathState, TerminalState,
>>>>>>> Stashed changes
}