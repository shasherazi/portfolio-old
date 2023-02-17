const renderResponse = (response, parentClassName) => {
  const parent = document.querySelector(parentClassName);
  const responseDiv = document.createElement('div');
  responseDiv.classList.add('response');
  responseDiv.innerHTML = response;
  parent.appendChild(responseDiv);
};

export default renderResponse;
