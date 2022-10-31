import Vue from 'vue'
import VueRouter from 'vue-router'
import todoBlock from '../components/todoBlock.vue'
import todoView from '../components/todoView.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    component: todoBlock
  },
  {
    path: '/view/:text',
    component: todoView,
    name: 'todoData',
    props: true
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
