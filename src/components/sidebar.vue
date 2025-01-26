<template>
  <div>
    <!-- Sidebar container -->
    <div
      :class="{
        'fixed top-0 left-0 h-screen bg-[#151616] flex items-center justify-center flex-col text-white shadow-lg z-50': true,
        'w-64': true,
        'transform transition-transform duration-300': true,
        '-translate-x-full': !isSidebarOpen,
        'translate-x-0': isSidebarOpen
      }"
    >
      <div class="p-6">
        <h2 class="px-4 rounded text-3xl font-bold mb-8 ">My Portfolio</h2>
        <ul class="space-y-2">
          <li>
            <router-link to="/" :class="getLinkClass('/')" class="block py-2 px-4 rounded " >Home</router-link>
          </li>

          <li>
            <router-link to="/about" :class="getLinkClass('/about')" class="block py-2 px-4 rounded" >About</router-link>
          </li>

          <li>
            <router-link to="/skills" :class="getLinkClass('/skills')" class="block py-2 px-4 rounded" >Skills</router-link>
          </li>

          <li>
            <router-link to="/projects" :class="getLinkClass('/projects')" class="block py-2 px-4 rounded" >Projects</router-link>
          </li>

          <li>
           <router-link to="/contact" :class="getLinkClass('/contact')" class="block py-2 px-4 rounded" >Contact</router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- Mobile overlay backdrop -->
    <div
      v-if="isSidebarOpen && isMobile"
      class="fixed inset-0 bg-black/50 z-40"
      @click="toggleSidebar"
    ></div>

    <!-- Toggle button -->
    <button
      class="fixed top-4 left-4 z-50 p-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700"
      @click="toggleSidebar"
      :class="{ 'transform transition-transform duration-300': true }"
    >
      <span v-if="isSidebarOpen">✖</span>
      <span v-else>☰</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    isSidebarOpen: {
      type: Boolean,
      required: true,
    },
    isMobile: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    currentPath() {
      return this.$route.path;
    },
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
    getLinkClass(targetPath) {
      return this.currentPath === targetPath
        ? "gradient-text underline-gradient text-3xl font-bold"
        : 'text-xl font-semibold text-gray-300 hover:text-white';
    },
  },
};
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(to right, #6366f1, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


.underline-gradient {
  position: relative;
}
.underline-gradient::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 3px;
  background: linear-gradient(to right, #05cea8, #07ffd0);
  border-radius: 2px;
  transition: transform 0.3s ease-in-out;
}

.underline-gradient:hover::after {
  transform: translateX(-50%) scaleX(1.1);
}
</style>
