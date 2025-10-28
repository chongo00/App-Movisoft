# 🏗️ Arquitectura del Sistema - Tu Mercadito

## 📋 Resumen

Sistema de gestión de empresas y catálogo de productos según especificaciones del informe técnico de maquetación.

## 🎯 Roles de Usuario

### 1. Usuario Común (Público/Autenticado)
- **Acceso**: Visualización de catálogo, búsqueda, filtros
- **Sin autenticación**: Home pública con productos destacados
- **Con autenticación**: Acceso completo a búsqueda, categorías, mapa, perfil

### 2. Usuario Empresa
- **Acceso**: CRUD completo de empresas, productos, contactos, localizaciones
- **Panel**: Dashboard con estadísticas y gestión
- **Permisos**: Solo puede acceder a sus propios recursos

## 🗂️ Estructura de Carpetas

```
src/
├── stores/                 # Pinia stores (offline-first)
│   ├── auth.js            # Autenticación y roles
│   ├── products.js        # Gestión de productos
│   ├── companies.js       # Gestión de empresas
│   ├── locations.js       # Localizaciones
│   └── contacts.js        # Contactos
│
├── layouts/               # Layouts principales
│   ├── AuthLayout.vue     # Layout de autenticación
│   ├── UserLayout.vue     # Layout para usuarios comunes
│   └── CompanyLayout.vue  # Layout para panel empresas
│
├── views/
│   ├── public/            # Vistas públicas (sin auth)
│   │   └── HomeView.vue
│   │
│   ├── auth/              # Vistas de autenticación
│   │   ├── LoginCommonView.vue
│   │   ├── LoginCompanyView.vue
│   │   ├── RegisterCommonView.vue
│   │   └── RegisterCompanyView.vue
│   │
│   ├── user/              # Vistas usuario común (con auth)
│   │   ├── CategoriesView.vue
│   │   ├── SearchView.vue
│   │   ├── MapView.vue
│   │   ├── ProfileView.vue
│   │   ├── ProductDetailView.vue
│   │   ├── CompanyDetailView.vue
│   │   └── CompanyCatalogView.vue
│   │
│   └── company/           # Vistas panel empresa
│       ├── DashboardView.vue
│       ├── CompaniesManageView.vue
│       ├── CompanyFormView.vue
│       ├── ProductsManageView.vue
│       ├── ProductFormView.vue
│       ├── ContactsManageView.vue
│       ├── ContactFormView.vue
│       ├── LocationsManageView.vue
│       └── LocationFormView.vue
│
├── components/            # Componentes reutilizables
│   ├── BottomNavigation.vue
│   └── MoviSoftLogo.vue
│
└── router/               # Configuración de rutas
    ├── index.js          # Definición de rutas
    └── guards.js         # Guards de navegación
```

## 🔐 Sistema de Autenticación

### Guards de Navegación

```javascript
// requireAuth - Requiere estar autenticado
// requireCompanyRole - Requiere rol de empresa
// requireCommonRole - Requiere rol de usuario común
// requireGuest - Solo para no autenticados
```

### Flujo de Autenticación

1. **Home Pública (`/`)**: Acceso sin autenticación
2. **Login/Register**: 4 vistas separadas por rol
3. **Redirección**: 
   - Usuario Común → `/app/categories`
   - Usuario Empresa → `/dashboard`

## 🛣️ Rutas del Sistema

### Rutas Públicas
```
/                          # Home pública
```

### Rutas de Autenticación
```
/auth/login-common         # Login usuario común
/auth/login-company        # Login empresa
/auth/register-common      # Registro usuario común
/auth/register-company     # Registro empresa
```

### Rutas Usuario Común (requiere auth)
```
/app/categories            # Categorías
/app/search                # Búsqueda
/app/map                   # Mapa
/app/profile               # Perfil
/app/product/:id           # Detalle producto
/app/company/:id           # Detalle empresa
/app/company/:id/catalog   # Catálogo empresa
```

