<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @keydown.escape="close"
      >
        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-black bg-opacity-50"
          @click="close"
        ></div>

        <!-- Modal -->
        <Transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-4"
        >
          <div
            v-if="isOpen"
            :class="modalClasses"
            class="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-h-[90vh] overflow-hidden"
            @click.stop
          >
            <!-- Header -->
            <div v-if="title || $slots.header" class="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div class="flex items-center gap-3">
                <component v-if="icon" :is="icon" :size="24" class="text-primary-600 dark:text-primary-400" />
                <slot name="header">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ title }}</h3>
                </slot>
              </div>
              <button
                v-if="showCloseButton"
                @click="close"
                class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                :aria-label="'Cerrar ' + title"
              >
                <X :size="20" class="text-gray-400" />
              </button>
            </div>

            <!-- Body -->
            <div class="p-6 overflow-y-auto max-h-[60vh]">
              <slot />
            </div>

            <!-- Footer -->
            <div v-if="$slots.footer || actions.length > 0" class="flex items-center justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700">
              <slot name="footer">
                <button
                  v-for="action in actions"
                  :key="action.key"
                  @click="handleAction(action)"
                  :class="getActionClasses(action)"
                  class="px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  {{ action.label }}
                </button>
              </slot>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, watch } from 'vue'
import { X } from 'lucide-vue-next'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  icon: {
    type: Object,
    default: null
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl', 'full'].includes(value)
  },
  actions: {
    type: Array,
    default: () => []
    // Ejemplo: [{ key: 'cancel', label: 'Cancelar', variant: 'secondary' }, { key: 'confirm', label: 'Confirmar', variant: 'primary' }]
  },
  showCloseButton: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['close', 'action'])

const modalClasses = computed(() => {
  const sizeClasses = {
    sm: 'max-w-md w-full',
    md: 'max-w-lg w-full',
    lg: 'max-w-2xl w-full',
    xl: 'max-w-4xl w-full',
    full: 'max-w-full w-full mx-4'
  }

  return sizeClasses[props.size] || sizeClasses.md
})

const getActionClasses = (action) => {
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-400 dark:hover:bg-gray-700'
  }

  return variantClasses[action.variant] || variantClasses.secondary
}

const close = () => {
  emit('close')
}

const handleAction = (action) => {
  emit('action', action.key)
  if (action.autoClose !== false) {
    close()
  }
}

// Manejar escape key y focus trap
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    document.addEventListener('keydown', handleEscape)
    // Focus trap básico
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', handleEscape)
    document.body.style.overflow = ''
  }
})

const handleEscape = (e) => {
  if (e.key === 'Escape') {
    close()
  }
}
</script>

<style scoped>
/* Animaciones personalizadas */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(1rem);
}
</style>
