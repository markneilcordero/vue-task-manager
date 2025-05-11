<template>
  <div class="container my-4">
    <h2 class="mb-4">📊 Dashboard</h2>

    <!-- Summary Stats -->
    <SummaryStats :tasks="tasks" />

    <div class="row g-4 mt-3">
      <!-- Category Pie Chart -->
      <div class="col-md-6">
        <ChartCard title="Tasks by Category">
          <TaskCategoryChart :tasks="tasks" />
        </ChartCard>
      </div>

      <!-- Priority Bar Chart -->
      <div class="col-md-6">
        <ChartCard title="Tasks by Priority">
          <TaskPriorityChart :tasks="tasks" />
        </ChartCard>
      </div>

      <!-- Completion Trend Line Chart -->
      <div class="col-12">
        <ChartCard title="Task Completion Over Time">
          <TaskCompletionTrend :tasks="tasks" />
        </ChartCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import useLocalStorage from '@/utils/useLocalStorage'

// Components
import SummaryStats from '@/components/SummaryStats.vue'
import TaskCategoryChart from '@/components/TaskCategoryChart.vue'
import TaskPriorityChart from '@/components/TaskPriorityChart.vue'
import TaskCompletionTrend from '@/components/TaskCompletionTrend.vue'
import ChartCard from '@/components/ChartCard.vue'

// Load tasks from local storage
const { storedValue: tasks } = useLocalStorage('tasks', [])
</script>
