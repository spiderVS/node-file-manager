import fs from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import dir from '../../directory/dir.js';
import { _checkError } from './_checkError.js';


const createStreams = async (pathToFile, pathToDestFile, isCompress = true) => {
  try {
    const pathToFileOrigin = dir.resolvePath(pathToFile);
    const pathToDestinationFile = dir.resolvePath(pathToDestFile);

    const filehandle = await fs.open(pathToFileOrigin, 'r', fs.constants.O_RDONLY);
    const fileOrigin = filehandle.createReadStream();

    const fileDestination = createWriteStream(pathToDestinationFile, { flags: 'wx' });

    let zlibStream;
    if (isCompress) {
      zlibStream = zlib.createBrotliCompress();
    } else {
      zlibStream = zlib.createBrotliDecompress();
    }

    return [ fileOrigin, fileDestination, zlibStream ];
  } catch (e) {
    throw e;
  }
}

const compressFile = async (pathToFile, pathToDestFile, isCompress = true) => {
  try {
    const [ fileOrigin, fileDestination, zlibStream ] = isCompress
      ? await createStreams(pathToFile, pathToDestFile)
      : await createStreams(pathToFile, pathToDestFile, false);

    await pipeline(
      fileOrigin,
      zlibStream,
      fileDestination
    )
  } catch (e) {
    _checkError(e);
  }
};

export { compressFile };
