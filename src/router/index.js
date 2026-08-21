import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; 
import About from '../views/About.vue';
import Project from '../views/Project.vue';
import Contact from '../views/Contact.vue';
import OnePage from '../views/OnePage.vue';
import PersonalBlog from '../components/personalBlog.vue';
import Interlinked from '../components/interlinked.vue';
import ShelfWise from '../components/shelfWise.vue';
import DixonDental from '../components/dixonDental.vue';
import NeoLeader from '../components/neoleader.vue';
import Buildovate from '../components/buildovate.vue';
import HookScope from '../components/hookScope.vue';
import GoodWoodCarpentry from '../components/goodWoodCarpentry.vue';
import SingaGroup from '../components/singa.vue';
import KaibaConstruction from '../components/kaiba.vue';
import SaltCalculator from '../components/pondDose.vue';
import ConstructionCrm from '../components/zapConstructionCrm.vue';
import ProposalAutomation from '../components/zapProposalAutomation.vue'
import ContentRepurposing from '../components/zapContentRepurposing.vue'
import PersonalChatBot from '../components/personalChatBot.vue'
import makeEcommerce from '../components/makeEcommerce.vue'
import solstice from '../components/solstice.vue'
import demoSquad from '../components/demoSquad.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: OnePage
  },
  {
    path: '/about',
    name: 'About',
    component: About
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
    path: '/project/personalBlog',
    name: 'PersonalBlog',
    component: PersonalBlog
  },

  {
    path: '/project/interlinked',
    name: 'Interlinked',
    component: Interlinked
  },

  {
    path: '/project/shelfwise',
    name: 'ShelfWise',
    component: ShelfWise
  },

  {
    path: '/project/dixonDental',
    name: 'DixonDental',
    component: DixonDental
  },
  {
    path: '/project/neoleader',
    name: 'NeoLeader',
    component: NeoLeader
  },
  {
    path: '/project/buildovate',
    name: 'Buildovate',
    component: Buildovate
  },
  {
    path: '/project/hookScope',
    name: 'HookScope',
    component: HookScope
  },
  {
    path: '/project/goodWoodCarpentry',
    name: 'goodWoodCarpentry',
    component: GoodWoodCarpentry
  },
  {
    path: '/project/singaGroup',
    name: 'SingaGroup',
    component: SingaGroup
  },
  {
    path: '/project/kaibaConstruction',
    name: 'KaibaConstruction',
    component: KaibaConstruction
  },
  {
    path: '/project/pondDose',
    name: 'PondDose',
    component: SaltCalculator
  },
  {
    path: '/project/constructionCrm',
    name: 'constructionCrm',
    component: ConstructionCrm
  },
  {
    path: '/project/proposalAutomation',
    name: 'ProposalAutomation',
    component: ProposalAutomation
  },
  {
    path: '/project/contentRepurposing',
    name: 'ContentRepurposing',
    component: ContentRepurposing
  },
  {
    path: '/project/personalChatBot',
    name: 'PersonalChatBot',
    component: PersonalChatBot
  },
  {
    path: '/project/ecommerceAutomation',
    name: 'makeEcommerce',
    component: makeEcommerce
  },
  {
    path: '/project/solstice',
    name: 'solstice',
    component: solstice
  },
  {
    path: '/project/demoSquad',
    name: 'DemoSquad',
    component: demoSquad
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.querySelector(to.hash);
          if (element) {
            resolve({
              el: element,
              behavior: 'smooth',
            });
          } else {
            resolve({ top: 0 });
          }
        }, 0);
      });
    } else {
      return { top: 0 };
    }
  }
});

export default router;
