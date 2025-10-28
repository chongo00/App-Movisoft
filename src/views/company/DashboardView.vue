<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

    <!-- Estadísticas -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-white rounded-2xl p-6 shadow-sm">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-sm font-medium text-gray-600">Empresas</h3>
          <Building2 :size="20" class="text-primary-600" />
        </div>
        <p class="text-3xl font-bold text-gray-800">{{ stats.companies }}</p>
      </div>

      <div class="bg-white rounded-2xl p-6 shadow-sm">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-sm font-medium text-gray-600">Productos</h3>
          <Package :size="20" class="text-green-600" />
        </div>
        <p class="text-3xl font-bold text-gray-800">{{ stats.products }}</p>
      </div>

      <div class="bg-white rounded-2xl p-6 shadow-sm">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-sm font-medium text-gray-600">Localizaciones</h3>
          <MapPin :size="20" class="text-orange-600" />
        </div>
        <p class="text-3xl font-bold text-gray-800">{{ stats.locations }}</p>
      </div>

      <div class="bg-white rounded-2xl p-6 shadow-sm">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-sm font-medium text-gray-600">Contactos</h3>
          <Users :size="20" class="text-purple-600" />
        </div>
        <p class="text-3xl font-bold text-gray-800">{{ stats.contacts }}</p>
      </div>
    </div>

    <!-- Acciones rápidas -->
    <div class="mb-8">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Acciones Rápidas</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <router-link 
          to="/dashboard/companies/create"
          class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-600"
        >
          <Plus :size="24" class="text-primary-600 mb-2" />
          <h3 class="font-semibold text-gray-800">Nueva Empresa</h3>
          <p class="text-sm text-gray-600 mt-1">Registrar empresa</p>
        </router-link>

        <router-link 
          to="/dashboard/products/create"
          class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-600"
        >
          <Plus :size="24" class="text-green-600 mb-2" />
          <h3 class="font-semibold text-gray-800">Nuevo Producto</h3>
          <p class="text-sm text-gray-600 mt-1">Agregar producto</p>
        </router-link>

        <router-link 
          to="/dashboard/locations/create"
          class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-600"
        >
          <Plus :size="24" class="text-orange-600 mb-2" />
          <h3 class="font-semibold text-gray-800">Nueva Localización</h3>
          <p class="text-sm text-gray-600 mt-1">Agregar ubicación</p>
        </router-link>

        <router-link 
          to="/dashboard/contacts/create"
          class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-600"
        >
          <Plus :size="24" class="text-purple-600 mb-2" />
          <h3 class="font-semibold text-gray-800">Nuevo Contacto</h3>
          <p class="text-sm text-gray-600 mt-1">Agregar contacto</p>
        </router-link>
      </div>
    </div>

    <!-- Listado reciente -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Productos recientes -->
      <div class="bg-white rounded-2xl p-6 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-bold text-gray-800">Productos Recientes</h2>
          <router-link to="/dashboard/products" class="text-sm text-primary-600 font-medium">
            Ver todos →
          </router-link>
        </div>
        <div class="space-y-3">
          <div v-for="product in recentProducts" :key="product.id" class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div class="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
              <Package :size="20" class="text-gray-400" />
            </div>
            <div class="flex-1">
              <h4 class="font-medium text-gray-800 text-sm">{{ product.name }}</h4>
              <p class="text-xs text-gray-500">{{ product.company }}</p>
            </div>
            <p class="font-bold text-primary-600">${{ product.price }}</p>
          </div>
        </div>
      </div>

      <!-- Empresas -->
      <div class="bg-white rounded-2xl p-6 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-bold text-gray-800">Mis Empresas</h2>
          <router-link to="/dashboard/companies" class="text-sm text-primary-600 font-medium">
            Ver todas →
          </router-link>
        </div>
        <div class="space-y-3">
          <div v-for="company in myCompanies" :key="company.id" class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Building2 :size="20" class="text-primary-600" />
            </div>
            <div class="flex-1">
              <h4 class="font-medium text-gray-800 text-sm">{{ company.name }}</h4>
              <p class="text-xs text-gray-500">{{ company.category }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
