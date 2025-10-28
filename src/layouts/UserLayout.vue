<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Contenido principal -->
    <main class="pb-20">
      <RouterView />
    </main>

    <!-- Navegación inferior -->
    <BottomNavigation />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import BottomNavigation from '../components/BottomNavigation.vue'
</script>
