<template>
    <div class="p-6 w-full">
        <h1   class="text-6xl font-bold mb-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent pb-20">About Me</h1>
      <div class="tabs w-96">
        <!-- Tab container with glass-like background -->
        <div class="flex space-x-4 border border-gray-600 p-2  bg-opacity-50 backdrop-blur-lg bg-black/40 w-full rounded-xl">
          <button
            @click="activeTab = 'story'" :class="['tab-button', activeTab === 'story' && 'active']" role="tab" class="w-full rounded-lg  text-2xl font-semibold">
            My Story
          </button>
          <button
            @click="activeTab = 'experience'" :class="['tab-button', activeTab === 'experience' && 'active']" role="tab" class="w-full rounded-lg text-2xl font-semibold">
            Experience
          </button>
          <button
            @click="activeTab = 'education'" :class="['tab-button', activeTab === 'education' && 'active']" role="tab" class="w-full rounded-lg text-2xl font-semibold">
            Education
          </button>
        </div>
  
        <!-- Tab Content -->
        <div class="mt-6 w-full border border-gray-600 rounded-xl">
          <div v-if="activeTab === 'story'" class="tab-content h-96 bg-white/10 backdrop-blur-xl">
            <h3 class="text-xl font-semibold">Projects</h3>
            <p class="mt-2 text-white">Here goes the content about your projects...</p>
          </div>
          <div v-if="activeTab === 'experience'" class="tab-content h-96 bg-white/10 backdrop-blur-xl">
            <h3 class="text-xl font-semibold">experience</h3>
            <p class="mt-2 text-white">Here goes the content about your certificates...</p>
          </div>
          <div v-if="activeTab === 'education'" class="tab-content h-96 bg-white/10 backdrop-blur-xl">
            <h3 class="text-xl font-semibold">Tech Stack</h3>
            <p class="mt-2 text-white">Here goes the content about your tech stack...</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'About',
    data() {
      return {
        activeTab: 'story',
      };
    },
  };
  </script>
  
  <style scoped>
  .tabs {
    width: 100%;
    margin: 0 auto;
  }
  
  .tab-button {
    padding: 12px 20px;
    background-color: rgba(0, 0, 0, 0.2); /* Transparent background */
    color: #ddd;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    border: none;
    flex-grow: 1;
    text-align: center;
  }
  
  .tab-button:hover {
    background-color: #6366f1;
    color: #fff;
  }
  
  .tab-button.active {
    background-color: rgba(99, 102, 241, 0.3); /* Glass-like background for active */
    color: #fff;
    font-weight: bold;
    backdrop-filter: blur(10px); /* Apply glass effect */
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .mt-6 {
    margin-top: 1.5rem;
  }



  .tabs .tab-button {
    background: rgba(0, 0, 0, 0.3); /* Slight transparency */
    backdrop-filter: blur(10px); /* Blur the background */
  }

  .tabs .tab-button.active {
    background: rgba(99, 102, 241, 0.3); /* Active tab glass effect */
    backdrop-filter: blur(10px);
  }
  

</style>

