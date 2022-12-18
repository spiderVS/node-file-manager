import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import dir from '../../directory/dir.js';
import utils from '../../utils/utils.js'

const calculateHash = async (pathToFile) => {
  try {
    const content = await fs.readFile(dir.resolvePath(pathToFile));
    utils.printToConsole(`\nSHA256: ${createHash('sha256').update(content).digest('hex')}  |  ${dir.basenamePath(pathToFile)}`);
  } catch (e) {
    throw new Error('Operation failed');
  }
};

export { calculateHash };
