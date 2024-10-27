<template>
  <div
    class="relative md:fixed top-10 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center"
  >
    <nav
      class="flex gap-2 p-0.5 border border-gray-900/20 dark:border-gray-300/20 rounded-full backdrop-blur-sm"
    >
      <NuxtLink
        v-for="link in links"
        :to="link.path"
        class="nav-item"
        :class="{
          'bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-900':
            route.path == link.path,
        }"
        >{{ link.name }}</NuxtLink
      >
      <ColorSwitch />
    </nav>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "#",
  },
  {
    name: "About",
    path: "#",
  },
  {
    name: "Contact",
    path: "#",
  },
];
const route = useRoute();
</script>

<style></style>
