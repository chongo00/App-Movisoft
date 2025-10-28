import { createRouter, createWebHistory } from 'vue-router'
import { requireAuth, requireCompanyRole, requireGuest } from './guards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ============================================
    // RUTAS PÚBLICAS (sin autenticación)
    // ============================================
    {
      path: '/',
      name: 'home',
      component: () => import('../views/public/HomeView.vue'),
      meta: { layout: 'public' }
    },
    
    // ============================================
    // AUTENTICACIÓN
    // ============================================
    {
      path: '/auth',
      component: () => import('../layouts/AuthLayout.vue'),
      beforeEnter: requireGuest,
      children: [
        {
          path: 'login-common',
          name: 'login-common',
          component: () => import('../views/auth/LoginCommonView.vue')
        },
        {
          path: 'login-company',
          name: 'login-company',
          component: () => import('../views/auth/LoginCompanyView.vue')
        },
        {
          path: 'register-common',
          name: 'register-common',
          component: () => import('../views/auth/RegisterCommonView.vue')
        },
        {
          path: 'register-company',
          name: 'register-company',
          component: () => import('../views/auth/RegisterCompanyView.vue')
        }
      ]
    },

    // ============================================
    // RUTAS USUARIO COMÚN (autenticado)
    // ============================================
    {
      path: '/app',
      component: () => import('../layouts/UserLayout.vue'),
      beforeEnter: requireAuth,
      children: [
        {
          path: 'categories',
          name: 'categories',
          component: () => import('../views/user/CategoriesView.vue')
        },
        {
          path: 'search',
          name: 'search',
          component: () => import('../views/user/SearchView.vue')
        },
        {
          path: 'map',
          name: 'map',
          component: () => import('../views/user/MapView.vue')
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('../views/user/ProfileView.vue')
        },
        {
          path: 'product/:id',
          name: 'product-detail',
          component: () => import('../views/user/ProductDetailView.vue')
        },
        {
          path: 'company/:id',
          name: 'company-detail',
          component: () => import('../views/user/CompanyDetailView.vue')
        },
        {
          path: 'company/:id/catalog',
          name: 'company-catalog',
          component: () => import('../views/user/CompanyCatalogView.vue')
        }
      ]
    },

    // ============================================
    // PANEL DE GESTIÓN EMPRESAS
    // ============================================
    {
      path: '/dashboard',
      component: () => import('../layouts/CompanyLayout.vue'),
      beforeEnter: requireCompanyRole,
      children: [
        {
          path: '',
          name: 'company-dashboard',
          component: () => import('../views/company/DashboardView.vue')
        },
        // Gestión de Empresas
        {
          path: 'companies',
          name: 'manage-companies',
          component: () => import('../views/company/CompaniesManageView.vue')
        },
        {
          path: 'companies/create',
          name: 'create-company',
          component: () => import('../views/company/CompanyFormView.vue')
        },
        {
          path: 'companies/:id/edit',
          name: 'edit-company',
          component: () => import('../views/company/CompanyFormView.vue')
        },
        // Gestión de Productos
        {
          path: 'products',
          name: 'manage-products',
          component: () => import('../views/company/ProductsManageView.vue')
        },
        {
          path: 'products/create',
          name: 'create-product',
          component: () => import('../views/company/ProductFormView.vue')
        },
        {
          path: 'products/:id/edit',
          name: 'edit-product',
          component: () => import('../views/company/ProductFormView.vue')
        },
        // Gestión de Contactos
        {
          path: 'contacts',
          name: 'manage-contacts',
          component: () => import('../views/company/ContactsManageView.vue')
        },
        {
          path: 'contacts/create',
          name: 'create-contact',
          component: () => import('../views/company/ContactFormView.vue')
        },
        {
          path: 'contacts/:id/edit',
          name: 'edit-contact',
          component: () => import('../views/company/ContactFormView.vue')
        },
        // Gestión de Localizaciones
        {
          path: 'locations',
          name: 'manage-locations',
          component: () => import('../views/company/LocationsManageView.vue')
        },
        {
          path: 'locations/create',
          name: 'create-location',
          component: () => import('../views/company/LocationFormView.vue')
        },
        {
          path: 'locations/:id/edit',
          name: 'edit-location',
          component: () => import('../views/company/LocationFormView.vue')
        }
      ]
    },

    // ============================================
    // RUTA 404
    // ============================================
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
