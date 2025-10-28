<template>
  <button
    :class="buttonClasses"
    :disabled="loading || disabled"
    @click="$emit('click')"
  >
    <span v-if="loading" class="inline-block mr-2">
      <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])

const buttonClasses = computed(() => {
  const baseClasses = [
    'font-medium rounded-full transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed'
  ]

  // Variant classes
  const variantClasses = {
    primary: [
      'bg-primary-600 text-white hover:bg-primary-700',
      'focus:ring-primary-500',
      'shadow-md hover:shadow-lg'
    ],
    secondary: [
      'bg-white text-primary-600 border-2 border-primary-600',
      'hover:bg-primary-50 focus:ring-primary-500'
    ],
    outline: [
      'bg-transparent text-gray-700 border-2 border-gray-300',
      'hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-500'
    ],
    ghost: [
      'bg-transparent text-primary-600 hover:bg-primary-50',
      'focus:ring-primary-500'
    ]
  }

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  // Full width
  if (props.fullWidth) {
    baseClasses.push('w-full')
  }

  return [
    ...baseClasses,
    ...variantClasses[props.variant],
    sizeClasses[props.size]
  ].join(' ')
})
</script>
