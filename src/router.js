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
import Loops from './components/Loops.vue';
import Conditions from './components/Conditions.vue';
import Styles from './components/Styles.vue';
import Functions from './components/Functions.vue';
import Events from './components/Events.vue';
import Forms from './components/Forms.vue';
import Components from './components/Components.vue';
import Transition from './components/Transition.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Vuejs },
  { path: '/history', component: History },
  { path: '/statistics', component: Statistics },
  { path: '/features', component: Features },
  { path: '/simple', component: Simple },
  { path: '/interpolation', component: Interpolation },
  { path: '/directives', component: Directives },
  { path: '/loops', component: Loops },
  { path: '/conditions', component: Conditions },
  { path: '/styles', component: Styles },
  { path: '/functions', component: Functions },
  { path: '/events', component: Events },
  { path: '/forms', component: Forms },
  { path: '/components', component: Components },
  { path: '/transition', component: Transition },
]

export default new VueRouter({
  routes
})
