<template>
  <div class="min-h-screen bg-white flex flex-col items-center justify-between p-8">
    <!-- Logo y Título -->
    <div class="flex-1 flex flex-col items-center justify-center">
      <div class="mb-8 mt-12">
        <!-- Logo MoviSoft -->
        <div class="mb-4 flex items-center justify-center">
          <img :src="logoSrc" alt="MoviSoft Logo" class="w-40 h-40 object-contain" />
        </div>
      </div>
      
      <h1 class="text-4xl font-bold text-primary-600 text-center mb-3">
        Tu Mercadito
      </h1>
      <p class="text-lg text-gray-600 text-center">Mobile Service</p>
    </div>

    <!-- Botones de acción -->
    <div class="w-full max-w-sm space-y-4">
      <h2 class="text-3xl font-bold text-gray-900 text-center mb-6">Sign Up</h2>
      <p class="text-center text-gray-600 mb-6">Continue with Mail</p>
      
      <button 
        @click="navigateToLogin"
        class="w-full btn-primary flex items-center justify-center gap-3"
      >
        <Mail :size="24" />
        <span>Continue with Mail</span>
      </button>
      
      <button 
        @click="navigateAsGuest"
        class="w-full btn-secondary"
      >
        Sign As Guest
      </button>
    </div>

    <div class="h-16"></div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { Mail } from 'lucide-vue-next'
import { useBranding } from '../composables/useBranding'

const router = useRouter()
const { logoSrc } = useBranding()

const navigateToLogin = () => {
  router.push('/login')
}

const navigateAsGuest = () => {
  router.push('/home')
}
</script>
