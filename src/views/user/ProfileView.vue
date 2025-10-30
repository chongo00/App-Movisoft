<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
    <!-- Header con información del usuario -->
    <div class="bg-gradient-to-br from-primary-600 to-primary-400 text-white p-6 rounded-b-[40px] relative">
      <!-- Botón de configuración -->
      <div class="absolute top-4 right-4">
        <Tooltip content="Configuración">
          <button
            @click="uiStore.openSettings()"
            class="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Settings :size="20" />
          </button>
        </Tooltip>
      </div>

      <div class="flex items-center gap-4">
        <!-- Avatar del usuario -->
        <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
          <User :size="32" class="text-white" />
        </div>

        <div>
          <h1 class="text-2xl font-bold">{{ displayName }}</h1>
          <p class="text-primary-100">{{ authStore.currentUser?.email || 'usuario@email.com' }}</p>
          <p class="text-primary-200 text-sm mt-1">Miembro activo desde enero 2024</p>
        </div>
      </div>
    </div>

    <!-- Contenido principal -->
    <div class="p-4 space-y-4">
      <!-- Estadísticas rápidas -->
      <div class="grid grid-cols-3 gap-3 sm:gap-4">
        <div class="bg-white dark:bg-gray-800 px-3 py-4 sm:px-4 sm:py-5 rounded-xl shadow-sm text-center flex flex-col items-center justify-center gap-1">
          <div class="text-lg sm:text-2xl font-bold text-primary-600 dark:text-primary-400 leading-tight tracking-tight whitespace-nowrap">
            {{ stats.pedidos }}
          </div>
          <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Pedidos</div>
        </div>
        <div class="bg-white dark:bg-gray-800 px-3 py-4 sm:px-4 sm:py-5 rounded-xl shadow-sm text-center flex flex-col items-center justify-center gap-1">
          <div class="text-lg sm:text-2xl font-bold text-green-600 dark:text-green-400 leading-tight tracking-tight whitespace-nowrap">
            ${{ stats.gastado }}
          </div>
          <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Gastado</div>
        </div>
        <div class="bg-white dark:bg-gray-800 px-3 py-4 sm:px-4 sm:py-5 rounded-xl shadow-sm text-center flex flex-col items-center justify-center gap-1">
          <div class="text-lg sm:text-2xl font-bold text-purple-600 dark:text-purple-400 leading-tight tracking-tight whitespace-nowrap">
            {{ stats.favoritos }}
          </div>
          <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Favoritos</div>
        </div>
      </div>

      <!-- Opciones del perfil -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div class="divide-y divide-gray-100 dark:divide-gray-700">
          <!-- Tema oscuro -->
          <div class="p-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                <component :is="themeStore.isDark ? Sun : Moon" :size="20" class="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <div class="font-medium text-gray-900 dark:text-white">Modo {{ themeStore.isDark ? 'Claro' : 'Oscuro' }}</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Cambiar apariencia de la app</div>
              </div>
            </div>
            <ThemeToggle variant="minimal" />
          </div>

          <!-- Soporte -->
          <button
            @click="showSupportModal = true"
            class="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <HelpCircle :size="20" class="text-blue-600 dark:text-blue-400" />
              </div>
              <div class="text-left">
                <div class="font-medium text-gray-900 dark:text-white">Centro de Ayuda</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Preguntas frecuentes y soporte</div>
              </div>
            </div>
            <ChevronRight :size="20" class="text-gray-400" />
          </button>

          <!-- Notificaciones -->
          <button
            @click="showNotificationsModal = true"
            class="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
                <Bell :size="20" class="text-yellow-600 dark:text-yellow-400" />
              </div>
              <div class="text-left">
                <div class="font-medium text-gray-900 dark:text-white">Notificaciones</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Configurar alertas y mensajes</div>
              </div>
            </div>
            <ChevronRight :size="20" class="text-gray-400" />
          </button>

          <!-- Privacidad -->
          <button
            @click="showPrivacyModal = true"
            class="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <Shield :size="20" class="text-green-600 dark:text-green-400" />
              </div>
              <div class="text-left">
                <div class="font-medium text-gray-900 dark:text-white">Privacidad</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Configuración de datos personales</div>
              </div>
            </div>
            <ChevronRight :size="20" class="text-gray-400" />
          </button>
        </div>
      </div>

      <!-- Historial reciente -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
        <h3 class="font-semibold text-gray-900 dark:text-white mb-3">Actividad Reciente</h3>
        <div class="space-y-3">
          <div v-for="activity in recentActivities" :key="activity.id" class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div class="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
              <component :is="activity.icon" :size="16" class="text-primary-600 dark:text-primary-400" />
            </div>
            <div class="flex-1">
              <div class="text-sm font-medium text-gray-900 dark:text-white">{{ activity.title }}</div>
              <div class="text-xs text-gray-600 dark:text-gray-400">{{ activity.time }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Cerrar sesión -->
      <button
        @click="showLogoutModal = true"
        class="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
      >
        Cerrar Sesión
      </button>
    </div>

    <!-- Modales -->
    <SettingsModal />

    <!-- Modal de soporte -->
    <Modal
      :is-open="showSupportModal"
      title="Centro de Ayuda"
      :icon="HelpCircle"
      @close="showSupportModal = false"
    >
      <div class="space-y-4">
        <div class="text-center">
          <HelpCircle :size="48" class="text-primary-600 mx-auto mb-4" />
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">¿Necesitas ayuda?</h3>
          <p class="text-gray-600 dark:text-gray-400">Estamos aquí para ayudarte</p>
        </div>

        <div class="space-y-3">
          <button class="w-full p-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
            📞 Llamar al soporte
          </button>
          <button class="w-full p-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            💬 Chat en vivo
          </button>
          <button class="w-full p-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            📧 Enviar email
          </button>
        </div>
      </div>
    </Modal>

    <!-- Modal de confirmación de logout -->
    <Modal
      :is-open="showLogoutModal"
      title="Cerrar Sesión"
      :icon="LogOut"
      @close="showLogoutModal = false"
      :actions="[
        { key: 'cancel', label: 'Cancelar', variant: 'secondary' },
        { key: 'confirm', label: 'Cerrar Sesión', variant: 'danger' }
      ]"
      @action="handleLogoutAction"
    >
      <p class="text-gray-600 dark:text-gray-400">
        ¿Estás seguro de que quieres cerrar sesión? Tendrás que volver a iniciar sesión para continuar usando la aplicación.
      </p>
    </Modal>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'
