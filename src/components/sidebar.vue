<!-- Sidebar.vue -->
<template>
    <div>
      <!-- Sidebar container -->
      <div
        :class="{
          'fixed top-0 left-0 h-screen bg-[#151616]    text-white shadow-lg z-50': true,
          'w-64': true,
          'transform transition-transform duration-300': true,
          '-translate-x-full': !isSidebarOpen,
          'translate-x-0': isSidebarOpen
        }"
      >
        <div class="p-6">
          <h2 class="text-xl font-bold mb-8">My Portfolio</h2>
          <ul class="space-y-2">
            <li><a href="#home" class="block py-2 px-4 hover:bg-gray-700 rounded">Home</a></li>
            <li><a href="#about" class="block py-2 px-4 hover:bg-gray-700 rounded">About</a></li>
            <li><a href="#projects" class="block py-2 px-4 hover:bg-gray-700 rounded">Projects</a></li>
            <li><a href="#contact" class="block py-2 px-4 hover:bg-gray-700 rounded">Contact</a></li>
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
    name: 'Sidebar',
    props: {
      isSidebarOpen: {
        type: Boolean,
        required: true
      },
      isMobile: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      toggleSidebar() {
        this.$emit('toggle-sidebar');
      }
    }
  };
  </script>