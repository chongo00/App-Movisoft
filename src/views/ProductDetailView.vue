<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Header con botón de regreso -->
    <div class="bg-white p-4 flex items-center gap-3 shadow-sm sticky top-0 z-10">
      <button @click="$router.back()" class="text-gray-600">
        <ArrowLeft :size="24" />
      </button>
      <h1 class="text-lg font-semibold text-gray-800">Detalle del Producto</h1>
      <button class="ml-auto text-gray-600">
        <Heart :size="24" />
      </button>
    </div>

    <!-- Imagen del producto -->
    <div class="bg-white p-6">
      <div class="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center">
        <Package :size="80" class="text-gray-400" />
      </div>
    </div>

    <!-- Información del producto -->
    <div class="bg-white mt-2 p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ product.name }}</h2>
      <p class="text-3xl font-bold text-primary-600 mb-4">${{ product.price }} CUP</p>
      
      <div class="flex items-center gap-2 mb-4">
        <div class="flex">
          <Star v-for="i in 5" :key="i" :size="20" 
            :class="i <= product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'" 
          />
        </div>
        <span class="text-sm text-gray-600">({{ product.reviews }} reseñas)</span>
      </div>

      <div class="border-t border-gray-200 pt-4">
        <h3 class="font-semibold text-gray-800 mb-2">Descripción</h3>
        <p class="text-gray-600 leading-relaxed">{{ product.description }}</p>
      </div>

      <div class="border-t border-gray-200 pt-4 mt-4">
        <h3 class="font-semibold text-gray-800 mb-3">Información de la tienda</h3>
        <div 
          @click="goToStore(product.storeId)"
          class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100"
        >
          <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
            <Store :size="24" class="text-primary-600" />
          </div>
          <div class="flex-1">
            <p class="font-medium text-gray-800">{{ product.store }}</p>
            <p class="text-sm text-gray-500">{{ product.storeLocation }}</p>
          </div>
          <ChevronRight :size="20" class="text-gray-400" />
        </div>
      </div>
    </div>

    <!-- Botón de acción fijo -->
    <div class="fixed bottom-20 left-0 right-0 p-4 bg-white border-t border-gray-200">
      <button 
        @click="generateOrder"
        class="w-full bg-primary-600 text-white py-4 rounded-full font-semibold text-lg hover:bg-primary-700 flex items-center justify-center gap-2"
      >
        <MessageCircle :size="24" />
        Generar Pedido
      </button>
    </div>

    <BottomNavigation />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ArrowLeft, Heart, Package, Star, Store, ChevronRight, MessageCircle } from 'lucide-vue-next'
import BottomNavigation from '../components/BottomNavigation.vue'

const router = useRouter()
const route = useRoute()

// Datos de ejemplo del producto
const product = ref({
  id: route.params.id,
  name: 'Producto de Ejemplo',
  price: 250,
  rating: 4,
  reviews: 23,
  description: 'Este es un producto de alta calidad disponible en nuestra tienda. Perfecto para tus necesidades diarias. Producto elaborado con los mejores materiales y siguiendo estándares de calidad.',
  store: 'Tienda La Esquina',
  storeId: 1,
  storeLocation: 'Vedado, La Habana'
})

const goToStore = (storeId) => {
  router.push(`/store/${storeId}`)
}

const generateOrder = () => {
  alert('Funcionalidad de pedido: Se abrirá WhatsApp con los datos del pedido')
  // Aquí iría la lógica para generar el pedido y abrir WhatsApp
}
</script>
