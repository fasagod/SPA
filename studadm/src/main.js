import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import GroupComponent from './components/GroupComponent.vue'
import StudentsComponent from './components/StudentsComponent.vue'
import AddGroup from './components/AddGroup.vue'
import AddStudent from './components/AddStudent.vue'
import locale from 'element-ui/lib/locale/lang/ru-RU'

Vue.use(VueRouter)
Vue.use(ElementUI, { locale });
Vue.config.productionTip = false


const routes = [
  { path: '/', component: GroupComponent},
  { path: '/AddGroup', component: AddGroup},
  { path: '/AddStudent',component: AddStudent},
  { path: '/StudentsComponent',component: StudentsComponent}
  // { path: '/StudentsInfo',component: StudentsInfo},
  // { path: '/GroupsInfo',component: GroupsInfo}

]

const router = new VueRouter({
  mode: 'history',
  routes
})




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
