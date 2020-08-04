const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const exportModule = require('./exportModule.js'); // don't use .js in imports
const logger = require('./helpers/winston.js');

const program = new Command();
program.version('0.0.1');
function data() { // maybe rename
  program
 // .version('0.0.1')
    .requiredOption('--elmJSON <file>', 'elm json to turn to synthea module')
    .option('--library <library>', 'directory of dependent libraries') // maybe change name to like dependencies or something
    .parse(process.argv);
  const returns = {}; // rename
  const mainFile = fs.readFileSync(program.elmJSON, 'utf8'); // add error handling
  returns.mainLibrary = JSON.parse(mainFile);
  if (program.library !== undefined) {
    const directoryPath = path.join(__dirname, program.library); // consider using absolute path (look at path.resolve)
    returns.dependencies = [];
    try {
      const files = fs.readdirSync(directoryPath); // add a .filter to only include files that end in .json
      files.forEach((file) => {
        logger.info(`parsing ${file}`); // add more logs like this
        const library = fs.readFileSync(`${directoryPath}/${file}`, 'utf8');
        returns.dependencies.push(JSON.parse(library));
      });
    } catch (err) {
      logger.error(err.message);
      process.exit(1);
    }
  }
  return returns;
}
const mainFile = data();
logger.info(`name of file: ${mainFile.mainLibrary.library.identifier.id}.json`);
const moduleJSON = exportModule(mainFile);
fs.writeFileSync(`${mainFile.mainLibrary.library.identifier.id}.json`, JSON.stringify(moduleJSON));
