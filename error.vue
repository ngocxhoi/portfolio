<script setup lang="ts">
import type { NuxtError } from "#app";
const appConfig = useAppConfig();
useHead({
  title: `Error | ${appConfig.title}`,
});

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div
    class="flex flex-col gap-4 items-center justify-center w-full h-full min-h-screen"
  >
    <h1 class="text-2xl font-semibold">{{ error?.message }}</h1>
    <h2 class="text-lg">{{ error?.statusCode }}</h2>
    <UButton color="black" @click="handleError">Clear errors</UButton>
  </div>
</template>
