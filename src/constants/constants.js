const DEFAULT_USERNAME = 'User';

/* Only for terminal with unicode support (bash, zsh, fish, Windows Terminal, etc.)
  const PROMPT_SYMBOL = '➜ ';
  const PROMPT_SYMBOL = '⮩ ';
  const PROMPT_SYMBOL = '⮡ ';
  const PROMPT_SYMBOL = '⮕ ';
*/

const PROMPT_SYMBOL = '> ';

const ANSI_CODES = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",

  // Foreground color
  fg: {
      black: "\x1b[30m",
      red: "\x1b[31m",
      green: "\x1b[32m",
      yellow: "\x1b[33m",
      blue: "\x1b[34m",
      magenta: "\x1b[35m",
      cyan: "\x1b[36m",
      white: "\x1b[37m",
      crimson: "\x1b[38m" // Scarlet
  },

  // Background color
  bg: {
      black: "\x1b[40m",
      red: "\x1b[41m",
      green: "\x1b[42m",
      yellow: "\x1b[43m",
      blue: "\x1b[44m",
      magenta: "\x1b[45m",
      cyan: "\x1b[46m",
      white: "\x1b[47m",
      crimson: "\x1b[48m"
  }
};

// Selected colors
const RED_FG = ANSI_CODES.fg.red;
const GREEN_FG = ANSI_CODES.fg.green;
const RESET_COLOR = ANSI_CODES.reset;


export { PROMPT_SYMBOL, DEFAULT_USERNAME, RED_FG, GREEN_FG, RESET_COLOR };
