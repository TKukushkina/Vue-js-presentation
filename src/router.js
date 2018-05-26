import Vue from 'vue';
import VueRouter from 'vue-router';
import Statistics from './components/Statistics.vue';
import Foo from './components/Foo.vue';
import Vuejs from './components/Vue-js.vue';
import History from './components/History.vue';
import Features from './components/Features.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Vuejs },
  { path: '/history', component: History },
  { path: '/statistics', component: Statistics },
  { path: '/features', component: Features },
]

export default new VueRouter({
  routes
})