import config from '../config.json';
export const seriesService = {
  getById
};

// get By Id
function getById(id) {
  const requestOptions = {
    method: 'GET',
  };
  return fetch(config.apiInfo.baseUrl + '/api/broadcast/series/4dwszmsf03qg2wn78z1w3trqn8',
    requestOptions).then(handleResponse);
}

//handle Response
function handleResponse(response) {
  debugger
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}


