import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCompaniesStore = defineStore('companies', () => {
  // State
  const companies = ref([])
  const myCompanies = ref([]) // Empresas del usuario autenticado
  const currentCompany = ref(null) // Empresa activa en el panel

  // Getters
  const popularCompanies = computed(() => {
    return companies.value
      .filter(c => c.popular)
      .slice(0, 6)
  })

  const getCompanyById = computed(() => {
    return (id) => companies.value.find(c => c.id === id)
  })

  // Actions
  function setCompanies(newCompanies) {
    companies.value = newCompanies
  }

  function setMyCompanies(newMyCompanies) {
    myCompanies.value = newMyCompanies
  }

  function setCurrentCompany(company) {
    currentCompany.value = company
  }

  function addCompany(company) {
    companies.value.push(company)
    myCompanies.value.push(company)
  }

  function updateCompany(companyId, updates) {
    // Actualizar en lista general
    const index = companies.value.findIndex(c => c.id === companyId)
    if (index !== -1) {
      companies.value[index] = { ...companies.value[index], ...updates }
    }

    // Actualizar en mis empresas
    const myIndex = myCompanies.value.findIndex(c => c.id === companyId)
    if (myIndex !== -1) {
      myCompanies.value[myIndex] = { ...myCompanies.value[myIndex], ...updates }
    }

    // Actualizar empresa actual si es la misma
    if (currentCompany.value?.id === companyId) {
      currentCompany.value = { ...currentCompany.value, ...updates }
    }
  }

  function deleteCompany(companyId) {
    companies.value = companies.value.filter(c => c.id !== companyId)
    myCompanies.value = myCompanies.value.filter(c => c.id !== companyId)
    
    if (currentCompany.value?.id === companyId) {
      currentCompany.value = null
    }
  }

  return {
    // State
    companies,
    myCompanies,
    currentCompany,
    // Getters
    popularCompanies,
    getCompanyById,
    // Actions
    setCompanies,
    setMyCompanies,
    setCurrentCompany,
    addCompany,
    updateCompany,
    deleteCompany
  }
}, {
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'companies',
        storage: localStorage,
        paths: ['companies', 'myCompanies']
      }
    ]
  }
})
