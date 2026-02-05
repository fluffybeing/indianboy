<template>
  <NuxtImg
    :src="src"
    :alt="alt"
    :width="width || 400"
    :height="height"
    loading="lazy"
    format="webp"
    quality="80"
    class="prose-img mx-auto rounded-md !max-w-[400px] !w-auto"
  />
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: null
  },
  height: {
    type: [String, Number],
    default: null
  }
})
</script>
