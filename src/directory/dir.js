import { homedir } from "node:os";
import path from "node:path";
import { chdir, cwd } from 'node:process';
import { _checkError } from "../cmd/commands/_checkError.js";

class DirHandler {
  constructor() {
    this.setCurrentDir(homedir());
  }

  setCurrentDir(dir) {
    chdir(dir);
  }

  getCurrentDir() {
    return cwd();
  }

  up() {
    this.setCurrentDir(this.resolvePath(this.getCurrentDir(), '../'));
  }

  cd(p) {
    try {
      // add support for Linux home directory
      p === '~' ? this.setCurrentDir(homedir()) : this.setCurrentDir(this.resolvePath(p));
    } catch (e) {
      _checkError(e);
    }
  }

  resolvePath(...p) {
    return path.resolve(...p);
  }

  dirnamePath(p) {
    return path.dirname(this.resolvePath(p));
  }

  basenamePath(p) {
    return path.basename(this.resolvePath(p));
  }
}

export default new DirHandler();
