
export const resume = async (args: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://zain.mu/jain-ramchurn-curriculum-vitae.pdf');
  }, 1000);

  return 'Opening Resume...';
};
