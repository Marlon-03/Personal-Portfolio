<template>
  <div class="flex justify-center  md:py-20 px-3 md:px-6">
    <div class="w-full md:w-3/5 flex justify-center flex-col items-center gap-6">
      <h1   class="text-6xl font-bold mb-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Hi, I'm Marlon</h1>
      <h1 class="text-5xl font-bold mb-4 pb-2">
        <span class="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">{{ displayText }}</span>
      </h1>
      <p class="text-gray-700 text-lg">
        Creating Innovative, Functional, and User-Friendly Websites for Digital Solutions.
      </p>

      <div class="flex space-x-4">
        <a href="https://www.linkedin.com/in/marlon-movilla-5254a3289/" target="_blank" class="group relative p-1 md:p-3 block w-fit">
          <div class="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
          <div class="relative rounded-lg bg-white border border-gray-300 p-3 flex items-center justify-center hover:border-gray-400 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </div>
        </a>

        <a href="https://github.com/Marlon-03" target="_blank" class="group relative p-1 md:p-3 block w-fit">
          <div class="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
          <div class="relative rounded-lg bg-white border border-gray-300 p-3 flex items-center justify-center hover:border-gray-400 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-6 h-6 text-gray-700 group-hover:text-black transition-colors">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.1.68-.22.68-.48v-1.7c-2.79.61-3.38-1.34-3.38-1.34-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.61.07-.61 1 .07 1.53 1.02 1.53 1.02.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.12-4.56-4.96 0-1.1.39-2 .99-2.71-.1-.24-.43-1.24.09-2.58 0 0 .81-.26 2.65 1.02A9.26 9.26 0 0 1 12 6.8a9.21 9.21 0 0 1 2.41.33c1.84-1.28 2.65-1.02 2.65-1.02.52 1.34.19 2.34.1 2.58.61.71 1 1.61 1 2.71 0 3.86-2.35 4.71-4.59 4.96.36.31.67.92.67 1.85v2.74c0 .26.18.59.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"></path>
            </svg>
          </div>
        </a>

        <a href="https://www.facebook.com/marlon.movilla.10" target="_blank" class="group relative p-1 md:p-3 block w-fit">
          <div class="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
          <div class="relative rounded-lg bg-white border border-gray-300 p-3 flex items-center justify-center hover:border-gray-400 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors">
              <path d="M18 2h-3c-2.28 0-4 1.72-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6c0-.58.42-1 1-1h3z"></path>
            </svg>
          </div>
        </a>

        <a href="https://www.instagram.com/post_marlonely/" target="_blank" class="group relative p-1 md:p-3 block w-fit">
          <div class="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
          <div class="relative rounded-lg bg-white border border-gray-300 p-3 flex items-center justify-center hover:border-gray-400 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram w-6 h-6 text-gray-700 group-hover:text-pink-600 transition-colors">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37a4 4 0 1 1-4.75-4.75"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </div>
        </a>
      </div>

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



    <div class="w-full md:w-2/5 flex justify-center items-center">
      <img src="../assets/hero.png" alt="Hero Banner" class="w-full h-auto animate-jump" />
    </div>
  </div>

  <div class="w-full bg-gray-50 py-20">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div class="w-12 h-12 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Clean Code</h3>
          <p class="text-gray-600 text-sm">Maintainable & scalable solutions built with best practices</p>
        </div>

        <div class="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div class="w-12 h-12 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
          <p class="text-gray-600 text-sm">Fast & optimized applications that deliver results</p>
        </div>

        <div class="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div class="w-12 h-12 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Modern UI</h3>
          <p class="text-gray-600 text-sm">Pixel-perfect designs that look amazing</p>
        </div>

        <div class="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div class="w-12 h-12 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Client First</h3>
          <p class="text-gray-600 text-sm">Solutions that fit your unique needs</p>
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
        words: ["Developer", "Designer", "Creator"],
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

.animate-jump {
  animation: jump 1s ease-in-out infinite;
}
  </style>
  