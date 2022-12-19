import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import dir from '../../directory/dir.js';
import utils from '../../utils/utils.js'
import { _checkError } from './_checkError.js';

const calculateHash = async (pathToFile) => {
  try {
    const content = await fs.readFile(dir.resolvePath(pathToFile));
    utils.printToConsole(`\nSHA256: ${createHash('sha256').update(content).digest('hex')}  |  ${dir.basenamePath(pathToFile)}`);
  } catch (e) {
    _checkError(e);
  }
};

export { calculateHash };
