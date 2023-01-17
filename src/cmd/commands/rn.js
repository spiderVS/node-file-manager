import fs from 'node:fs/promises';
import dir from '../../directory/dir.js';
import { rmFile } from './rm.js';
import { _checkError } from './_checkError.js';

const rnFile = async (pathToFile, newFileName) => {
  try {
    const pathOld = dir.resolvePath(pathToFile);
    const pathNew = dir.resolvePath(dir.dirnamePath(pathToFile), newFileName);

    await fs.copyFile(
      pathOld,
      pathNew,
      fs.constants.COPYFILE_EXCL
    );
    await rmFile(pathToFile);
  } catch (e) {
    _checkError(e);
  }
};

export { rnFile };
