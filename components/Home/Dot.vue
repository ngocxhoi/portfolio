<template>
  <div
    class="absolute -z-10 left-1/2 top-1/2 origin-center aspect-1"
    :style="`width: ${size}px; transform: rotate(${rotate}deg) translate(-50%,-50%); transform-origin: 0 0`"
  >
    <div
      class="aspect-1 rounded-full bg-gray-300/20 dark:bg-emerald-50/10 animate-ping"
      :style="`width: ${iconSize}px; animation-duration: 2s;`"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  size: number;
  rotate: number;
  iconSize: number;
}>();
</script>
