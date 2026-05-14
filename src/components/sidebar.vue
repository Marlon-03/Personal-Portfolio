<template>
  <nav class="sticky top-0 bg-white shadow-sm z-50 border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 md:px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo/Name -->
        <router-link to="#home" @click.prevent="scrollToSection('home')" class="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">
          Marlon
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <ul class="flex space-x-8">
            <li>
              <a href="#home" @click.prevent="scrollToSection('home')" :class="getLinkClass('home')" class="transition-all duration-300">Home</a>
            </li>
            <li>
              <a href="#about" @click.prevent="scrollToSection('about')" :class="getLinkClass('about')" class="transition-all duration-300">About</a>
            </li>
            <li>
              <a href="#projects" @click.prevent="scrollToSection('projects')" :class="getLinkClass('projects')" class="transition-all duration-300">Projects</a>
            </li>
            <li>
              <a href="#contact" @click.prevent="scrollToSection('contact')" :class="getLinkClass('contact')" class="transition-all duration-300">Contact</a>
            </li>
          </ul>
          
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center space-x-4">

          
          <button @click="toggleMobileMenu" class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition name="slide">
        <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
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
              <a href="#contact" @click.prevent="handleMobileNavClick('contact')" :class="getLinkClass('contact')" class="block py-2 transition-all duration-300">Contact</a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      activeSection: 'home',
      isMobileMenuOpen: false,
      isDarkMode: false,
    };
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
      return this.activeSection === sectionId
        ? "text-base font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
        : 'text-base font-semibold text-gray-700 hover:text-gray-900';
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