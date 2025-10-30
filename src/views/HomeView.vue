<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'pb-20': authStore.isAuthenticated && authStore.isCommonUser }">
    <DesktopSidebar
      v-if="authStore.isAuthenticated && authStore.isCommonUser"
      :is-open="desktopSidebarOpen"
      @close="desktopSidebarOpen = false"
    />

    <div
      v-if="desktopSidebarOpen"
      class="hidden lg:block fixed inset-0 bg-black/50 z-30"
      @click="desktopSidebarOpen = false"
    ></div>

    <div
      class="transition-all duration-300"
      :class="{ 'lg:ml-64': desktopSidebarOpen }"
    >
    <!-- Barra superior solo web -->
    <div
      v-if="authStore.isAuthenticated && authStore.isCommonUser"
      class="hidden lg:flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-primary-600/40 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div class="flex items-center gap-3">
        <button
          @click="desktopSidebarOpen = !desktopSidebarOpen"
          class="p-2 rounded-lg transition-colors text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div class="w-6 h-6 flex flex-col justify-center items-center">
            <span class="block w-5 h-0.5 bg-current mb-1 transition-all duration-300" :class="{ 'rotate-45 translate-y-1.5': desktopSidebarOpen }"></span>
            <span class="block w-5 h-0.5 bg-current mb-1 transition-all duration-300" :class="{ 'opacity-0': desktopSidebarOpen }"></span>
            <span class="block w-5 h-0.5 bg-current transition-all duration-300" :class="{ '-rotate-45 -translate-y-1.5': desktopSidebarOpen }"></span>
          </div>
        </button>
        <span class="text-lg font-semibold">Inicio</span>
      </div>

      <div class="relative">
        <button 
          @click="toggleUserMenu"
          class="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-primary-900/40 dark:text-primary-100 dark:hover:bg-primary-800/40"
        >
          <User :size="18" />
          <span>{{ authStore.currentUser?.name || 'Usuario' }}</span>
          <ChevronDown :size="14" :class="{ 'rotate-180': isUserMenuOpen }" class="transition-transform duration-200" />
        </button>

        <Transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 scale-95 translate-y-[-10px]"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-[-10px]"
        >
          <div 
            v-if="isUserMenuOpen"
            class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
            @click.stop
          >
            <div class="px-4 py-2 border-b border-gray-100">
              <p class="text-sm font-medium text-gray-900">{{ authStore.currentUser?.name || 'Usuario' }}</p>
              <p class="text-xs text-gray-500">{{ authStore.currentUser?.email || 'usuario@email.com' }}</p>
            </div>
            <button 
              @click="goToProfile"
              class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <User :size="16" />
              Ver Perfil
            </button>
            <button 
              @click="handleLogout"
              class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
            >
              <LogOut :size="16" />
              Cerrar Sesión
            </button>
          </div>
        </Transition>
      </div>
    </div>

    <!-- Header con logo y menú hamburguesa -->
    <header class="bg-gradient-to-br from-primary-600 to-primary-400 text-white relative">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between" :class="{ 'lg:hidden': authStore.isAuthenticated && authStore.isCommonUser }">
          <!-- Botón menú hamburguesa (solo para no autenticados) -->
          <button 
            v-if="!authStore.isAuthenticated"
            @click="toggleMenu"
            class="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Abrir menú"
          >
            <div class="w-6 h-6 flex flex-col justify-center items-center">
              <span class="block w-5 h-0.5 bg-white mb-1 transition-all duration-300" :class="{ 'rotate-45 translate-y-1.5': isMenuOpen }"></span>
              <span class="block w-5 h-0.5 bg-white mb-1 transition-all duration-300" :class="{ 'opacity-0': isMenuOpen }"></span>
              <span class="block w-5 h-0.5 bg-white transition-all duration-300" :class="{ '-rotate-45 -translate-y-1.5': isMenuOpen }"></span>
            </div>
          </button>
          
          <div class="flex items-center gap-3">
            <img src="/logo.png" alt="MoviSoft" class="w-12 h-12 object-contain" />
            <div>
              <h1 class="text-xl font-bold">Tu Mercadito</h1>
              <p class="text-xs text-primary-100">Mobile Service</p>
            </div>
          </div>
          
          <div class="flex gap-2">
            <!-- Usuario autenticado -->
            <div v-if="authStore.isAuthenticated" class="relative">
              <Tooltip content="Opciones de usuario">
                <button 
                  @click="toggleUserMenu"
                  class="flex items-center gap-2 px-3 py-2 text-sm font-medium text-primary-600 bg-white rounded-full hover:bg-primary-50 transition-all duration-200"
                >
                  <User :size="18" />
                  <span class="hidden sm:inline">{{ authStore.currentUser?.name || 'Usuario' }}</span>
                  <ChevronDown :size="14" :class="{ 'rotate-180': isUserMenuOpen }" class="transition-transform duration-200" />
                </button>
              </Tooltip>

              <!-- Dropdown de usuario -->
              <Transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 scale-95 translate-y-[-10px]"
                enter-to-class="opacity-100 scale-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 scale-100 translate-y-0"
                leave-to-class="opacity-0 scale-95 translate-y-[-10px]"
              >
                <div 
                  v-if="isUserMenuOpen"
                  class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
                  @click.stop
                >
                  <div class="px-4 py-2 border-b border-gray-100">
                    <p class="text-sm font-medium text-gray-900">{{ authStore.currentUser?.name || 'Usuario' }}</p>
                    <p class="text-xs text-gray-500">{{ authStore.currentUser?.email || 'usuario@email.com' }}</p>
                  </div>
                  <button 
                    @click="goToProfile"
                    class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
                  >
                    <User :size="16" />
                    Ver Perfil
                  </button>
                  <button 
                    @click="openSettings"
                    class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
                  >
                    <Settings :size="16" />
                    Ajustes
                  </button>
                  <button 
                    @click="handleLogout"
                    class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
                  >
                    <LogOut :size="16" />
                    Cerrar Sesión
                  </button>
                </div>
              </Transition>
            </div>

            <Tooltip v-else content="Accede a tu cuenta para explorar productos">
              <button 
                @click="$router.push('/auth/login-common')"
                class="px-4 py-2 text-sm font-medium text-primary-600 bg-white rounded-full hover:bg-primary-50 transition-all duration-200"
              >
                Entrar
              </button>
            </Tooltip>
          </div>
        </div>

        <!-- Buscador -->
        <div class="mt-4 bg-white rounded-full flex items-center px-4 py-3 shadow-lg">
          <Search class="text-gray-400" :size="20" />
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Buscar productos, empresas..."
            class="flex-1 ml-3 outline-none text-gray-700"
            @keyup.enter="handleSearch"
          />
        </div>

        <!-- Botones de filtro -->
        <div class="flex gap-3 mt-4 overflow-x-auto pb-2">
          <button 
            v-for="cat in quickCategories" 
            :key="cat.id"
            @click="filterByCategory(cat.id)"
            class="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium whitespace-nowrap hover:bg-white/30"
          >
            {{ cat.name }}
          </button>
        </div>
      </div>
    </header>

    <!-- Menú lateral deslizable (solo para no autenticados) -->
    <div 
      v-if="isMenuOpen && !authStore.isAuthenticated"
      class="fixed inset-0 z-50"
      @click="toggleMenu"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50"></div>
      
      <!-- Panel lateral -->
      <div 
        class="absolute left-0 top-0 h-full w-80 max-w-[90vw] bg-gradient-to-br from-primary-600 to-primary-400 text-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col"
        @click.stop
      >
        <!-- Header del menú -->
        <div class="flex items-center justify-between p-6 border-b border-white/20">
          <div class="flex items-center gap-3">
            <img src="/logo.png" alt="MoviSoft" class="w-10 h-10 object-contain" />
            <div>
              <h2 class="text-lg font-bold">Tu Mercadito</h2>
              <p class="text-xs text-primary-100">Explora y Regístrate</p>
            </div>
          </div>
          <button 
            @click="toggleMenu"
            class="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Cerrar menú"
          >
            <X :size="24" />
          </button>
        </div>

        <!-- Contenido del menú -->
        <div class="p-6 flex-1 overflow-y-auto">
          <div class="space-y-6">
            <!-- Sección de call to action movida aquí -->
            <div class="text-center">
              <h3 class="text-2xl font-bold mb-4">¿Eres dueño de un negocio?</h3>
              <p class="text-primary-100 mb-6 max-w-md mx-auto text-sm leading-relaxed">
                Registra tu empresa y llega a más clientes. Gestiona tus productos, contactos y localizaciones fácilmente.
              </p>
              <div class="space-y-3">
                <button 
                  @click="$router.push('/auth/register-company'); toggleMenu()"
                  class="w-full px-6 py-3 bg-white text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-colors"
                >
                  Registrar Empresa
                </button>
                <button 
                  @click="$router.push('/auth/login-company'); toggleMenu()"
                  class="w-full px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold hover:bg-white/20 transition-colors"
                >
                  Iniciar Sesión
                </button>
              </div>
            </div>

            <!-- Enlaces adicionales -->
            <div class="border-t border-white/20 pt-6">
              <h4 class="font-semibold mb-4">Opciones</h4>
              <div class="space-y-2">
                <button 
                  @click="$router.push('/auth/login-common'); toggleMenu()"
                  class="w-full text-left px-4 py-2 text-primary-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  👤 Soy Cliente →
                </button>
                <button 
                  @click="scrollToSection('categories')"
                  class="w-full text-left px-4 py-2 text-primary-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  📂 Ver Categorías →
                </button>
                <button 
                  @click="scrollToSection('products')"
                  class="w-full text-left px-4 py-2 text-primary-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  🛍️ Productos Destacados →
                </button>
                <button 
                  @click="$router.push('/auth/login-company'); toggleMenu()"
                  class="w-full text-left px-4 py-2 text-primary-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  🏢 Soy Empresa →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección de categorías populares -->
    <Transition name="fade-slide" appear>
      <section id="categories" class="container mx-auto px-4 py-6">
        <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Categorías Populares</h2>
        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          <TransitionGroup name="fade-scale" tag="div" class="contents">
            <div 
              v-for="(category, index) in categories" 
              :key="category.id"
              class="bg-white dark:bg-gray-800 rounded-xl p-4 text-center cursor-pointer hover:shadow-md transition-all duration-300 hover:scale-105"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <div class="w-12 h-12 mx-auto bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-2">
                <component :is="category.icon" :size="24" class="text-primary-600 dark:text-primary-400" />
              </div>
              <p class="text-xs font-medium text-gray-700 dark:text-gray-300">{{ category.name }}</p>
            </div>
          </TransitionGroup>
        </div>
      </section>
    </Transition>

    <!-- Productos destacados -->
    <Transition name="fade-slide" appear>
      <section id="products" class="container mx-auto px-4 py-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-gray-800 dark:text-white">Productos Destacados</h2>
          <router-link to="/auth/login-common" class="text-sm text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
            Ver todos →
          </router-link>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <!-- Skeleton loaders mientras "carga" -->
          <TransitionGroup name="fade-scale" tag="div" class="contents">
            <div 
              v-for="(product, index) in featuredProducts" 
              :key="product.id"
              class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-all duration-300 hover:scale-105 relative"
              :style="{ animationDelay: `${index * 150}ms` }"
            >
              <!-- Botón WhatsApp -->
              <Tooltip content="Contactar por WhatsApp">
                <button
                  @click.stop="contactByWhatsApp(product)"
                  class="absolute top-3 right-3 z-10 w-8 h-8 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors"
                >
                  <MessageCircle :size="16" class="text-white" />
                </button>
              </Tooltip>

              <div class="aspect-square bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative overflow-hidden">
                <Package class="text-gray-400 dark:text-gray-500" :size="48" />
                <!-- Overlay hover -->
                <div class="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div class="opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button class="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Ver producto
                    </button>
                  </div>
                </div>
              </div>
              <div class="p-3">
                <h3 class="font-semibold text-sm text-gray-800 dark:text-white mb-1 line-clamp-2">{{ product.name }}</h3>
                <p class="text-primary-600 dark:text-primary-400 font-bold text-lg mb-2">${{ product.price }}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ product.company }}</p>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </section>
    </Transition>

    <!-- Empresas destacadas -->
    <section id="companies" class="container mx-auto px-4 py-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold text-gray-800 dark:text-white">Empresas Destacadas</h2>
        <router-link to="/auth/login-common" class="text-sm text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
          Ver todas →
        </router-link>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div 
          v-for="company in featuredCompanies" 
          :key="company.id"
          class="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
        >
          <div class="flex items-start gap-3">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center flex-shrink-0">
              <Store :size="32" class="text-primary-600 dark:text-primary-400" />
            </div>
            <div class="flex-1">
              <h3 class="font-semibold text-gray-800 dark:text-white mb-1">{{ company.name }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ company.category }}</p>
              <div class="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                <MapPin :size="14" />
                <span class="text-xs">{{ company.location }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 dark:bg-gray-900 text-gray-300 py-8 mt-12">
      <div class="container mx-auto px-4 text-center">
        <p class="text-sm">© 2024 Tu Mercadito - MoviSoft. Todos los derechos reservados.</p>
      </div>
    </footer>

    <!-- Navegación inferior para usuarios comunes autenticados -->
    <!-- <BottomNavigation v-if="authStore.isAuthenticated && authStore.isCommonUser" /> -->
    <div class="lg:hidden">
      <BottomNavigation v-if="authStore.isAuthenticated && authStore.isCommonUser" />
    </div>
    <SettingsModal />
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Package, Store, MapPin, Utensils, Shirt, Laptop, Home as HomeIcon, X, User, ChevronDown, LogOut, MessageCircle, Settings } from 'lucide-vue-next'
import ProductSkeleton from '../components/ProductSkeleton.vue'
import Tooltip from '../components/Tooltip.vue'
import { useAuthStore } from '../stores/auth'
import BottomNavigation from '../components/BottomNavigation.vue'
import SettingsModal from '../components/SettingsModal.vue'
import { useUiStore } from '../stores/ui'
import DesktopSidebar from '../components/DesktopSidebar.vue'

