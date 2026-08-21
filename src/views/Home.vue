<template>
  <div class="flex flex-col md:flex-row justify-center items-center px-3 md:px-6 pt-16 md:pt-24 gap-10 md:gap-0">
    <div class="w-full md:w-3/5 flex flex-col justify-center items-center text-center py-5 gap-6">
      <h1 class="text-5xl md:text-6xl font-bold mb-2 text-[#13213C]">Hi, I'm Marlon</h1>
      <h1 class="inline-flex min-w-[9ch] justify-center text-4xl md:text-5xl font-semibold mb-2 pb-2 text-brand-accent">
        <span>{{ displayText }}</span>
      </h1>
      <p class="max-w-2xl text-[#4B5563] text-lg md:text-xl leading-relaxed font-medium">
        Helping Service-Based Businesses Simplify The Way They Work Through Automation & Business Systems
      </p>
      <p class="max-w-2xl text-[#4B5563] text-base md:text-lg leading-relaxed">
        I build innovative, user-friendly websites, and connect them with AI-powered automation, so your business runs smoothly behind the scenes. No more missed follow-ups, scattered customer information, or repetitive manual work.
      </p>

      <div class="flex space-x-4">
        <a href="https://www.linkedin.com/in/marlon-movilla-5254a3289/" target="_blank" class="group relative p-1 md:p-3 block w-fit">
          <div class="absolute inset-0 rounded-lg bg-[#1A2B56] blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
          <div class="relative rounded-lg bg-[#1A2B56] border border-[#1A2B56]/15 p-3 flex items-center justify-center hover:border-[#1A2B56]/30 transition-all duration-300 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin w-6 h-6 text-white transition-colors">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </div>
        </a>

        <a href="https://github.com/Marlon-03" target="_blank" class="group relative p-1 md:p-3 block w-fit">
          <div class="absolute inset-0 rounded-lg bg-[#1A2B56] blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
          <div class="relative rounded-lg bg-[#1A2B56] border border-[#1A2B56]/15 p-3 flex items-center justify-center hover:border-[#1A2B56]/30 transition-all duration-300 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-6 h-6 text-white transition-colors">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.1.68-.22.68-.48v-1.7c-2.79.61-3.38-1.34-3.38-1.34-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.61.07-.61 1 .07 1.53 1.02 1.53 1.02.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.12-4.56-4.96 0-1.1.39-2 .99-2.71-.1-.24-.43-1.24.09-2.58 0 0 .81-.26 2.65 1.02A9.26 9.26 0 0 1 12 6.8a9.21 9.21 0 0 1 2.41.33c1.84-1.28 2.65-1.02 2.65-1.02.52 1.34.19 2.34.1 2.58.61.71 1 1.61 1 2.71 0 3.86-2.35 4.71-4.59 4.96.36.31.67.92.67 1.85v2.74c0 .26.18.59.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"></path>
            </svg>
          </div>
        </a>

        <a href="https://www.facebook.com/marlon.movilla.10" target="_blank" class="group relative p-1 md:p-3 block w-fit">
          <div class="absolute inset-0 rounded-lg bg-[#1A2B56] blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
          <div class="relative rounded-lg bg-[#1A2B56] border border-[#1A2B56]/15 p-3 flex items-center justify-center hover:border-[#1A2B56]/30 transition-all duration-300 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook w-6 h-6 text-white transition-colors">
              <path d="M18 2h-3c-2.28 0-4 1.72-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6c0-.58.42-1 1-1h3z"></path>
            </svg>
          </div>
        </a>

        <a href="https://www.instagram.com/marlon_web_dev/" target="_blank" class="group relative p-1 md:p-3 block w-fit">
          <div class="absolute inset-0 rounded-lg bg-[#1A2B56] blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
          <div class="relative rounded-lg bg-[#1A2B56] border border-[#1A2B56]/15 p-3 flex items-center justify-center hover:border-[#1A2B56]/30 transition-all duration-300 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram w-6 h-6 text-white transition-colors">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37a4 4 0 1 1-4.75-4.75"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </div>
        </a>
      </div>

      <div class="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center">

          <button
            @click="scrollToProjects" class="group relative p-1 md:p-3 block w-fit cursor-pointer">
            <div class="absolute inset-0 rounded-full bg-[#1A2B56] blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
            <div class="relative rounded-full bg-[#1A2B56] px-6 py-3 flex items-center justify-center border border-[#1A2B56]/15 group-hover:border-[#1A2B56]/30 group-hover:shadow-lg transition-all duration-300 shadow-sm">
              <span class="text-white font-medium transition-colors">Projects</span>
            </div>
          </button>

          <a href="https://drive.google.com/file/d/1XCOpO4GQfQX3-9_BEc6MHZrL1Uf88msA/view?usp=sharing" target="_blank" class="group relative p-0 md:p-3 block w-fit cursor-pointer">
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

    <div class="flex md:w-2/5 justify-center items-center relative">
      <div class="relative flex w-full max-w-md items-center justify-center">
        <div class="absolute inset-8 rounded-full bg-[#1A2B56]/8 blur-3xl"></div>
        <div class="relative aspect-square w-[240px] md:w-[320px] lg:w-[380px] rounded-full bg-white p-2 shadow-[0_20px_60px_rgba(19,33,60,0.14)] border border-[#D8CCB8]">
          <div class="h-full w-full overflow-hidden rounded-full border-4 border-[#E8DDC8] bg-white">
            <img
              src="../assets/Profile.png"
              alt="Marlon profile portrait"
              class="h-full w-full object-cover object-center scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    data() {
      return {
        words: ["Developer", "AI & Automation Specialist", "Designer", "Creator"],
        currentText: "", 
        wordIndex: 0,
        charIndex: 0, 
        isDeleting: false, 
        cursorVisible: true, 
      };
    },
    mounted() {
      this.type();
      this.blinkCursor();
    },
    methods: {
      type() {
        const currentWord = this.words[this.wordIndex];
  
        if (!this.isDeleting) {
          this.currentText = currentWord.substring(0, this.charIndex + 1);
          this.charIndex++;
        } else {
          this.currentText = currentWord.substring(0, this.charIndex - 1);
          this.charIndex--;
        }
  
        if (!this.isDeleting && this.charIndex === currentWord.length) {
          this.isDeleting = true;
          setTimeout(this.type, 1500);
          return;
        } else if (this.isDeleting && this.charIndex === 0) {
          this.isDeleting = false;
          this.wordIndex = (this.wordIndex + 1) % this.words.length; 
          this.charIndex = 1;
          this.currentText = this.words[this.wordIndex].substring(0, this.charIndex);
          setTimeout(this.type, 120);
          return;
        }
  
        const speed = this.isDeleting ? 80 : 120;
        setTimeout(this.type, speed);
      },
      blinkCursor() {
        setInterval(() => {
          this.cursorVisible = !this.cursorVisible;
        }, 500);
      },
      scrollToContact() {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      },
      scrollToProjects() {
        const element = document.getElementById('projects')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    },
    computed: {
      displayText() {
        return this.currentText + (this.cursorVisible ? "|" : "");
      },
    },
  };
  </script>
  
  
  <style scoped>
  .typing-cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    background-color: black;
    margin-left: 2px;
    animation: blink 0.6s step-start infinite;
  }
  
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @keyframes jump {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

  </style>
  