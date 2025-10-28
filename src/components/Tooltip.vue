<template>
  <div class="relative inline-block">
    <slot />

    <!-- Tooltip -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="showTooltip"
        ref="tooltip"
        :class="tooltipClasses"
        class="absolute z-50 px-3 py-2 text-sm font-medium rounded-lg shadow-lg max-w-xs"
        :style="tooltipPosition"
      >
        {{ content }}
        <div
          v-if="arrow"
          :class="arrowClasses"
          class="absolute w-2 h-2 transform rotate-45"
        ></div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  content: {
    type: String,
    required: true
  },
  position: {
    type: String,
    default: 'top',
    validator: (value) => ['top', 'bottom', 'left', 'right'].includes(value)
  },
  trigger: {
    type: String,
    default: 'hover',
    validator: (value) => ['hover', 'click', 'focus'].includes(value)
  },
  arrow: {
    type: Boolean,
    default: true
  },
  delay: {
    type: Number,
    default: 300
  }
})

const showTooltip = ref(false)
const tooltip = ref(null)
const tooltipPosition = ref({})
const timeoutId = ref(null)

const tooltipClasses = computed(() => {
  const baseClasses = 'text-white bg-gray-900'

  const positionClasses = {
    top: 'mb-2',
    bottom: 'mt-2',
    left: 'mr-2',
    right: 'ml-2'
  }

  return `${baseClasses} ${positionClasses[props.position]}`
})

const arrowClasses = computed(() => {
  const positionClasses = {
    top: 'bottom-[-4px] left-1/2 -translate-x-1/2',
    bottom: 'top-[-4px] left-1/2 -translate-x-1/2',
    left: 'right-[-4px] top-1/2 -translate-y-1/2',
    right: 'left-[-4px] top-1/2 -translate-y-1/2'
  }

  return `bg-gray-900 ${positionClasses[props.position]}`
})

const show = () => {
  if (timeoutId.value) {
    clearTimeout(timeoutId.value)
  }

  timeoutId.value = setTimeout(() => {
    showTooltip.value = true
    calculatePosition()
  }, props.delay)
}

const hide = () => {
  if (timeoutId.value) {
    clearTimeout(timeoutId.value)
  }
  showTooltip.value = false
}

const calculatePosition = () => {
  if (!tooltip.value) return

  const rect = tooltip.value.parentElement.getBoundingClientRect()
  const tooltipRect = tooltip.value.getBoundingClientRect()

  let top, left

  switch (props.position) {
    case 'top':
      top = rect.top - tooltipRect.height - 8
      left = rect.left + (rect.width / 2) - (tooltipRect.width / 2)
      break
    case 'bottom':
      top = rect.bottom + 8
      left = rect.left + (rect.width / 2) - (tooltipRect.width / 2)
      break
    case 'left':
      top = rect.top + (rect.height / 2) - (tooltipRect.height / 2)
      left = rect.left - tooltipRect.width - 8
      break
    case 'right':
      top = rect.top + (rect.height / 2) - (tooltipRect.height / 2)
      left = rect.right + 8
      break
  }

  // Keep tooltip within viewport
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  if (left < 0) left = 8
  if (left + tooltipRect.width > viewportWidth) left = viewportWidth - tooltipRect.width - 8
  if (top < 0) top = 8
  if (top + tooltipRect.height > viewportHeight) top = viewportHeight - tooltipRect.height - 8

  tooltipPosition.value = {
    top: `${top}px`,
    left: `${left}px`
  }
}

const handleClick = () => {
  if (props.trigger === 'click') {
    showTooltip.value ? hide() : show()
  }
}

const handleFocus = () => {
  if (props.trigger === 'focus') {
    show()
  }
}

const handleBlur = () => {
  if (props.trigger === 'focus') {
    hide()
  }
}

onMounted(() => {
  window.addEventListener('resize', calculatePosition)
})

onUnmounted(() => {
  window.removeEventListener('resize', calculatePosition)
  if (timeoutId.value) {
    clearTimeout(timeoutId.value)
  }
})
</script>

<style scoped>
.tooltip-enter-active,
.tooltip-leave-active {
  transition: all 0.2s ease;
}

.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
