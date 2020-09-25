# eCQM_Module_Generator

A command line interface that takes in ELM JSON and outputs Synthea Module JSON to a file. This program automates the creation of Synthea modules creating a backbone to make it easier to create modules in the future. From the input of ELM JSON, a function returns data types and valuesets that are nested within the file. These data types are mapped to corresponding Synthea clinical states. The output of the program is Synthea module JSON exported to a file that can be uploaded to the Synthea module generator.

## Usage
### Prerequisites
[Node.js >=10.15.1](https://nodejs.org/en/)

### Installation with npm:
Install the repository:
```bash
git clone https://github.com/projecttacoma/ecqm-module-generator
```
Install the dependencies:
```bash
npm install
```

### Input
Input into terminal:
``` bash
node src/cli.js --bundle test/elm/<ELM Bundle>
```
The input is a JSON bundle. This bundle must contain FHIR measure, library, and any dependent libraries. 

### Output
Example logger output in the terminal:
``` bash
info:    Sucessfully loaded in bundle with id: EXM130-7.3.000-bundle
info:    finding main library with ID: library-EXM130-7.3.000
info:    finding dependencies with IDs: library-FHIRHelpers-4.0.1,library-Hospice-2.0.000,library-AdultOutpatientEncounters-2.0.000,library-MATGlobalCommonFunctions-5.0.000,library-SupplementalDataElements-2.0.0
info:    adding dependencies to ELMFiles
info:    exporting file with name: EXM130.json
info:    adding state of type: {http://hl7.org/fhir}Procedure
info:    adding value_set with id of: http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.198.12.1010
info:    adding state of type: {http://hl7.org/fhir}Procedure
info:    adding value_set with id of: http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1038
info:    adding state of type: {http://hl7.org/fhir}Procedure
info:    adding value_set with id of: http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.198.12.1019
info:    adding state of type: {http://hl7.org/fhir}Condition
info:    adding value_set with id of: http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1001
info:    adding state of type: {http://hl7.org/fhir}Observation
info:    adding value_set with id of: http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.198.12.1011
info:    adding state of type: {http://hl7.org/fhir}Observation
info:    adding value_set with id of: http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1039
info:    adding state of type: {http://hl7.org/fhir}Procedure
info:    adding value_set with id of: http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1020
info:    adding state of type: {http://hl7.org/fhir}Encounter
info:    adding value_set with id of: http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.666.5.307
info:    adding state of type: {http://hl7.org/fhir}Procedure
info:    adding value_set with id of: http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1108.15
info:    adding state of type: {http://hl7.org/fhir}Encounter
info:    adding value_set with id of: http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.101.12.1001
info:    adding state of type: {http://hl7.org/fhir}Encounter
info:    adding value_set with id of: http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.526.3.1240
info:    adding state of type: {http://hl7.org/fhir}Encounter
info:    adding value_set with id of: http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.101.12.1025
info:    adding state of type: {http://hl7.org/fhir}Encounter
info:    adding value_set with id of: http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.101.12.1023
info:    adding state of type: {http://hl7.org/fhir}Encounter
info:    adding value_set with id of: http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.101.12.1016
info:    EXM130.json was exported successfully
```
A file with the name corresponding to the indentifier id of the JSON file will be exported to the file system containing the Synthea module JSON. 
