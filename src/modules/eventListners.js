import renderPrompt from './renderPrompt';

document.addEventListener('DOMContentLoaded', () => {
  renderPrompt('.main');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const input = document.querySelector('.input');
    input.value = '';
  }
});
