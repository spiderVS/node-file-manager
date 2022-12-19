import fs from 'node:fs/promises'
import dir from '../../directory/dir.js';
import { _checkError } from './_checkError.js';

const rmFile = async (pathToFile) => {
  try {
    await fs.rm(dir.resolvePath(pathToFile));
  } catch (e) {
    _checkError(e);
  }
};

export { rmFile };
