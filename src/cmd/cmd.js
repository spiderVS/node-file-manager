import utils from "../utils/utils.js";
import { ANSI_CODES } from '../constants/constants.js'
import dir from '../directory/dir.js';


class CommandsHandler {
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

  async runCommand(inputLine) {
    try {
      const [ cmd, args ] = this._parseCommand(inputLine);
      this._isValidCommand(cmd);
      await this[cmd](...args);
    } catch(e) {
      this._errorHandler(e);
    }
  }

  _parseCommand(line) {
    const regEx = /([^\s]*'[^']+')|([^\s]*"[^"]+")|([^\s]+)/gm;
    if (line) {
      const [ command, ...args ] = (line.match(regEx) ?? []).map(arg => arg.replaceAll(/'|"/gu, ''));
      return [ command.toLowerCase(), args ];
    }
    throw new Error('Invalid input');
  }

  _isValidCommand(cmd) {
    if (cmd in this) {
      return;
    }
    throw new Error('Invalid input');
  }

  _isEnoughArguments(args, requiredNumOfArgs) {
    if (args.length === requiredNumOfArgs) return;
    throw new Error('Invalid input');
  }

  _errorHandler(error) {
    if (error.message === 'Operation failed') {
      utils.printError('operation_failed');
    } else if (error.message === 'Invalid input') {
      utils.printError('invalid_input');
    }
  }
};

export default new CommandsHandler();
