import { cpFile } from './cp.js';
import { rmFile } from './rm.js';

const mvFile = async (pathToFile, pathToDirectory) => {
  try {
    await cpFile(pathToFile, pathToDirectory);
    await rmFile(pathToFile);
  } catch (err) {
    throw new Error('Operation failed');
  }
};

export { mvFile };
