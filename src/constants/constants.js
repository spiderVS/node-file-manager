const DEFAULT_USERNAME = 'User';

const HELP = `
up
  Usage: up
  Action: Go upper from current directory (equivalent 'cd ..')

cd
  Usage: cd [PATH_TO_DIRECTORY]
  Action: Go to dedicated folder from current directory ([PATH_TO_DIRECTORY] can be relative or absolute)

ls
  Usage: ls
  Action: Print in console list of all files and folders in current directory

cat
  Usage: cat [PATH_TO_FILE]
  Action: Read file and print it's content in console

add
  Usage: add [NEW_FILENAME]
  Action: Create empty file in current working directory

rn
  Usage: rn [PATH_TO_FILE] [NEW_FILENAME]
  Action: Rename file

cp
  Usage: cp [PATH_TO_FILE] [PATH_TO_NEW_DIRECTORY]
  Action: Copy file to the specified directory

mv
  Usage: mv [PATH_TO_FILE] [PATH_TO_NEW_DIRECTORY]
  Action: Move file to the specified directory

rm
  Usage: rm [PATH_TO_FILE]
  Action: Delete file

os
  Usage: os [OPTION]

  [OPTION]:
    --EOL          - Print EOL (default system End-Of-Line)
    --cpus         - Print host machine CPUs info
    --homedir      - Print home directory of current system user
    --username     - Print current system user name
    --architecture - Print current CPU architecture

hash
  Usage: hash [PATH_TO_FILE]
  Action: Calculate SHA256 hash for specified file

compress
  Usage: compress [PATH_TO_FILE] [PATH_TO_DESTINATION_FILE]
  Action: Compress file (using Brotli algorithm)
  <Example>: 'compress 1.txt 1.txt.br'

decompress
  Usage: decompress [PATH_TO_FILE] [PATH_TO_DESTINATION_FILE]
  Action: Decompress file (using Brotli algorithm)
  <Example>: 'decompress 1.txt.br 1.txt'`

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
const MAGENTA_FG = ANSI_CODES.fg.magenta;
const RESET_COLOR = ANSI_CODES.reset;


export { PROMPT_SYMBOL, DEFAULT_USERNAME, RED_FG, GREEN_FG, MAGENTA_FG, RESET_COLOR, HELP };
