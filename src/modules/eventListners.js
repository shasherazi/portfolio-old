import handleInput from './handleInput';
import renderPrompt from '../renderers/renderPrompt';
import renderResponse from '../renderers/renderResponse';

document.addEventListener('DOMContentLoaded', () => {
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const input = document.querySelector('input');
    const inputVal = input.value;
    const response = handleInput(inputVal);
    console.log(response);
    input.value = '';
    renderPrompt('.promptsAndResponses');
    renderResponse(response, '.promptsAndResponses');
  }
});
