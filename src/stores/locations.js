import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLocationsStore = defineStore('locations', () => {
  // State
  const locations = ref([]) // Localizaciones de la empresa actual

  // Actions
  function setLocations(newLocations) {
    locations.value = newLocations
  }

  function addLocation(location) {
    locations.value.push(location)
  }

  function updateLocation(locationId, updates) {
    const index = locations.value.findIndex(l => l.id === locationId)
    if (index !== -1) {
      locations.value[index] = { ...locations.value[index], ...updates }
    }
  }

  function deleteLocation(locationId) {
    locations.value = locations.value.filter(l => l.id !== locationId)
  }

  function clearLocations() {
    locations.value = []
  }

  return {
    // State
    locations,
    // Actions
    setLocations,
    addLocation,
    updateLocation,
    deleteLocation,
    clearLocations
  }
})
