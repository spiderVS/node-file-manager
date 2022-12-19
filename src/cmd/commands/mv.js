import { cpFile } from './cp.js';
import { rmFile } from './rm.js';
import { _checkError } from './_checkError.js';

const mvFile = async (pathToFile, pathToDirectory) => {
  try {
    await cpFile(pathToFile, pathToDirectory);
    await rmFile(pathToFile);
  } catch (e) {
    _checkError(e);
  }
};

export { mvFile };
