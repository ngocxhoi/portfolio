<template>
  <div
    class="absolute -z-10 left-1/2 top-1/2 origin-center aspect-1"
    :style="`width: ${size}px; transform: rotate(${rotate}deg) translate(-50%,-50%); transform-origin: 0 0`"
  >
    <Icon
      name="lucide:sparkle"
      :size="iconSize"
      class="text-yellow-200 dark:text-yellow-100 animate-spin"
      style="animation-duration: 5s"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  size: number;
  iconSize: number;
  rotate: number;
}>();
</script>
