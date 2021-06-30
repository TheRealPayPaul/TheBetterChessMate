import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Lobby from '../components/Lobby.vue'
import Board from '../components/Board.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/lobby', component: Lobby },
	{ path: '/board', component: Board },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})