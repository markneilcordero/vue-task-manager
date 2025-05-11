<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { computed } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
)

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
})

// Generate past 7 days labels
const last7Days = computed(() => {
  const days = []
  const today = new Date()
  for (let i = 6; i >= 0; i--) {
    const day = new Date(today)
    day.setDate(today.getDate() - i)
    days.push(day.toISOString().split('T')[0])
  }
  return days
})

// Count completed tasks per day
const completionCounts = computed(() => {
  const counts = {}
  last7Days.value.forEach((date) => (counts[date] = 0))

  props.tasks.forEach((task) => {
    if (task.completed && task.dueDate) {
      const completedDate = new Date(task.dueDate).toISOString().split('T')[0]
      if (counts[completedDate] !== undefined) {
        counts[completedDate]++
      }
    }
  })

  return Object.values(counts)
})

const chartData = computed(() => ({
  labels: last7Days.value.map((d) =>
    new Date(d).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })
  ),
  datasets: [
    {
      label: 'Completed Tasks',
      data: completionCounts.value,
      borderColor: '#198754',
      backgroundColor: '#19875444',
      fill: true,
      tension: 0.3,
    },
  ],
}))

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
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
