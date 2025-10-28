<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Header con forma azul -->
    <div class="relative bg-gradient-to-br from-primary-600 to-primary-400 rounded-b-[80px] pb-12 pt-8 px-6">
      <!-- Buscador -->
      <div class="bg-white rounded-full flex items-center px-4 py-3 shadow-lg mb-6">
        <Search class="text-gray-400" :size="24" />
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Buscar productos..."
          class="flex-1 ml-3 outline-none text-gray-700"
        />
      </div>

      <!-- Botones de filtro -->
      <div class="flex gap-3 justify-center">
        <button class="bg-white px-6 py-2 rounded-full font-medium text-gray-700 border-2 border-primary-600 hover:bg-primary-50">
          Categorías
        </button>
        <button class="bg-white px-6 py-2 rounded-full font-medium text-gray-700 border-2 border-primary-600 hover:bg-primary-50">
          Productos Cercanos
        </button>
      </div>
    </div>

    <!-- Grid de productos -->
    <div class="px-4 pt-6">
      <div class="grid grid-cols-2 gap-4">
        <div 
          v-for="product in products" 
          :key="product.id"
          @click="goToProduct(product.id)"
          class="bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
        >
          <div class="aspect-square bg-gray-200 flex items-center justify-center">
            <Package class="text-gray-400" :size="48" />
          </div>
          <div class="p-3">
            <h3 class="font-semibold text-gray-800 text-sm mb-1">{{ product.name }}</h3>
            <p class="text-primary-600 font-bold">${{ product.price }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ product.store }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navegación inferior -->
    <BottomNavigation />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Package } from 'lucide-vue-next'
import BottomNavigation from '../components/BottomNavigation.vue'

const router = useRouter()
const searchQuery = ref('')

// Datos de ejemplo
const products = ref([
  { id: 1, name: 'Producto 1', price: 150, store: 'Tienda A' },
  { id: 2, name: 'Producto 2', price: 200, store: 'Tienda B' },
  { id: 3, name: 'Producto 3', price: 175, store: 'Tienda C' },
  { id: 4, name: 'Producto 4', price: 300, store: 'Tienda D' },
  { id: 5, name: 'Producto 5', price: 125, store: 'Tienda E' },
  { id: 6, name: 'Producto 6', price: 250, store: 'Tienda F' },
])

const goToProduct = (id) => {
  router.push(`/product/${id}`)
}
</script>
