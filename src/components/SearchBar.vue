<template>
  <div class="input-group mb-3">
    <span class="input-group-text" id="search-addon">🔍</span>
    <input
      type="text"
      class="form-control"
      placeholder="Search tasks..."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue'])
</script>
