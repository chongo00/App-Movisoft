<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 flex flex-col relative transition-colors duration-300">
    <!-- Decoración azul superior -->
    <div class="absolute top-0 left-0 w-96 h-96 -translate-x-20 -translate-y-20">
      <div class="w-full h-full bg-primary-600 rounded-full opacity-90 blur-2xl"></div>
    </div>

    <!-- Contenido -->
    <div class="relative z-10 flex-1 flex flex-col p-8 pt-16">
      <!-- Logo -->
      <div class="mb-8">
        <img src="/logo.png" alt="MoviSoft Logo" class="w-24 h-24 object-contain" />
      </div>

      <h1 class="text-4xl font-bold text-white mb-2">Panel Empresas</h1>
      <p class="text-primary-100 mb-8">Iniciar Sesión</p>

      <!-- Formulario -->
      <div class="flex-1 flex flex-col justify-center space-y-6 max-w-md">
        <div>
          <label class="block text-sm font-medium text-gray-200/80 dark:text-gray-300 mb-2">Email</label>
          <input 
            v-model="email"
            type="email" 
            placeholder="empresa@email.com"
            class="input-field bg-white dark:bg-gray-800 border-primary-600/80 dark:border-primary-500 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-200/80 dark:text-gray-300 mb-2">Contraseña</label>
          <div class="relative">
            <input 
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="••••••••"
              class="input-field pr-12 bg-white dark:bg-gray-800 border-primary-600/80 dark:border-primary-500 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
            />
            <button 
              @click="showPassword = !showPassword"
              class="absolute right-4 top-1/2 -translate-y-1/2 text-primary-200 dark:text-primary-300"
            >
              <Lock :size="20" />
            </button>
          </div>
        </div>

        <button 
          @click="handleLogin"
          class="w-full bg-primary-700 hover:bg-primary-800 text-white py-4 rounded-2xl font-semibold text-lg transition-colors"
        >
          Acceder al Panel
        </button>

        <div class="text-center space-y-2">
          <p class="text-sm text-gray-200/80 dark:text-gray-400">
            ¿No tienes cuenta de empresa?
            <router-link to="/auth/register-company" class="text-primary-200 dark:text-primary-300 font-semibold hover:underline ml-1">
              Regístrate aquí
            </router-link>
          </p>
          <p class="text-sm text-gray-200/80 dark:text-gray-400">
            ¿Eres cliente?
            <router-link to="/auth/login-common" class="text-primary-200 dark:text-primary-300 font-semibold hover:underline ml-1">
              Ingresa aquí
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'
import { Lock } from 'lucide-vue-next'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const showPassword = ref(false)

const handleLogin = () => {
  // Simulación de login empresa (luego se conectará con API)
  authStore.setAuth(
    { id: 1, name: 'Mi Empresa', email: email.value },
    'mock-token',
    'company'
  )
  router.push('/dashboard')
}
</script>
