import * as bin from './index';
import { getQuote } from '../../api';
import { usageText } from '../usageText';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:

  cowsay    - configurable speaking cow
  date      - print or set the system date and time
  echo      - display a line of text
  emacs     - GNU project Emacs editor
  email     - you know what email is ;)
  neofetch  - a fast, highly customizable system info script
  vim       - vi IMproved, a programmer's text editor
  weather   - command-line tool to obtain weather conditions and forecasts
  whoami    - print effective userid
  projects  - list of my public projects on GitHub
  repo      - the repository of this website 
  resume    - my CV in pdf
  
  theme [arg] - use wide range of themes
  trex        - play t-rex without disconnection :D

  github,
  gitlab,
  pixelfed,
  linkedin,
  twitter  - My personal pages on these social networks

  [tab]     trigger completion
  [ctrl+l]  clear terminal
  [ctrl+c]  cancel command
  `;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:jain.ramchurn@proton.me');

  return 'Opening mailto:jain.ramchurn@proton.me...';
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const neo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=O5b0ZxUWNf0');
  }, 1000);

  return `Escape the matrix`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/k3ii/term');
  }, 1000);

  return 'Opening repository...';
};


export const quote = async (args?: string[]): Promise<string> => {
  const quote = await getQuote();

  return quote.quote;
};

export const why = async (args?: string[]): Promise<string> => {
  const reason = args.join('+');
  var result = '';

  const whyUsage = new usageText();
  whyUsage.about = 'Why, indeed...\n';

  whyUsage.usage = `
Usage:
  why philosophical
  why nerdy
  why -h | --help

Options:
  -h --help     Show this screen.
  `;

  if (!reason) {
    return whyUsage.getFullUsage();
  }

  switch (reason) {
    case '--help':
    case '-h': {
      result = whyUsage.getFullUsage();
      break;
    }
    case 'philosophical': {
      result =
        'The terminal is an extension of all technology we use. It allows us to connect with it directly, to create a dialogue -- a conversation. But is this really a conversation if the answers to your queries have been determined before you even send them?';
      break;
    }
    case 'nerdy': {
      result = 'Because terminals are cool, why else?';
      break;
    }
    default: {
      result = `Option not supported.\n${whyUsage.getUsage()}`;
    }
  }

  return result;
};


export const banner = (args?: string[]): string => {
  return `
- Greeting, curious mind! 
Step into the digital matrix of my portfolio. 

- How to work with this terminal?
Type 'help' to see list of available commands.
`;
};
