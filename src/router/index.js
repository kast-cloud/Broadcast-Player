import Vue from 'vue';
import VueRouter from 'vue-router';
import Episode from '../views/Episode.vue';
import EpisodeDetail from '../views/EpisodeDetail.vue';
import SeriesDetail from '../views/SeriesDetail.vue';

Vue.use(VueRouter);


const routes = [{
    path: '/',
    name: 'episode',
    component: Episode,
  },
  {
    path: '/episode/:id',
    name: 'episodeDetail',
    component: EpisodeDetail,
  },
  {
    path: '/series/:id',
    name: 'seriesDetail',
    component: SeriesDetail,
  }
];


const router = new VueRouter({
  routes
});

export default router;
