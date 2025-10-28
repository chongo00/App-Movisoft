<template>
  <div class="lazy-image-container" :class="containerClasses">
    <!-- Placeholder con blur -->
    <div
      v-if="!isLoaded && !hasError"
      class="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center"
      :style="{ filter: 'blur(10px)', transform: 'scale(1.1)' }"
    >
      <div class="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-800"></div>
    </div>

    <!-- Imagen principal -->
    <img
      ref="image"
      :src="currentSrc"
      :alt="alt"
      :class="imageClasses"
      @load="handleLoad"
      @error="handleError"
      :loading="lazy ? 'lazy' : 'eager'"
      :style="{ opacity: isLoaded ? 1 : 0 }"
    />

    <!-- Estado de error -->
    <div
      v-if="hasError"
      class="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
    >
      <div class="text-center text-gray-400 dark:text-gray-500">
        <component :is="errorIcon || ImageOff" :size="48" class="mx-auto mb-2" />
        <p class="text-sm">{{ errorText }}</p>
      </div>
    </div>

    <!-- Overlay opcional -->
    <div v-if="$slots.overlay" class="absolute inset-0 pointer-events-none">
      <slot name="overlay" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { ImageOff } from 'lucide-vue-next'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  lazy: {
    type: Boolean,
    default: true
  },
  aspectRatio: {
    type: String,
    default: '16/9'
  },
  objectFit: {
    type: String,
    default: 'cover',
    validator: (value) => ['cover', 'contain', 'fill', 'none', 'scale-down'].includes(value)
  },
  quality: {
    type: Number,
    default: 80,
    validator: (value) => value >= 1 && value <= 100
  },
  placeholder: {
    type: String,
    default: ''
  },
  errorIcon: {
    type: Object,
    default: null
  },
  errorText: {
    type: String,
    default: 'Error al cargar imagen'
  },
  sizes: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['load', 'error'])

const image = ref(null)
const isLoaded = ref(false)
const hasError = ref(false)
const currentSrc = ref(props.placeholder || props.src)

const containerClasses = computed(() => [
  'relative overflow-hidden',
  `aspect-${props.aspectRatio.replace('/', '-')}`,
  'bg-gray-100 dark:bg-gray-800'
])

const imageClasses = computed(() => [
  'w-full h-full transition-opacity duration-300',
  `object-${props.objectFit}`
])

const handleLoad = () => {
  isLoaded.value = true
  hasError.value = false
  emit('load')
}

const handleError = () => {
  hasError.value = true
  isLoaded.value = false
  emit('error')
}

// Intersection Observer para lazy loading mejorado
onMounted(() => {
  if (!props.lazy) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isLoaded.value && !hasError.value) {
          currentSrc.value = props.src
          observer.unobserve(entry.target)
        }
      })
    },
    {
      rootMargin: '50px'
    }
  )

  if (image.value) {
    observer.observe(image.value)
  }
})

// Actualizar src cuando cambie la prop
watch(() => props.src, (newSrc) => {
  if (newSrc !== currentSrc.value) {
    isLoaded.value = false
    hasError.value = false
    currentSrc.value = props.lazy ? props.placeholder || newSrc : newSrc
  }
})
</script>

<style scoped>
.aspect-16\/9 {
  aspect-ratio: 16 / 9;
}

.aspect-4\/3 {
  aspect-ratio: 4 / 3;
}

.aspect-1\/1 {
  aspect-ratio: 1 / 1;
}

.aspect-3\/4 {
  aspect-ratio: 3 / 4;
}

.aspect-9\/16 {
  aspect-ratio: 9 / 16;
}
</style>
