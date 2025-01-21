<!-- App.vue -->
<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Sidebar component -->
    <Sidebar
      :isSidebarOpen="isSidebarOpen"
      :isMobile="isMobile"
      @toggle-sidebar="toggleSidebar"
    />

    <!-- Main content area -->
    <main
      :class="{
        'transition-all duration-300 w-full': true,
        'ml-64': isSidebarOpen,
        'ml-0': !isSidebarOpen
      }"
    >
      <div class="p-8">
        <!-- Default slot for page content -->
        <slot>
          <h1 class="text-4xl font-semibold">Welcome to My Portfolio</h1>
          <p class="mt-4">Here are some details about my skills, projects, and experiences.</p>
        </slot>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import Sidebar from './components/sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar
  },
  setup() {
    const isSidebarOpen = ref(window.innerWidth >= 768) // Open by default on desktop
    const isMobile = ref(false)

    const checkMobile = () => {
      isMobile.value = window.innerWidth < 768 // Using md breakpoint (768px)
      if (isMobile.value) {
        isSidebarOpen.value = false // Always closed on mobile initially
      }
    }

    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value
    }

    onMounted(() => {
      checkMobile()
      window.addEventListener('resize', checkMobile)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', checkMobile)
    })

    return {
      isSidebarOpen,
      isMobile,
      toggleSidebar
    }
  }
}
</script>