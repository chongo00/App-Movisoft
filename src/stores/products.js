import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProductsStore = defineStore('products', () => {
  // State
  const products = ref([])
  const categories = ref([])
  const currentPage = ref(1)
  const totalPages = ref(1)
  const filters = ref({
    search: '',
    category: null,
    priceMin: null,
    priceMax: null,
    company: null
  })

  // Getters
  const filteredProducts = computed(() => {
    let result = products.value

    if (filters.value.search) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(filters.value.search.toLowerCase()) ||
        p.description.toLowerCase().includes(filters.value.search.toLowerCase())
      )
    }

    if (filters.value.category) {
      result = result.filter(p => p.categoryId === filters.value.category)
    }

    if (filters.value.priceMin !== null) {
      result = result.filter(p => p.price >= filters.value.priceMin)
    }

    if (filters.value.priceMax !== null) {
      result = result.filter(p => p.price <= filters.value.priceMax)
    }

    if (filters.value.company) {
      result = result.filter(p => p.companyId === filters.value.company)
    }

    return result
  })

  const popularProducts = computed(() => {
    return products.value
      .filter(p => p.popular)
      .slice(0, 6)
  })

  // Actions
  function setProducts(newProducts) {
    products.value = newProducts
  }

  function addProduct(product) {
    products.value.push(product)
  }

  function updateProduct(productId, updates) {
    const index = products.value.findIndex(p => p.id === productId)
    if (index !== -1) {
      products.value[index] = { ...products.value[index], ...updates }
    }
  }

  function deleteProduct(productId) {
    products.value = products.value.filter(p => p.id !== productId)
  }

  function setFilters(newFilters) {
    filters.value = { ...filters.value, ...newFilters }
  }

  function clearFilters() {
    filters.value = {
      search: '',
      category: null,
      priceMin: null,
      priceMax: null,
      company: null
    }
  }

  function setCategories(newCategories) {
    categories.value = newCategories
  }

  function setPage(page) {
    currentPage.value = page
  }

  return {
    // State
    products,
    categories,
    currentPage,
    totalPages,
    filters,
    // Getters
    filteredProducts,
    popularProducts,
    // Actions
    setProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    setFilters,
    clearFilters,
    setCategories,
    setPage
  }
}, {
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'products',
        storage: localStorage,
        paths: ['products', 'categories'] // Solo persistir productos y categorías
      }
    ]
  }
})
