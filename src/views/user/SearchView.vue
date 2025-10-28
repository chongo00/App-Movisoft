<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
    <div class="bg-white dark:bg-gray-800 p-4 shadow-md sticky top-0 z-10">
      <div class="flex items-center gap-3">
        <div class="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center px-4 py-3">
          <Search class="text-gray-400 dark:text-gray-500" :size="20" />
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Buscar productos..."
            class="flex-1 ml-3 outline-none bg-transparent text-gray-700 dark:text-gray-300"
          />
        </div>
      </div>
    </div>

    <div class="p-4">
      <p class="text-gray-600 dark:text-gray-400 mb-4">Vista de búsqueda - En desarrollo</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from 'lucide-vue-next'

const searchQuery = ref('')
</script>
