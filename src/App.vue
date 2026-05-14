<template>
  <div class="flex flex-col min-h-screen bg-white">
    <Navbar />
    <main class="flex-1">
      <OnePage />
    </main>
  </div>
</template>

<script>
import Navbar from './components/sidebar.vue';
import OnePage from './views/OnePage.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    OnePage,
  },
};
</script>

<style>
body {
  overflow-x: hidden;
}
</style>