import { open } from 'node:fs/promises';
import fs from 'node:fs/promises';
import { createWriteStream  } from 'node:fs';
import dir from '../../directory/dir.js';
import { pipeline } from 'node:stream/promises';

const cpFile = async (pathToFile, pathToDirectory) => {
  try {
    const pathToFileOrigin = dir.resolvePath(pathToFile);
    const pathToDestinationDir = dir.resolvePath(pathToDirectory, dir.basenamePath(pathToFile))

    const filehandle = await open(pathToFileOrigin, 'r', fs.constants.O_RDONLY);
    const fileOrigin = filehandle.createReadStream();

    const fileDestination = createWriteStream(pathToDestinationDir, { flags: 'wx' })

    await pipeline(
      fileOrigin,
      fileDestination
    )
  } catch (err) {
    throw new Error('Operation failed');
  }
};

export { cpFile };
