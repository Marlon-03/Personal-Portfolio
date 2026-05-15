<template>
  <div class="w-full py-12 md:py-20 px-3 md:px-6">
    <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent text-center pb-7 md:pb-20">
      Portfolio Showcase
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      <div
        v-for="project in projects"
        :key="project.id"
        class="group relative w-full"
      >
        <div class="relative overflow-hidden h-full rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

          <div class="relative p-5 z-10 h-full flex flex-col">

            <div class="relative overflow-hidden rounded-lg">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div class="mt-4 space-y-3 flex-1">
              <h3 class="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                {{ project.title }}
              </h3>
              <p class="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2 md:gap-3">
                <div
                  v-for="tag in project.tags"
                  :key="tag"
                  class="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default"
                >
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                  <div class="relative flex items-center gap-1.5 md:gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400 group-hover:text-blue-300 transition-colors"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path><path d="m7.5 4.27 9 5.15"></path></svg>
                    <span class="text-xs md:text-sm font-medium text-blue-300/90 group-hover:text-blue-200 transition-colors">
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-auto pt-4 flex items-center justify-between">

              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                <span class="text-sm font-medium">{{ project.liveLabel }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-4 h-4">
                                <path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
              </a>
              <span v-else class="invisible"></span>

              <router-link
                v-if="!project.inProgress"
                :to="project.detailRoute"
                class="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              >
                <span class="text-sm font-medium">Details</span>
              </router-link>

              <span
                v-else
                class="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 text-white/90 opacity-50 pointer-events-none"
              >
                <span class="text-sm font-medium">In Progress</span>
              </span>

            </div>
          </div>

          <div class="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import buildovateImg from '../assets/buildovate.png'
import interlinkImg from '../assets/InterlinkedBanner.webp'
import hookscopeImg from '../assets/HookScopeBanner.png'
import dentalImg from '../assets/dentalbanner.webp'
import neoleaderImg from '../assets/neoleaderBanner.png'
import blogImg from '../assets/blogBanner.webp'
import shelfwiseImg from '../assets/shelfwiseBanner.webp'
import artrulsImg from '../assets/museumbanner.webp'
import travelImg from '../assets/TravelBanner.webp'
import goodWoodCarpentryImg from '../assets/goodwoodBanner.png'
import kaibaImg from '../assets/kaibaBanner.png'
import singaImg from '../assets/singaBanner.png'

export default {
  name: 'Project',
  data() {
    return {
      projects: [
        {
          id: 'buildovate',
          title: 'Buildovate',
          image: buildovateImg,
          description: 'Contributed to the development of a construction-focused CRM platform. Implemented backend and frontend features supporting core system workflows.',
          tags: ['Laravel', 'Nuxt JS', 'Vue JS', 'Tailwind CSS', 'MySQL', 'Third-party API Integration'],
          liveUrl: 'https://www.app.buildovate.com/login',
          liveLabel: 'Live Demo',
          detailRoute: '/project/buildovate',
          inProgress: false,
        },
        {
          id: 'interlinked',
          title: 'Interlinked',
          image: interlinkImg,
          description: 'Contributed to the development of a professional web application. The platform enables marketers to create and manage articles while purchasing channels directly from publishers.',
          tags: ['Laravel', 'JQuery', 'Bootstrap', 'MariaDB', 'Third-party API Integration'],
          liveUrl: 'https://app.interlinked.se/login',
          liveLabel: 'Live Demo',
          detailRoute: '/project/interlinked',
          inProgress: false,
        },
        {
          id: 'hookscope',
          title: 'HookScope',
          image: hookscopeImg,
          description: 'Create custom endpoints, capture incoming requests, and inspect every detail in real-time. Perfect for testing and debugging webhooks.',
          tags: ['NextJS', 'Supabase', 'TypeScript', 'Tailwind CSS'],
          liveUrl: 'https://hookscope.vercel.app/',
          liveLabel: 'Live Demo',
          detailRoute: '/project/hookScope',
          inProgress: false,
        },
        {
          id: 'dixondental',
          title: 'Dixon Road Dental Surgery',
          image: dentalImg,
          description: 'Professional website for Rockingham Smile Dental Clinic built using WordPress and Elementor. Fully mobile-responsive with SEO best practices.',
          tags: ['Wordpress', 'Elementor', 'Javascript'],
          liveUrl: 'https://dixonrddental.com.au/',
          liveLabel: 'Live Demo',
          detailRoute: '/project/dixonDental',
          inProgress: false,
        },
        {
          id: 'neoleader',
          title: 'Neoleader',
          image: neoleaderImg,
          description: 'Custom WordPress website with Elementor, WooCommerce integration, optimized for speed, mobile responsiveness, and user experience.',
          tags: ['Wordpress', 'Elementor', 'Woocommerce', 'Javascript'],
          liveUrl: 'https://neoleadercrane.com/',
          liveLabel: 'Live Demo',
          detailRoute: '/project/neoleader',
          inProgress: false,
        },
        {
          id: 'goodWoodCarpentry',
          title: 'Good Wood Carpentry',
          image: goodWoodCarpentryImg,
          description: 'Professional carpentry business website featuring service portfolios, client testimonials, and contact forms. Optimized for lead generation and mobile experience.',
          tags: ['Wordpress', 'Elementor', 'PHP', 'Javascript'],
          liveUrl: 'https://sggoodwood.com/',
          liveLabel: 'Live Demo',
          detailRoute: '/project/goodWoodCarpentry',
          inProgress: false,
        },
        {
          id: 'kaibaConstruction',
          title: 'Kaiba Construction',
          image: kaibaImg,
          description: 'A construction company website with a focus on showcasing projects, services, and contact information.',
          tags: ['Wordpress', 'Elementor', 'PHP', 'Javascript'],
          liveUrl: 'https://kaiba.com.sg/',
          liveLabel: 'Live Demo',
          detailRoute: '/project/kaibaConstruction',
          inProgress: false,
        },
        {
          id: 'singaGroup',
          title: 'Singa Group',
          image: singaImg,
          description: 'Furniture and construction company website featuring comprehensive service offerings. Built with WordPress focusing on professional presentation and user experience.',
          tags: ['Wordpress', 'Elementor', 'PHP', 'Javascript'],
          liveUrl: 'https://singagroup.com.sg/',
          liveLabel: 'Live Demo',
          detailRoute: '/project/singaGroup',
          inProgress: false,
        },
        {
          id: 'shelfwise',
          title: 'ShelfWise',
          image: shelfwiseImg,
          description: 'Comprehensive library management system with roles for super admin, admin, and users. Allows borrowing and returning books with admin inventory tools.',
          tags: ['Laravel', 'Livewire', 'Bootstrap', 'MySQL'],
          liveUrl: 'https://drive.google.com/drive/folders/1SnvzfUgy1h9S-W63n3vThjgIrZjk4dLY?usp=sharing',
          liveLabel: 'Preview',
          detailRoute: '/project/shelfwise',
          inProgress: false,
        },
        {
          id: 'artruls',
          title: 'Artruls',
          image: artrulsImg,
          description: 'Inspired by the museum of modern art, this is a simple static landing page website. Fully responsive and mobile friendly.',
          tags: ['HTML 5', 'CSS 3', 'Bootstrap'],
          liveUrl: 'https://marlon-03.github.io/artruls/',
          liveLabel: 'Live Demo',
          detailRoute: '/project/artruls',
          inProgress: false,
        },
        {
          id: 'travel',
          title: 'Travel Itinerary',
          image: travelImg,
          description: 'A travel itinerary for your group to create and share the experience with friends or a group.',
          tags: [],
          liveUrl: '',
          liveLabel: '',
          detailRoute: null,
          inProgress: true,
        },
      ]
    }
  }
}
</script>