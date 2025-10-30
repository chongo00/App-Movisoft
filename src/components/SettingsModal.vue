<template>
  <Modal
    :is-open="uiStore.isSettingsOpen"
    title="Configuración"
    :icon="Settings"
    @close="uiStore.closeSettings()"
  >
    <div class="space-y-6">
      <div>
        <h4 class="font-medium text-gray-900 dark:text-white mb-3">Apariencia</h4>
        <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <span class="text-gray-700 dark:text-gray-300">Modo oscuro</span>
          <ThemeToggle variant="minimal" />
        </div>
      </div>

      <div>
        <h4 class="font-medium text-gray-900 dark:text-white mb-3">Notificaciones</h4>
        <div class="space-y-3">
          <label class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <span class="text-gray-700 dark:text-gray-300">Pedidos nuevos</span>
            <input type="checkbox" class="rounded text-primary-600" checked>
          </label>
          <label class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <span class="text-gray-700 dark:text-gray-300">Promociones</span>
            <input type="checkbox" class="rounded text-primary-600" checked>
          </label>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup>
import { useUiStore } from '../stores/ui'
import Modal from './Modal.vue'
import ThemeToggle from './ThemeToggle.vue'
import { Settings } from 'lucide-vue-next'

const uiStore = useUiStore()
</script>
