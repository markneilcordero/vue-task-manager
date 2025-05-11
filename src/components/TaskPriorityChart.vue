<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { computed } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
})

// Count tasks by priority
const priorityCounts = computed(() => {
  const counts = { High: 0, Medium: 0, Low: 0 }
  props.tasks.forEach((task) => {
    if (counts[task.priority] !== undefined) {
      counts[task.priority]++
    }
  })
  return counts
})

const chartData = computed(() => ({
  labels: ['High', 'Medium', 'Low'],
  datasets: [
    {
      label: 'Tasks by Priority',
      data: [
        priorityCounts.value.High,
        priorityCounts.value.Medium,
        priorityCounts.value.Low,
      ],
      backgroundColor: ['#dc3545', '#ffc107', '#6c757d'],
    },
  ],
}))

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1,
      },
    },
  },
}
</script>
