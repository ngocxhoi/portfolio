<template>
  <div
    class="rounded-xl p-8 bg-gray-100 dark:bg-gray-800 overflow-x-clip"
    style="
      mask-image: linear-gradient(
        45deg,
        transparent,
        black 20%,
        black 80%,
        transparent
      );
    "
  >
    <div v-if="testimonial" class="flex gap-4 items-center">
      <UAvatar :src="testimonial.avatar" :alt="testimonial.name" size="2xl" />
      <div class="text-start space-y-1">
        <h2 class="font-semibold">{{ testimonial.name }}</h2>
        <h2 class="text-sm text-gray-600 dark:text-gray-400">
          {{ testimonial.position }}
        </h2>
      </div>
    </div>
    <p v-if="testimonial" class="mt-4 text-sm md:text-base text-start">
      {{ testimonial.text }}
    </p>

    <slot />
  </div>
</template>

<script lang="ts" setup>
import { type Testimonial } from "~/assets/data";
defineProps<{
  testimonial?: Testimonial;
}>();
</script>
