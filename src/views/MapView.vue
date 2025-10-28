<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Header -->
    <div class="bg-gradient-to-br from-primary-600 to-primary-400 text-white p-6 rounded-b-[40px]">
      <h1 class="text-3xl font-bold">Tiendas Cercanas</h1>
      <p class="text-primary-100 mt-2">Encuentra negocios cerca de ti</p>
    </div>

    <!-- Mapa placeholder -->
    <div class="relative h-64 bg-gray-300 m-4 rounded-2xl overflow-hidden">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center">
          <MapPin :size="48" class="text-gray-500 mx-auto mb-2" />
          <p class="text-gray-600 font-medium">Mapa</p>
          <p class="text-sm text-gray-500">Integración de geolocalización</p>
        </div>
      </div>
    </div>

    <!-- Controles -->
    <div class="px-4 mb-4">
      <div class="bg-white rounded-2xl p-4 shadow-md flex items-center gap-3">
        <Navigation class="text-primary-600" :size="24" />
        <div class="flex-1">
          <p class="text-sm text-gray-600">Tu ubicación actual</p>
          <p class="font-medium text-gray-800">Habana, Cuba</p>
        </div>
        <button class="text-primary-600 font-medium">Cambiar</button>
      </div>
    </div>

    <!-- Lista de tiendas cercanas -->
    <div class="px-4">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Tiendas cercanas</h2>
      <div class="space-y-3">
        <div 
          v-for="store in nearbyStores" 
          :key="store.id"
          class="bg-white rounded-2xl p-4 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
        >
          <div class="flex justify-between items-start mb-2">
            <h3 class="font-semibold text-lg text-gray-800">{{ store.name }}</h3>
            <span class="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
              {{ store.distance }}
            </span>
          </div>
          <p class="text-sm text-gray-600 mb-2">{{ store.category }}</p>
          <div class="flex items-center text-sm text-gray-500">
            <MapPin :size="16" class="mr-1" />
            {{ store.address }}
          </div>
        </div>
      </div>
    </div>

    <BottomNavigation />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MapPin, Navigation } from 'lucide-vue-next'
import BottomNavigation from '../components/BottomNavigation.vue'

const nearbyStores = ref([
  { 
    id: 1, 
    name: 'Tienda La Esquina', 
    category: 'Alimentos', 
    distance: '0.5 km',
    address: 'Calle 23 #456, Vedado'
  },
  { 
    id: 2, 
    name: 'Bodega Central', 
    category: 'Alimentos y Bebidas', 
    distance: '0.8 km',
    address: 'Ave. 5ta #789, Miramar'
  },
  { 
    id: 3, 
    name: 'Electro Store', 
    category: 'Electrónica', 
    distance: '1.2 km',
    address: 'Calle L #234, Vedado'
  },
  { 
    id: 4, 
    name: 'Moda y Estilo', 
    category: 'Ropa', 
    distance: '1.5 km',
    address: 'Calle 10 #567, Miramar'
  },
])
</script>
