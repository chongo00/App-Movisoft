<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Gestión de Productos</h1>
      <router-link 
        to="/dashboard/products/create"
        class="px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 flex items-center gap-2"
      >
        <Plus :size="20" />
        Nuevo Producto
      </router-link>
    </div>

    <!-- Filtros -->
    <div class="bg-white rounded-2xl p-4 shadow-sm mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input 
          v-model="filters.search"
          type="text"
          placeholder="Buscar producto..."
          class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
        />
        <select 
          v-model="filters.company"
          class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
        >
          <option value="">Todas las empresas</option>
          <option value="1">La Esquina</option>
          <option value="2">Electro Store</option>
        </select>
        <select 
          v-model="filters.category"
          class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
        >
          <option value="">Todas las categorías</option>
          <option value="1">Alimentos</option>
          <option value="2">Electrónica</option>
        </select>
      </div>
    </div>

    <!-- Grid de productos -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div 
        v-for="product in products" 
        :key="product.id"
        class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      >
        <div class="aspect-square bg-gray-200 flex items-center justify-center">
          <Package :size="48" class="text-gray-400" />
        </div>
        <div class="p-4">
          <h3 class="font-semibold text-gray-800 mb-1">{{ product.name }}</h3>
          <p class="text-primary-600 font-bold text-lg mb-2">${{ product.price }}</p>
          <p class="text-sm text-gray-500 mb-3">{{ product.company }}</p>
          
          <div class="flex gap-2">
            <button class="flex-1 px-3 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700">
              <Edit :size="16" class="inline mr-1" />
              Editar
            </button>
            <button class="px-3 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700">
              <Trash2 :size="16" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Plus, Package, Edit, Trash2 } from 'lucide-vue-next'

const filters = ref({
  search: '',
  company: '',
  category: ''
})

const products = ref([
  { id: 1, name: 'Producto 1', price: 150, company: 'La Esquina' },
  { id: 2, name: 'Producto 2', price: 200, company: 'Electro Store' },
  { id: 3, name: 'Producto 3', price: 175, company: 'La Esquina' },
  { id: 4, name: 'Producto 4', price: 300, company: 'Electro Store' },
])
</script>
