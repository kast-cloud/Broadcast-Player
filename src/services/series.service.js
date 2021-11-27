import config from '../config.json';
export const seriesService = {
  getById,
  getByUrlPath
};

// get By Id
function getById(id) {
  const requestOptions = {
    method: 'GET',
  };
  return fetch(config.apiInfo.baseUrl + '/api/broadcast/series/'+ id,
    requestOptions).then(handleResponse);
}

// get By Url Path
function getByUrlPath(urlPath) {
  const requestOptions = {
    method: 'GET',
  };
  return fetch(config.apiInfo.baseUrl + '/api/broadcast/series?alias=' + urlPath,
    requestOptions).then(handleResponse);
}

//handle Response
function handleResponse(response) {
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


