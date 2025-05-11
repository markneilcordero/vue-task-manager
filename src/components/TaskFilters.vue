<template>
  <div class="card mb-3">
    <div class="card-body row g-3 align-items-center">
      <!-- Priority Filter -->
      <div class="col-md-4">
        <label class="form-label">Priority</label>
        <select class="form-select" v-model="filters.priority" @change="emitFilters">
          <option value="">All</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>

      <!-- Category Filter -->
      <div class="col-md-4">
        <label class="form-label">Category</label>
        <input
          type="text"
          class="form-control"
          placeholder="Search by category"
          v-model="filters.category"
          @input="emitFilters"
        />
      </div>

      <!-- Status Filter -->
      <div class="col-md-4">
        <label class="form-label">Status</label>
        <select class="form-select" v-model="filters.status" @change="emitFilters">
          <option value="">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['filter-changed'])

const filters = reactive({
  priority: '',
  category: '',
  status: '',
})

function emitFilters() {
  emit('filter-changed', { ...filters })
}
</script>
