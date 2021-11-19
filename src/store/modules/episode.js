import {
  episodeService
} from '../../services'


const state = {
  broadcastInfo: [],
  latestEpisodes: [],
  latestSeries: [],
  episodesList: [],
  episodeDetail: [],
  seriesEpisodesList:[]
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
  },
  episodeDetail() {
    return state.episodeDetail;
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
  },

  //get By Id
  getById({ commit }, payload) {
    episodeService.getById(payload.id)
      .then(
        episodeDetail => commit('setEpisodeDetailSuccess', episodeDetail),
        error => commit('getAllFailure', error)
      );
  },

  getSeriesEpisodesListBySeriesId({ commit }, payload) {
    episodeService.getById(payload.id)
      .then(
        episodeDetail => commit('setEpisodeDetailSuccess', episodeDetail),
        error => commit('getAllFailure', error)
      );
  },

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
    //add sort by released Utc date 
    state.latestSeries.episodes.sort((firstDate, secondDate) => {
      return new Date(firstDate.releasedUtc) - new Date(secondDate.releasedUtc);
    });
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
  setEpisodeDetailSuccess(state, episodeDetail) {
    state.episodeDetail = episodeDetail;
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
