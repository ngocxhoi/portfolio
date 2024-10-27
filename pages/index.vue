<template>
  <div class="relative padding-section z-0">
    <HomeCircle />

    <HomeStar
      v-for="star in stars"
      :size="star.size"
      :iconSize="star.iconSize"
      :rotate="star.rotate"
    />
    <HomeDot
      v-for="circle in circles"
      :size="circle.size"
      :rotate="circle.rotate"
      :iconSize="circle.iconSize"
    />

    <!-- Hero Section -->
    <div class="container mx-auto">
      <div class="flex flex-col items-center gap-4">
        <img
          src="/images/undraw_Developer_activity_re_39tg.png"
          alt="developer"
          class="size-[200px] md:size-[300px] rounded-full shadow-sm dark:shadow-gray-100 object-cover"
        />
        <div
          class="bg-gray-200 dark:bg-gray-950 border px-4 py-1.5 inline-flex items-center gap-4 rounded-lg"
        >
          <div
            class="size-2.5 rounded-full bg-green-500 flex items-center justify-center after:absolute after:size-3 after:rounded-full after:bg-green-500 after:animate-ping"
          />
          <div>Available for new projects</div>
        </div>
        <div class="max-w-lg md:max-w-2xl mx-auto space-y-10">
          <h1
            class="text-3xl md:text-5xl text-center mt-8 tracking-wide font-bold capitalize"
          >
            Building the future of web development
          </h1>
          <p class="mt-4 text-center opacity-60">
            I specialize in transforming designs into functional,
            hight-performing web applications. Let's discuss your next project.
          </p>
          <div
            class="flex flex-col md:flex-row justify-center items-center mt-8 gap-4"
          >
            <button class="home-btn bg-gray-800 text-white">
              <span class="font-semibold">Explore my work</span>
              <Icon name="heroicons:arrow-down" size="16" />
            </button>
            <button class="home-btn text-gray-900 bg-white">
              <span>👋</span>
              <span>Let's connect</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Project Section -->
  <div class="container mx-auto text-center padding-section">
    <HomeTitle
      eyebrow="Real-word Results"
      title="Featured Projects"
      description="See how I transformed concepts into engaging digital experiences."
    />
    <div class="relative grid-project">
      <HomeCard
        v-for="(project, index) in portfolioProjects"
        :key="project.company"
        :project="project"
        class="sticky"
        :style="`top: ${index * 40 + 40}px`"
      />
    </div>
  </div>

  <!-- Word Section -->
  <div class="w-full left-0 padding-section">
    <div
      @mouseover="handleAnimationPause()"
      @mouseleave="handleAnimationPlay()"
      class="absolute -left-1 -right-1 py-3 bg-gradient-to-r from-emerald-300 to-sky-400 w-full overflow-clip -rotate-3"
    >
      <div
        class="inline-flex justify-center items-center gap-4 animation-primary"
      >
        <div
          v-for="word in words"
          :key="word"
          class="inline-flex gap-4 items-center"
        >
          <span
            class="text-nowrap text-gray-900 uppercase font-extrabold text-sm"
            >{{ word }}</span
          >
          <Icon name="lucide:sparkle" size="24" class="text-gray-900" />
        </div>
      </div>
      <div
        class="inline-flex justify-center items-center gap-4 animation-secondary"
      >
        <div
          v-for="word in words"
          :key="word"
          class="inline-flex gap-4 items-center"
        >
          <span
            class="text-nowrap text-gray-900 uppercase font-extrabold text-sm"
            >{{ word }}</span
          >
          <Icon name="lucide:sparkle" size="24" class="text-gray-900" />
        </div>
      </div>
    </div>
  </div>

  <!-- Testimonials Section -->
  <div class="container mx-auto text-center padding-section">
    <div>
      <HomeTitle
        eyebrow="Happy Clients"
        title="What Clients Say about Me"
        description="Don't just take my word for it. See what my clients have to say about my
        work."
      />
      <UCarousel
        v-slot="{ item }"
        :items="testimonials"
        :ui="{ item: 'basis-full md:basis-1/2 xl:basis-1/3' }"
        :next-button="{
          class: '-end-4',
        }"
        :prev-button="{
          class: '-start-4',
        }"
        arrows
        :draggable="false"
        class="mt-12 [&>div]:space-x-4"
      >
        <HomeCardTestimonials :testimonial="item" class="hover:-rotate-3" />
      </UCarousel>
    </div>
  </div>

  <!-- About Section -->
  <div class="container mx-auto text-center padding-section">
    <HomeTitle
      eyebrow="About Me"
      title="A Glimpse into My World"
      description="I am a passionate and dedicated web developer with a strong interest in
      creating engaging digital experiences."
    />
    <div class="grid-project grid-cols-5 flex flex-col md:grid text-start">
      <HomeCardTestimonials class="space-y-4 h-[420px] col-span-2">
        <div class="flex items-center justify-start gap-2">
          <Icon name="lucide:sparkle" size="30" class="text-emerald-300" />
          <h1 class="text-xl md:text-2xl font-semibold text-emerald-300">
            My Reads
          </h1>
        </div>
        <p class="text-gray-600 dark:text-gray-400">
          Explore the books shaping my perspectives.
        </p>
        <div class="w-40 mx-auto">
          <img src="/images/book-covers-big-2019101610.jpg" alt="" />
        </div>
      </HomeCardTestimonials>

      <HomeCardTestimonials class="space-y-4 col-span-3">
        <div class="flex items-center justify-start gap-2">
          <Icon name="lucide:sparkle" size="30" class="text-emerald-300" />
          <h1 class="text-xl md:text-2xl font-semibold text-emerald-300">
            My Toolbox
          </h1>
        </div>
        <p class="text-gray-600 dark:text-gray-400">
          Explore the technologies and tools I use to create my projects.
        </p>
        <div class="flex gap-4 flex-wrap">
          <div
            v-for="tool in tools"
            :key="tool.title"
            class="inline-flex items-center gap-4 py-2 px-3 border border-emerald-300 rounded-md"
            style="mask-image: linear-gradient(90deg, transparent, black 20%)"
          >
            <Icon :name="tool.icon" />
            <span class="font-semibold">{{ tool.title }}</span>
          </div>
        </div>
      </HomeCardTestimonials>

      <div class="relative rounded-xl h-[420px] overflow-clip col-span-5">
        <img
          src="/images/gg-map.png"
          class="object-cover size-full"
          alt="map"
        />
        <div class="absolute inset-0 flex items-center justify-center">
          <Icon
            name="heroicons:map-pin-solid"
            size="60"
            class="text-red-500 fill-yellow-500"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- Contact Section -->
  <div
    class="container md:flex gap-4 items-center justify-center md:justify-evenly space-y-4 mx-auto padding-section bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl"
  >
    <div class="space-y-4 max-w-md">
      <h2 class="text-2xl font-semibold">
        Let's create something amazing together.
      </h2>
      <p class="text-sm">
        Ready to bring your next project to life? Let's connect and see how I
        can help you achieve your goals.
      </p>
    </div>
    <button
      class="text-white bg-gray-900 inline-flex items-center gap-2 px-6 h-12 rounded-xl"
    >
      <span class="text-nowrap">Contact Me</span>
      <Icon name="heroicons:arrow-right" size="20" class="-rotate-45" />
    </button>
  </div>
</template>

<script setup lang="ts">
import {
  stars,
  circles,
  portfolioProjects,
  words,
  testimonials,
  tools,
} from "~/assets/data";
useSeoMeta({
  title: "Home",
});

function handleAnimationPause() {
  const animation = document.querySelector(
    ".animation-primary"
  ) as HTMLDivElement;
  if (animation) {
    animation.classList.add("animation-paused");
  }
  const animationSecondary = document.querySelector(
    ".animation-secondary"
  ) as HTMLDivElement;
  if (animationSecondary) {
    animationSecondary.classList.add("animation-paused");
  }
}

function handleAnimationPlay() {
  const animation = document.querySelector(
    ".animation-primary"
  ) as HTMLDivElement;
  if (animation) {
    animation.classList.remove("animation-paused");
  }
  const animationSecondary = document.querySelector(
    ".animation-secondary"
  ) as HTMLDivElement;
  if (animationSecondary) {
    animationSecondary.classList.remove("animation-paused");
  }
}
</script>

<style></style>
