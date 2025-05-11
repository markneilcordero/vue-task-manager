<template>
  <div class="card h-100 shadow-sm">
    <div class="card-body">
      <h5 class="card-title mb-3">{{ title }}</h5>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
