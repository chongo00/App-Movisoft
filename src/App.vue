<template>
  <div id="app" class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useThemeStore } from './stores/theme'

// Inicializar el store de tema para que esté disponible globalmente
const themeStore = useThemeStore()
</script>
