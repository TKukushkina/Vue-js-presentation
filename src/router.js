import Vue from 'vue';
import VueRouter from 'vue-router';
import Statistics from './components/Statistics.vue';
import Foo from './components/Foo.vue';
import Vuejs from './components/Vue-js.vue';
import History from './components/History.vue';
import Features from './components/Features.vue';
import Simple from './components/Simple.vue';
import Interpolation from './components/Interpolation.vue';
import Directives from './components/Directives.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Vuejs },
  { path: '/history', component: History },
  { path: '/statistics', component: Statistics },
  { path: '/features', component: Features },
  { path: '/simple', component: Simple },
  { path: '/interpolation', component: Interpolation },
  { path: '/directives', component: Directives },
]

export default new VueRouter({
  routes
})