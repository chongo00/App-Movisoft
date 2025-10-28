<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Header con perfil -->
    <div class="bg-gradient-to-br from-primary-600 to-primary-400 text-white p-6 rounded-b-[40px]">
      <div class="flex items-center gap-4">
        <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center">
          <User :size="40" class="text-primary-600" />
        </div>
        <div>
          <h2 class="text-2xl font-bold">James Morgan</h2>
          <p class="text-primary-100">Usuario</p>
        </div>
      </div>
    </div>

    <!-- Opciones de perfil -->
    <div class="p-4 space-y-4">
      <!-- Estadísticas -->
      <div class="bg-white rounded-2xl p-4 shadow-md">
        <h3 class="font-semibold text-lg text-gray-800 mb-4">Mi actividad</h3>
        <div class="grid grid-cols-3 gap-4 text-center">
          <div>
            <p class="text-2xl font-bold text-primary-600">12</p>
            <p class="text-sm text-gray-600">Pedidos</p>
          </div>
          <div>
            <p class="text-2xl font-bold text-primary-600">8</p>
            <p class="text-sm text-gray-600">Favoritos</p>
          </div>
          <div>
            <p class="text-2xl font-bold text-primary-600">5</p>
            <p class="text-sm text-gray-600">Reseñas</p>
          </div>
        </div>
      </div>

      <!-- Opciones de menú -->
      <div class="bg-white rounded-2xl shadow-md overflow-hidden">
        <button 
          v-for="(option, index) in menuOptions" 
          :key="option.id"
          class="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
          :class="{ 'border-t border-gray-100': index > 0 }"
        >
          <component :is="option.icon" :size="24" class="text-gray-600" />
          <span class="flex-1 text-left font-medium text-gray-800">{{ option.label }}</span>
          <ChevronRight :size="20" class="text-gray-400" />
        </button>
      </div>

      <!-- Historial de pedidos -->
      <div class="bg-white rounded-2xl p-4 shadow-md">
        <h3 class="font-semibold text-lg text-gray-800 mb-4">Historial de pedidos</h3>
        <div class="space-y-3">
          <div 
            v-for="order in recentOrders" 
            :key="order.id"
            class="border border-gray-200 rounded-xl p-3"
          >
            <div class="flex justify-between items-start mb-2">
              <p class="font-medium text-gray-800">Pedido #{{ order.id }}</p>
              <span :class="[
                'text-xs px-2 py-1 rounded-full',
                order.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              ]">
                {{ order.statusText }}
              </span>
            </div>
            <p class="text-sm text-gray-600">{{ order.store }}</p>
            <p class="text-sm text-gray-500">{{ order.date }}</p>
          </div>
        </div>
      </div>

      <!-- Cerrar sesión -->
      <button 
        @click="handleLogout"
        class="w-full bg-red-50 text-red-600 py-4 rounded-2xl font-semibold hover:bg-red-100 transition-colors"
      >
        Cerrar Sesión
      </button>
    </div>

    <BottomNavigation />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { User, Heart, ShoppingBag, Settings, Bell, HelpCircle, ChevronRight } from 'lucide-vue-next'
import BottomNavigation from '../components/BottomNavigation.vue'

const router = useRouter()

const menuOptions = ref([
  { id: 1, label: 'Mis Favoritos', icon: Heart },
  { id: 2, label: 'Mis Pedidos', icon: ShoppingBag },
  { id: 3, label: 'Notificaciones', icon: Bell },
  { id: 4, label: 'Configuración', icon: Settings },
  { id: 5, label: 'Ayuda y Soporte', icon: HelpCircle },
])

const recentOrders = ref([
  { id: 1001, store: 'Tienda La Esquina', date: '15 Oct 2024', status: 'completed', statusText: 'Completado' },
  { id: 1002, store: 'Bodega Central', date: '10 Oct 2024', status: 'pending', statusText: 'Pendiente' },
  { id: 1003, store: 'Electro Store', date: '5 Oct 2024', status: 'completed', statusText: 'Completado' },
])

const handleLogout = () => {
  router.push('/')
}
</script>
