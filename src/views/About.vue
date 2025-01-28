<template>
    <div class="p-6 w-full">
        <h1 class="text-6xl font-bold mb-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent pb-20">About Me</h1>
      <div class="tabs w-96">
        <!-- Tab container with glass-like background -->
        <div class="flex flex-col md:flex-row space-x-4 border border-gray-600 p-2  bg-opacity-50 backdrop-blur-lg bg-black/40 w-full rounded-xl">
          <button
            @click="activeTab = 'story'" :class="['tab-button', activeTab === 'story' && 'active']" role="tab" class="w-full rounded-lg  text-2xl font-semibold"style="margin: 0;">
            My Story
          </button>
          <button
            @click="activeTab = 'experience'" :class="['tab-button', activeTab === 'experience' && 'active']" role="tab" class="w-full rounded-lg text-2xl font-semibold "style="margin: 0;">
            Experience
          </button>
          <button
            @click="activeTab = 'education'" :class="['tab-button', activeTab === 'education' && 'active']" role="tab" class="w-full rounded-lg text-2xl font-semibold " style="margin: 0;">
            Education
          </button>
        </div>
  
        <!-- Tab Content -->
        <div class="mt-6 w-full border border-gray-600 rounded-xl">
          <div v-if="activeTab === 'story'" class="flex flex-col-reverse md:flex-row items-center justify-between w-full h-screen p-6 md:px-8 lg:px-12 overflow-hidden " style="height:max-content">
            <div class="w-full md:w-3/5 max-w-full">
              <h4 class="font-semibold text-xl text-white text-start">Hi, I'm Marlon, a passionate web developer whose hobby turned into a career. Coding is not just a job for me; it's a habit that has naturally become my profession. Outside of work, I unwind by playing online games, which helps me relax and stay sharp. I'm also an avid cyclist, using my bike to explore new places and enjoy the outdoors. Additionally, I play chess online, a pastime that hones my strategic thinking and parallels the problem-solving skills I use in web development. This blend of interests and my career in technology reflects my love for continuous learning and embracing challenges, both professionally and personally.</h4>
              <div class="flex space-x-4 pt-4">

                <!--CV Button -->
                <button onclick="window.location.href='/projects'" class="group relative p-3 pl-0 block w-fit cursor-pointer">
                  <div class="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div class="relative rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] px-8 py-4 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    <span class="text-white font-medium">Download CV</span>
                  </div>
                </button>

                <!-- Contact Button -->
                <button onclick="window.location.href='/contact'" class="group relative p-3 block w-fit cursor-pointer">
                  <div class="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div class="relative rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] px-8 py-4 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    <span class="text-white font-medium">Contact</span>
                  </div>
                </button>
              </div>
            </div>
            <div class="w-full md:w-2/5 flex justify-center max-w-full max-h-full">
              <img src="../assets/aboutBanner.png" alt="Hero Banner" class="w-80 h-auto" />
            </div>
            
          </div>


          <div v-if="activeTab === 'experience'"  class="flex flex-col-reverse md:flex-row items-center justify-between w-full h-screen p-6 md:px-8 lg:px-12 overflow-hidden " style="height:max-content">
          
            <div class="w-full md:w-3/5 max-w-full">
              <div class="flex items-center flex-wrap mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#6366f1] mr-2 shrink-0" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" />
                </svg>
                <h3 class="text-xl font-bold text-white">
                  IFormatLogicITSolutions 
                  <span class="block sm:inline"> (Full Stack Developer)</span>
                </h3>
              </div>

              <ul class="space-y-3">
                <li class="flex items-center pl-6">
                  <span class="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] mr-3"></span>
                  <p class="text-white text-start">Utilized the Mailchimp API to automate the email marketing process, increasing productivity by 40%
                    and reducing manual emailing efforts.</p>
                </li>
                <li class="flex items-center pl-6">
                  <span class="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] mr-3"></span>
                  <p class="text-white text-start">Incorporated Stripe API and PayPal API to create smooth and secure payment gateways, enhancing
                    user payment experience and ensuring seamless transactions, leading to a 30% increase in successful
                    payments.</p>
                </li>
                <li class="flex items-center pl-6">
                  <span class="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] mr-3"></span>
                  <p class="text-white text start">Actively collaborating with other web dev members to design and implement website features</p>
                </li>
              </ul>

              <div class="flex items-center mt-10 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#6366f1] mr-2" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" />
                </svg>
                <h3 class="text-xl font-bold text-white">Freelance (Full Stack Developer)</h3>
              </div>

              <ul class="space-y-3">
                <li class="flex items-center pl-6">
                  <span class="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] mr-3"></span>
                  <p class="text-white text-start">Effectively employed WordPress, Laravel, Vue.js, and Figma to develop dynamic websites and web
                    applications, ensuring seamless user experiences across diverse projects.</p>
                </li>
                <li class="flex items-center pl-6">
                  <span class="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] mr-3"></span>
                  <p class="text-white text-start">Led the effort to enhance the website's speed and accessibility, driving the performance to achieve a
                    faster load time and improved user experience.</p>
                </li>
                <li class="flex items-center pl-6">
                  <span class="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] mr-3"></span>
                  <p class="text-white text start">Utilized HTML5, CSS3, and JavaScript to create responsive and visually appealing user interfaces.</p>
                </li>
              </ul>

              
            </div>

            <div class="w-full md:w-2/5 flex justify-center max-w-full max-h-full">
              <img src="../assets/aboutBanner.png" alt="Hero Banner" class="w-80 h-auto" />
            </div>

          </div>


          <div v-if="activeTab === 'education'" class="flex flex-col-reverse md:flex-row items-center justify-between w-full h-screen p-6 md:px-8 lg:px-12 overflow-hidden " style="height:max-content">

            <div class="w-full md:w-3/5 max-w-full">
              <div class="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#6366f1] mr-2" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" />
                </svg>
                <h3 class="text-xl font-bold text-white">Tertiary</h3>
              </div>

              <ul class="space-y-3">
                <li class="flex items-center pl-6">
                  <span class="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] mr-3"></span>
                  <p class="text-white text-start">President Ramon Magsaysay State University</p>
                </li>
                <li class="flex items-center pl-6">
                  <span class="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] mr-3"></span>
                  <p class="text-white text-start">(Bachelor of Science in Computer Engineering)</p>
                </li>
              </ul>

              <div class="flex items-center mb-4 mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#6366f1] mr-2" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" />
                </svg>
                <h3 class="text-xl font-bold text-white">Secondary</h3>
              </div>

              <ul class="space-y-3">
                <li class="flex items-center pl-6">
                  <span class="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] mr-3"></span>
                  <p class="text-white text-start">Guisguis National High School</p>
                </li>
              </ul>

              <div class="flex items-center mb-4 mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#6366f1] mr-2" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" />
                </svg>
                <h3 class="text-xl font-bold text-white">Primary</h3>
              </div>

              <ul class="space-y-3">
                <li class="flex items-center pl-6">
                  <span class="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] mr-3"></span>
                  <p class="text-white text-start">Guisguis Elementary School</p>
                </li>
              </ul>
            </div>

            <div class="w-full md:w-2/5 flex justify-center max-w-full max-h-full">
              <img src="../assets/aboutBanner.png" alt="Hero Banner" class="w-80 h-auto" />
            </div>

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

