import readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

import { PROMPT_SYMBOL } from '../constants/constants.js';
import commandsHandler from '../cmd/cmd.js'
import utils from '../utils/utils.js';

const commandPromptInput = () => {

  const rl = readline.createInterface({ input, output, prompt: PROMPT_SYMBOL });

  const endCommandOutput = () => {
    utils.currentDirPhrase();
    rl.prompt();
  }

  endCommandOutput();

  rl.on('line', async (input) => {
    rl.pause();
    await commandsHandler.runCommand(input);
    endCommandOutput();
  });

  rl.on('SIGINT', () => {
    rl.close();
    commands['.exit'](true);
  });


};

export { commandPromptInput };
