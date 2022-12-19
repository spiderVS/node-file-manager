import { open } from 'node:fs/promises';
import { stdout } from 'node:process';
import dir from '../../directory/dir.js';
import { _checkError } from './_checkError.js';

const catFile = async (pathToFile) => {
  try {
    const filehandle = await open(dir.resolvePath(pathToFile), 'r');
    const file = filehandle.createReadStream();

    for await (const chunk of file) {
      stdout.write(chunk);
    }
    await filehandle.close();

  } catch (e) {
    _checkError(e);
  }
};

export { catFile };
