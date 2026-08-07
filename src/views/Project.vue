<template>
  <div class="w-full py-12 md:py-20 px-3 md:px-6">

    <div class="max-w-7xl mx-auto">
      <div class="relative flex items-center justify-center h-28 sm:h-36 md:h-44 lg:h-52 mb-10 md:mb-16">
        <span class="bg-title">
          PORTFOLIO
        </span>
        <h1 class="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-[#13213C]">
          Portfolio Showcase
        </h1>

      </div>
    </div>

    <div class="flex flex-wrap items-center justify-center gap-3 md:gap-4 pb-8 md:pb-10">
      <button
        v-for="tab in categoryTabs"
        :key="tab.key"
        type="button"
        @click="selectCategory(tab.key)"
        class="group relative overflow-hidden rounded-full p-0 inline-flex items-center justify-center transition-all duration-300"
        :class="activeCategory === tab.key
          ? 'shadow-lg shadow-brand-accent/20 scale-[1.02]'
          : 'opacity-90 hover:opacity-100'"
      >
        <div class="absolute inset-0 rounded-full bg-white blur opacity-90 group-hover:opacity-100 transition duration-300"></div>
        <div
          class="relative rounded-full bg-white px-6 py-3 flex items-center justify-center border transition-all duration-300 shadow-sm"
          :class="activeCategory === tab.key
            ? 'border-brand-accent/30 shadow-lg'
            : 'border-[#E8DDC8] group-hover:border-brand-accent/25 group-hover:shadow-md'"
        >
          <span class="text-[#13213C] font-medium transition-colors">{{ tab.label }}</span>
          <span class="ml-2 rounded-full bg-brand-accent/15 px-2 py-0.5 text-xs text-brand-accent">{{ tab.count }}</span>
        </div>
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      <div
        v-for="project in displayedProjects"
        :key="project.id"
        class="group relative w-full"
      >
        <div class="relative overflow-hidden h-full rounded-xl bg-white backdrop-blur-lg border border-[#E8DDC8] shadow-[0_10px_30px_rgba(19,33,60,0.06)] transition-all duration-300 hover:shadow-[0_16px_36px_rgba(19,33,60,0.09)]">
          <div class="absolute inset-0 bg-gradient-to-br from-white via-[#FBF7F1] to-[#F4EBD9] opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div class="relative p-5 z-10 h-full flex flex-col">

            <div class="relative overflow-hidden rounded-lg">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div class="mt-4 space-y-3 flex-1">
              <h3 class="text-xl font-semibold text-[#13213C]">
                {{ project.title }}
              </h3>
              <p class="text-[#4B5563] text-sm leading-relaxed line-clamp-2">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2 md:gap-3">
                <div
                  v-for="tag in project.tags"
                  :key="tag"
                  class="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-[#FBF7F1] rounded-xl border border-[#E8DDC8] hover:border-[#1A2B56]/20 transition-all duration-300 cursor-default"
                >
                  <div class="absolute inset-0 bg-[#1A2B56]/0 group-hover:bg-[#1A2B56]/5 transition-all duration-500"></div>
                  <div class="relative flex items-center gap-1.5 md:gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package w-3.5 h-3.5 md:w-4 md:h-4 text-[#1A2B56] group-hover:text-[#13213C] transition-colors"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path><path d="m7.5 4.27 9 5.15"></path></svg>
                    <span class="text-xs md:text-sm font-medium text-[#1A2B56] group-hover:text-[#13213C] transition-colors">
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
                class="inline-flex items-center space-x-2 text-[#1A2B56] hover:text-[#13213C] transition-colors duration-200"
              >
                <span class="text-sm font-medium">{{ project.liveLabel }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-4 h-4">
                                <path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
              </a>
              <span v-else class="invisible"></span>

              <router-link
                v-if="!project.inProgress"
                :to="project.detailRoute"
                class="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#1A2B56] hover:bg-[#13213C] text-white transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#1A2B56]/20"
              >
                <span class="text-sm font-medium">Details</span>
              </router-link>

              <span
                v-else
                class="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#E8DDC8] text-[#1A2B56] opacity-70 pointer-events-none"
              >
                <span class="text-sm font-medium">In Progress</span>
              </span>

            </div>
          </div>

          <div class="absolute inset-0 border border-transparent group-hover:border-[#1A2B56]/10 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>

    </div>

    <div
      v-if="showViewMore"
      class="flex justify-center pt-10"
    >
      <button
        type="button"
        @click="viewMore"
        class="group relative p-0 md:p-3 block w-fit cursor-pointer transition-all duration-300"
      >
        <div class="absolute inset-0 rounded-full bg-brand-accent blur opacity-15 group-hover:opacity-25 transition duration-300"></div>
        <div class="relative rounded-full bg-white px-6 py-3 flex items-center justify-center border border-brand-accent/25 group-hover:border-brand-accent/40 group-hover:shadow-lg transition-all duration-300 shadow-sm">
          <span class="text-[#13213C] font-medium transition-colors">View More</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import buildovateImg from '../assets/buildovate.png'
import interlinkImg from '../assets/InterlinkedBanner.webp'
import hookscopeImg from '../assets/HookScopeBanner.png'
import dentalImg from '../assets/dentalbanner.webp'
import neoleaderImg from '../assets/neoleaderBanner.png'
import shelfwiseImg from '../assets/shelfwiseBanner.webp'
import artrulsImg from '../assets/museumbanner.webp'
import goodWoodCarpentryImg from '../assets/goodwoodBanner.png'
import kaibaImg from '../assets/kaibaBanner.png'
import singaImg from '../assets/singaBanner.png'
import pondDoseImg from '../assets/pondDoseBanner.png'
import personalBlogImg from '../assets/blogBanner.webp'
import constructionCrmImg from '../assets/constructionCRM.png'
import proposalAutomationImg from '../assets/proposalAutomation.png'
import contentRepurposingImg from '../assets/contentRepurposing.png'

export default {
  name: 'Project',
  data() {
    return {
      activeCategory: 'all',
      visibleCount: 9,
      projects: [
        {
          id: 'buildovate',
          title: 'Buildovate',
          image: buildovateImg,
          description: 'Contributed to the development of a construction-focused CRM platform. Implemented backend and frontend features supporting core system workflows.',
          tags: ['Laravel', 'Nuxt JS', 'Vue JS', 'Tailwind CSS', 'MySQL', 'Third-party API Integration'],
          category: 'application',
          liveUrl: 'https://app.buildovate.com/login',
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
          category: 'application',
          liveUrl: 'https://app.interlinked.se/login',
          liveLabel: 'Live Demo',
          detailRoute: '/project/interlinked',
          inProgress: false,
        },
        {
          id: 'dixondental',
          title: 'Dixon Road Dental Surgery',
          image: dentalImg,
          description: 'Professional website for Rockingham Smile Dental Clinic built using WordPress and Elementor. Fully mobile-responsive with SEO best practices.',
          tags: ['Wordpress', 'Elementor', 'Javascript'],
          category: 'website',
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
          category: 'website',
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
          category: 'website',
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
          category: 'website',
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
          category: 'website',
          liveUrl: 'https://singagroup.com.sg/',
          liveLabel: 'Live Demo',
          detailRoute: '/project/singaGroup',
          inProgress: false,
        },
        {
          id: 'hookscope',
          title: 'HookScope',
          image: hookscopeImg,
          description: 'Create custom endpoints, capture incoming requests, and inspect every detail in real-time. Perfect for testing and debugging webhooks.',
          tags: ['NextJS', 'Supabase', 'TypeScript', 'Tailwind CSS'],
          category: 'application',
          liveUrl: 'https://hookscope.vercel.app/',
          liveLabel: 'Live Demo',
          detailRoute: '/project/hookScope',
          inProgress: false,
        },
        {
          id: 'pondDose',
          title: 'PondDose',
          image: pondDoseImg,
          description: 'A precision pond salt calculator built for Koi hobbyists. Supports forward calculation (how much salt to add) and reverse calculation (estimating pond volume from a known salt dose), with real-time unit conversion, salinity safety warnings, and a built-in beginner reference guide.',
          tags: ['NextJS', 'TypeScript', 'Tailwind CSS'],
          category: 'application',
          liveUrl: 'https://saltfrequencycalculator.vercel.app/',
          liveLabel: 'Live Demo',
          detailRoute: '/project/pondDose',
          inProgress: false,
        },
        {
          id: 'shelfwise',
          title: 'ShelfWise',
          image: shelfwiseImg,
          description: 'Comprehensive library management system with roles for super admin, admin, and users. Allows borrowing and returning books with admin inventory tools.',
          tags: ['Laravel', 'Livewire', 'Bootstrap', 'MySQL'],
          category: 'application',
          liveUrl: 'https://drive.google.com/drive/folders/1SnvzfUgy1h9S-W63n3vThjgIrZjk4dLY?usp=sharing',
          liveLabel: 'Preview',
          detailRoute: '/project/shelfwise',
          inProgress: false,
        },
        {
          id: 'personalBlog',
          title: 'Personal Blog',
          image: personalBlogImg,
          description: 'A modern full-stack blogging application built with Vue.js on the frontend and Laravel on the backend. This project demonstrates proficiency in creating responsive web applications with real-time data synchronization, secure user authentication, and comprehensive content management. The application features a clean, intuitive interface for readers and a robust admin panel for authors to manage their blog posts efficiently.',
          tags: ['Vue.js', 'Laravel', 'Tailwind CSS', 'MySQL', 'RESTful API'],
          category: 'application',
          liveUrl: 'https://drive.google.com/drive/folders/1mHdEqQcUoClQlwn9RaqK9y40kU9WQtjc?usp=sharing',
          liveLabel: 'Preview',
          detailRoute: '/project/personalBlog',
          inProgress: false,
        },
        {
          id: 'artruls',
          title: 'Artruls',
          image: artrulsImg,
          description: 'Inspired by the museum of modern art, this is a simple static landing page website. Fully responsive and mobile friendly.',
          tags: ['HTML 5', 'CSS 3', 'Bootstrap'],
          category: 'website',
          liveUrl: 'https://marlon-03.github.io/artruls/',
          liveLabel: 'Live Demo',
          detailRoute: '/project/artruls',
          inProgress: false,
        },
        {
          id: 'zapConstructionCrm',
          title: 'Construction CRM Automation for Roofing Contractors',
          image: constructionCrmImg,
          description: 'A comprehensive CRM automation solution designed specifically for roofing contractors. This system streamlines project management, client communication, and workflow automation, enhancing operational efficiency and customer satisfaction.',
          tags: ['Zapier', 'Asana', 'Google Drive', 'Gmail'],
          category: 'zapier',
          liveUrl: '',
          liveLabel: '',
          detailRoute: '/project/constructionCrm',
          inProgress: false,
        },
        {
          id: 'zapProposalAutomation',
          title: 'AI Sales Qualification & Proposal Automation',
          image: proposalAutomationImg,
          description: 'An automated proposal generation system designed to streamline the quoting process for roofing contractors. This solution reduces manual effort, minimizes errors, and accelerates response times.',
          tags: ['Zapier', 'OpenAI', 'Google Forms', 'Google Docs', 'Gmail', 'Slack'],
          category: 'zapier',
          liveUrl: '',
          liveLabel: '',
          detailRoute: '/project/proposalAutomation',
          inProgress: false,
        },
        {
          id: 'zapContentRepurposing',
          title: 'AI Content Repurposing Automation',
          image: contentRepurposingImg,
          description: 'An AI-powered content repurposing automation system that transforms existing content into various formats for different platforms. This tool enhances content reach and engagement by efficiently adapting content to suit diverse audience preferences.',
          tags: ['Zapier', 'OpenAI', 'Google Drive', 'Gmail', 'Google Sheets', 'Instagram', 'Facebook', 'Slack'],
          category: 'zapier',
          liveUrl: '',
          liveLabel: '',
          detailRoute: '/project/contentRepurposing',
          inProgress: false,
        },

      ]
    }
  },
  computed: {
    categoryTabs() {
      const seenCategories = new Set()
      const tabs = [{ key: 'all', label: 'All' }]

      this.projects.forEach((project) => {
        if (!project.category || seenCategories.has(project.category)) {
          return
        }

        seenCategories.add(project.category)
        tabs.push({
          key: project.category,
          label: this.formatCategoryLabel(project.category),
        })
      })

      return tabs.map((tab) => ({
        ...tab,
        count: tab.key === 'all'
          ? this.projects.length
          : this.projects.filter((project) => project.category === tab.key).length,
      }))
    },
    filteredProjects() {
      if (this.activeCategory === 'all') {
        return this.projects
      }

      return this.projects.filter((project) => project.category === this.activeCategory)
    },
    displayedProjects() {
      return this.filteredProjects.slice(0, this.visibleCount)
    },
    showViewMore() {
      return this.filteredProjects.length > this.displayedProjects.length
    },
  },
  methods: {
    selectCategory(category) {
      this.activeCategory = category
      this.visibleCount = 9
    },
    viewMore() {
      this.visibleCount = this.filteredProjects.length
    },
    formatCategoryLabel(category) {
      const labels = {
        application: 'Applications',
        website: 'Websites',
        zapier: 'Zapier',
        make: 'Make',
      }

      return labels[category] || category
    },
  },
}
</script>