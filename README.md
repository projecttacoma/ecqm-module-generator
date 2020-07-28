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
node src/cli.js --elmJSON test/elm/<ELM File> [--library ../<directory>]
```
The user can chose which ELM File to input. 
If the ELM File depends on other files include [--library ../<directory>] where the directory has all the dependent files. 

### Output
Example logger output in the terminal:
``` bash
info:    adding value_set with id of: http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1020
info:    adding state of type: {http://hl7.org/fhir}Procedure
info:    adding value_set with id of: http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.101.12.1001
info:    adding state of type: {http://hl7.org/fhir}Encounter
info:    adding value_set with id of: http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1020
info:    adding state of type: {http://hl7.org/fhir}Medication
info:    name of module: Example Measure
info:    name of file: Example Measure.json
```
A file with the name corresponding to the indentifier id of the JSON file will be exported to the file system containing the Synthea module JSON. 
