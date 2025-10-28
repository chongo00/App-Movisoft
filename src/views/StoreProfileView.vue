<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Header -->
    <div class="bg-white p-4 flex items-center gap-3 shadow-sm sticky top-0 z-10">
      <button @click="$router.back()" class="text-gray-600">
        <ArrowLeft :size="24" />
      </button>
      <h1 class="text-lg font-semibold text-gray-800">Perfil de Tienda</h1>
    </div>

    <!-- Información de la tienda -->
    <div class="bg-gradient-to-br from-primary-600 to-primary-400 text-white p-6">
      <div class="flex items-start gap-4 mb-4">
        <div class="w-20 h-20 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
          <Store :size="40" class="text-primary-600" />
        </div>
        <div class="flex-1">
          <h2 class="text-2xl font-bold mb-1">{{ store.name }}</h2>
          <p class="text-primary-100">{{ store.category }}</p>
          <div class="flex items-center gap-2 mt-2">
            <div class="flex">
              <Star v-for="i in 5" :key="i" :size="16" 
                :class="i <= store.rating ? 'text-yellow-300 fill-yellow-300' : 'text-white/30'" 
              />
            </div>
            <span class="text-sm">({{ store.reviews }})</span>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-2 text-primary-100">
        <MapPin :size="18" />
        <span>{{ store.address }}</span>
      </div>
    </div>

    <!-- Información adicional -->
    <div class="p-4 space-y-4">
      <!-- Estadísticas -->
      <div class="bg-white rounded-2xl p-4 shadow-md">
        <div class="grid grid-cols-3 gap-4 text-center">
          <div>
            <p class="text-2xl font-bold text-primary-600">{{ store.products }}</p>
            <p class="text-sm text-gray-600">Productos</p>
          </div>
          <div>
            <p class="text-2xl font-bold text-primary-600">{{ store.followers }}</p>
            <p class="text-sm text-gray-600">Seguidores</p>
          </div>
          <div>
            <p class="text-2xl font-bold text-primary-600">{{ store.sales }}</p>
            <p class="text-sm text-gray-600">Ventas</p>
          </div>
        </div>
      </div>

      <!-- Descripción -->
      <div class="bg-white rounded-2xl p-4 shadow-md">
        <h3 class="font-semibold text-lg text-gray-800 mb-2">Sobre la tienda</h3>
        <p class="text-gray-600 leading-relaxed">{{ store.description }}</p>
      </div>

      <!-- Contacto -->
      <div class="bg-white rounded-2xl p-4 shadow-md">
        <h3 class="font-semibold text-lg text-gray-800 mb-3">Contacto</h3>
        <div class="space-y-3">
          <div class="flex items-center gap-3 text-gray-700">
            <Phone :size="20" class="text-primary-600" />
            <span>{{ store.phone }}</span>
          </div>
          <div class="flex items-center gap-3 text-gray-700">
            <Mail :size="20" class="text-primary-600" />
            <span>{{ store.email }}</span>
          </div>
        </div>
      </div>

      <!-- Horarios -->
      <div class="bg-white rounded-2xl p-4 shadow-md">
        <h3 class="font-semibold text-lg text-gray-800 mb-3">Horario de atención</h3>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between">
            <span class="text-gray-600">Lunes - Viernes</span>
            <span class="font-medium text-gray-800">9:00 AM - 6:00 PM</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Sábados</span>
            <span class="font-medium text-gray-800">9:00 AM - 2:00 PM</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Domingos</span>
            <span class="font-medium text-gray-800">Cerrado</span>
          </div>
        </div>
      </div>

      <!-- Productos de la tienda -->
      <div>
        <h3 class="font-semibold text-lg text-gray-800 mb-3">Productos</h3>
        <div class="grid grid-cols-2 gap-4">
          <div 
            v-for="product in store.productList" 
            :key="product.id"
            @click="goToProduct(product.id)"
            class="bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div class="aspect-square bg-gray-200 flex items-center justify-center">
              <Package class="text-gray-400" :size="48" />
            </div>
            <div class="p-3">
              <h4 class="font-semibold text-gray-800 text-sm mb-1">{{ product.name }}</h4>
              <p class="text-primary-600 font-bold">${{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Botones de acción -->
      <div class="space-y-3">
        <button class="w-full bg-primary-600 text-white py-4 rounded-full font-semibold hover:bg-primary-700 flex items-center justify-center gap-2">
          <MessageCircle :size="24" />
          Contactar por WhatsApp
        </button>
        <button class="w-full bg-white border-2 border-primary-600 text-primary-600 py-4 rounded-full font-semibold hover:bg-primary-50 flex items-center justify-center gap-2">
          <Heart :size="24" />
          Seguir Tienda
        </button>
      </div>
    </div>

    <BottomNavigation />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ArrowLeft, Store, Star, MapPin, Phone, Mail, Package, MessageCircle, Heart } from 'lucide-vue-next'
import BottomNavigation from '../components/BottomNavigation.vue'

const router = useRouter()
const route = useRoute()

// Datos de ejemplo de la tienda
const store = ref({
  id: route.params.id,
  name: 'Tienda La Esquina',
  category: 'Alimentos y Bebidas',
  rating: 4,
  reviews: 156,
  address: 'Calle 23 #456, Vedado, La Habana',
  products: 48,
  followers: 234,
  sales: 567,
  description: 'Somos una tienda local especializada en productos de alta calidad. Con más de 5 años de experiencia sirviendo a la comunidad, ofrecemos los mejores precios y atención personalizada.',
  phone: '+53 5234-5678',
  email: 'contacto@laesquina.cu',
  productList: [
    { id: 1, name: 'Producto 1', price: 150 },
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 175 },
    { id: 4, name: 'Producto 4', price: 300 },
  ]
})

const goToProduct = (productId) => {
  router.push(`/product/${productId}`)
}
</script>
