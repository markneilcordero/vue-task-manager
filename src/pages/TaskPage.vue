<template>
  <div class="container my-4">
    <!-- Page Title -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2>📝 Task Manager</h2>
      <button class="btn btn-primary" @click="openTaskForm">Add Task</button>
    </div>

    <!-- Search and Filters -->
    <SearchBar v-model="searchQuery" />
    <TaskFilters @filter-changed="applyFilters" />

    <!-- Due Soon Widget -->
    <DueSoonWidget :tasks="filteredTasks" />

    <!-- Task List -->
    <TaskList
      :tasks="filteredTasks"
      @toggle-complete="toggleComplete"
      @delete-task="deleteTask"
      @edit-task="editTask"
    />

    <!-- Empty State -->
    <EmptyState v-if="filteredTasks.length === 0" />

    <!-- Task Form Modal -->
    <TaskForm
      v-if="showForm"
      :editTask="taskBeingEdited"
      @save-task="handleSaveTask"
      @close="closeTaskForm"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import useLocalStorage from '@/utils/useLocalStorage'

// Components
import SearchBar from '@/components/SearchBar.vue'
import TaskFilters from '@/components/TaskFilters.vue'
import DueSoonWidget from '@/components/DueSoonWidget.vue'
import TaskList from '@/components/TaskList.vue'
import TaskForm from '@/components/TaskForm.vue'
import EmptyState from '@/components/EmptyState.vue'

// LocalStorage tasks
const { storedValue: tasks, setStoredValue: setTasks } = useLocalStorage('tasks', [])

const searchQuery = ref('')
const filters = ref({})
const showForm = ref(false)
const taskBeingEdited = ref(null)

// Computed filtered tasks
const filteredTasks = computed(() => {
  return tasks.value.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesFilters =
      (!filters.value.priority || task.priority === filters.value.priority) &&
      (!filters.value.category || task.category === filters.value.category) &&
      (!filters.value.status || (filters.value.status === 'completed' ? task.completed : !task.completed))

    return matchesSearch && matchesFilters
  })
})

// Event handlers
function openTaskForm() {
  taskBeingEdited.value = null
  showForm.value = true
}

function closeTaskForm() {
  showForm.value = false
  taskBeingEdited.value = null
}

function handleSaveTask(task) {
  if (task.id) {
    const index = tasks.value.findIndex((t) => t.id === task.id)
    if (index !== -1) tasks.value[index] = task
  } else {
    task.id = Date.now()
    tasks.value.push(task)
  }
  setTasks(tasks.value)
  closeTaskForm()
}

function deleteTask(taskId) {
  tasks.value = tasks.value.filter((t) => t.id !== taskId)
  setTasks(tasks.value)
}

function toggleComplete(taskId) {
  const task = tasks.value.find((t) => t.id === taskId)
  if (task) task.completed = !task.completed
  setTasks(tasks.value)
}

function editTask(task) {
  taskBeingEdited.value = { ...task }
  showForm.value = true
}

function applyFilters(newFilters) {
  filters.value = newFilters
}
</script>
