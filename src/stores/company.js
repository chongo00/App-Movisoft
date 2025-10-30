import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

/**
 * Store con configuraciones específicas del dueño de empresa
 * - whatsappLink: número/link global para contacto directo
 * - companyProfile: información general editable desde el dashboard
 */
export const useCompanyStore = defineStore('company', () => {
  const whatsappLink = ref('')
  const companyProfile = ref({
    displayName: 'Mi Negocio',
    description: 'Actualiza la información de tu empresa para mejorar tu presencia.',
    whatsappLink: ''
  })

  const hasWhatsapp = computed(() => !!(companyProfile.value.whatsappLink || whatsappLink.value))

  function setWhatsappLink(link) {
    whatsappLink.value = link.trim()
    if (!companyProfile.value.whatsappLink) {
      companyProfile.value = {
        ...companyProfile.value,
        whatsappLink: whatsappLink.value
      }
    }
  }

  function updateCompanyProfile(partialProfile) {
    companyProfile.value = { ...companyProfile.value, ...partialProfile }
    if (partialProfile.whatsappLink !== undefined) {
      whatsappLink.value = partialProfile.whatsappLink.trim()
    }
  }

  return {
    whatsappLink,
    companyProfile,
    hasWhatsapp,
    setWhatsappLink,
    updateCompanyProfile
  }
}, {
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'company-settings',
        storage: localStorage,
        paths: ['companyProfile', 'whatsappLink']
      }
    ]
  }
})
