import Vue from 'vue';
import VueRouter from 'vue-router';
import Episode from '../views/Episode.vue';
import EpisodeDetail from '../views/EpisodeDetail.vue';

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'Episode',
    component: Episode,
  },
  {
    path: '/EpisodeDetail/:id',
    name: 'EpisodeDetail',
    component: EpisodeDetail,
  }
];


const router = new VueRouter({
  routes,
});

export default router;
