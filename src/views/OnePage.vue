<template>
  <div class="w-full bg-white">
    <!-- Home Section -->
    <section id="home" class="min-h-screen flex items-center justify-center bg-white">
      <div class="w-full max-w-7xl px-2">
        <Home />
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="w-full max-w-7xl px-2">
        <About />
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="w-full max-w-7xl px-2">
        <Project />
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="min-h-screen flex items-center justify-center bg-white">
      <div class="w-full max-w-7xl px-2">
        <Contact />
      </div>
    </section>
  </div>
</template>

<script>
import Home from './Home.vue';
import About from './About.vue';
import Project from './Project.vue';
import Contact from './Contact.vue';

export default {
  name: 'OnePage',
  components: {
    Home,
    About,
    Project,
    Contact,
  },
};
</script>