<template>
    <div class=" p-1 md:p-6 w-full">
      <h1 class="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent text-center pb-7 md:pb-20">
        Contact Me
      </h1>

      <div class="flex flex-col md:flex-row gap-6">

        <div data-aos="fade-right" data-aos-duration="1200" class="w-full md:w-1/2 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-300 hover:shadow-[#6366f1]/10 aos-init aos-animate">
            <div class="flex justify-between items-start mb-8">
                  <div>
                        <h2 class="text-4xl text-start font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">Get in Touch</h2>
                        <p class="text-white mb-6 text-start font-medium">Have something to discuss? Send me a message and let's talk.</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2 w-10 h-10 text-[#6366f1] opacity-50"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
            </div>
            <form action="https://formspree.io/f/mrgnkqee" method="POST" class="space-y-6">
                  <div data-aos="fade-up" data-aos-delay="100" class="relative group aos-init aos-animate">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <input type="text" name="name" placeholder="Your Name" class="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50" required="" value="">
                  </div>
                  <div data-aos="fade-up" data-aos-delay="200" class="relative group aos-init aos-animate">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                        <input type="email" name="email" placeholder="Your Email" class="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50" required="" value="">
                  </div>
                  <div data-aos="fade-up" data-aos-delay="300" class="relative group aos-init aos-animate">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                        <textarea name="message" placeholder="Your Message" class="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-[9.9rem] disabled:opacity-50" required=""></textarea>
                  </div>
                  <button data-aos="fade-up" data-aos-delay="400" type="submit" class="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 aos-init aos-animate">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send w-5 h-5"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>Send Message</button>
                  </form>

            </div> 



            <div class="w-full md:w-1/2 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
                  <h3 class="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent mb-6 flex items-center gap-2">
                  <span class="inline-block w-4 md:w-8 h-1 bg-indigo-500 rounded-full"></span>Connect With Me</h3>
                  <p class="text-white mb-6 text-start font-medium">Need an experienced Full Stack Developer to help out? Send me an email to discuss in more detail. You can also connect with me on social media. Feel free to follow me on these platforms.</p>
                  <div class="flex flex-col gap-4">
                                          
                        <div class="flex flex-col gap-6">
                              <a href="https://www.instagram.com/ekizr_/?hl=id" target="_blank" rel="noopener noreferrer" class="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 overflow-hiddenhover:border-white/20 transition-all duration-500">
                                    <div class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FCAF45]"></div>
                                    <div class="relative flex items-center justify-center">
                                          <div class="absolute inset-0 opacity-20 rounded-lg transition-all duration-500 group-hover:scale-125 group-hover:opacity-30" style="background-color: rgb(228, 64, 95);"></div>
                                                <div class="relative p-2 rounded-lg">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram w-5 h-5 transition-all duration-500 group-hover:scale-110" style="color: rgb(228, 64, 95);"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                                                </div>
                                    </div>
                                    <div class="flex flex-col min-w-0">
                                          <span class="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">Instagram</span>
                                     
                                    </div>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                                          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                    </div>
                              </a>

                                    
                              <a href="https://www.youtube.com/@eki_zulfar" target="_blank" rel="noopener noreferrer" class="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 overflow-hiddenhover:border-white/20 transition-all duration-500">
                                    <div class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-[#0A66C2] to-[#0077B5]"></div>
                                    <div class="relative flex items-center justify-center">
                                          <div class="absolute inset-0 opacity-20 rounded-md transition-all duration-500 group-hover:scale-110 group-hover:opacity-30" style="background-color: rgb(10, 102, 194);"></div>
                                                <div class="relative p-2 rounded-lg">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin w-6 h-6 transition-all duration-500 group-hover:scale-105" style="color: rgb(10, 102, 194);"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                                </div>
                                    </div>
                                    <div class="flex flex-col min-w-0">
                                          <span class="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">LinkedIn</span>
                                 
                                    </div>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                                          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                    </div>
                                    </a>
                        
                        
                        
                              <a href="https://github.com/EkiZR" target="_blank" rel="noopener noreferrer" class="group relative flex items-center gap-3 p-4 rounded-xl  bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500">
                                    <div class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-[#333] to-[#24292e]"></div>
                                    <div class="relative flex items-center justify-center">
                                          <div class="absolute inset-0 opacity-20 rounded-lg transition-all duration-500 group-hover:scale-125 group-hover:opacity-30" style="background-color: rgb(255, 255, 255);"></div>
                                                <div class="relative p-2 rounded-lg">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-5 h-5 transition-all duration-500 group-hover:scale-110" style="color: rgb(255, 255, 255);"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                                </div>
                                    </div>
                                    <div class="flex flex-col min-w-0">
                                          <span class="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">Github</span>
                                         
                                    </div>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                                          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                    </div>
                              </a>


                              <a href="https://tiktok.com/@eki_zulfar" target="_blank" rel="noopener noreferrer" class="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500">
                                    <div class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-[#0A66C2] to-[#0077B5]"></div>
                                    <div class="relative flex items-center justify-center">
                                          <div class="absolute inset-0 opacity-20 rounded-md transition-all duration-500 group-hover:scale-110 group-hover:opacity-30" style="background-color: rgb(10, 102, 194);"></div>
                                          <div class="relative p-2 rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook w-6 h-6 text-gray-400 group-hover:text-white transition-colors"><path d="M18 2h-3c-2.28 0-4 1.72-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6c0-.58.42-1 1-1h3z"></path></svg>
                                          </div>
                                    </div>
                                    <div class="flex flex-col min-w-0">
                                          <span class="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">Tiktok</span>
                                 
                                    </div>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                                          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                    </div>
                              </a>
                        </div>
                  </div>
            </div>
      </div>
</div>


</template>

<script>
export default{
    name: 'Contact',
}
</script>