import { homedir } from "node:os";
import path from "node:path";
import { chdir, cwd } from 'node:process';

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
      throw new Error('Operation failed');
    }
  }


  resolvePath(...p) {
    return path.resolve(...p);
  }
}

export default new DirHandler();
