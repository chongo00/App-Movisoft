<template>
  <div class="rating-stars flex items-center gap-1">
    <button
      v-for="star in 5"
      :key="star"
      @click="$emit('rate', star)"
      @mouseenter="hoveredStar = star"
      @mouseleave="hoveredStar = 0"
      class="transition-colors duration-150"
      :class="starClasses(star)"
    >
      <Star
        :size="size"
        :fill="isFilled(star) ? 'currentColor' : 'none'"
        class="transition-all duration-150"
      />
    </button>

    <span v-if="showScore && rating > 0" class="ml-2 text-sm text-gray-600">
      {{ rating.toFixed(1) }}
    </span>

    <span v-if="showCount && count > 0" class="ml-1 text-sm text-gray-500">
      ({{ count }})
    </span>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Star } from 'lucide-vue-next'

const props = defineProps({
  rating: {
    type: Number,
    default: 0
  },
  count: {
    type: Number,
    default: 0
  },
  size: {
    type: Number,
    default: 20
  },
  interactive: {
    type: Boolean,
    default: true
  },
  showScore: {
    type: Boolean,
    default: true
  },
  showCount: {
    type: Boolean,
    default: true
  },
  readonly: {
    type: Boolean,
    default: false
  }
})

defineEmits(['rate'])

const hoveredStar = ref(0)

const isFilled = (star) => {
  if (props.readonly) {
    return star <= Math.floor(props.rating)
  }
  return star <= (hoveredStar.value || Math.floor(props.rating))
}

const starClasses = (star) => {
  if (!props.interactive || props.readonly) {
    return isFilled(star) ? 'text-yellow-400' : 'text-gray-300'
  }

  const filled = isFilled(star)
  return filled ? 'text-yellow-400 hover:text-yellow-500' : 'text-gray-300 hover:text-yellow-400'
}
</script>

<style scoped>
.rating-stars button {
  padding: 2px;
  border-radius: 4px;
}

.rating-stars button:hover {
  transform: scale(1.1);
}
</style>
