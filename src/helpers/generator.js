const logger = require('./logger');

const loadBundle = require('./loadBundle');
const exportModule = require('../exportModule');

class Generator {
  constructor(bundle, bool) {
    logger.silent = bool;
    this.bundle = bundle;
  }

  generate() {
    const ELM = loadBundle(this.bundle);
    return exportModule(ELM);
  }
}

module.exports = Generator;
