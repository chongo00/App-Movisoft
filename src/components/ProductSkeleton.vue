<template>
  <div class="skeleton-loader">
    <div class="skeleton-image"></div>
    <div class="skeleton-content">
      <div class="skeleton-title"></div>
      <div class="skeleton-price"></div>
      <div class="skeleton-category"></div>
    </div>
  </div>
</template>

<script setup>
// Componente de skeleton loader para productos
</script>

<style scoped>
.skeleton-loader {
  @apply bg-white rounded-2xl overflow-hidden shadow-sm p-4;
}

.skeleton-image {
  @apply w-full aspect-square bg-gray-200 rounded-lg mb-3;
  animation: pulse 1.5s ease-in-out infinite;
}

.skeleton-content > div {
  @apply bg-gray-200 rounded mb-2;
  animation: pulse 1.5s ease-in-out infinite;
}

.skeleton-title {
  @apply h-4 w-3/4;
}

.skeleton-price {
  @apply h-4 w-1/4;
}

.skeleton-category {
  @apply h-3 w-1/2;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
