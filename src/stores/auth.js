import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref(null)
  const token = ref(null)
  const role = ref(null) // 'common' | 'company'

  // Getters
  const isAuthenticated = computed(() => !!token.value)
  const isCommonUser = computed(() => role.value === 'common')
  const isCompanyUser = computed(() => role.value === 'company')
  const currentUser = computed(() => user.value)

  // Actions
  function setAuth(userData, authToken, userRole) {
    user.value = userData
    token.value = authToken
    role.value = userRole
  }

  function logout() {
    user.value = null
    token.value = null
    role.value = null
  }

  function updateProfile(profileData) {
    if (user.value) {
      user.value = { ...user.value, ...profileData }
    }
  }

  return {
    // State
    user,
    token,
    role,
    // Getters
    isAuthenticated,
    isCommonUser,
    isCompanyUser,
    currentUser,
    // Actions
    setAuth,
    logout,
    updateProfile
  }
}, {
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'auth',
        storage: localStorage,
      }
    ]
  }
})
