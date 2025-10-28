<template>
  <button
    @click="toggleTheme"
    :class="buttonClasses"
    :aria-label="themeStore.isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
  >
    <Sun v-if="themeStore.isDark" :size="size" class="text-yellow-500" />
    <Moon v-else :size="size" class="text-blue-600" />
    <span v-if="showLabel" class="ml-2 hidden sm:inline">
      {{ themeStore.isDark ? 'Claro' : 'Oscuro' }}
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'
import { useThemeStore } from '../stores/theme'

const props = defineProps({
  size: {
    type: Number,
    default: 20
  },
  showLabel: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'icon', 'minimal'].includes(value)
  }
})

const themeStore = useThemeStore()

const buttonClasses = computed(() => {
  const baseClasses = 'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  switch (props.variant) {
    case 'button':
      return `${baseClasses} flex items-center px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring-blue-500`
    case 'icon':
      return `${baseClasses} p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring-blue-500`
    case 'minimal':
      return `${baseClasses} p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-blue-500`
    default:
      return baseClasses
  }
})

const toggleTheme = () => {
  themeStore.toggleTheme()
}
</script>
