<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Gestión de Empresas</h1>
      <router-link 
        to="/dashboard/companies/create"
        class="px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 flex items-center gap-2"
      >
        <Plus :size="20" />
        Nueva Empresa
      </router-link>
    </div>

    <!-- Lista de empresas -->
    <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Empresa</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ubicación</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Productos</th>
              <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="company in companies" :key="company.id" class="hover:bg-gray-50">
              <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 :size="20" class="text-primary-600" />
                  </div>
                  <div>
                    <p class="font-medium text-gray-800">{{ company.name }}</p>
                    <p class="text-sm text-gray-500">{{ company.email }}</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 text-sm text-gray-600">{{ company.category }}</td>
              <td class="px-6 py-4 text-sm text-gray-600">{{ company.location }}</td>
              <td class="px-6 py-4 text-sm text-gray-600">{{ company.productsCount }}</td>
              <td class="px-6 py-4 text-right">
                <div class="flex items-center justify-end gap-2">
                  <button class="p-2 text-primary-600 hover:bg-primary-50 rounded-lg">
                    <Edit :size="18" />
                  </button>
                  <button class="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                    <Trash2 :size="18" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Plus, Building2, Edit, Trash2 } from 'lucide-vue-next'

const companies = ref([
  { 
    id: 1, 
    name: 'La Esquina', 
    email: 'info@laesquina.cu',
    category: 'Alimentos', 
    location: 'Vedado',
    productsCount: 15
  },
  { 
    id: 2, 
    name: 'Electro Store', 
    email: 'contacto@electro.cu',
    category: 'Electrónica', 
    location: 'Centro Habana',
    productsCount: 8
  },
])
</script>
