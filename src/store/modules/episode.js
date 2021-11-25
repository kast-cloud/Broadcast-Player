import {
  episodeService,
  seriesService
} from '../../services'

const state = {
  broadcastInfo: [],
  latestEpisodes: [],
  latestSeries: [],
  episodesList: [],
  episodeDetail: [],
  seriesDetail: [],
  episodesGridData: []
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
  getEpisodeDetail() {
    return state.episodeDetail;
  },
  getSeriesDetail() {
    return state.seriesDetail;
  },
  getEpisodesGridData() {
    return state.episodesGridData;
  }
}


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
        episodesGridListData => commit('setEpisodesGridDataSuccess', episodesGridListData),
        error => commit('getAllFailure', error)
      );
  },

  //get All Series By IncludeEpisodes
  getAllSeriesByIncludeEpisodes({
    commit
  }, payload) {
    episodeService.getAllSeriesByIncludeEpisodes(payload)
      .then(
        episodesGridListData => commit('setEpisodesGridDataSuccess', episodesGridListData),
        error => commit('getAllFailure', error)
      );
  },

  //get By Id
  getById({
    commit
  }, payload) {
    episodeService.getById(payload.id)
      .then(
        episodeDetail => commit('setEpisodeDetailSuccess', episodeDetail),
        error => commit('getAllFailure', error)
      );
  },

  //get Series detail By Id
  getSeriesDetailById({
    commit
  }, payload) {
    seriesService.getById(payload.id)
      .then(
        seriesDetail => commit('setSeriesDetailSuccess', seriesDetail),
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
      return new Date(firstDate.releasedLocal) - new Date(secondDate.releasedLocal);
    });
  },

  setEpisodesGridDataSuccess(state, episodesGridListData) {
    var pages = [];
    let numberOfPages = Math.ceil(episodesGridListData.totalCount / episodesGridListData
      .pageSize);
    for (let index = 1; index <= numberOfPages; index++) {
      pages.push(index);
    }
    episodesGridListData.pages = pages;
    state.episodesGridData = episodesGridListData;
  },

  setEpisodeDetailSuccess(state, episodeDetail) {
    state.episodeDetail = episodeDetail;
  },

  setSeriesDetailSuccess(state, seriesDetail) {
    state.seriesDetail = seriesDetail;
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
