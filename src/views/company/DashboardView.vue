<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 pb-10 space-y-10">
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 text-white rounded-3xl p-6 sm:p-8 shadow-lg">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p class="uppercase text-xs tracking-[0.3em] text-white/70">Panel de Control</p>
          <h1 class="text-3xl sm:text-4xl font-bold mt-2">¡Bienvenido de nuevo!</h1>
          <p class="text-white/80 mt-3 max-w-2xl">
            Gestiona tus empresas, productos y contactos desde un solo lugar. Mantén tu información actualizada y ofrece a tus clientes la mejor experiencia.
          </p>
        </div>

        <div class="bg-white/15 backdrop-blur-md rounded-2xl p-5 flex flex-col gap-3 min-w-[220px]">
          <div class="flex items-center justify-between text-sm">
            <span class="text-white/80">Empresas activas</span>
            <span class="font-semibold">{{ stats.companies }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-white/80">Productos publicados</span>
            <span class="font-semibold">{{ stats.products }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-white/80">Contactos</span>
            <span class="font-semibold">{{ stats.contacts }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Estadísticas -->
    <section class="px-1">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="rounded-2xl p-6 bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 shadow-sm">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-sm font-medium text-gray-600 dark:text-gray-300">Empresas</h3>
            <Building2 :size="20" class="text-primary-500" />
          </div>
          <p class="text-3xl font-bold text-gray-900 dark:text-white">{{ stats.companies }}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">Empresas registradas bajo tu cuenta.</p>
        </div>

        <div class="rounded-2xl p-6 bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 shadow-sm">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-sm font-medium text-gray-600 dark:text-gray-300">Productos</h3>
            <Package :size="20" class="text-green-500" />
          </div>
          <p class="text-3xl font-bold text-gray-900 dark:text-white">{{ stats.products }}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">Publicaciones activas en tu catálogo.</p>
        </div>

        <div class="rounded-2xl p-6 bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 shadow-sm">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-sm font-medium text-gray-600 dark:text-gray-300">Localizaciones</h3>
            <MapPin :size="20" class="text-orange-500" />
          </div>
          <p class="text-3xl font-bold text-gray-900 dark:text-white">{{ stats.locations }}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">Sucursales operativas registradas.</p>
        </div>

        <div class="rounded-2xl p-6 bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 shadow-sm">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-sm font-medium text-gray-600 dark:text-gray-300">Contactos</h3>
            <Users :size="20" class="text-purple-500" />
          </div>
          <p class="text-3xl font-bold text-gray-900 dark:text-white">{{ stats.contacts }}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">Clientes interesados y aliados comerciales.</p>
        </div>
      </div>
    </section>

    <!-- Acciones rápidas -->
    <section class="px-1 space-y-4">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-xl font-semibold text-gray-800 dark:text-white">Acciones Rápidas</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400">Agiliza tu flujo de trabajo con accesos directos.</p>
        </div>
        <router-link to="/dashboard/settings" class="hidden md:inline-flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 font-medium">
          Configurar empresa
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <router-link 
          to="/dashboard/companies/create"
          class="rounded-2xl p-6 bg-white dark:bg-gray-800/80 border border-transparent hover:border-primary-500 hover:shadow-lg transition-all duration-200"
        >
          <Plus :size="24" class="text-primary-500 mb-3" />
          <h3 class="font-semibold text-gray-800 dark:text-white">Nueva Empresa</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Registra una marca y organízala en segundos.</p>
        </router-link>

        <router-link 
          to="/dashboard/products/create"
          class="rounded-2xl p-6 bg-white dark:bg-gray-800/80 border border-transparent hover:border-green-500/60 hover:shadow-lg transition-all duration-200"
        >
          <Plus :size="24" class="text-green-500 mb-3" />
          <h3 class="font-semibold text-gray-800 dark:text-white">Nuevo Producto</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Publica un artículo con inventario y precio.</p>
        </router-link>

        <router-link 
          to="/dashboard/locations/create"
          class="rounded-2xl p-6 bg-white dark:bg-gray-800/80 border border-transparent hover:border-orange-500/60 hover:shadow-lg transition-all duration-200"
        >
          <Plus :size="24" class="text-orange-500 mb-3" />
          <h3 class="font-semibold text-gray-800 dark:text-white">Nueva Localización</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Añade sucursales y puntos de entrega.</p>
        </router-link>

        <router-link 
          to="/dashboard/contacts/create"
          class="rounded-2xl p-6 bg-white dark:bg-gray-800/80 border border-transparent hover:border-purple-500/60 hover:shadow-lg transition-all duration-200"
        >
          <Plus :size="24" class="text-purple-500 mb-3" />
          <h3 class="font-semibold text-gray-800 dark:text-white">Nuevo Contacto</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Guarda proveedores o clientes frecuentes.</p>
        </router-link>
      </div>
    </section>

    <!-- Listados recientes -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-4 px-1">
      <div class="rounded-2xl p-6 bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-white">Productos Recientes</h2>
          <router-link to="/dashboard/products" class="text-sm text-primary-600 dark:text-primary-400 font-medium">
            Ver todos →
          </router-link>
        </div>
        <div class="space-y-3">
          <div 
            v-for="product in recentProducts" 
            :key="product.id" 
            class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900/40 rounded-xl border border-gray-100 dark:border-gray-700"
          >
            <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary-100/80 dark:bg-primary-900/40">
              <Package :size="20" class="text-primary-600 dark:text-primary-300" />
            </div>
            <div class="flex-1">
              <h4 class="font-medium text-gray-800 dark:text-white text-sm">{{ product.name }}</h4>
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ product.company }}</p>
            </div>
            <p class="font-bold text-primary-600 dark:text-primary-300">${{ product.price }}</p>
          </div>
        </div>
      </div>

      <div class="rounded-2xl p-6 bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-white">Mis Empresas</h2>
          <router-link to="/dashboard/companies" class="text-sm text-primary-600 dark:text-primary-400 font-medium">
            Ver todas →
          </router-link>
        </div>
        <div class="space-y-3">
          <div 
            v-for="company in myCompanies" 
            :key="company.id" 
            class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900/40 rounded-xl border border-gray-100 dark:border-gray-700"
          >
            <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary-100/80 dark:bg-primary-900/40">
              <Building2 :size="20" class="text-primary-600 dark:text-primary-300" />
            </div>
            <div class="flex-1">
              <h4 class="font-medium text-gray-800 dark:text-white text-sm">{{ company.name }}</h4>
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ company.category }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Building2, Package, MapPin, Users, Plus } from 'lucide-vue-next'

const stats = ref({
  companies: 3,
  products: 24,
  locations: 5,
  contacts: 8
})

const recentProducts = ref([
  { id: 1, name: 'Producto 1', price: 150, company: 'Empresa A' },
  { id: 2, name: 'Producto 2', price: 200, company: 'Empresa B' },
  { id: 3, name: 'Producto 3', price: 175, company: 'Empresa A' },
])

const myCompanies = ref([
  { id: 1, name: 'Mi Tienda', category: 'Alimentos' },
  { id: 2, name: 'Electro Store', category: 'Electrónica' },
])
</script>
