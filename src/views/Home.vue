<template>
  <div class="flex justify-center  gap-3 p-1 md:p-6">
    <div class="w-full md:w-3/5 flex justify-center flex-col items-center gap-6">
      <h1   class="text-6xl font-bold mb-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Hi, I'm Marlon</h1>
      <h1 
        class="text-5xl font-bold mb-4 bg-gradient-to-r from-[#05CEA8] to-[#07FFD0] bg-clip-text text-transparent pb-2" >
        {{ displayText }}
        <span class="typing-cursor">|</span>
      </h1>
      <p class="text-white text-lg">
        Creating Innovative, Functional, and User-Friendly Websites for Digital Solutions.
      </p>

      <div class="flex space-x-4">
        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/marlon-movilla-5254a3289/" target="_blank" class="group relative p-1 md:p-3 block w-fit">
          <div class="absolute inset-0 bg-gradient-to-r from-[#05CEA8] to-[#07FFD0] rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
          <div class="relative rounded-lg bg-black/50 backdrop-blur-xl p-4 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin w-6 h-6 text-gray-400 group-hover:text-white transition-colors">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </div>
        </a>

        <!-- GitHub -->
        <a href="https://github.com/Marlon-03" target="_blank" class="group relative p-1 md:p-3 block w-fit">
          <div class="absolute inset-0 bg-gradient-to-r from-[#05CEA8] to-[#07FFD0] rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
          <div class="relative rounded-lg bg-black/50 backdrop-blur-xl p-4 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-6 h-6 text-gray-400 group-hover:text-white transition-colors">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.1.68-.22.68-.48v-1.7c-2.79.61-3.38-1.34-3.38-1.34-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.61.07-.61 1 .07 1.53 1.02 1.53 1.02.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.12-4.56-4.96 0-1.1.39-2 .99-2.71-.1-.24-.43-1.24.09-2.58 0 0 .81-.26 2.65 1.02A9.26 9.26 0 0 1 12 6.8a9.21 9.21 0 0 1 2.41.33c1.84-1.28 2.65-1.02 2.65-1.02.52 1.34.19 2.34.1 2.58.61.71 1 1.61 1 2.71 0 3.86-2.35 4.71-4.59 4.96.36.31.67.92.67 1.85v2.74c0 .26.18.59.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"></path>
            </svg>
          </div>
        </a>

        <!-- Facebook -->
        <a href="https://www.facebook.com/marlon.movilla.10" target="_blank" class="group relative p-1 md:p-3 block w-fit">
          <div class="absolute inset-0 bg-gradient-to-r from-[#05CEA8] to-[#07FFD0] rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
          <div class="relative rounded-lg bg-black/50 backdrop-blur-xl p-4 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook w-6 h-6 text-gray-400 group-hover:text-white transition-colors">
              <path d="M18 2h-3c-2.28 0-4 1.72-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6c0-.58.42-1 1-1h3z"></path>
            </svg>
          </div>
        </a>

        <!-- Instagram -->
        <a href="https://www.instagram.com/post_marlonely/" target="_blank" class="group relative p-1 md:p-3 block w-fit">
          <div class="absolute inset-0 bg-gradient-to-r from-[#05CEA8] to-[#07FFD0] rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
          <div class="relative rounded-lg bg-black/50 backdrop-blur-xl p-4 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram w-6 h-6 text-gray-400 group-hover:text-white transition-colors">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37a4 4 0 1 1-4.75-4.75"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </div>
        </a>
      </div>

      <div class="flex space-x-4">

          <!-- CV Button -->
          <a href="https://drive.google.com/file/d/15lKN9rK4GYerLNLhBY0nAj2k_GlJhdZ-/view?usp=sharing" target="_blank" class="group relative p-0 md:p-3 block w-fit cursor-pointer">
            <div class="absolute inset-0 bg-gradient-to-r from-[#05CEA8] to-[#07FFD0] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div class="relative rounded-full bg-black/50 backdrop-blur-xl px-8 py-4 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
              <span class="text-gray-400 group-hover:text-white transition-colors">Download CV</span>
            </div>
          </a>

          <!-- Contact Button -->
          <button
            onclick="window.location.href='/contact'" class="group relative p-1 md:p-3 block w-fit cursor-pointer">
            <div class="absolute inset-0 bg-gradient-to-r from-[#05CEA8] to-[#07FFD0] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div class="relative rounded-full bg-black/50 backdrop-blur-xl px-8 py-4 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
              <span class="text-gray-400 group-hover:text-white transition-colors">Contact</span>
            </div>
          </button>
       </div>

    </div>



    <div class="w-full md:w-2/5 flex justify-center items-center">
      <img src="../assets/hero.svg" alt="Hero Banner" class="w-full h-auto animate-jump" />
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
  