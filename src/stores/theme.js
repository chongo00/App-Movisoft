import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // Estado
  const isDark = ref(false)

  // Getters
  const themeClass = computed(() => isDark.value ? 'dark' : 'light')

  // Actions
  function toggleTheme() {
    isDark.value = !isDark.value
  }

  function setTheme(dark) {
    isDark.value = dark
  }

  // Aplicar tema al DOM
  watch(isDark, (newValue) => {
    if (newValue) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, { immediate: true })

  return {
    isDark,
    themeClass,
    toggleTheme,
    setTheme
  }
}, {
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'theme',
        storage: localStorage,
      }
    ]
  }
})