const router = useRouter()
const authStore = useAuthStore()
const searchQuery = ref('')
const isMenuOpen = ref(false)
const isUserMenuOpen = ref(false)
const uiStore = useUiStore()
const desktopSidebarOpen = ref(false)

const quickCategories = ref([
  { id: 1, name: 'Alimentos' },
  { id: 2, name: 'Ropa' },
  { id: 3, name: 'Electrónica' },
  { id: 4, name: 'Hogar' },
])

const categories = ref([
  { id: 1, name: 'Alimentos', icon: Utensils },
  { id: 2, name: 'Ropa', icon: Shirt },
  { id: 3, name: 'Electrónica', icon: Laptop },
  { id: 4, name: 'Hogar', icon: HomeIcon },
  { id: 5, name: 'Otros', icon: Package },
  { id: 6, name: 'Ver más', icon: Package },
])

const featuredProducts = ref([
  { id: 1, name: 'Producto Ejemplo 1', price: 150, company: 'Tienda A', whatsappLink: 'https://wa.me/5351234567?text=Hola,%20me%20interesa%20tu%20Producto%20Ejemplo%201' },
  { id: 2, name: 'Producto Ejemplo 2', price: 200, company: 'Tienda B', whatsappLink: 'https://wa.me/5352345678?text=Hola,%20me%20interesa%20tu%20Producto%20Ejemplo%202' },
  { id: 3, name: 'Producto Ejemplo 3', price: 175, company: 'Tienda C', whatsappLink: 'https://wa.me/5353456789?text=Hola,%20me%20interesa%20tu%20Producto%20Ejemplo%203' },
  { id: 4, name: 'Producto Ejemplo 4', price: 300, company: 'Tienda D', whatsappLink: 'https://wa.me/5354567890?text=Hola,%20me%20interesa%20tu%20Producto%20Ejemplo%204' },
])

