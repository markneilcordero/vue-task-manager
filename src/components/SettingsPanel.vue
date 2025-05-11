<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title mb-3">App Settings</h5>

      <!-- Assistant Toggle -->
      <div class="form-check form-switch mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="assistantToggle"
          :checked="assistantEnabled"
          @change="$emit('toggle-assistant')"
        />
        <label class="form-check-label" for="assistantToggle">
          Enable Productivity Assistant
        </label>
      </div>

      <!-- Reset Button -->
      <button class="btn btn-outline-danger" @click="$emit('request-reset')">
        Reset All Data
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  assistantEnabled: {
    type: Boolean,
    required: true,
  },
})

defineEmits(['toggle-assistant', 'request-reset'])
</script>
