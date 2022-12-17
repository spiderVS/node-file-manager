import utils from "../utils/utils.js";
import { ANSI_CODES } from '../constants/constants.js'
import dir from '../directory/dir.js';


class Commands {
  constructor() {}

  help() {
    utils.printToConsole('\nhelp:\ncopy <source> <destination>\npwd <path>');
  }

  up() {
    dir.up();
  }

  async cd(...pathToDir) {
    try {
      this._isEnoughArguments(pathToDir, 1);
      await dir.cd(...pathToDir);
    } catch(e) {
      this._errorHandler(e);
    }
  }

  pwd() {
    utils.printToConsole(`\n🖿  ${process.cwd()}`, ANSI_CODES.fg.green);
  }

  ['.exit'](sigint = false) {
    sigint && utils.printToConsole('');
    utils.goodbyePhrase();
    process.exit(0);
  }

  _isEnoughArguments(args, requiredNumOfArgs) {
    if (args.length !== requiredNumOfArgs) {
      throw new Error('Invalid input');
    }
    return;
  }

  _errorHandler(error) {
    if (error.message === 'Operation failed') {
      utils.printError('operation_failed');
    } else if (error.message === 'Invalid input') {
      utils.printError('invalid_input');
    }
  }
};

export default new Commands();
