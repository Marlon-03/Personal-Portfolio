import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; 
import About from '../views/About.vue';
import Skills from '../views/Skills.vue';
import Project from '../views/Project.vue';
import Contact from '../views/Contact.vue';
import SingleProject from '../components/singleProject.vue';
import Pizza from '../components/pizza.vue';
import Artruls from'../components/artruls.vue';
import PersonalBlog from '../components/personalBlog.vue';
import Interlinked from '../components/interlinked.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },

  {
    path: '/projects',
    name: 'Project',
    component: Project
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },

  {
    path: '/:singleProject',
    name: 'SingleProject',
    component: SingleProject
  },

  {
    path: '/project/pizza',
    name: 'Pizza',
    component: Pizza
  },

  {
    path: '/project/artruls',
    name: 'Artruls',
    component: Artruls
  },

  {
    path: '/project/personalBlog',
    name: 'PersonalBlog',
    component: PersonalBlog
  },

  {
    path: '/project/interlinked',
    name: 'Interlinked',
    component: Interlinked
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
