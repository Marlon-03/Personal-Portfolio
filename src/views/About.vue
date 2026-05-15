<template>
  <div class="w-full py-12 md:py-20 px-3 md:px-6">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent text-center pb-4">About Me</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Crafting Digital Experiences</h2>
          <p class="text-gray-700 text-lg leading-relaxed mb-4">
            Hi, I'm Marlon, a web developer and WordPress designer who helps businesses build professional, user-friendly websites that attract customers and grow online presence.
          </p>
          <p class="text-gray-700 text-lg leading-relaxed mb-4">
            I specialize in creating fast, mobile-responsive websites with WordPress, Elementor, Laravel and Vue JS making it easy for clients to manage their content and scale their business.
          </p>
          <p class="text-gray-700 text-lg leading-relaxed mb-8">
            When I'm not working on websites, you'll probably find me cycling, playing strategy games, or exploring new ideas in tech. My mix of creativity and problem-solving helps me deliver web solutions that are both functional and visually appealing.
          </p>

          <div class="flex space-x-4 justify-center items-center">

          <a href="https://drive.google.com/file/d/1P-TE2lcCShPqZ0KuovV6o9uv2PDkGSS5/view?usp=drive_link" target="_blank" class="group relative p-0 md:p-3 block w-fit cursor-pointer">
            <div class="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div class="relative rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] px-6 py-3 flex items-center justify-center border border-transparent group-hover:shadow-lg transition-all duration-300">
              <span class="text-white font-medium transition-colors">Download CV</span>
            </div>
          </a>

          <button
            @click="scrollToContact" class="group relative p-1 md:p-3 block w-fit cursor-pointer">
            <div class="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div class="relative rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] px-6 py-3 flex items-center justify-center border border-transparent group-hover:shadow-lg transition-all duration-300">
              <span class="text-white font-medium transition-colors">Contact</span>
            </div>
          </button>
       </div>
        </div>

        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Skills & Technologies</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div
              v-for="(skill, index) in skills"
              :key="index"
              class="w-full group p-4 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-2 hover:scale-105 cursor-pointer shadow-md hover:shadow-lg"
            >
              <div class="relative">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"
                ></div>
                <img
                  :src="skill.icon"
                  :alt="skill.name"
                  class="relative h-12 w-12 md:h-16 md:w-16 transform transition-transform duration-300"
                />
              </div>
              <span
                class="text-gray-700 font-semibold text-xs md:text-sm text-center tracking-wide group-hover:text-gray-900 transition-colors duration-300"
              >
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import phpIcon from "../assets/php.png";
import laravelIcon from "../assets/laravel.png";
import wpIcon from "../assets/wp.jpg";
import jsIcon from "../assets/javascript.png";
import vueIcon from "../assets/vue.png";
import reactIcon from "../assets/reactjs.svg";
import bootsrapIcon from "../assets/bootstrap.svg";
import tailwindIcon from "../assets/tailwind.svg";
import typeScriptIcon from "../assets/typescript.png";
import nextjsIcon from "../assets/next.webp";
import supabaseIcon from "../assets/supabase.webp";
import viteIcon from "../assets/vite.svg";
import Git from "../assets/git.svg";
import Figma from "../assets/figma.png";

export default {
  name: 'About',
  data() {
    return {
      skills: [
        { name: "HTML", icon: htmlIcon },
        { name: "CSS", icon: cssIcon },
        { name: "PHP", icon: phpIcon },
        { name: "Laravel", icon: laravelIcon },
        { name: "WordPress", icon: wpIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "TypeScript", icon: typeScriptIcon },
        { name: "Vue Js", icon: vueIcon },
        { name: "React Js", icon: reactIcon },
        { name: "Next Js", icon: nextjsIcon },
        { name: "Bootstrap", icon: bootsrapIcon },
        { name: "Tailwind CSS", icon: tailwindIcon },
        { name: "Supabase", icon: supabaseIcon },
        { name: "Vite", icon: viteIcon},
        { name: "Git", icon: Git},
        { name: "Figma", icon: Figma}
      ],
    };
  },
  methods: {
    scrollToContact() {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style scoped>
</style>
