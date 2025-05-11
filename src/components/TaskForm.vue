<template>
  <div class="modal-backdrop show" style="z-index: 1050;"></div>
  <div class="modal d-block" tabindex="-1" style="z-index: 1055;">
    <div class="modal-dialog">
      <div class="modal-content">
        <form @submit.prevent="handleSubmit">
          <div class="modal-header">
            <h5 class="modal-title">{{ isEditMode ? 'Edit Task' : 'Add Task' }}</h5>
            <button type="button" class="btn-close" @click="$emit('close')"></button>
          </div>

          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Title</label>
              <input type="text" v-model="form.title" class="form-control" required />
            </div>

            <div class="mb-3">
              <label class="form-label">Description</label>
              <textarea v-model="form.description" class="form-control" rows="3"></textarea>
            </div>

            <div class="mb-3">
              <label class="form-label">Due Date</label>
              <input type="date" v-model="form.dueDate" class="form-control" required />
            </div>

            <div class="mb-3">
              <label class="form-label">Priority</label>
              <select v-model="form.priority" class="form-select" required>
                <option value="" disabled>Select priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div class="mb-3">
              <label class="form-label">Category</label>
              <input type="text" v-model="form.category" class="form-control" required />
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="$emit('close')">Cancel</button>
            <button type="submit" class="btn btn-primary">{{ isEditMode ? 'Update' : 'Add' }} Task</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch, toRefs, computed } from 'vue'

const props = defineProps({
  editTask: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['save-task', 'close'])

const form = reactive({
  id: null,
  title: '',
  description: '',
  dueDate: '',
  priority: '',
  category: '',
  completed: false,
})

const isEditMode = computed(() => !!props.editTask)

watch(
  () => props.editTask,
  (newVal) => {
    if (newVal) {
      Object.assign(form, newVal)
    }
  },
  { immediate: true }
)

function handleSubmit() {
  emit('save-task', { ...form })
}
</script>