const featuredCompanies = ref([
  { id: 1, name: 'La Esquina', category: 'Alimentos', location: 'Vedado, La Habana' },
  { id: 2, name: 'Electro Store', category: 'Electrónica', location: 'Centro Habana' },
  { id: 3, name: 'Moda y Estilo', category: 'Ropa', location: 'Miramar' },
])

const handleSearch = () => {
  if (!authStore.isAuthenticated) {
    // Usuario no autenticado - mostrar mensaje para que se registre
    alert('Para buscar productos, necesitas iniciar sesión primero.')
    return
  }
  
  if (searchQuery.value.trim()) {
    // Usuario autenticado - redirigir a búsqueda (por ahora simulado)
    router.push('/app/search')
  }
}

const filterByCategory = (categoryId) => {
  if (!authStore.isAuthenticated) {
    // Usuario no autenticado - mostrar mensaje para que se registre
    alert('Para explorar categorías, necesitas iniciar sesión primero.')
    return
  }
  
  // Usuario autenticado - redirigir a categorías
  router.push('/app/categories')
}

const viewProduct = (productId) => {
  if (!authStore.isAuthenticated) {
    // Usuario no autenticado - mostrar mensaje para que se registre
    alert('Para ver detalles de productos, necesitas iniciar sesión primero.')
    return
  }
  
  // Usuario autenticado - por ahora redirigir a categorías
  router.push('/app/categories')
}

const contactByWhatsApp = (product) => {
  if (!authStore.isAuthenticated) {
    alert('Para contactar al vendedor, necesitas iniciar sesión primero.')
    return
  }

  if (product.whatsappLink) {
    window.open(product.whatsappLink, '_blank')
  } else {
    alert('Este vendedor aún no ha configurado su contacto de WhatsApp.')
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const scrollToSection = (sectionId) => {
  isMenuOpen.value = false

  nextTick(() => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  })
}

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value
}

const openSettings = () => {
  uiStore.openSettings()
  isUserMenuOpen.value = false
}

const goToProfile = () => {
  isUserMenuOpen.value = false
  router.push('/app/profile')
}

const handleLogout = () => {
  isUserMenuOpen.value = false
  authStore.logout()
  router.push('/')
}
</script>

<style scoped>
/* Animaciones de entrada */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease-out;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-scale-enter-active {
  transition: all 0.3s ease-out;
}

.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.fade-scale-leave-active {
  transition: all 0.2s ease-in;
}

.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Animación staggered para cards */
.fade-scale-enter-active > div {
  animation: fadeInUp 0.5s ease-out both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover effects mejorados */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

/* Line clamp para textos largos */
.line-clamp-2 {
  line-clamp: 2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
