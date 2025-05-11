<template>
  <Pie :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { computed } from 'vue'
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
})

// Group tasks by category
const categoryCounts = computed(() => {
  const counts = {}
  props.tasks.forEach((task) => {
    counts[task.category] = (counts[task.category] || 0) + 1
  })
  return counts
})

const chartData = computed(() => ({
  labels: Object.keys(categoryCounts.value),
  datasets: [
    {
      label: 'Tasks by Category',
      data: Object.values(categoryCounts.value),
      backgroundColor: [
        '#007bff',
        '#28a745',
        '#ffc107',
        '#dc3545',
        '#6f42c1',
        '#20c997',
      ],
    },
  ],
}))

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
}
</script>
