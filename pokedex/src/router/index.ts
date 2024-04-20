import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import PokemonSelecionado from '@/pages/PokemonSelecionado.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import( '../views/SobreView.vue')
  },
  {
    path: '/pokemon/:id/:name',
    name: 'PokemonSelecionado',
    component: PokemonSelecionado,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