### Rutas Panel Empresa (requiere rol empresa)
```
/dashboard                 # Dashboard principal
/dashboard/companies       # Lista empresas
/dashboard/companies/create
/dashboard/companies/:id/edit
/dashboard/products        # Lista productos
/dashboard/products/create
/dashboard/products/:id/edit
/dashboard/contacts        # Lista contactos
/dashboard/contacts/create
/dashboard/contacts/:id/edit
/dashboard/locations       # Lista localizaciones
/dashboard/locations/create
/dashboard/locations/:id/edit
```

## 💾 State Management con Pinia

### Auth Store
```javascript
// Estado
user, token, role

// Getters
isAuthenticated, isCommonUser, isCompanyUser

// Actions
setAuth(), logout(), updateProfile()
```

### Products Store
```javascript
// Estado
products, categories, filters

// Getters
filteredProducts, popularProducts

// Actions
setProducts(), addProduct(), updateProduct(), 
deleteProduct(), setFilters()
```

### Companies Store
```javascript
// Estado
companies, myCompanies, currentCompany

// Actions
setCompanies(), addCompany(), updateCompany(), 
deleteCompany()
```

## 🔌 Offline-First Implementation

### Configuración Actual

**Pinia Persist Plugin** ya configurado en:
- `src/main.js`
- Stores con `persist: true`

### Datos que se Persisten

✅ **auth** → localStorage
✅ **products** → localStorage  
✅ **companies** → localStorage

### Cómo Funciona

1. **Lectura**: Datos se cargan desde localStorage al iniciar
2. **Escritura**: Cambios se guardan automáticamente
3. **Sincronización**: Cuando hay conexión, sincronizar con backend

### Próximos Pasos para Offline-First

#### 1. Service Worker (PWA)
```bash
npm install vite-plugin-pwa
```

Crear `vite-sw.config.js`:
```javascript
import { VitePWA } from 'vite-plugin-pwa'

export default {
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.tumercadito\.cu\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 // 24 horas
              }
            }
          }
        ]
      }
    })
  ]
}
```

#### 2. Cola de Sincronización

Crear `src/stores/sync.js`:
```javascript
import { defineStore } from 'pinia'

export const useSyncStore = defineStore('sync', () => {
  const pendingActions = ref([])
  const isOnline = ref(navigator.onLine)

  function addPendingAction(action) {
    pendingActions.value.push({
      id: Date.now(),
      ...action,
      timestamp: new Date().toISOString()
    })
  }

  async function syncPendingActions() {
    if (!isOnline.value || !pendingActions.value.length) return

    for (const action of pendingActions.value) {
      try {
        await executeAction(action)
        removePendingAction(action.id)
      } catch (error) {
        console.error('Sync error:', error)
      }
    }
  }

  return {
    pendingActions,
    isOnline,
    addPendingAction,
    syncPendingActions
  }
}, {
  persist: true
})
```

#### 3. Detector de Conexión

En `src/main.js`:
```javascript
import { useSyncStore } from './stores/sync'

const syncStore = useSyncStore()

window.addEventListener('online', () => {
  syncStore.isOnline = true
  syncStore.syncPendingActions()
})

window.addEventListener('offline', () => {
  syncStore.isOnline = false
})
```

#### 4. IndexedDB para Grandes Volúmenes

Para imágenes y datos pesados:
```bash
npm install localforage
```

```javascript
import localforage from 'localforage'

const imagesDB = localforage.createInstance({
  name: 'tu-mercadito-images'
})

// Guardar imagen
await imagesDB.setItem('product-1-main', blob)

// Recuperar imagen
const image = await imagesDB.getItem('product-1-main')
```

## 🔄 Integración con Backend

### API Service (crear `src/services/api.js`)

