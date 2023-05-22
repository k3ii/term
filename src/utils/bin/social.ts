import config from '../../../config.json';

export const pixelfed = async (args: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(`https://pixelfed.de/${config.social.pixelfed}/`);
  }, 1000);

  return 'Opening Pixelfed...';
};

export const github = async (args: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(`https://github.com/${config.social.github}/`);
  }, 1000);

  return 'Opening github...';
};

export const gitlab = async (args: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(`https://gitlab.com/${config.social.gitlab}/`);
  }, 1000);

  return 'Opening gitlab...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  }, 1000);

  return 'Opening linkedin...';
};

export const twitter = async (args: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(`https://twitter.com/${config.social.twitter}/`);
  }, 1000);

  return 'Opening Twitter...';
};
