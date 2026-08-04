<template>
  <nav :class="navClasses">
    <div class="max-w-7xl mx-auto px-4 md:px-6 py-4">
      <div class="flex items-center justify-between">
        <router-link
          to="#home"
          @click.prevent="scrollToSection('home')"
          :class="[
            'inline-flex items-center gap-2 transition-opacity hover:opacity-80',
            isProjectPage
              ? 'text-xl md:text-2xl font-bold text-brand-accent cursor-pointer'
              : 'text-xl md:text-2xl font-bold text-[#13213C] cursor-pointer'
          ]"
        >
          <img :src="logo" alt="Marlon logo" class="h-8 w-8 md:h-10 md:w-10 object-contain" />
          <span>Marlon</span>
        </router-link>

        <div class="hidden md:flex items-center space-x-8">
          <ul class="flex space-x-8">
            <li>
              <a href="#home" @click.prevent="scrollToSection('home')" :class="getLinkClass('home')" class="transition-all text-lg duration-300">Home</a>
            </li>
            <li>
              <a href="#about" @click.prevent="scrollToSection('about')" :class="getLinkClass('about')" class="transition-all text-lg duration-300">About</a>
            </li>
            <li>
              <a href="#projects" @click.prevent="scrollToSection('projects')" :class="getLinkClass('projects')" class="transition-all text-lg duration-300">Projects</a>
            </li>
            <li>
              <a href="#experience" @click.prevent="scrollToSection('experience')" :class="getLinkClass('experience')" class="transition-all text-lg duration-300">Experience</a>
            </li>
            <li>
              <a href="#contact" @click.prevent="scrollToSection('contact')" :class="getLinkClass('contact')" class="transition-all text-lg duration-300">Contact</a>
            </li>
          </ul>
          
        </div>

        <div class="md:hidden flex items-center space-x-4">

          <button @click="toggleMobileMenu" :class="isProjectPage ? 'p-2 rounded-lg bg-brand-soft hover:bg-brand-surface transition-colors border border-white/10' : 'p-2 rounded-lg bg-white border border-[#E8DDC8] hover:border-[#1A2B56]/20 transition-colors shadow-sm'">
            <svg v-if="!isMobileMenuOpen" :class="isProjectPage ? 'w-6 h-6 text-white' : 'w-6 h-6 text-[#13213C]'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else :class="isProjectPage ? 'w-6 h-6 text-white' : 'w-6 h-6 text-[#13213C]'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <transition name="slide">
        <div v-if="isMobileMenuOpen" :class="isProjectPage ? 'md:hidden mt-4 pb-4 border-t border-white/10 pt-4' : 'md:hidden mt-4 pb-4 border-t border-[#E8DDC8] pt-4'">
          <ul class="flex flex-col space-y-3">
            <li>
              <a href="#home" @click.prevent="handleMobileNavClick('home')" :class="getLinkClass('home')" class="block py-2 transition-all duration-300">Home</a>
            </li>
            <li>
              <a href="#about" @click.prevent="handleMobileNavClick('about')" :class="getLinkClass('about')" class="block py-2 transition-all duration-300">About</a>
            </li>
            <li>
              <a href="#projects" @click.prevent="handleMobileNavClick('projects')" :class="getLinkClass('projects')" class="block py-2 transition-all duration-300">Projects</a>
            </li>
            <li>
              <a href="#experience" @click.prevent="handleMobileNavClick('experience')" :class="getLinkClass('experience')" class="block py-2 transition-all duration-300">Experience</a>
            </li>
            <li>
              <a href="#contact" @click.prevent="handleMobileNavClick('contact')" :class="getLinkClass('contact')" class="block py-2 transition-all duration-300">Contact</a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import logo from '../assets/logo.png';

export default {
  name: "Navbar",
  data() {
    return {
      logo,
      activeSection: 'home',
      isMobileMenuOpen: false,
      isDarkMode: false,
    };
  },
  computed: {
    isProjectPage() {
      return this.$route.path.startsWith('/project');
    },
    navClasses() {
      return this.isProjectPage
        ? 'sticky top-0 bg-brand-primary shadow-sm z-50 border-b border-white/10'
        : 'sticky top-0 bg-white/85 backdrop-blur-md shadow-sm z-50 border-b border-[#E8DDC8]';
    },
  },
  methods: {
    scrollToSection(sectionId) {
      this.activeSection = sectionId;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    handleMobileNavClick(sectionId) {
      this.scrollToSection(sectionId);
      this.isMobileMenuOpen = false;
    },
    updateActiveSection() {
      const sections = ['home', 'about', 'projects', 'contact'];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            this.activeSection = section;
          }
        }
      }
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    getLinkClass(sectionId) {
      if (this.isProjectPage) {
        return this.activeSection === sectionId
          ? 'text-base font-bold text-brand-accent'
          : 'text-base font-semibold text-white/75 hover:text-white';
      }

      return this.activeSection === sectionId
        ? 'text-base font-bold text-[#1A2B56]'
        : 'text-base font-semibold text-[#4B5563] hover:text-[#13213C]';
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateActiveSection);
  },
  unmounted() {
    window.removeEventListener('scroll', this.updateActiveSection);
  },
};
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>