<template>
  <div
    class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
    :class="{ 'list-group-item-success': task.completed }"
  >
    <div class="flex-grow-1">
      <h5 class="mb-1">
        <span :class="{ 'text-decoration-line-through': task.completed }">
          {{ task.title }}
        </span>
      </h5>
      <p class="mb-1 small text-muted">
        Due: {{ formatDate(task.dueDate) }} |
        Priority:
        <span
          class="badge"
          :class="{
            'bg-danger': task.priority === 'High',
            'bg-warning text-dark': task.priority === 'Medium',
            'bg-secondary': task.priority === 'Low'
          }"
        >
          {{ task.priority }}
        </span>
        |
        Category: {{ task.category }}
      </p>
    </div>

    <div class="btn-group">
      <button
        class="btn btn-sm btn-outline-success"
        @click="$emit('toggle-complete', task.id)"
      >
        ✔
      </button>
      <button
        class="btn btn-sm btn-outline-primary"
        @click="$emit('edit-task', task)"
      >
        ✏️
      </button>
      <button
        class="btn btn-sm btn-outline-danger"
        @click="$emit('delete-task', task.id)"
      >
        🗑
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  task: {
    type: Object,
    required: true,
  },
})

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>
