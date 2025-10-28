<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div class="text-center">
      <h1 class="text-9xl font-bold text-primary-600 mb-4">404</h1>
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Página no encontrada</h2>
      <p class="text-gray-600 mb-8 max-w-md mx-auto">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <router-link 
        to="/"
        class="inline-block px-8 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700"
      >
        Volver al inicio
      </router-link>
    </div>
  </div>
</template>

<script setup>
//
</script>
