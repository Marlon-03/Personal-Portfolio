<template>
  <div class="w-full py-20">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="relative flex items-center justify-center h-28 sm:h-36 md:h-44 lg:h-52 mb-12">
        <span class="bg-title">
          Services
        </span>
        <h1 class="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-[#13213C]">
          Services
        </h1>
      </div>

      <div class="mb-12 text-center max-w-2xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-[#13213C] mb-4">How I Can Help Your Business</h2>
        <p class="text-[#4B5563] text-lg leading-relaxed">
          From building your website to automating the systems behind it, here's what I bring to the table.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <!-- Website Development -->
        <div class="p-6 bg-brand-surface rounded-lg shadow-sm hover:shadow-md transition-shadow border border-white/10">
          <div class="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Website Development</h3>
          <p class="text-white/70 text-sm">Custom, mobile-responsive websites built with WordPress, Elementor, Laravel, and Vue. Fast, functional, and easy for you to manage.</p>
        </div>

        <!-- Workflow Automation -->
        <div class="p-6 bg-brand-surface rounded-lg shadow-sm hover:shadow-md transition-shadow border border-white/10">
          <div class="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">Workflow Automation</h3>
          <p class="text-white/70 text-sm">Connecting your tools (forms, email, CRMs) with Zapier, Make, or n8n, so leads, follow-ups, and repetitive tasks run without manual work.</p>
        </div>

        <!-- CRM & Systems Integration -->
        <div class="p-6 bg-brand-surface rounded-lg shadow-sm hover:shadow-md transition-shadow border border-white/10">
          <div class="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">CRM & Systems Integration</h3>
          <p class="text-white/70 text-sm">Setting up and connecting your CRM with the rest of your business tools, so customer data stays organized and accessible in one place.</p>
        </div>

        <!-- AI-Powered Automations -->
        <div class="p-6 bg-brand-surface rounded-lg shadow-sm hover:shadow-md transition-shadow border border-white/10">
          <div class="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">AI-Powered Automations</h3>
          <p class="text-white/70 text-sm">Adding AI into your existing workflows, like auto-drafting follow-up messages or processing incoming data, to make your systems smarter, not just faster.</p>
        </div>

      </div>
    </div>
  </div>
</template>