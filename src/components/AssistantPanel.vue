<template>
  <div class="assistant-panel">
    <div
      v-for="(msg, index) in messages"
      :key="index"
      class="alert"
      :class="messageClass(msg.type)"
      role="alert"
    >
      <i :class="iconClass(msg.type)" class="me-2"></i>
      {{ msg.text }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  messages: {
    type: Array,
    default: () => [],
  },
})

// Map message types to Bootstrap alert classes
function messageClass(type) {
  switch (type) {
    case 'warning':
      return 'alert-warning'
    case 'alert':
      return 'alert-danger'
    case 'tip':
      return 'alert-info'
    case 'nudge':
      return 'alert-secondary'
    case 'success':
      return 'alert-success'
    default:
      return 'alert-light'
  }
}

// Map message types to Font Awesome icons
function iconClass(type) {
  switch (type) {
    case 'warning':
      return 'fas fa-exclamation-triangle text-warning'
    case 'alert':
      return 'fas fa-bolt text-danger'
    case 'tip':
      return 'fas fa-lightbulb text-info'
    case 'nudge':
      return 'fas fa-hand-point-right text-secondary'
    case 'success':
      return 'fas fa-check-circle text-success'
    default:
      return 'fas fa-info-circle text-muted'
  }
}
</script>

<style scoped>
.assistant-panel .alert {
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0.75rem 1rem;
}
</style>
