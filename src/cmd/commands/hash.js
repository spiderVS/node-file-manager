import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import dir from '../../directory/dir.js';

const calculateHash = async (pathToFile) => {
  try {
    const content = await fs.readFile(dir.resolvePath(pathToFile));
    console.log(createHash('md5').update(content).digest('hex'));
  } catch (e) {
    throw new Error('Operation failed');
  }
};

export { calculateHash };
