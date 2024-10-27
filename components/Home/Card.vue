<template>
  <div
    class="border space-y-6 p-8 bg-gray-100 dark:bg-gray-800 shadow-sm dark:shadow-gray-100 rounded-3xl z-0 after:absolute after:-z-10 after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl"
  >
    <div
      class="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-wide text-sm gap-2 text-transparent bg-clip-text"
    >
      <span>{{ project.company }}</span>
      <span>&bull;</span>
      <span>{{ project.year }}</span>
    </div>
    <h3 class="text-2xl font-semibold">
      {{ project.title }}
    </h3>
    <div class="border-t-2 border-gray-800 dark:border-gray-100" />
    <ul class="text-start space-y-2 text-gray-600 dark:text-gray-400">
      <li
        v-for="result in project.results"
        class="flex items-center gap-2 text-sm"
      >
        <Icon name="heroicons:check-circle" size="24" />
        <span>{{ result.title }}</span>
      </li>
    </ul>
    <img :src="project.image" :alt="project.title" class="rounded-xl" />
    <div class="float-left">
      <a :href="project.link" target="_blank">
        <button
          class="bg-white text-gray-900 h-10 px-4 w-fit rounded-xl font-semibold inline-flex items-center justify-center gap-2"
        >
          <span>View Live Site</span>
          <Icon name="heroicons-arrow-right" size="24" class="-rotate-45" />
        </button>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PortfolioProject } from "~/assets/data";
defineProps<{
  project: PortfolioProject;
}>();
</script>

<style></style>
