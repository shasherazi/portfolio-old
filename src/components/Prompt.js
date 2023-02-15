const Prompt = (prompt) => {
  const promptSpan = document.createElement('span');
  promptSpan.classList.add('prompt');
  promptSpan.innerHTML = prompt;
  return promptSpan;
};

export default Prompt;
