import os from 'node:os';
import utils from '../../utils/utils.js';


const osInfo = (arg) => {
  switch (arg) {
    case 'EOL':
      utils.printToConsole(`\n${JSON.stringify(os.EOL)}`);
        break;
    case 'cpus':
      const cpuInfo = os.cpus();
      utils.printToConsole(`\nOverall amount of CPUs: ${cpuInfo.length}`);
      os.cpus().forEach((cpu, idx) => {
        utils.printToConsole(`\n-- CPU ${idx+1} --\nModel: ${cpu.model}`);
        utils.printToConsole(`Clock rate: ${cpu.speed/1000} GHz`);
      })
        break;
    case 'homedir':
      utils.printToConsole(`\n${os.homedir()}`);
        break;
    case 'username':
      utils.printToConsole(`\n${os.userInfo().username}`);
        break;
    case 'architecture':
      utils.printToConsole(`\n${os.arch()}`);
        break;

    default:
      throw new Error('Invalid input');
  }
}

export { osInfo };
