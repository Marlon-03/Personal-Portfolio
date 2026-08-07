<template>
    <div class="relative w-full overflow-hidden bg-[#F7F1E8] text-[#13213C]">
        <div class="pointer-events-none absolute inset-0 overflow-hidden">
            <div class="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#1A2B56]/8 blur-3xl"></div>
            <div class="absolute top-[35rem] -left-32 h-[28rem] w-[28rem] rounded-full bg-[#E3B65B]/10 blur-3xl"></div>
            <div class="absolute top-[70rem] -right-32 h-[30rem] w-[30rem] rounded-full bg-white/30 blur-3xl"></div>
        </div>

        <div class="relative max-w-7xl mx-auto my-6 md:my-10 px-4 md:px-6 py-8 md:py-16 bg-white min-h-screen rounded-3xl shadow-2xl border border-[#E8DDC8] overflow-hidden">
            <div class="flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn">
                <router-link to="/" class="group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-[#FBF7F1] hover:bg-[#F3EBDD] rounded-xl text-[#13213C] transition-all duration-300 border border-[#E8DDC8] hover:border-[#1A2B56]/20 text-sm md:text-base shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                    <span>Back</span>
                </router-link>
                <div class="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-[#4B5563]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-3 h-3 md:w-4 md:h-4"><path d="m9 18 6-6-6-6"></path></svg>
                    <span class="text-[#13213C] truncate">Construction CRM Automation</span>
                </div>
            </div>

            <div class="grid lg:grid-cols-2 gap-8 md:gap-16">
                <div class="space-y-6 md:space-y-10 animate-slideInLeft">
                    <div class="space-y-4 md:space-y-6">
                        <h1 class="text-3xl md:text-6xl font-bold text-[#1A2B56] leading-tight pb-3">Construction CRM Automation</h1>
                        <div class="relative h-1 w-16 md:w-24">
                            <div class="absolute inset-0 bg-[#E3B65B] rounded-full animate-pulse"></div>
                            <div class="absolute inset-0 bg-[#1A2B56] rounded-full blur-sm opacity-30"></div>
                        </div>
                    </div>

                    <div class="prose max-w-none">
                        <p class="text-base md:text-lg text-[#4B5563] leading-relaxed">
                            Zapier-powered CRM automation built for roofing contractors and construction teams. It manages the full customer journey from lead capture to project setup, task creation, follow-ups, onboarding, and post-project nurture.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-[#FBF7F1] rounded-2xl overflow-hidden relative border border-[#E8DDC8]">
                        <div class="absolute inset-0 bg-gradient-to-br from-[#E3B65B]/10 to-[#1A2B56]/10 opacity-50 blur-2xl z-0"></div>
                        <div class="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white p-2 md:p-3 rounded-xl border border-[#E8DDC8] transition-all duration-300 hover:scale-105 hover:border-[#1A2B56]/20 hover:shadow-lg">
                            <div class="bg-[#F7F1E8] p-1.5 md:p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml text-[#1A2B56] w-4 h-4 md:w-6 md:h-6"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                            </div>
                            <div class="flex-grow"><div class="text-lg md:text-xl font-semibold text-[#1A2B56]">7</div>
                                <div class="text-[10px] md:text-xs text-[#4B5563]">Technology Used</div>
                            </div>
                        </div>
                        <div class="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white p-2 md:p-3 rounded-xl border border-[#E8DDC8] transition-all duration-300 hover:scale-105 hover:border-[#1A2B56]/20 hover:shadow-lg">
                            <div class="bg-[#E3B65B]/15 p-1.5 md:p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers text-[#1A2B56] w-4 h-4 md:w-6 md:h-6"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg>
                            </div>
                            <div class="flex-grow">
                                <div class="text-lg md:text-xl font-semibold text-[#1A2B56]">7</div>
                                <div class="text-[10px] md:text-xs text-[#4B5563]">Key Features</div>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-4 md:space-y-6">
                        <h3 class="text-lg md:text-xl font-semibold text-[#13213C] mt-[3rem] md:mt-0 flex items-center gap-2 md:gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml w-4 h-4 md:w-5 md:h-5 text-[#1A2B56]"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                            Technologies Used
                        </h3>

                        <div class="flex flex-wrap gap-2 md:gap-3">
                            <div v-for="tech in technologies" :key="tech" class="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-[#FBF7F1] rounded-xl border border-[#E8DDC8] hover:border-[#1A2B56]/20 transition-all duration-300 cursor-default shadow-sm">
                                <div class="absolute inset-0 bg-gradient-to-r from-[#E3B65B]/0 to-[#1A2B56]/0 group-hover:from-[#E3B65B]/20 group-hover:to-[#1A2B56]/10 transition-all duration-500"></div>
                                <div class="relative flex items-center gap-1.5 md:gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package w-3.5 h-3.5 md:w-4 md:h-4 text-[#1A2B56] group-hover:text-[#13213C] transition-colors"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path><path d="m7.5 4.27 9 5.15"></path></svg>
                                    <span class="text-xs md:text-sm font-medium text-[#1A2B56] group-hover:text-[#13213C] transition-colors">{{ tech }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="space-y-6 md:space-y-10 animate-slideInRight">
                    <div class="relative rounded-2xl overflow-hidden border border-[#E8DDC8] shadow-lg group">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img :src="constructionCrmImg" alt="Construction CRM Automation" class="w-full object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105">
                        <div class="absolute inset-0 border-2 border-[#1A2B56]/0 group-hover:border-[#1A2B56]/20 transition-colors duration-300 rounded-2xl"></div>
                    </div>

                    <div class="bg-[#FBF7F1] backdrop-blur-xl rounded-2xl p-8 border border-[#E8DDC8] space-y-6 hover:border-[#1A2B56]/20 transition-colors duration-300 group shadow-sm">
                        <h3 class="text-xl font-semibold text-[#13213C] flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star w-5 h-5 text-[#E3B65B] group-hover:rotate-[20deg] transition-transform duration-300"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                            Key Features
                        </h3>

                        <ul class="list-none space-y-2">
                            <li v-for="feature in features" :key="feature" class="group flex items-start space-x-3 p-2.5 md:p-3.5 rounded-xl hover:bg-[#F3EBDD] transition-all duration-300 border border-transparent hover:border-[#E8DDC8]">
                                <div class="relative mt-2">
                                    <div class="absolute -inset-1 bg-gradient-to-r from-[#E3B65B]/20 to-[#1A2B56]/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                                    <div class="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-[#E3B65B] to-[#1A2B56] group-hover:scale-125 transition-transform duration-300"></div>
                                </div>
                                <span class="text-sm md:text-base text-[#4B5563] group-hover:text-[#13213C] transition-colors text-start">{{ feature }}</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div class="mt-8 md:mt-8 grid lg:grid-cols-2 gap-8 md:gap-16">
                <div class="bg-[#FBF7F1] backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-[#E8DDC8] space-y-5 hover:border-[#1A2B56]/20 transition-colors duration-300 shadow-sm">
                    <h3 class="text-lg md:text-xl font-semibold text-[#13213C] flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert w-5 h-5 text-[#E3B65B]"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3l-8.47-14.14a2 2 0 0 0-3.42 0Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                        The Problem
                    </h3>
                    <p class="text-sm md:text-base text-[#4B5563] leading-relaxed">
                        Roofing and construction teams often lose time to scattered lead handling, manual follow-ups, and inconsistent project handoff. Without a structured system, new opportunities can slip through the cracks and the team spends too much time on repetitive admin work.
                    </p>
                    <ul class="list-none space-y-2">
                        <li class="flex items-start gap-3 text-sm md:text-base text-[#4B5563]"><span class="mt-2 h-2 w-2 rounded-full bg-[#E3B65B]"></span><span>Missed or delayed follow-ups with new leads</span></li>
                        <li class="flex items-start gap-3 text-sm md:text-base text-[#4B5563]"><span class="mt-2 h-2 w-2 rounded-full bg-[#E3B65B]"></span><span>Manual creation of folders, tasks, and reminders</span></li>
                        <li class="flex items-start gap-3 text-sm md:text-base text-[#4B5563]"><span class="mt-2 h-2 w-2 rounded-full bg-[#E3B65B]"></span><span>Disorganized customer history and project tracking</span></li>
                        <li class="flex items-start gap-3 text-sm md:text-base text-[#4B5563]"><span class="mt-2 h-2 w-2 rounded-full bg-[#E3B65B]"></span><span>Slow onboarding and post-project follow-up</span></li>
                    </ul>
                </div>

                <div class="bg-[#FBF7F1] backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-[#E8DDC8] space-y-5 hover:border-[#1A2B56]/20 transition-colors duration-300 shadow-sm">
                    <h3 class="text-lg md:text-xl font-semibold text-[#13213C] flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb w-5 h-5 text-[#E3B65B]"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.5 1.5 3.5.8.8 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                        The Solution
                    </h3>
                    <p class="text-sm md:text-base text-[#4B5563] leading-relaxed">
                        The automation centralizes the entire lead-to-job pipeline. Once a new lead comes in, it is routed through a series of structured actions that create the project workspace, assign work, send reminders, and keep the customer journey moving automatically.
                    </p>
                    <ul class="list-none space-y-2">
                        <li class="flex items-start gap-3 text-sm md:text-base text-[#4B5563]"><span class="mt-2 h-2 w-2 rounded-full bg-[#1A2B56]"></span><span>Captures inbound leads from forms or webhooks</span></li>
                        <li class="flex items-start gap-3 text-sm md:text-base text-[#4B5563]"><span class="mt-2 h-2 w-2 rounded-full bg-[#1A2B56]"></span><span>Creates folders, tasks, and subtasks automatically</span></li>
                        <li class="flex items-start gap-3 text-sm md:text-base text-[#4B5563]"><span class="mt-2 h-2 w-2 rounded-full bg-[#1A2B56]"></span><span>Routes jobs through stage-based automation paths</span></li>
                        <li class="flex items-start gap-3 text-sm md:text-base text-[#4B5563]"><span class="mt-2 h-2 w-2 rounded-full bg-[#1A2B56]"></span><span>Sends follow-ups, reminders, and nurture emails without manual effort</span></li>
                    </ul>
                </div>
            </div>

            <div class="mt-6 md:mt-8 bg-[#FBF7F1] backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-[#E8DDC8] space-y-5 hover:border-[#1A2B56]/20 transition-colors duration-300 shadow-sm">
                    <h3 class="text-lg md:text-xl font-semibold text-[#13213C] flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column w-5 h-5 text-[#E3B65B]"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                        Business Impact
                    </h3>

                    <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
                        <div v-for="impact in businessImpact" :key="impact" class="flex items-start gap-3 rounded-xl bg-white border border-[#E8DDC8] p-4 shadow-sm">
                            <div class="mt-0.5 rounded-full bg-[#E3B65B]/15 p-2 text-[#1A2B56]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star w-4 h-4"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                            </div>
                            <span class="text-sm md:text-base text-[#4B5563] leading-relaxed">{{ impact }}</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import constructionCrmImg from '../assets/constructionCRM.png'

export default {
    name: 'constructionCrm',
    data() {
        return {
            constructionCrmImg,
            technologies: ['Zapier', 'Asana', 'Google Drive', 'Gmail', 'Paths by Zapier', 'Filter by Zapier', 'Delay by Zapier'],
            features: [
                'Captures new leads from forms or webhooks and sends them into the right workflow path.',
                'Creates project folders and stores the folder link in Asana for organized handoff.',
                'Generates tasks and subtasks automatically for internal team execution.',
                'Uses pipeline-based paths for follow-up, approval, and closed stages.',
                'Sends personalized Gmail reminders for inactive leads and overdue responses.',
                'Supports customer onboarding after approval and post-project nurture flows.',
                'Uses Delay and Filter logic to avoid stale status updates and outdated emails.',
            ],
            businessImpact: [
                'Reduces manual admin work across the lead-to-job workflow',
                'Improves response consistency and follow-up speed',
                'Keeps project files and tasks organized in one system',
                'Supports smoother customer onboarding and retention',
                'Helps the team move faster with fewer missed handoffs',
            ],
        }
    },
}
</script>