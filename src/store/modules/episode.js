import {
  episodeService
} from '../../services'

const state = {
  broadcastInfo: [],
  latestEpisodes: [],
  latestSeries: [],
  episodesList: []
};

const getters = {
  podcastInfo() {
    return state.broadcastInfo;
  },
  latestEpisodes() {
    return state.latestEpisodes;
  },
  latestSeries() {
    return state.latestSeries;
  },
  allEpisodes() {
    return state.episodesList;
  }
};

const actions = {
  //get Broadcast Info
  getBroadcastInfo({
    commit
  }) {
    episodeService.getBroadcastInfo()
      .then(
        broadcast => commit('setBroadcastInfoSuccess', broadcast),
        error => commit('getAllFailure', error)
      );
  },

  //get Latest Episodes
  getLatestEpisodes({
    commit
  }) {
    episodeService.getLatestEpisodes()
      .then(
        latestEpisodes => commit('setLatestEpisodesSuccess', latestEpisodes),
        error => commit('getAllFailure', error)
      );
  },

  //get Latest Series
  getLatestSeries({
    commit
  }) {
    episodeService.getLatestSeries()
      .then(
        latestSeries => commit('setLatestSeriesListSuccess', latestSeries),
        error => commit('getAllFailure', error)
      );
  },

  //get All Episodes
  getAllEpisodes({
    commit
  }, payload) {
    episodeService.getAllEpisodes(payload)
      .then(
        episodesList => commit('setEpisodesListSuccess', episodesList),
        error => commit('getAllFailure', error)
      );
  }
};

const mutations = {
  setBroadcastInfoSuccess(state, broadcast) {
    state.broadcastInfo = broadcast;
  },
  setLatestEpisodesSuccess(state, latestEpisodes) {
    state.latestEpisodes = latestEpisodes;
  },
  setLatestSeriesListSuccess(state, latestSeries) {
    state.latestSeries = latestSeries;
  },
  setEpisodesListSuccess(state, episodesList) {
    var pages = [];
    let numberOfPages = Math.ceil(episodesList.totalCount / episodesList.pageSize);
    for (let index = 1; index <= numberOfPages; index++) {
      pages.push(index);
    }
    episodesList.pages = pages
    state.episodesList = episodesList;
  },
  getAllFailure(state, error) {
    state.broadcastInfo = {
      error
    };
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}