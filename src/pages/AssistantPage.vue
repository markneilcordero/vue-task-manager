<template>
  <div class="container my-4">
    <h2 class="mb-4">🧠 Productivity Assistant</h2>

    <div class="mb-3">
      <button class="btn btn-outline-primary" @click="generateSuggestions">
        Generate Suggestions
      </button>
    </div>

    <!-- Assistant Panel -->
    <AssistantPanel :messages="assistantMessages" />

    <p v-if="assistantMessages.length === 0" class="text-muted mt-3">
      No suggestions yet. Click "Generate Suggestions" to start!
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useLocalStorage from '@/utils/useLocalStorage'
import runAssistantRules from '@/utils/AssistantRulesEngine'

// Components
import AssistantPanel from '@/components/AssistantPanel.vue'

// Load tasks
const { storedValue: tasks } = useLocalStorage('tasks', [])

// Assistant message state
const assistantMessages = ref([])

function generateSuggestions() {
  assistantMessages.value = runAssistantRules(tasks.value)
}
</script>
