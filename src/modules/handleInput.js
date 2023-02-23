import commands from '../data/commands';

const handleInput = (input) => {
  if (!input) {
    return '';
  }
  const { response } = commands.find((command) => command.name === input) || { response: 'command not found' };
  return response;
};

export default handleInput;
