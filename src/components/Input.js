let inputId = 2;

const Input = () => {
  const input = document.createElement('input');
  input.classList.add('input');
  input.classList.add('prompt-input');
  input.setAttribute('type', 'text');
  input.setAttribute('autofocus', 'true');
  input.id = `input-${inputId}`;
  inputId += 1;
  return input;
};

export default Input;
