<template>
  <NuxtRouteAnnouncer />
  <div class="relative overflow-x-clip max-w-[1600px] mx-auto">
    <div
      class="absolute -z-10 inset-0 bg-emerald-300/30"
      style="mask-image: linear-gradient(to top, transparent 89%, black)"
    />

    <MainHeader />
    <div id="layout" class="mx-4 lg:mx-44 antialiased">
      <NuxtPage />
    </div>
    <MainFooter />
  </div>
  <UNotifications />
</template>

<script lang="ts" setup>
import MainFooter from "./components/MainFooter.vue";

const appConfig = useAppConfig();
useHead({
  titleTemplate: (titleChunk: string | undefined): any => {
    return titleChunk ? `${titleChunk} | ${appConfig.title}` : appConfig.title;
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap");

* {
  font-family: "Playwrite GB S", cursive;
  transition: all 0.3s ease;
}

html,
body {
  @apply dark:dark:bg-gray-900 min-w-[400px];
}
</style>
