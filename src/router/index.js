import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Add more routes here as needed, e.g., About, Projects, etc.
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
