const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const exportModule = require('./exportModule.js');
const logger = require('./winston.js');

const program = new Command();
program.version('0.0.1');
function data() {
  program
    .requiredOption('--elmJSON <file>', 'elm json to turn to synthea module')
    .option('--library <library>', 'directory of dependent libraries');
  program.parse(process.argv);
  const returns = {};
  const mainFile = fs.readFileSync(program.elmJSON, 'utf8');
  returns.mainLibrary = JSON.parse(mainFile);
  if (program.library !== undefined) {
    const directoryPath = path.join(__dirname, program.library);
    returns.dependencies = [];
    try {
      const files = fs.readdirSync(directoryPath);
      files.forEach((file) => {
        const library = fs.readFileSync(`${directoryPath}/${file}`, 'utf8');
        returns.dependencies.push(JSON.parse(library));
      });
    } catch (err) {
      console.log(err);
    }
  }
  return returns;
}

logger.info(`name of file: ${data().mainLibrary.library.identifier.id}.json`);
const moduleJSON = exportModule(data());
fs.writeFileSync(`${data().mainLibrary.library.identifier.id}.json`, JSON.stringify(moduleJSON));
