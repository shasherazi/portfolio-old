import renderPrompt from '../renderers/renderPrompt';
import renderResponse from '../renderers/renderResponse';
import handleInput from './handleInput';

const handleEnter = (e) => {
  if (e.key === 'Enter' && e.target.closest('.prompt-input')) {
    const input = e.target;
    const inputId = input.id;
    const inputIdAsInt = parseInt(inputId.split('-')[1], 10);

    input.blur();
    input.disabled = true;

    const inputVal = input.value.toLowerCase();
    const response = handleInput(inputVal);

    renderResponse(response, '.promptsAndResponses');
    renderPrompt('.promptsAndResponses');
    document.querySelector(`#input-${inputIdAsInt + 1}`).focus();
  }
};

export default handleEnter;
