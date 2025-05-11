<template>
  <div class="modal-backdrop show" style="z-index: 1050;"></div>
  <div class="modal d-block" tabindex="-1" style="z-index: 1055;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-danger">Confirm Reset</h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>

        <div class="modal-body">
          <p>Are you sure you want to <strong>reset all app data</strong>? This action cannot be undone.</p>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="$emit('close')">Cancel</button>
          <button type="button" class="btn btn-danger" @click="$emit('confirm')">Reset All Data</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Emits: 'confirm', 'close'
</script>

<style scoped>
.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
