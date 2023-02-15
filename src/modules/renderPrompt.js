import Input from '../components/Input';
import Prompt from '../components/Prompt';
import getPrompt from './getPrompt';

const renderPrompt = (parentClassName) => {
  const parent = document.querySelector(parentClassName);
  const prompt = Prompt(getPrompt());
  const input = Input();
  console.log(prompt);
  parent.appendChild(prompt);
  parent.appendChild(input);
};

export default renderPrompt;
