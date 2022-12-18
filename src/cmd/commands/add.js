import { writeFile } from 'node:fs/promises';
import dir from '../../directory/dir.js';

const addFile = async (fileName) => {
  try {
    await writeFile(dir.resolvePath(fileName), '', { encoding: 'utf8', flag: 'wx'});
  } catch (e) {
    throw new Error('Operation failed');
  }
};

export { addFile };
