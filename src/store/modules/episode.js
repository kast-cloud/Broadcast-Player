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
  seriesEpisodesList: [],
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
  episodeDetail() {
    return state.episodeDetail;
  },
  allSeriesEpisodes() {
    return state.seriesEpisodesList;
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

  //get Series Episodes List By SeriesId
  getSeriesEpisodesListBySeriesId({
    commit
  }, payload) {
    seriesService.getById(payload.seriesId)
      .then(
        seriesEpisodesList => commit('setSeriesEpisodesListSuccess', seriesEpisodesList),
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
  setSeriesEpisodesListSuccess(state, seriesEpisodesList) {
    state.seriesEpisodesList = seriesEpisodesList;
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
