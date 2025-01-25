<template>
  <div class="flex justify-center  gap-3">
    <div class="w-3/5">
      <h1 class="text-4xl font-bold mb-4">Hi, I'm Marlon</h1>
      <h1 class="text-4xl font-bold mb-4">Developer</h1>
      <p class="text-gray-700">
        Creating Innovative, Functional, and User-Friendly Websites for Digital Solutions.
      </p>

      <a
    href="https://facebook.com"
    target="_blank"
    class="flex items-center justify-center w-16 h-16 rounded-full bg-[#45AA96]/80 backdrop-blur-lg transition-all duration-300 hover:bg-[#05CEA8]/90 hover:shadow-lg"
  >
    <img
      src="../assets/facebook.png"
      alt="Facebook Logo"
      class="w-8 h-8"
    />
  </a>

    </div>



    <div class="w-2/5">
      <h1 class="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p class="text-gray-700">
        This is the homepage of my portfolio. Here, you’ll find details about my skills, projects, and experiences.
      </p>
  
      <div class="mt-8 space-y-4">
        <a href="#projects" class="block py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">See My Projects</a>
        <a href="#contact" class="block py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700">Contact Me</a>
      </div>
    </div>
  </div>

  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>

  </style>
  