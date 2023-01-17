import readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import { MAGENTA_FG, PROMPT_SYMBOL } from '../constants/constants.js';
import cmd from '../cmd/cmd.js';
import utils from '../utils/utils.js';

const commandPromptInput = async () => {

  const endCommandOutput = () => {
    utils.currentDirPhrase();
    rl.prompt();
  };

  const rl = readline.createInterface({
    input,
    output,
    prompt: utils.colorize(PROMPT_SYMBOL, [MAGENTA_FG])
  });
  endCommandOutput();

  rl.on('line', async (input) => {
    rl.pause();
    await cmd.runCommand(input);
    endCommandOutput();
  });

  rl.on('SIGINT', () => {
    rl.close();
    cmd.runCommand('.exit true');
  });
};

export { commandPromptInput };
