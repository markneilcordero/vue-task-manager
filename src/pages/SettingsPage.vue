<template>
  <div class="container my-4">
    <h2 class="mb-4">⚙️ Settings</h2>

    <!-- Settings Panel -->
    <SettingsPanel
      :assistantEnabled="assistantEnabled"
      @toggle-assistant="toggleAssistant"
      @request-reset="openResetModal"
    />

    <!-- Confirm Reset Modal -->
    <DataResetModal v-if="showResetModal" @confirm="resetData" @close="closeResetModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useLocalStorage from '@/utils/useLocalStorage'

// Components
import SettingsPanel from '@/components/SettingsPanel.vue'
import DataResetModal from '@/components/DataResetModal.vue'

// Settings state
const { storedValue: assistantEnabled, setStoredValue: setAssistantEnabled } =
  useLocalStorage('assistant_enabled', true)

const { setStoredValue: setTasks } = useLocalStorage('tasks', [])
const showResetModal = ref(false)

function toggleAssistant() {
  setAssistantEnabled(!assistantEnabled.value)
}

function openResetModal() {
  showResetModal.value = true
}

function closeResetModal() {
  showResetModal.value = false
}

function resetData() {
  setTasks([])
  setAssistantEnabled(true)
  closeResetModal()
}
</script>
