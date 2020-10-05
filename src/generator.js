const logger = require('./helpers/logger');
const loadBundle = require('./helpers/loadBundle');
const exportModule = require('./exportModule');

class Generator {
  constructor(bundle, disableLogging) {
    logger.silent = disableLogging;
    this.bundle = bundle;
  }

  generate() {
    const ELM = loadBundle(this.bundle);
    return exportModule(ELM);
  }
}

module.exports = Generator;
