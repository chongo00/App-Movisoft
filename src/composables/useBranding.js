import { computed } from 'vue'

export function useBranding() {
  const logoSrc = computed(() => {
    const base = import.meta.env.BASE_URL || '/'
    const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
    return `${normalizedBase}/logo.png`
  })

  return {
    logoSrc
  }
}
