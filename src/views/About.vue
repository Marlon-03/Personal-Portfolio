<template>
  <div class="w-full py-12 md:py-20 px-3 md:px-6">

    <div class="max-w-7xl mx-auto">
      <div class="relative flex items-center justify-center h-28 sm:h-36 md:h-44 lg:h-52 mb-12">
       <span class="bg-title">
          ABOUT
        </span>

        <h1 class="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-[#13213C]">
          About Me
        </h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div class="rounded-3xl border border-[#D8CCB8] bg-white/80 p-6 md:p-8 backdrop-blur-sm shadow-sm">
          <h2 class="text-3xl font-bold text-[#13213C] mb-6">Crafting Digital Experiences</h2>
          <p class="text-[#4B5563] text-lg leading-relaxed mb-4">
            Hi, I'm Marlon, a web developer and WordPress designer who helps businesses build professional, user-friendly websites that attract customers and grow online presence.
          </p>
          <p class="text-[#4B5563] text-lg leading-relaxed mb-4">
            I specialize in creating fast, mobile-responsive websites with WordPress, Elementor, Laravel and Vue JS making it easy for clients to manage their content and scale their business.
          </p>
          <p class="text-[#4B5563] text-lg leading-relaxed mb-8">
            When I'm not working on websites, you'll probably find me cycling, playing strategy games, or exploring new ideas in tech. My mix of creativity and problem-solving helps me deliver web solutions that are both functional and visually appealing.
          </p>

          <div class="flex space-x-4 justify-center items-center">

          <a href="https://drive.google.com/file/d/1eNnZPL-uFRub5_9DUOiu2fmfvQTQ81Ue/view?usp=sharing" target="_blank" class="group relative p-0 md:p-3 block w-fit cursor-pointer">
            <div class="absolute inset-0 rounded-full bg-[#1A2B56] blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
            <div class="relative rounded-full bg-[#1A2B56] px-6 py-3 flex items-center justify-center border border-[#1A2B56]/15 group-hover:border-[#1A2B56]/30 group-hover:shadow-lg transition-all duration-300 shadow-sm">
              <span class="text-white font-medium transition-colors">Download CV</span>
            </div>
          </a>

          <button
            @click="scrollToContact" class="group relative p-1 md:p-3 block w-fit cursor-pointer">
            <div class="absolute inset-0 rounded-full bg-[#1A2B56] blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
            <div class="relative rounded-full bg-[#1A2B56] px-6 py-3 flex items-center justify-center border border-[#1A2B56]/15 group-hover:border-[#1A2B56]/30 group-hover:shadow-lg transition-all duration-300 shadow-sm">
              <span class="text-white font-medium transition-colors">Contact</span>
            </div>
          </button>
       </div>
        </div>

        <div class="rounded-3xl border border-[#D8CCB8] bg-white/80 p-6 md:p-8 backdrop-blur-sm shadow-sm">
          <h2 class="text-3xl font-bold text-[#13213C] mb-8 text-center">Skills & Technologies</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div
              v-for="(skill, index) in skills"
              :key="index"
              class="w-full group p-4 rounded-2xl bg-[#FBF7F1] transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-2 hover:scale-105 cursor-pointer shadow-sm hover:shadow-md border border-[#E8DDC8] hover:border-[#1A2B56]/20"
            >
              <div class="relative">
                <div
                  class="absolute -inset-1 bg-[#E3B65B] rounded-full opacity-0 group-hover:opacity-25 blur transition duration-300"
                ></div>
                <img
                  :src="skill.icon"
                  :alt="skill.name"
                  class="relative h-12 w-12 md:h-16 md:w-16 transform transition-transform duration-300"
                />
              </div>
              <span
                class="text-[#4B5563] font-semibold text-xs md:text-sm text-center tracking-wide group-hover:text-[#1A2B56] transition-colors duration-300"
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
