<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Header -->
    <div class="bg-gradient-to-br from-primary-600 to-primary-400 text-white p-6 rounded-b-[40px]">
      <h1 class="text-3xl font-bold">Categorías</h1>
      <p class="text-primary-100 mt-2">Explora por categorías</p>
    </div>

    <!-- Lista de categorías -->
    <div class="p-4 space-y-3">
      <div 
        v-for="category in categories" 
        :key="category.id"
        class="bg-white rounded-2xl p-4 shadow-md flex items-center gap-4 cursor-pointer hover:shadow-lg transition-shadow"
      >
        <div class="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
          <component :is="category.icon" :size="32" class="text-primary-600" />
        </div>
        <div class="flex-1">
          <h3 class="font-semibold text-lg text-gray-800">{{ category.name }}</h3>
          <p class="text-sm text-gray-500">{{ category.count }} productos</p>
        </div>
        <ChevronRight class="text-gray-400" :size="24" />
      </div>
    </div>

    <BottomNavigation />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ShoppingBag, Utensils, Laptop, Home, Shirt, Book, ChevronRight } from 'lucide-vue-next'
import BottomNavigation from '../components/BottomNavigation.vue'

const categories = ref([
  { id: 1, name: 'Alimentos', count: 156, icon: Utensils },
  { id: 2, name: 'Ropa y Moda', count: 234, icon: Shirt },
  { id: 3, name: 'Electrónica', count: 89, icon: Laptop },
  { id: 4, name: 'Hogar', count: 178, icon: Home },
  { id: 5, name: 'Libros', count: 67, icon: Book },
  { id: 6, name: 'Otros', count: 345, icon: ShoppingBag },
])
</script>
