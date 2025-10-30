<template>
  <!-- Sidebar para desktop -->
  <aside
    v-show="isDesktop"
    class="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-lg z-40 transform transition-transform duration-300"
    :class="{ '-translate-x-full': !isOpen, 'translate-x-0': isOpen }"
  >
    <!-- Header del sidebar -->
    <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center gap-3">
        <img src="/logo.png" alt="Tu Mercadito" class="w-10 h-10 rounded-xl object-cover" />
        <span class="font-semibold text-gray-900 dark:text-white">Tu Mercadito</span>
      </div>
      <button
        @click="$emit('close')"
        class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <X :size="20" class="text-gray-500 dark:text-gray-400" />
      </button>
    </div>

    <!-- Navegación -->
    <nav class="flex-1 px-4 py-6">
      <div class="space-y-2">
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          @click="$emit('close')"
          class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors"
          :class="{
            'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border-r-2 border-primary-600 dark:border-primary-400': isActive(item.path),
            'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700': !isActive(item.path)
          }"
        >
          <component :is="item.icon" :size="20" />
          <span class="font-medium">{{ item.label }}</span>
        </router-link>
      </div>
    </nav>

    <!-- Footer con usuario -->
    <div class="border-t border-gray-200 dark:border-gray-700 p-4">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
          <User :size="20" class="text-primary-600 dark:text-primary-400" />
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-sm font-medium text-gray-900 dark:text-white truncate">
            {{ authStore.currentUser?.name || 'Usuario' }}
          </div>
          <div class="text-xs text-gray-600 dark:text-gray-400 truncate">
            {{ authStore.currentUser?.email || 'usuario@email.com' }}
          </div>
        </div>
      </div>

      <!-- Botones de acción -->
      <div class="space-y-2">
        <button
          @click="uiStore.openSettings(); $emit('close')"
          class="flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
        >
          <Settings :size="16" />
          <span>Ajustes</span>
        </button>

        <button
          @click="handleLogout"
          class="flex items-center gap-3 w-full px-3 py-2 text-sm text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
        >
          <LogOut :size="16" />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </div>
  </aside>

  <!-- Overlay para cerrar sidebar en móvil -->
  <div
    v-show="isOpen && isDesktop"
    @click="$emit('close')"
    class="fixed inset-0 bg-black/50 z-30 lg:hidden"
  ></div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useUiStore } from '../stores/ui'
import {
  Home,
  FolderTree,
  Search,
  MapPin,
  User,
  Settings,
  LogOut,
  X
} from 'lucide-vue-next'
import MoviSoftLogo from '../components/MoviSoftLogo.vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['close'])

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const uiStore = useUiStore()

// Detectar si es desktop
const isDesktop = computed(() => {
  if (typeof window !== 'undefined') {
    return window.innerWidth >= 1024 // lg breakpoint
  }
  return false
})

const navItems = [
  { name: 'home', label: 'Inicio', path: '/', icon: Home },
  { name: 'categories', label: 'Categorías', path: '/app/categories', icon: FolderTree },
  { name: 'search', label: 'Buscar', path: '/app/search', icon: Search },
  { name: 'map', label: 'Mapa', path: '/app/map', icon: MapPin },
  { name: 'profile', label: 'Perfil', path: '/app/profile', icon: User },
]

const isActive = (path) => {
  return route.path === path
}

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}
</script>
