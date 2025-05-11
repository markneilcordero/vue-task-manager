<template>
  <div v-if="dueSoonTasks.length > 0" class="alert alert-warning">
    <h5 class="alert-heading">⚠️ Due Soon</h5>
    <ul class="mb-0">
      <li v-for="task in dueSoonTasks" :key="task.id">
        <strong>{{ task.title }}</strong> — due {{ formatDate(task.dueDate) }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
})

// Get today's date and 3 days ahead
const today = new Date()
const threeDaysFromNow = new Date()
threeDaysFromNow.setDate(today.getDate() + 3)

// Filter tasks due within 3 days and not completed
const dueSoonTasks = computed(() =>
  props.tasks.filter((task) => {
    if (task.completed) return false
    const dueDate = new Date(task.dueDate)
    return dueDate >= today && dueDate <= threeDaysFromNow
  })
)

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>
