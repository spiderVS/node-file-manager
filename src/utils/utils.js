import { ANSI_CODES, DEFAULT_USERNAME } from '../constants/constants.js';
import { argv } from 'node:process';
import dir from '../directory/dir.js';

class Utils {
  _userName;

  constructor() {
    const args = argv;
    if (args.length > 2) {
      const userName = args.slice(2)[0].slice(11);
      this._userName = userName ? userName : DEFAULT_USERNAME;
    } else {
      this._userName = DEFAULT_USERNAME;
    }
  }

  get userName() {
    return this._userName;
  }

  get currentDir() {
    return dir.getCurrentDir();
  }

  welcomePhrase() {
    this.printToConsole(
      `Welcome to the File Manager, ${this.userName}!`,
      ANSI_CODES.fg.green
    );
  }

  goodbyePhrase() {
    this.printToConsole(
      `\nThank you for using File Manager, ${this.userName}, goodbye!`,
      ANSI_CODES.fg.green
    );
  }

  currentDirPhrase() {
    this.printToConsole(
      `\nYou are currently in 🖴 ${this.currentDir}`
    );
  }

  printToConsole(string, colorForeground = ANSI_CODES.fg.white, colorBackground = ANSI_CODES.bg.black) {
    console.log(colorForeground, colorBackground, string, ANSI_CODES.reset);
  }

  printError(e) {
    let errMsg = '';
    if (e === 'invalid_input') {
      errMsg = `\nInvalid input.\nSee available commands and required arguments by \'help\'\n`;
    } else if (e === 'operation_failed') {
      errMsg = `\nOperation failed`;
    }

    this.printToConsole(
      errMsg,
      ANSI_CODES.fg.red
    );
  }
}

export default new Utils();
