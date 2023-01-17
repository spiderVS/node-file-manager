import { stat, readdir } from 'node:fs/promises';
import utils from '../../utils/utils.js'
import { _checkError } from './_checkError.js';

const lsDir = async (pathToDir) => {
  try {
    let fsObjects = await readdir(pathToDir, { withFileTypes: true });
    const dirContent = fsObjects.map(obj => {
      if (obj.isFile()) {
        return { name: obj.name, type: '[FILE]' }
      } else if (obj.isDirectory()) {
        return { name: obj.name, type: '[DIR]' }
      } else return ({ name: obj.name, type: '[UNKNOWN]' })
    });

    const dirContentSorted = dirContent.sort((a, b) => {
      if (a.type > b.type) return 1;
      if (a.type < b.type) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 0;
    });

    utils.printTable(dirContentSorted);
  } catch (e) {
    _checkError(e);
  }
}

/* For terminal with unicode support (bash, zsh, fish, Windows Terminal, etc.)

  const lsDir = async (pathToDir) => {
  try {
    let fsObjects = await readdir(pathToDir, { withFileTypes: true });
    const dirContent = fsObjects.map(obj => {
      if (obj.isFile()) {
        return { ico: '🗎', name: obj.name, type: '[FILE]' }
      } else if (obj.isDirectory()) {
        return { ico: '🖿 ', name: obj.name, type: '[DIR]' }
      } else return ({ ico: '⯑', name: obj.name, type: '[UNKNOWN]' })
    });

    const dirContentSorted = dirContent.sort((a, b) => {
      if (a.type > b.type) return 1;
      if (a.type < b.type) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 0;
    });

    utils.printToConsole('\n');
    dirContentSorted.forEach(el => utils.printToConsole(`${el.type} ${el.ico} ${el.name}`))

  } catch (e) {
    _checkError(e);
  }
}
*/

export { lsDir };
