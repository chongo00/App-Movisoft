<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
    <div class="flex justify-around items-center h-16 max-w-screen-lg mx-auto px-4">
      <router-link 
        v-for="item in navItems" 
        :key="item.name"
        :to="item.path"
        class="flex flex-col items-center justify-center flex-1 py-2"
        :class="{ 'text-primary-600 dark:text-primary-400': isActive(item.path), 'text-gray-600 dark:text-gray-400': !isActive(item.path) }"
      >
        <component :is="item.icon" :size="24" :stroke-width="2" />
        <span class="text-xs mt-1 font-medium">{{ item.label }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Home, FolderTree, Search, MapPin, User } from 'lucide-vue-next'

const route = useRoute()

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
</script>
