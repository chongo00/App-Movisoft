<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Header de búsqueda -->
    <div class="bg-white p-4 shadow-md sticky top-0 z-10">
      <div class="flex items-center gap-3">
        <button @click="$router.back()" class="text-gray-600">
          <ArrowLeft :size="24" />
        </button>
        <div class="flex-1 bg-gray-100 rounded-full flex items-center px-4 py-3">
          <Search class="text-gray-400" :size="20" />
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Buscar productos..."
            class="flex-1 ml-3 outline-none bg-transparent text-gray-700"
            @input="handleSearch"
          />
        </div>
      </div>

      <!-- Filtros -->
      <div class="flex gap-2 mt-4 overflow-x-auto pb-2">
        <button 
          v-for="filter in filters" 
          :key="filter.id"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap',
            activeFilter === filter.id 
              ? 'bg-primary-600 text-white' 
              : 'bg-gray-200 text-gray-700'
          ]"
          @click="activeFilter = filter.id"
        >
          {{ filter.name }}
        </button>
      </div>
    </div>

    <!-- Resultados -->
    <div class="p-4">
      <p class="text-gray-600 mb-4" v-if="searchQuery">
        {{ searchResults.length }} resultados para "{{ searchQuery }}"
      </p>

      <div class="space-y-3" v-if="searchResults.length > 0">
        <div 
          v-for="product in searchResults" 
          :key="product.id"
          class="bg-white rounded-2xl p-4 shadow-md flex gap-4 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <div class="w-20 h-20 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
            <Package class="text-gray-400" :size="32" />
          </div>
          <div class="flex-1">
            <h3 class="font-semibold text-gray-800">{{ product.name }}</h3>
            <p class="text-sm text-gray-500">{{ product.store }}</p>
            <p class="text-primary-600 font-bold mt-1">${{ product.price }}</p>
          </div>
        </div>
      </div>

      <div v-else-if="searchQuery" class="text-center py-12 text-gray-500">
        No se encontraron resultados
      </div>

      <div v-else class="text-center py-12 text-gray-500">
        <Search :size="64" class="mx-auto mb-4 text-gray-300" />
        <p>Busca productos, tiendas o categorías</p>
      </div>
    </div>

    <BottomNavigation />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ArrowLeft, Search, Package } from 'lucide-vue-next'
import BottomNavigation from '../components/BottomNavigation.vue'

const searchQuery = ref('')
const activeFilter = ref('all')

const filters = ref([
  { id: 'all', name: 'Todo' },
  { id: 'products', name: 'Productos' },
  { id: 'stores', name: 'Tiendas' },
  { id: 'recent', name: 'Recientes' },
  { id: 'popular', name: 'Populares' },
])

// Datos de ejemplo
const allProducts = ref([
  { id: 1, name: 'Producto de ejemplo 1', price: 150, store: 'Tienda A' },
  { id: 2, name: 'Artículo de prueba 2', price: 200, store: 'Tienda B' },
  { id: 3, name: 'Item muestra 3', price: 175, store: 'Tienda C' },
])

const searchResults = computed(() => {
  if (!searchQuery.value) return []
  
  return allProducts.value.filter(product => 
    product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    product.store.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const handleSearch = () => {
  // Aquí iría la lógica de búsqueda real
}
</script>
