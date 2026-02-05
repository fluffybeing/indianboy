<template>
  <img
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
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
