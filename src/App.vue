<template>
  <div class="flex min-h-screen">
    <!-- Sidebar component -->
    <Sidebar
      :isSidebarOpen="isSidebarOpen"
      :isMobile="isMobile"
      @toggle-sidebar="toggleSidebar"
    />
    
    <!-- Main content area -->
    <main
      :class="{
        'transition-all duration-300': true,
        'ml-64': isSidebarOpen && !isMobile,
        'ml-0': !isSidebarOpen || isMobile,
        'flex-1': true
      }"
     class="bg-[#030014] p-8 flex justify-center items-center">
    >
      <router-view />
    </main>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import Sidebar from './components/sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
  setup() {
    const isSidebarOpen = ref(window.innerWidth >= 768);
    const isMobile = ref(false);

    const checkMobile = () => {
      isMobile.value = window.innerWidth < 768;
      if (isMobile.value) {
        isSidebarOpen.value = false;
      }
    };

    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value;
    };

    onMounted(() => {
      checkMobile();
      window.addEventListener('resize', checkMobile);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', checkMobile);
    });

    return {
      isSidebarOpen,
      isMobile,
      toggleSidebar,
    };
  },
};
</script>

<style>
body {
  overflow-x: hidden;
}
</style>