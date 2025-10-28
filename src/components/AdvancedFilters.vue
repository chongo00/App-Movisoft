<template>
  <div class="filters-panel">
    <!-- Botón para abrir filtros -->
    <button
      @click="toggleFilters"
      class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
    >
      <Filter :size="18" />
      <span class="hidden sm:inline">Filtros</span>
      <span v-if="activeFiltersCount > 0" class="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
        {{ activeFiltersCount }}
      </span>
    </button>

    <!-- Panel lateral de filtros -->
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 transform translate-x-full"
      enter-to-class="opacity-100 transform translate-x-0"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="opacity-100 transform translate-x-0"
      leave-to-class="opacity-0 transform translate-x-full"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 lg:relative lg:inset-auto"
        @click.self="closeFilters"
      >
        <!-- Overlay para móvil -->
        <div class="fixed inset-0 bg-black bg-opacity-50 lg:hidden" @click="closeFilters"></div>

        <!-- Panel de filtros -->
        <div class="fixed right-0 top-0 h-full w-full max-w-sm bg-white dark:bg-gray-800 shadow-xl lg:relative lg:shadow-none lg:max-w-none lg:w-80">
          <div class="flex flex-col h-full">
            <!-- Header -->
            <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Filtros</h3>
              <button
                @click="closeFilters"
                class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X :size="20" />
              </button>
            </div>

            <!-- Contenido de filtros -->
            <div class="flex-1 overflow-y-auto p-4 space-y-6">
              <!-- Filtro por precio -->
              <div class="filter-section">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Precio
                </label>
                <div class="space-y-2">
                  <div class="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>${{ filters.priceRange.min }}</span>
                    <span>${{ filters.priceRange.max }}</span>
                  </div>
                  <input
                    v-model="filters.priceRange.min"
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <input
                    v-model="filters.priceRange.max"
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>

              <!-- Filtro por categoría -->
              <div class="filter-section">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Categorías
                </label>
                <div class="space-y-2">
                  <label
                    v-for="category in categories"
                    :key="category.id"
                    class="flex items-center"
                  >
                    <input
                      v-model="filters.selectedCategories"
                      :value="category.id"
                      type="checkbox"
                      class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{ category.name }}</span>
                  </label>
                </div>
              </div>

              <!-- Filtro por calificación -->
              <div class="filter-section">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Calificación mínima
                </label>
                <select
                  v-model="filters.minRating"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="0">Todas las calificaciones</option>
                  <option value="3">3 estrellas o más</option>
                  <option value="4">4 estrellas o más</option>
                  <option value="5">5 estrellas</option>
                </select>
              </div>

              <!-- Filtro por disponibilidad -->
              <div class="filter-section">
                <label class="flex items-center">
                  <input
                    v-model="filters.inStockOnly"
                    type="checkbox"
                    class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Solo productos en stock</span>
                </label>
              </div>
            </div>

            <!-- Footer con acciones -->
            <div class="border-t border-gray-200 dark:border-gray-700 p-4 space-y-3">
              <button
                @click="applyFilters"
                class="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Aplicar Filtros
              </button>
              <button
                @click="clearFilters"
                class="w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Limpiar Filtros
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { Filter, X } from 'lucide-vue-next'

const props = defineProps({
  categories: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['filters-changed'])

const isOpen = ref(false)

const filters = ref({
  priceRange: {
    min: 0,
    max: 1000
  },
  selectedCategories: [],
  minRating: 0,
  inStockOnly: false
})

const activeFiltersCount = computed(() => {
  let count = 0
  if (filters.value.priceRange.min > 0 || filters.value.priceRange.max < 1000) count++
  if (filters.value.selectedCategories.length > 0) count++
  if (filters.value.minRating > 0) count++
  if (filters.value.inStockOnly) count++
  return count
})

const toggleFilters = () => {
  isOpen.value = !isOpen.value
}

const closeFilters = () => {
  isOpen.value = false
}

const applyFilters = () => {
  emit('filters-changed', { ...filters.value })
  closeFilters()
}

const clearFilters = () => {
  filters.value = {
    priceRange: { min: 0, max: 1000 },
    selectedCategories: [],
    minRating: 0,
    inStockOnly: false
  }
  emit('filters-changed', { ...filters.value })
}

// Cerrar filtros al hacer click fuera
watch(isOpen, (newValue) => {
  if (newValue) {
    document.addEventListener('keydown', handleEscape)
  } else {
    document.removeEventListener('keydown', handleEscape)
  }
})

const handleEscape = (e) => {
  if (e.key === 'Escape') {
    closeFilters()
  }
}
</script>

<style scoped>
.slider::-webkit-slider-thumb {
  appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #2563eb;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #2563eb;
  cursor: pointer;
  border: none;
}
</style>
