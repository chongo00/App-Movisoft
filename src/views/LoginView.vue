<template>
  <div class="min-h-screen bg-white flex flex-col relative">
    <!-- Decoración azul superior -->
    <div class="absolute top-0 left-0 w-96 h-96 -translate-x-20 -translate-y-20">
      <div class="w-full h-full bg-primary-600 rounded-full opacity-90"></div>
    </div>

    <!-- Contenido -->
    <div class="relative z-10 flex-1 flex flex-col p-8 pt-32">
      <h1 class="text-5xl font-bold text-white mb-16">Login</h1>

      <!-- Formulario -->
      <div class="flex-1 flex flex-col justify-center space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input 
            v-model="email"
            type="email" 
            placeholder="hello@reallygreasite.com"
            class="input-field"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <div class="relative">
            <input 
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="******"
              class="input-field pr-12"
            />
            <button 
              @click="showPassword = !showPassword"
              class="absolute right-4 top-1/2 -translate-y-1/2 text-primary-600"
            >
              <Lock :size="24" />
            </button>
          </div>
        </div>

        <button 
          @click="handleLogin"
          class="w-full bg-primary-700 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-primary-800"
        >
          login
        </button>

        <p class="text-center text-sm text-gray-600">
          Not have account?<br />
          <router-link to="/signup" class="text-primary-600 font-semibold hover:underline">
            Signup here
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Lock } from 'lucide-vue-next'

const router = useRouter()
const email = ref('')
const password = ref('')
const showPassword = ref(false)

const handleLogin = () => {
  // Por ahora solo navega al home
  router.push('/home')
}
</script>
