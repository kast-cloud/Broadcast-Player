import Vue from 'vue';
import VueRouter from 'vue-router';
import Episode from '../views/Episode.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Episode',
    component: Episode,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
