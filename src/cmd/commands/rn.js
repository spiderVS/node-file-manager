import fs from 'node:fs/promises';
import dir from '../../directory/dir.js';
import { rmFile } from './rm.js';

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
    throw new Error('Operation failed');
  }
};

export { rnFile };
