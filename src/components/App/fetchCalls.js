const houseFetch = () => {
  return fetch('http://localhost:3001/api/v1/houses')
    .then(result => result.json())
    .then(parsedResponse => parsedResponse);
};

module.exports = {
  houseFetch
};
