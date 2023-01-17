import utils from "../utils/utils.js";
import { commandPromptInput } from "../cli/cli.js";
import dir from '../directory/dir.js';
import { catFile } from "./commands/cat.js";
import { addFile } from "./commands/add.js";
import { rnFile } from "./commands/rn.js";
import { cpFile } from "./commands/cp.js";
import { mvFile } from "./commands/mv.js";
import { rmFile } from "./commands/rm.js";
import { osInfo } from "./commands/os.js";
import { calculateHash } from "./commands/hash.js";
import { lsDir } from "./commands/ls.js";
import { compressFile } from "./commands/compress.js";
import { HELP } from "../constants/constants.js";

class CommandsHandler {
  constructor() {}

  help() {
    utils.printToConsole(HELP);
  }

  up(...args) {
    try {
      this._isEnoughArguments(args, 0);
      dir.up();
    } catch(e) {
      this._errorHandler(e);
    }
  }

  async cd(...pathToDir) {
    try {
      this._isEnoughArguments(pathToDir, 1);
      await dir.cd(...pathToDir);
    } catch(e) {
      this._errorHandler(e);
    }
  }

  async ls(...args) {
    try {
      const pathToCurrentDir = dir.resolvePath(dir.getCurrentDir());
      this._isEnoughArguments(args, 0);
      await lsDir(pathToCurrentDir);
    } catch(e) {
      this._errorHandler(e);
    }
  }

  async cat(...pathToFile) {
    try {
      this._isEnoughArguments(pathToFile, 1);
      await catFile(...pathToFile);
    } catch(e) {
      this._errorHandler(e);
    }
  }

  async add(...fileName) {
    try {
      this._isEnoughArguments(fileName, 1);
      await addFile(...fileName);
    } catch(e) {
      this._errorHandler(e);
    }
  }

  async rn(...args) {
    try {
      this._isEnoughArguments(args, 2);
      await rnFile(...args);
    } catch(e) {
      this._errorHandler(e);
    }
  }

  async cp(...args) {
    try {
      this._isEnoughArguments(args, 2);
      await cpFile(...args);
    } catch(e) {
      this._errorHandler(e);
    }
  }

  async mv(...args) {
    try {
      this._isEnoughArguments(args, 2);
      await mvFile(...args);
    } catch(e) {
      this._errorHandler(e);
    }
  }

  async rm(...args) {
    try {
      this._isEnoughArguments(args, 1);
      await rmFile(...args);
    } catch(e) {
      this._errorHandler(e);
    }
  }

  async hash(...args) {
    try {
      this._isEnoughArguments(args, 1);
      await calculateHash(...args);
    } catch(e) {
      this._errorHandler(e);
    }
  }

  async os(...args) {
    try {
      this._isEnoughArguments(args, 1);
      this._isValidOsArgument(...args);
      await osInfo(args[0].slice(2));
    } catch(e) {
      this._errorHandler(e);
    }
  }

  async compress(...args) {
    try {
      this._isEnoughArguments(args, 2);
      await compressFile(...args);
    } catch(e) {
      this._errorHandler(e);
    }
  }

  async decompress(...args) {
    try {
      this._isEnoughArguments(args, 2);
      await compressFile(...args, false);
    } catch(e) {
      this._errorHandler(e);
    }
  }

  ['.exit'](isSIGINT = false) {
    isSIGINT && utils.printToConsole('');
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

  _isValidOsArgument(arg) {
    if (arg.startsWith('--')) return;
    throw new Error('Invalid input');
  }

  _errorHandler(error) {
    if (error.message === 'Operation failed') {
      utils.printError('operation_failed');
    } else if (error.message === 'Invalid input') {
      utils.printError('invalid_input');
    } else if (error.message === 'File already exists') {
      utils.printError('file_exists');
    } else if (error.message === 'No such file or directory') {
       utils.printError('no_file_exists');
    }
  }

  _start() {
    utils.welcomePhrase();
    commandPromptInput();
  }
};

export default new CommandsHandler();
