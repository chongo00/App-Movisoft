<template>
  <div class="min-h-screen bg-gray-50">
    <div class="flex h-screen overflow-hidden">
      <!-- Sidebar -->
      <aside class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64 bg-white border-r border-gray-200">
          <!-- Logo/Header -->
          <div class="flex items-center h-16 px-6 border-b border-gray-200">
            <h1 class="text-xl font-bold text-primary-600">Tu Mercadito</h1>
          </div>

          <!-- Navigation -->
          <nav class="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            <router-link 
              v-for="item in menuItems" 
              :key="item.name"
              :to="item.route"
              class="flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors"
              :class="isActive(item.route) 
                ? 'bg-primary-50 text-primary-700' 
                : 'text-gray-700 hover:bg-gray-100'"
            >
              <component :is="item.icon" :size="20" class="mr-3" />
              {{ item.label }}
            </router-link>
          </nav>

          <!-- User menu -->
          <div class="p-4 border-t border-gray-200">
            <button 
              @click="handleLogout"
              class="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50"
            >
              <LogOut :size="20" class="mr-3" />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <div class="flex-1 overflow-auto">
        <!-- Mobile header -->
        <header class="md:hidden bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
          <div class="flex items-center justify-between">
            <h1 class="text-lg font-bold text-primary-600">Tu Mercadito</h1>
            <button @click="toggleMobileMenu" class="text-gray-600">
              <Menu :size="24" />
            </button>
          </div>
        </header>

        <!-- Page content -->
        <main class="p-4 md:p-8">
          <RouterView />
        </main>
      </div>
    </div>

    <!-- Mobile menu overlay -->
    <div 
      v-if="showMobileMenu" 
      class="fixed inset-0 z-40 md:hidden"
      @click="toggleMobileMenu"
    >
      <div class="fixed inset-0 bg-black opacity-50"></div>
      <aside class="fixed inset-y-0 left-0 w-64 bg-white z-50">
        <div class="flex flex-col h-full">
          <!-- Logo/Header -->
          <div class="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <h1 class="text-xl font-bold text-primary-600">Tu Mercadito</h1>
            <button @click="toggleMobileMenu" class="text-gray-600">
              <X :size="24" />
            </button>
          </div>

          <!-- Navigation -->
          <nav class="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            <router-link 
              v-for="item in menuItems" 
              :key="item.name"
              :to="item.route"
              @click="toggleMobileMenu"
              class="flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors"
              :class="isActive(item.route) 
                ? 'bg-primary-50 text-primary-700' 
                : 'text-gray-700 hover:bg-gray-100'"
            >
              <component :is="item.icon" :size="20" class="mr-3" />
              {{ item.label }}
            </router-link>
          </nav>

          <!-- User menu -->
          <div class="p-4 border-t border-gray-200">
            <button 
              @click="handleLogout"
              class="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50"
            >
              <LogOut :size="20" class="mr-3" />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { 
  LayoutDashboard, 
  Building2, 
  Package, 
  MapPin, 
  Users, 
  LogOut, 
  Menu, 
  X 
} from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const showMobileMenu = ref(false)

const menuItems = [
  { name: 'dashboard', label: 'Dashboard', route: '/dashboard', icon: LayoutDashboard },
  { name: 'companies', label: 'Mis Empresas', route: '/dashboard/companies', icon: Building2 },
  { name: 'products', label: 'Productos', route: '/dashboard/products', icon: Package },
  { name: 'locations', label: 'Localizaciones', route: '/dashboard/locations', icon: MapPin },
  { name: 'contacts', label: 'Contactos', route: '/dashboard/contacts', icon: Users },
]

const isActive = (routePath) => {
  return route.path.startsWith(routePath)
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}
</script>
