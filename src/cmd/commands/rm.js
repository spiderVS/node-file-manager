import fs from 'node:fs/promises'
import dir from '../../directory/dir.js';

const rmFile = async (pathToFile) => {
  try {
    await fs.rm(dir.resolvePath(pathToFile));
  } catch (err) {
    throw new Error('Operation failed');
  }
};

export { rmFile };