```javascript
import axios from 'axios'
import { useAuthStore } from '../stores/auth'
import { useSyncStore } from '../stores/sync'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api'
})

// Interceptor para token
api.interceptors.request.use(config => {
  const authStore = useAuthStore()
  if (authStore.token) {
    config.headers.Authorization = `Bearer ${authStore.token}`
  }
  return config
})

// Interceptor para offline
api.interceptors.response.use(
  response => response,
  error => {
    const syncStore = useSyncStore()
    
    if (!navigator.onLine) {
      // Guardar en cola
      syncStore.addPendingAction({
        type: 'API_CALL',
        config: error.config
      })
      return Promise.reject({ offline: true, ...error })
    }
    
    return Promise.reject(error)
  }
)

export default api
```

### Ejemplo de Uso en Store

```javascript
import api from '../services/api'

export const useProductsStore = defineStore('products', () => {
  // ... estado

  async function fetchProducts() {
    try {
      const { data } = await api.get('/products')
      setProducts(data)
    } catch (error) {
      if (!error.offline) {
        console.error('Error fetching products:', error)
      }
      // Si está offline, usa datos en caché (localStorage)
    }
  }

  async function createProduct(productData) {
    try {
      const { data } = await api.post('/products', productData)
      addProduct(data)
      return data
    } catch (error) {
      if (error.offline) {
        // Agregar a cola de sincronización
        const tempId = `temp-${Date.now()}`
        addProduct({ ...productData, id: tempId, _pending: true })
        return { ...productData, id: tempId }
      }
      throw error
    }
  }

  return { fetchProducts, createProduct }
})
```

## 🎨 Sistema de Diseño

### Colores
- **Primary**: `#2196F3` (Azul)
- **Variantes**: primary-50 a primary-900
- **Backgrounds**: white, gray-50, gray-100
- **Text**: gray-900, gray-600, gray-500

### Componentes Base
- `btn-primary`: Botón primario azul
- `btn-secondary`: Botón secundario outline
- `input-field`: Campo de entrada estilizado
- `card`: Tarjeta con sombra

## 📱 Responsive Design

- **Mobile**: 320px - 768px (diseño principal)
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Layouts Responsive
- **UserLayout**: Bottom navigation (móvil)
- **CompanyLayout**: Sidebar (desktop) + hamburger (móvil)

## ⚡ Optimizaciones

### Lazy Loading
- Todas las rutas usan `() => import()` 
- Imágenes con `loading="lazy"`

### Code Splitting
- Layouts separados
- Vistas cargadas bajo demanda

### Performance
- Pinia para estado global (más ligero que Vuex)
- LocalStorage para persistencia
- IndexedDB para datos grandes

## 🚀 Próximas Implementaciones

### Fase 1: CRUD Completo
- [ ] Formularios de empresa con validaciones
- [ ] Formularios de producto con upload de imágenes
- [ ] Formularios de contacto
- [ ] Formularios de localización

### Fase 2: Búsqueda Avanzada
- [ ] Filtros múltiples
- [ ] Búsqueda por texto
- [ ] Ordenamiento
- [ ] Paginación

### Fase 3: Offline-First
- [ ] Service Worker (PWA)
- [ ] Cola de sincronización
- [ ] IndexedDB para imágenes
- [ ] Indicador de estado de conexión

### Fase 4: Geolocalización
- [ ] Integración con Maps API
- [ ] Filtro por distancia
- [ ] Ruta a tienda

### Fase 5: Notificaciones
- [ ] WhatsApp Business API
- [ ] Sistema de notificaciones

## 📝 Notas de Desarrollo

### Variables de Entorno

Crear `.env`:
```
VITE_API_URL=http://localhost:3001/api
VITE_WHATSAPP_API=https://api.whatsapp.com/v1
```

### Testing

Usar datos mock en stores mientras no haya backend:
```javascript
// Mock data en stores
const products = ref([
  { id: 1, name: 'Producto 1', ... }
])
```

### Migración a Backend

Cuando el backend esté listo:
1. Reemplazar mock data con llamadas a API
2. Configurar interceptores de axios
3. Implementar cola de sincronización
4. Testing de offline/online

---

**Autor**: Equipo Tu Mercadito  
**Fecha**: 2024  
**Versión**: 2.0 - Reestructuración según informe técnico
