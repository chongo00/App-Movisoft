import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContactsStore = defineStore('contacts', () => {
  // State
  const contacts = ref([]) // Contactos de la empresa actual

  // Actions
  function setContacts(newContacts) {
    contacts.value = newContacts
  }

  function addContact(contact) {
    contacts.value.push(contact)
  }

  function updateContact(contactId, updates) {
    const index = contacts.value.findIndex(c => c.id === contactId)
    if (index !== -1) {
      contacts.value[index] = { ...contacts.value[index], ...updates }
    }
  }

  function deleteContact(contactId) {
    contacts.value = contacts.value.filter(c => c.id !== contactId)
  }

  function clearContacts() {
    contacts.value = []
  }

  // Helpers para tipos de contacto
  function getContactsByType(type) {
    return contacts.value.filter(c => c.type === type)
  }

  return {
    // State
    contacts,
    // Actions
    setContacts,
    addContact,
    updateContact,
    deleteContact,
    clearContacts,
    getContactsByType
  }
})
