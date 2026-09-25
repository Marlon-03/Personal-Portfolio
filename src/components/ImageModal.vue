<template>
    <div>
        <button type="button" :aria-label="`Expand ${alt} image`" class="relative block w-full rounded-2xl overflow-hidden border border-[#E8DDC8] shadow-lg group cursor-zoom-in text-left" @click="isOpen = true">
            <div class="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img :src="src" :alt="alt" class="w-full object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105">
            <div class="absolute inset-0 border-2 border-[#1A2B56]/0 group-hover:border-[#1A2B56]/20 transition-colors duration-300 rounded-2xl"></div>
        </button>

        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-[#13213C]/85 p-4 md:p-8" role="dialog" aria-modal="true" :aria-label="`${alt} expanded preview`" @click.self="close" @keydown.esc.window="close">
            <button type="button" aria-label="Close expanded image" class="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white" @click="close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            </button>
            <img :src="src" :alt="`${alt} expanded preview`" class="max-h-[90vh] max-w-full rounded-xl object-contain shadow-2xl">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageModal',
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        close() {
            this.isOpen = false
        },
    },
}
</script>
