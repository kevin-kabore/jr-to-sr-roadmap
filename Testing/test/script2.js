const fetch = require('node-fetch');

// getRequest using Fetch in Node
const getPeoplePromise = (fetch) => {
  return fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(data => {  
      return {
        count: data.count, 
        results: data.results
      }
    })
}

// getRequest using Async await
const getPeopleAsync = async fetch => {
  const getRequest = await fetch('https://swapi.co/api/people/')
  const data = await getRequest.json()
  return {
    count: data.count,
    results: data.results
  }

}


// getPeopleAsync(fetch);
module.exports = {
  getPeopleAsync,
  getPeoplePromise
};
