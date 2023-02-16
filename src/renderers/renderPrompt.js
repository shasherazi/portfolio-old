import Input from '../components/Input';
import Prompt from '../components/Prompt';
import getPrompt from '../modules/getPrompt';

const renderPrompt = (parentClassName) => {
  const parent = document.querySelector(parentClassName);
  const promptDiv = document.createElement('div');
  promptDiv.classList.add('promptDiv');
  const prompt = Prompt(getPrompt());
  const input = Input();
  promptDiv.appendChild(prompt);
  promptDiv.appendChild(input);
  parent.appendChild(promptDiv);
};

export default renderPrompt;
