<template>
  <div class="min-h-screen bg-white flex flex-col relative">
    <!-- Decoración azul superior -->
    <div class="absolute top-0 left-0 w-96 h-96 -translate-x-20 -translate-y-20">
      <div class="w-full h-full bg-primary-600 rounded-full opacity-90"></div>
    </div>

    <!-- Contenido -->
    <div class="relative z-10 flex-1 flex flex-col p-8 pt-16">
      <!-- Logo -->
      <div class="mb-8">
        <img src="/logo.png" alt="MoviSoft Logo" class="w-24 h-24 object-contain" />
      </div>

      <h1 class="text-4xl font-bold text-white mb-2">Registro</h1>
      <p class="text-primary-100 mb-8">Usuario Común</p>

      <!-- Formulario -->
      <div class="flex-1 flex flex-col justify-center space-y-6 max-w-md">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
          <input 
            v-model="name"
            type="text" 
            placeholder="Juan Pérez"
            class="input-field"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input 
            v-model="email"
            type="email" 
            placeholder="usuario@email.com"
            class="input-field"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
          <div class="relative">
            <input 
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="••••••••"
              class="input-field pr-12"
            />
            <button 
              @click="showPassword = !showPassword"
              class="absolute right-4 top-1/2 -translate-y-1/2 text-primary-600"
            >
              <Lock :size="20" />
            </button>
          </div>
        </div>

        <button 
          @click="handleRegister"
          class="w-full bg-primary-700 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-primary-800"
        >
          Registrarse
        </button>

        <div class="text-center space-y-2">
          <p class="text-sm text-gray-600">
            ¿Ya tienes cuenta?
            <router-link to="/auth/login-common" class="text-primary-600 font-semibold hover:underline ml-1">
              Inicia sesión aquí
            </router-link>
          </p>
          <p class="text-sm text-gray-600">
            ¿Quieres registrar una empresa?
            <router-link to="/auth/register-company" class="text-primary-600 font-semibold hover:underline ml-1">
              Regístrate aquí
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

const name = ref('')
const email = ref('')
const password = ref('')
const showPassword = ref(false)

const handleRegister = () => {
  // Simulación de registro (luego se conectará con API)
  authStore.setAuth(
    { id: 1, name: name.value, email: email.value },
    'mock-token',
    'common'
  )
  router.push('/app/categories')
}
</script>
