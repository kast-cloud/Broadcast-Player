import config from '../config.json';
export const episodeService = {
  getBroadcastInfo,
  getLatestEpisodes,
  getLatestSeries,
  getAllEpisodes,
  getById,
  getAllSeriesByIncludeEpisodes,
  getByUrlPath
};

// Get Broadcast Info
function getBroadcastInfo() {
  const requestOptions = {
    method: 'GET',
  };
  return fetch(config.apiInfo.baseUrl + '/api/broadcast/broadcasts/' + config.apiInfo.broadcastId,
    requestOptions).then(handleResponse);
}

// get Latest Episodes
function getLatestEpisodes() {
  const requestOptions = {
    method: 'GET',
  };
  return fetch(config.apiInfo.baseUrl + '/api/broadcast/broadcasts/' + config.apiInfo.broadcastId +
    '/episodes?Limit=3',
    requestOptions).then(handleResponse);
}

// get All Episodes
function getAllEpisodes(payload) {
  const requestOptions = {
    method: 'GET',
  };
  return fetch(config.apiInfo.baseUrl + '/api/broadcast/broadcasts/' + config.apiInfo.broadcastId +
    '/episodes?IncludeBlocked=False&Page=' + payload.currentPage + '&Limit=' + payload.limit,
    requestOptions).then(handleResponse);
}

// get Latest Series
function getLatestSeries() {
  const requestOptions = {
    method: 'GET',
  };
  return fetch(config.apiInfo.baseUrl + '/api/broadcast/broadcasts/' + config.apiInfo.broadcastId +
    '/series/latest',
    requestOptions).then(handleResponse);
}

// get By Id
function getById(id) {
  const requestOptions = {
    method: 'GET',
  };
  return fetch(config.apiInfo.baseUrl + '/api/broadcast/episodes/' + id, requestOptions).then(
    handleResponse);
}

// get By url Path
function getByUrlPath(urlPath) {
  debugger
  const requestOptions = {
    method: 'GET',
  };
  return fetch(config.apiInfo.baseUrl + '/api/broadcast/episodes?alias=' + urlPath, requestOptions)
    .then(
    handleResponse);
}

// get All Series By Include Episodes
function getAllSeriesByIncludeEpisodes(payload) {
  const requestOptions = {
    method: 'GET',
  };
  return fetch(config.apiInfo.baseUrl + '/api/broadcast/broadcasts/' + config.apiInfo.broadcastId +'/series?IncludeEpisodes=' + payload.isIncludeEpisodes + '&Page=' + payload.currentPage + '&Limit=' + payload.limit,requestOptions).then(handleResponse);
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