import { useThemeStore } from '../../stores/theme'
import { useUiStore } from '../../stores/ui'
import SettingsModal from '../../components/SettingsModal.vue'
import {
  User,
  Settings,
  HelpCircle,
  Bell,
  Shield,
  ChevronRight,
  Sun,
  Moon,
  ShoppingBag,
  Heart,
  MessageCircle,
  LogOut
} from 'lucide-vue-next'
import Modal from '../../components/Modal.vue'
import ThemeToggle from '../../components/ThemeToggle.vue'
import Tooltip from '../../components/Tooltip.vue'

const router = useRouter()
const authStore = useAuthStore()
const themeStore = useThemeStore()

// Estados de modales
const uiStore = useUiStore()
const showSupportModal = ref(false)
const showNotificationsModal = ref(false)
const showPrivacyModal = ref(false)
const showLogoutModal = ref(false)

// Datos mock
const stats = ref({
  pedidos: 12,
  gastado: 2450,
  favoritos: 8
})

const displayName = computed(() => authStore.currentUser?.name || 'Usuario')

const recentActivities = ref([
  {
    id: 1,
    title: 'Pedido realizado - Tienda La Esquina',
    time: 'Hace 2 horas',
    icon: ShoppingBag
  },
  {
    id: 2,
    title: 'Producto agregado a favoritos',
    time: 'Ayer',
    icon: Heart
  },
  {
    id: 3,
    title: 'Mensaje enviado a vendedor',
    time: 'Hace 3 días',
    icon: MessageCircle
  }
])

// Funciones
const handleLogout = () => {
  authStore.logout()
  router.push('/')
}

const handleLogoutAction = (action) => {
  if (action === 'confirm') {
    handleLogout()
  }
}
</script>
