import { writeFile } from 'node:fs/promises';
import dir from '../../directory/dir.js';
import { _checkError } from './_checkError.js';

const addFile = async (fileName) => {
  try {
    await writeFile(dir.resolvePath(fileName), '', { encoding: 'utf8', flag: 'wx'});
  } catch (e) {
    _checkError(e);
  }
};

export { addFile };
