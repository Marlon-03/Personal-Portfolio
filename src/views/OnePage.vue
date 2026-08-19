<template>
  <div class="relative w-full overflow-hidden bg-[#F7F1E8] text-[#13213C]">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#1A2B56]/8 blur-3xl"></div>
      <div class="absolute top-[35rem] -left-32 h-[28rem] w-[28rem] rounded-full bg-[#E3B65B]/10 blur-3xl"></div>
      <div class="absolute top-[70rem] -right-32 h-[30rem] w-[30rem] rounded-full bg-white/30 blur-3xl"></div>
    </div>

    <section id="home" class="relative min-h-screen flex items-center justify-center bg-transparent scroll-mt-24">
      <div class="w-full max-w-7xl px-2">
        <Home />
      </div>
    </section>

    <section id="about" class="relative min-h-screen flex items-center justify-center bg-transparent scroll-mt-24">
      <div class="w-full max-w-7xl px-2">
        <About />
      </div>
    </section>

    <section id="services" class="relative min-h-screen flex items-center justify-center bg-transparent scroll-mt-24">
      <div class="w-full max-w-7xl px-2">
        <Services />
      </div>
    </section>

    <section id="projects" class="relative min-h-screen flex items-center justify-center bg-transparent scroll-mt-24">
      <div class="w-full max-w-7xl px-2">
        <Project />
      </div>
    </section>

    <section id="experience" class="relative min-h-screen flex items-center justify-center bg-transparent scroll-mt-24">
      <div class="w-full max-w-7xl px-2">
        <Experience />
      </div>
    </section>

    <section id="contact" class="relative min-h-screen flex items-center justify-center bg-transparent scroll-mt-24">
      <div class="w-full max-w-7xl px-2">
        <Contact />
      </div>
    </section>

    <AIChatWidget />
  </div>
</template>

<script>
import Home from './Home.vue';
import About from './About.vue';
import Services from './Services.vue';
import Project from './Project.vue';
import Experience from './Experience.vue';
import Contact from './Contact.vue';
import AIChatWidget from '../components/AIChatWidget.vue';

export default {
  name: 'OnePage',
  components: {
    Home,
    About,
    Services,
    Project,
    Experience,
    Contact,
    AIChatWidget,
  },
};
</script>