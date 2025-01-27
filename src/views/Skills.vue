<template>
    <div class="p-6 w-full">
      <!-- Skills Title -->
      <h1 class="text-6xl font-bold mb-8 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent text-center pb-20">
        Skills
      </h1>
  
      <!-- Skills Grid -->
      <div class="grid grid-cols-5 gap-6">
        <!-- Skill Card -->
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="w-full group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
        >
          <div class="relative">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"
            ></div>
            <img
              :src="skill.icon"
              :alt="skill.name"
              class="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
            />
          </div>
          <span
            class="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300"
          >
            {{ skill.name }}
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import htmlIcon from "../assets/html.svg";
    import cssIcon from "../assets/css.svg";
    import phpIcon from "../assets/php.png";
    import laravelIcon from "../assets/laravel.png";
    import wpIcon from "../assets/wP.jpg";
    import jsIcon from "../assets/javascript.png";
    import vueIcon from "../assets/vue.png";
    import reactIcon from "../assets/reactjs.svg";
    import bootsrapIcon from "../assets/bootstrap.svg";
    import tailwindIcon from "../assets/tailwind.svg";
  
    export default {
      name: "Skills",
      data() {
        return {
          skills: [
            { name: "HTML", icon: htmlIcon },
            { name: "CSS", icon: cssIcon },
            { name: "PHP", icon: phpIcon },
            { name: "Laravel", icon: laravelIcon },
            { name: "WordPress", icon: wpIcon },
            { name: "JavaScript", icon: jsIcon },
            { name: "Vue", icon: vueIcon },
            { name: "React", icon: reactIcon },
            { name: "Bootstrap", icon: bootsrapIcon },
            { name: "Tailwind", icon: tailwindIcon },
          ],
        };
      },
    };
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  