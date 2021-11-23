import Vue from 'vue';
import VueRouter from 'vue-router';
import Episode from '../views/Episode.vue';
import EpisodeDetail from '../views/EpisodeDetail.vue';

Vue.use(VueRouter);


const routes = [{
    path: '/',
    name: 'episode',
    component: Episode,
  },
  {
    path: '/episodeDetail/:id',
    name: 'episodeDetail',
    component: EpisodeDetail,
  }
];


const router = new VueRouter({
  routes,
});

export default router;
