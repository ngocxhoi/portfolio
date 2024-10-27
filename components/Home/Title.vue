<template>
  <ClientOnly>
    <div class="flex justify-center">
      <p
        class="font-semibold uppercase tracking-widest bg-gradient-to-t from-emerald-300 to-sky-300 text-transparent bg-clip-text"
      >
        {{ eyebrow }}
      </p>
    </div>
    <h2 class="text-3xl md:text-5xl mt-6">{{ title }}</h2>
    <p class="text-gray-800 dark:text-gray-200 mt-4">
      {{ description }}
    </p>
  </ClientOnly>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string;
  title: string;
  description: string;
}>();
</script>
