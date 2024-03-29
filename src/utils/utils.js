import { DEFAULT_USERNAME, RED_FG, GREEN_FG, RESET_COLOR, MAGENTA_FG } from '../constants/constants.js';
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
      GREEN_FG
    );
  }

  goodbyePhrase() {
    this.printToConsole(
      `\nThank you for using File Manager, ${this.userName}, goodbye!`,
      GREEN_FG
    );
  }

  currentDirPhrase() {
    this.printToConsole(
      `\nYou are currently in ${this.colorize(this.currentDir, [MAGENTA_FG])}`

      /*
        `\nYou are currently in 🖴 ${this.currentDir}` - only for terminal with unicode support (bash, zsh, fish, Windows Terminal, etc.)
      */
    );
  }

  colorize(string = '', colorOptions) {
    return `${colorOptions.join('')}${string}${RESET_COLOR}`;
  }


  printToConsole(string, ...colorOptions) {
    console.log(
      colorOptions.length
        ? this.colorize(string, colorOptions)
        : string
    )
  }

  printTable(array) {
    console.log();
    console.table(array);
  }

  printError(e) {
    let errMsg = '';
    if (e === 'invalid_input') {
      errMsg = `\nInvalid input.\nSee available commands and required arguments by \'help\'`;
    } else if (e === 'operation_failed') {
      errMsg = `\nOperation failed`;
    } else if (e === 'file_exists') {
      errMsg = `\nOperation failed.\nFile already exists`;
    } else if (e === 'no_file_exists') {
      errMsg = `\nOperation failed.\nNo such file or directory`;
    }

    this.printToConsole(
      errMsg,
      RED_FG
    );
  }

}

export default new Utils();
