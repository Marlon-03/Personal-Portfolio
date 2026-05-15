<template>
  <div class="w-full bg-white">
    <section id="home" class="min-h-screen flex items-center justify-center bg-white">
      <div class="w-full max-w-7xl px-2">
        <Home />
      </div>
    </section>

    <section id="about" class="min-h-screen flex items-center justify-center bg-white">
      <div class="w-full max-w-7xl px-2">
        <About />
      </div>
    </section>

    <section id="projects" class="min-h-screen flex items-center justify-center bg-white">
      <div class="w-full max-w-7xl px-2">
        <Project />
      </div>
    </section>

    <section id="experience" class="min-h-screen flex items-center justify-center bg-white">
      <div class="w-full max-w-7xl px-2">
        <Experience />
      </div>
    </section>

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
import Experience from './Experience.vue';
import Contact from './Contact.vue';

export default {
  name: 'OnePage',
  components: {
    Home,
    About,
    Project,
    Experience,
    Contact,
  },
};
</script>