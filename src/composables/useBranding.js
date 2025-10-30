import { computed } from 'vue'

export function useBranding() {
  const logoSrc = computed(() => `${import.meta.env.BASE_URL}logo.png`)

  return {
    logoSrc
  }
}
