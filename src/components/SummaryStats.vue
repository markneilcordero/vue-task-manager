<template>
  <div class="row g-3">
    <div class="col-md-3 col-sm-6" v-for="stat in statsList" :key="stat.label">
      <div class="card text-center">
        <div class="card-body">
          <h6 class="card-title text-muted">{{ stat.label }}</h6>
          <h4 class="fw-bold">{{ stat.value }}</h4>
        </div>
      </div>
    </div>
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

const totalTasks = computed(() => props.tasks.length)
const completedTasks = computed(() => props.tasks.filter((t) => t.completed).length)
const pendingTasks = computed(() => props.tasks.filter((t) => !t.completed).length)
const overdueTasks = computed(() => {
  const now = new Date()
  return props.tasks.filter((t) => !t.completed && new Date(t.dueDate) < now).length
})

const statsList = computed(() => [
  { label: 'Total Tasks', value: totalTasks.value },
  { label: 'Completed', value: completedTasks.value },
  { label: 'Pending', value: pendingTasks.value },
  { label: 'Overdue', value: overdueTasks.value },
])
</script>
