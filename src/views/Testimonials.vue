
<template>
  <div class="w-full py-20">
    <div class="max-w-7xl mx-auto px-4 md:px-6">

      <!-- Section Heading -->
      <div class="relative flex items-center justify-center h-28 sm:h-36 md:h-44 lg:h-52 mb-12">
        <span class="bg-title">
          Feedback
        </span>
        <h1 class="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-[#13213C]">
          Testimonials
        </h1>
      </div>

      <!-- Testimonial Grid -->
      <div class="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-5 lg:gap-7">

        <!-- Video Testimonial -->
        <article class="flex flex-col overflow-hidden rounded-3xl border border-[#E8DDC8] bg-white p-5 shadow-[0_12px_35px_rgba(19,33,60,0.07)] sm:p-7 lg:col-span-2">

          <div class="mb-5 text-center">
            <div class="mb-3 flex items-center justify-center gap-2">
              <span class="h-2 w-2 rounded-full bg-[#E1AF4A]"></span>
              <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#D6A441]">
                Video Testimonial
              </p>
            </div>

            <h3 class="text-2xl font-bold text-[#13213C]">
              Carol
            </h3>

            <p class="mt-1 text-sm text-[#7B8494]">
              Watch her experience working with me.
            </p>
          </div>

          <!-- Native Video Player -->
          <div class="relative mx-auto flex w-full max-w-[520px] items-center justify-center aspect-video overflow-hidden rounded-2xl bg-[#13213C] shadow-lg">

            <video
              class="h-full w-full object-contain"
              controls
              preload="metadata"
              playsinline
              aria-label="Carol's Video Testimonial"
            >
              <source :src="carolVideo" type="video/mp4" />
              Your browser does not support video playback.
            </video>

          </div>

          <div class="mt-5 flex items-center justify-center gap-2 text-sm text-[#7B8494]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
            Video Testimonial
          </div>

        </article>

        <!-- Written Testimonial Carousel -->
        <article class="relative flex min-h-[360px] flex-col overflow-hidden rounded-3xl bg-[#13213C] p-6 text-white shadow-[0_15px_40px_rgba(19,33,60,0.15)] sm:p-9 lg:col-span-3 lg:min-h-[420px]">

          <!-- Decorative Quote -->
          <div class="pointer-events-none absolute right-8 top-2 select-none font-serif text-[140px] leading-none text-white/[0.04]">
            "
          </div>

          <!-- Card Label -->
          <div class="relative z-10 mb-8 flex items-center justify-between">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#E1AF4A]">
              Client & Colleague Feedback
            </p>

            <span class="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60">
              0{{ activeIndex + 1 }} / 03
            </span>
          </div>

          <!-- Quote Content -->
          <div class="relative z-10 flex flex-1 flex-col justify-center">

            <Transition name="testimonial" mode="out-in">
              <div :key="currentTestimonial.name">

                <span class="mb-5 block font-serif text-6xl leading-none text-[#E1AF4A]">
                  “
                </span>

                <blockquote class="max-w-2xl text-lg font-medium leading-relaxed text-white/90 sm:text-xl md:text-2xl">
                  {{ currentTestimonial.quote }}
                </blockquote>

                <div class="mt-8">
                  <div class="mb-3 h-[2px] w-10 rounded-full bg-[#E1AF4A]"></div>

                  <h3 class="text-lg font-bold text-[#E1AF4A]">
                    {{ currentTestimonial.name }}
                  </h3>

                  <p class="mt-1 text-sm text-white/55">
                    {{ currentTestimonial.role }}
                  </p>
                </div>

              </div>
            </Transition>

          </div>

          <!-- Carousel Navigation -->
          <div class="relative z-10 mt-8 flex items-center justify-between border-t border-white/10 pt-6">

            <!-- Pagination -->
            <div class="flex items-center gap-2">
              <button
                v-for="(testimonial, index) in testimonials"
                :key="testimonial.name"
                type="button"
                :aria-label="`Show ${testimonial.name}'s testimonial`"
                :aria-pressed="index === activeIndex"
                class="h-2.5 rounded-full transition-all duration-300"
                :class="index === activeIndex
                  ? 'w-8 bg-[#E1AF4A]'
                  : 'w-2.5 bg-white/25 hover:bg-white/60'"
                @click="selectTestimonial(index)"
              ></button>
            </div>

            <!-- Previous / Next -->
            <div class="flex gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                class="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#E1AF4A] hover:bg-[#E1AF4A] hover:text-[#13213C]"
                @click="previousTestimonial"
              >
                ←
              </button>

              <button
                type="button"
                aria-label="Next testimonial"
                class="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#E1AF4A] hover:bg-[#E1AF4A] hover:text-[#13213C]"
                @click="nextTestimonial"
              >
                →
              </button>
            </div>

          </div>
        </article>

      </div>
    </div>
  </div>
</template>

<script>
import carolVideo from "../assets/Carol's Testimonial.mp4";

export default {
  name: 'Testimonials',

  data() {
    return {
      activeIndex: 0,
      carouselTimer: null,

      carolVideo: carolVideo,

      testimonials: [
        {
          name: 'Joe',
          role: 'Founder, Buildovate',
          quote: 'Marlon is reliable, detail-oriented, and always willing to take initiative to get things done. He also communicates well, which makes working with him much easier.',
        },
        {
          name: 'Janrey',
          role: 'Full-Stack Developer',
          quote: 'Marlon is easy to work with and always open to feedback and collaboration. He approaches challenges with a positive attitude and is always willing to learn and improve.',
        },
        {
          name: 'Jay',
          role: 'Full-Stack Developer',
          quote: 'Marlon does a great job translating Figma designs into clean, functional WordPress websites. He pays close attention to design details and ensures the final result closely matches the original design.',
        },
      ],
    };
  },

  computed: {
    currentTestimonial() {
      return this.testimonials[this.activeIndex];
    },
  },

  mounted() {
    this.startCarousel();
  },

  beforeUnmount() {
    this.stopCarousel();
  },

  methods: {
    startCarousel() {
      this.stopCarousel();

      this.carouselTimer = window.setInterval(() => {
        this.nextTestimonial();
      }, 5000);
    },

    stopCarousel() {
      if (this.carouselTimer !== null) {
        window.clearInterval(this.carouselTimer);
        this.carouselTimer = null;
      }
    },

    selectTestimonial(index) {
      this.activeIndex = index;
      this.startCarousel();
    },

    nextTestimonial() {
      this.activeIndex =
        (this.activeIndex + 1) % this.testimonials.length;
    },

    previousTestimonial() {
      this.activeIndex =
        (this.activeIndex - 1 + this.testimonials.length) %
        this.testimonials.length;
    },
  },
};
</script>

<style scoped>
.testimonial-enter-active,
.testimonial-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.testimonial-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.testimonial-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
