import readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import { PROMPT_SYMBOL } from '../constants/constants.js';
import commands from '../cmd/cmd.js'
import utils from '../utils/utils.js';

const commandPromptInput = () => {

  const rl = readline.createInterface({ input, output, prompt: PROMPT_SYMBOL });
  utils.currentDirPhrase();
  rl.prompt();

  rl.on('line', async (input) => {
    try {
      const [ cmd, args ] = parseCommand(input);

      if (cmd in commands) {
        rl.pause();
        await commands[cmd](...args);
      } else {
        utils.printError('invalid_input');
      }
    } catch(e) {
      utils.printError('operation_failed');
    }

    utils.currentDirPhrase();
    rl.prompt();
  });

  rl.on('SIGINT', () => {
    rl.close();
    commands['.exit'](true);
  });
};

const parseCommand = (line) => {
  
  const regEx = /([^\s]*'[^']+')|([^\s]*"[^"]+")|([^\s]+)/gm;
  const [ command, ...args ] = line.match(regEx).map(arg => arg.replaceAll(/'|"/gu, ''));

  return [ command.toLowerCase(), args ];
}

export { commandPromptInput };
