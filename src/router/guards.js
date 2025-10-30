import { useAuthStore } from '../stores/auth'

/**
 * Guard para rutas que requieren autenticación
 */
export function requireAuth(to, from, next) {
  const authStore = useAuthStore()
  
  if (!authStore.isAuthenticated) {
    next({ name: 'home' })
  } else {
    next()
  }
}

/**
 * Guard para rutas que requieren rol de empresa
 */
export function requireCompanyRole(to, from, next) {
  const authStore = useAuthStore()
  
  if (!authStore.isAuthenticated) {
    next({ name: 'home' })
  } else if (!authStore.isCompanyUser) {
    // Si está autenticado pero no es empresa, redirigir al home
    next({ name: 'home' })
  } else {
    next()
  }
}

/**
 * Guard para rutas que requieren rol de usuario común
 */
export function requireCommonRole(to, from, next) {
  const authStore = useAuthStore()
  
  if (!authStore.isAuthenticated) {
    next({ name: 'home' })
  } else if (!authStore.isCommonUser) {
    // Si está autenticado pero no es usuario común, redirigir a dashboard
    next({ name: 'company-dashboard' })
  } else {
    next()
  }
}

/**
 * Guard para rutas solo para usuarios NO autenticados
 */
export function requireGuest(to, from, next) {
  const authStore = useAuthStore()
  
  if (authStore.isAuthenticated) {
    // Redirigir según el rol
    if (authStore.isCompanyUser) {
      next({ name: 'company-dashboard' })
    } else {
      next({ name: 'home' })
    }
  } else {
    next()
  }
}
