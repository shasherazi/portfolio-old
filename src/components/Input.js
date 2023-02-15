const Input = () => {
  const input = document.createElement('input');
  input.classList.add('input');
  input.classList.add('prompt-input');
  input.setAttribute('type', 'text');
  input.setAttribute('autofocus', 'true');
  return input;
};

export default Input;
