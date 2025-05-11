import { ref, watch } from 'vue'

export default function useLocalStorage(key, defaultValue) {
  const storedValue = ref(getStoredValue())

  function getStoredValue() {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
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

  // Watch for changes and update localStorage
  watch(storedValue, (newVal) => {
    try {
      localStorage.setItem(key, JSON.stringify(newVal))
    } catch (error) {
      console.error(`Failed to watch localStorage for key "${key}":`, error)
    }
  }, { deep: true })

  return {
    storedValue,
    setStoredValue,
  }
}
