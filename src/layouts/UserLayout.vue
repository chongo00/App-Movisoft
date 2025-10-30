<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Sidebar para desktop -->
    <DesktopSidebar :is-open="sidebarOpen" @close="sidebarOpen = false" />

    <!-- Header para desktop -->
    <header
      v-if="isDesktop"
      class="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm z-20 lg:pl-0"
      :class="{ 'lg:ml-64': !sidebarOpen }"
    >
      <div class="flex items-center justify-between h-full px-4">
        <div class="flex items-center gap-4">
          <button
            @click="sidebarOpen = !sidebarOpen"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <Menu :size="20" class="text-gray-600 dark:text-gray-400" />
          </button>
          <h1 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ currentPageTitle }}
          </h1>
        </div>

        <!-- User menu -->
        <div class="relative">
          <button
            @click="userMenuOpen = !userMenuOpen"
            class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <div class="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
              <User :size="16" class="text-primary-600 dark:text-primary-400" />
            </div>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300 hidden md:block">
              {{ authStore.currentUser?.name || 'Usuario' }}
            </span>
            <ChevronDown :size="16" class="text-gray-500 dark:text-gray-400" />
          </button>

          <!-- User dropdown menu -->
          <div
            v-show="userMenuOpen"
            ref="userMenu"
            class="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
          >
            <router-link
              to="/app/profile"
              @click="userMenuOpen = false"
              class="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Settings :size="16" />
              <span>Perfil</span>
            </router-link>

            <button
              @click="handleLogout"
              class="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              <LogOut :size="16" />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Overlay para sidebar -->
    <div
      v-show="sidebarOpen && isDesktop"
      @click="sidebarOpen = false"
      class="fixed inset-0 bg-black/50 z-30 lg:hidden"
    ></div>

    <!-- Contenido principal -->
    <main
      class="pb-20"
      :class="{
        'lg:ml-64': !isDesktop || sidebarOpen,
        'pt-16': isDesktop
      }"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <RouterView />
    </main>

    <!-- Navegación inferior (solo móvil) -->
    <BottomNavigation v-if="!isDesktop" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import {
  Menu,
  User,
  ChevronDown,
  Settings,
  LogOut
} from 'lucide-vue-next'
import DesktopSidebar from '../components/DesktopSidebar.vue'
import BottomNavigation from '../components/BottomNavigation.vue'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

// Estados
const sidebarOpen = ref(false)
const userMenuOpen = ref(false)
const userMenu = ref(null)

// Detectar si es desktop
const isDesktop = computed(() => {
  if (typeof window !== 'undefined') {
    return window.innerWidth >= 1024 // lg breakpoint
  }
  return false
})

// Título de página actual
const currentPageTitle = computed(() => {
  const titles = {
    '/': 'Inicio',
    '/app/categories': 'Categorías',
    '/app/search': 'Buscar',
    '/app/map': 'Mapa',
    '/app/profile': 'Perfil'
  }
  return titles[route.path] || 'Tu Mercadito'
})

// Estados para touch
const touchStartX = ref(0)
const touchStartY = ref(0)
const touchEndX = ref(0)
const touchEndY = ref(0)

// Items de navegación para swipe
const navItems = [
  { path: '/', name: 'home' },
  { path: '/app/categories', name: 'categories' },
  { path: '/app/search', name: 'search' },
  { path: '/app/map', name: 'map' },
  { path: '/app/profile', name: 'profile' }
]

const getCurrentIndex = () => {
  return navItems.findIndex(item => item.path === route.path)
}

// Funciones de touch
const handleTouchStart = (e) => {
  touchStartX.value = e.changedTouches[0].screenX
  touchStartY.value = e.changedTouches[0].screenY
}

const handleTouchEnd = (e) => {
  touchEndX.value = e.changedTouches[0].screenX
  touchEndY.value = e.changedTouches[0].screenY
  handleSwipeGesture()
}

const handleSwipeGesture = () => {
  if (isDesktop.value) return // Solo en móvil

  const deltaX = touchStartX.value - touchEndX.value
  const deltaY = touchStartY.value - touchEndY.value

  // Solo considerar swipe horizontal si es mayor que vertical
  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
    const currentIndex = getCurrentIndex()
    if (currentIndex === -1) return

    let newIndex = currentIndex

    if (deltaX > 0) {
      // Swipe izquierda -> siguiente página
      newIndex = Math.min(currentIndex + 1, navItems.length - 1)
    } else {
      // Swipe derecha -> página anterior
      newIndex = Math.max(currentIndex - 1, 0)
    }

    if (newIndex !== currentIndex) {
      router.push(navItems[newIndex].path)
    }
  }
}

// Funciones
const handleLogout = () => {
  authStore.logout()
  router.push('/')
  userMenuOpen.value = false
  sidebarOpen.value = false
}

// Click outside para cerrar menú
const handleClickOutside = (event) => {
  if (userMenu.value && !userMenu.value.contains(event.target)) {
    userMenuOpen.value = false
  }
}

// Lifecycle
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
