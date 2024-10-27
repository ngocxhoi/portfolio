<template>
  <footer class="relative padding-section pb-0">
    <div
      class="absolute -z-10 inset-0 bg-emerald-300/30"
      style="mask-image: linear-gradient(to bottom, transparent, black)"
    />
    <div class="container mx-auto">
      <div
        class="border-t border-gray-100 py-6 text-sm flex flex-col gap-8 md:flex-row justify-between items-center"
      >
        <div class="text-gray-500">&copy: 2024. All Rights Reserved.</div>
        <nav class="flex flex-col md:flex-row gap-8">
          <a
            href="#"
            v-for="link in links"
            :key="link.title"
            class="inline-flex items-center gap-2"
          >
            <Icon :name="link.icon" size="16" />
            <span>{{ link.title }}</span>
            <Icon
              name="heroicons:arrow-right"
              size="16"
              class="-rotate-45 md:hidden"
            />
          </a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const links = [
  {
    title: "YouTube",
    icon: "logos:youtube-icon",
  },
  {
    title: "Twitter",
    icon: "logos:twitter",
  },
  {
    title: "Instagram",
    icon: "logos:instagram-icon",
  },
  {
    title: "LinkedIn",
    icon: "logos:linkedin-icon",
  },
];
</script>
