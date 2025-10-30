<template>
  <div class="min-h-screen bg-white flex flex-col relative overflow-y-auto">
    <!-- Decoración azul superior -->
    <div class="absolute top-0 left-0 w-96 h-96 -translate-x-20 -translate-y-20">
      <div class="w-full h-full bg-primary-600 rounded-full opacity-90"></div>
    </div>

    <!-- Contenido -->
    <div class="relative z-10 flex-1 flex flex-col p-8 pt-16">
      <!-- Logo -->
      <div class="mb-8">
        <img :src="logoSrc" alt="MoviSoft Logo" class="w-24 h-24 object-contain" />
      </div>

      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">Registro Empresa</h1>
      <p class="text-gray-600 dark:text-primary-100 mb-8">Crea tu cuenta de empresa</p>

      <!-- Formulario -->
      <div class="flex-1 flex flex-col space-y-6 max-w-md">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nombre de la Empresa</label>
          <input 
            v-model="companyName"
            type="text" 
            placeholder="Mi Negocio"
            class="input-field"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Responsable</label>
          <input 
            v-model="responsibleName"
            type="text" 
            placeholder="Juan Pérez"
            class="input-field"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
          <input 
            v-model="email"
            type="email" 
            placeholder="empresa@email.com"
            class="input-field"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Teléfono</label>
          <input 
            v-model="phone"
            type="tel" 
            placeholder="+53 5234-5678"
            class="input-field"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Contraseña</label>
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
          Registrar Empresa
        </button>

        <div class="text-center space-y-2">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            ¿Ya tienes una cuenta de empresa?
            <router-link to="/auth/login-company" class="text-primary-600 dark:text-primary-300 font-semibold hover:underline ml-1">
              Inicia sesión aquí
            </router-link>
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            ¿Quieres registrarte como usuario?
            <router-link to="/auth/register-common" class="text-primary-600 dark:text-primary-300 font-semibold hover:underline ml-1">
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
import { useBranding } from '../../composables/useBranding'

const router = useRouter()
const authStore = useAuthStore()
const { logoSrc } = useBranding()

const companyName = ref('')
const responsibleName = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const showPassword = ref(false)

const handleRegister = () => {
  // Simulación de registro empresa (luego se conectará con API)
  authStore.setAuth(
    { 
      id: 1, 
      name: responsibleName.value, 
      email: email.value,
      companyName: companyName.value 
    },
    'mock-token',
    'company'
  )
  router.push('/dashboard')
}
</script>
