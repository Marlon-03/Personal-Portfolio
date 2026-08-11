<template>
  <div class="w-full pt-12 md:pt-20 px-3 md:px-6">
    <div class="max-w-7xl mx-auto">
      <div class="relative flex items-center justify-center h-28 sm:h-36 md:h-44 lg:h-52 mb-12">
        <span class="bg-title">
          ABOUT
        </span>
        <h1 class="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-[#13213C]">
          About Me
        </h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        <div class="rounded-3xl border border-[#D8CCB8] bg-white/80 p-6 md:p-8 backdrop-blur-sm shadow-sm">
          <h2 class="text-3xl font-bold text-[#13213C] mb-6">Crafting Digital Experiences</h2>
          <p class="text-[#4B5563] text-lg leading-relaxed mb-4">
            Hi, I'm Marlon, a Full-Stack Developer and AI Workflow Automation Specialist who helps businesses build professional, user-friendly websites that attract customers and grow online presence.
          </p>
          <p class="text-[#4B5563] text-lg leading-relaxed mb-4">
            I specialize in creating fast, mobile-responsive websites with WordPress, Elementor, Laravel, and Vue JS, making it easy for clients to manage their content and scale their business. I also build AI-powered workflow automations using tools like Zapier, connecting forms, emails, CRMs, and other systems so clients can run their business without manual busywork.
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

        <div>
          <div class="mb-8 flex justify-center">
            <span class="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">What I bring</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="p-6 bg-brand-surface rounded-lg shadow-sm hover:shadow-md transition-shadow border border-white/10">
              <div class="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Clean Code</h3>
              <p class="text-white/70 text-sm">Maintainable & scalable solutions built with best practices</p>
            </div>

            <div class="p-6 bg-brand-surface rounded-lg shadow-sm hover:shadow-md transition-shadow border border-white/10">
              <div class="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Performance</h3>
              <p class="text-white/70 text-sm">Fast & optimized applications that deliver results</p>
            </div>

            <div class="p-6 bg-brand-surface rounded-lg shadow-sm hover:shadow-md transition-shadow border border-white/10">
              <div class="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Modern UI</h3>
              <p class="text-white/70 text-sm">Pixel-perfect designs that look amazing</p>
            </div>

            <div class="p-6 bg-brand-surface rounded-lg shadow-sm hover:shadow-md transition-shadow border border-white/10">
              <div class="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke-width="2"></rect>
                  <rect x="9" y="9" width="6" height="6" stroke-width="2"></rect>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 2v2M9 2v2M15 20v2M9 20v2M20 15h2M20 9h2M2 15h2M2 9h2"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">AI & Automation</h3>
              <p class="text-white/70 text-sm">Smart workflows that save time and streamline repetitive tasks</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>

  <div class="w-full py-8 md:py-10 overflow-hidden bg-[#FBF7F1] border-y border-[#E8DDC8]">
    <div class="marquee-track flex gap-10 md:gap-14 w-max">
      <div
        v-for="(skill, index) in [...skills, ...skills]"
        :key="index"
        class="group flex-shrink-0 flex flex-col items-center justify-center gap-2 opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
      >
        <img
          :src="skill.icon"
          :alt="skill.name"
          class="h-12 w-12 md:h-12 md:w-12 transition-transform duration-300"
        />
        <span class="text-[#4B5563] font-medium text-xs tracking-wide">
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
import nuxtIcon from "../assets/nuxt.png";
import zapierIcon from "../assets/zapier.svg";
import makeIcon from "../assets/make.png";
import n8nIcon from "../assets/n8n.png";
import airtableIcon from "../assets/airtable.png";
import asanaIcon from "../assets/asana.png";
import slackIcon from "../assets/slack.png";
import notionIcon from "../assets/notion.png";
import openaiIcon from "../assets/openai.png";
import apiIcon from "../assets/api.png";
import ghlIcon from "../assets/ghl.png";

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
        { name: "Nuxt Js", icon: nuxtIcon },
        { name: "React Js", icon: reactIcon },
        { name: "Next Js", icon: nextjsIcon },
        { name: "Bootstrap", icon: bootsrapIcon },
        { name: "Tailwind CSS", icon: tailwindIcon },
        { name: "Supabase", icon: supabaseIcon },
        { name: "Vite", icon: viteIcon },
        { name: "Git", icon: Git },
        { name: "Figma", icon: Figma },
        { name: "Zapier", icon: zapierIcon },
        { name: "Make", icon: makeIcon },
        { name: "n8n", icon: n8nIcon },
        { name: "GHL", icon: ghlIcon },
        { name: "Airtable", icon: airtableIcon },
        { name: "Asana", icon: asanaIcon },
        { name: "Slack", icon: slackIcon },
        { name: "Notion", icon: notionIcon },
        { name: "OpenAI", icon: openaiIcon },
        { name: "API Integration", icon: apiIcon },
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
.marquee-track {
  animation: scroll-marquee 30s linear infinite;
  will-change: transform;
  backface-visibility: hidden;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes scroll-marquee {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-50%, 0, 0);
  }
}
</style>