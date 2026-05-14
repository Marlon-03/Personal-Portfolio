<template>
  <div class="flex flex-col min-h-screen bg-white">
    <Navbar />
    <main class="flex-1">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from './components/sidebar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style>
body {
  overflow-x: hidden;
}
</style>