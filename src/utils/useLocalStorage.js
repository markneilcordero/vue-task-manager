import { ref, watch } from 'vue'

export default function useLocalStorage(key, defaultValue) {
  const storedValue = ref(getStoredValue())

  function getStoredValue() {
    try {
      const item = localStorage.getItem(key)
      if (item) return JSON.parse(item)

      // If empty and key is "tasks", inject tutorial data
      if (key === 'tasks') {
        const tutorialTasks = [
          {
            id: Date.now(),
            title: 'Welcome to Task Manager!',
            description: 'This is a sample task to help you get started.',
            dueDate: new Date().toISOString().split('T')[0],
            priority: 'Medium',
            category: 'Getting Started',
            completed: false,
          },
          {
            id: Date.now() + 1,
            title: 'Mark tasks as completed',
            description: 'Click the ✔ icon to complete tasks.',
            dueDate: new Date().toISOString().split('T')[0],
            priority: 'Low',
            category: 'Tutorial',
            completed: false,
          },
          {
            id: Date.now() + 2,
            title: 'Try adding a new task',
            description: 'Click "Add Task" to create your own!',
            dueDate: new Date(Date.now() + 86400000).toISOString().split('T')[0], // +1 day
            priority: 'High',
            category: 'Tutorial',
            completed: false,
          },
        ]
        localStorage.setItem(key, JSON.stringify(tutorialTasks))
        return tutorialTasks
      }

      // Fallback
      return defaultValue
    } catch (error) {
      console.error(`useLocalStorage error for key "${key}":`, error)
      return defaultValue
    }
  }

  function setStoredValue(value) {
    try {
      storedValue.value = value
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Failed to set localStorage for key "${key}":`, error)
    }
  }

  watch(
    storedValue,
    (newVal) => {
      try {
        localStorage.setItem(key, JSON.stringify(newVal))
      } catch (error) {
        console.error(`Failed to watch localStorage for key "${key}":`, error)
      }
    },
    { deep: true }
  )

  return {
    storedValue,
    setStoredValue,
  }
}
