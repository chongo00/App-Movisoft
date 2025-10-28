# 🛒 Tu Mercadito - MoviSoft

Una aplicación web moderna para conectar clientes con comercios locales en Cuba, facilitando la compra y venta de productos de manera digital.

## 📋 Descripción

**Tu Mercadito** es una plataforma digital que permite a los usuarios explorar productos de comercios locales, contactar directamente con vendedores a través de WhatsApp, y gestionar su experiencia de compra de forma intuitiva.

## ✨ Características Principales

### 🎯 Funcionalidades Implementadas
- ✅ **Autenticación de usuarios** (clientes y empresas)
- ✅ **Interfaz responsiva** con diseño moderno
- ✅ **Modo oscuro/claro** con persistencia
- ✅ **Sistema de navegación** intuitivo
- ✅ **Categorías de productos** organizadas
- ✅ **Contactos directos por WhatsApp** desde productos
- ✅ **Búsqueda y filtros** avanzados
- ✅ **Animaciones y transiciones** suaves
- ✅ **Componentes reutilizables**
- ✅ **Gestión de estado** con Pinia

### 🔄 En Desarrollo
- 🔄 **Búsqueda avanzada** con sugerencias
- 🔄 **Vista de mapa** para ubicaciones
- 🔄 **Sistema de reseñas** y calificaciones
- 🔄 **Carrito de compras** y pagos
- 🔄 **Panel administrativo** para empresas
- 🔄 **Notificaciones push**
- 🔄 **API REST** completa

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Vue 3** - Framework progresivo de JavaScript
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework de estilos utilitario
- **Pinia** - Gestión de estado para Vue
- **Vue Router** - Enrutamiento oficial para Vue
- **Lucide Vue Next** - Iconos modernos y consistentes

### Backend (Próximamente)
- **Node.js** con Express
- **MongoDB** para base de datos
- **JWT** para autenticación
- **Socket.io** para notificaciones en tiempo real

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** versión 18.0.0 o superior
- **npm** versión 9.0.0 o superior (viene incluido con Node.js)
- **Git** para control de versiones

### Verificar instalación:
```bash
node --version
npm --version
git --version
```

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone [URL_DEL_REPOSITORIO]
cd tu-mercadito
```

### 2. Instalar dependencias
```bash
npm install
```

Este comando instalará todas las dependencias necesarias:
- Vue 3 con Composition API
- Vue Router para navegación
- Pinia para gestión de estado
- TailwindCSS para estilos
- Lucide Vue Next para iconos
- Pinia Plugin PersistedState para persistencia

### 3. Ejecutar en modo desarrollo
```bash
npm run dev
```

### 4. Abrir en navegador
Ve a `http://localhost:3000` (o el puerto que indique la consola)

## 📁 Estructura del Proyecto

```
tu-mercadito/
├── public/                 # Archivos estáticos
│   └── logo.png           # Logo de la aplicación
├── src/
│   ├── assets/            # Recursos estáticos
│   ├── components/        # Componentes reutilizables
│   │   ├── AdvancedFilters.vue    # Filtros avanzados
│   │   ├── BottomNavigation.vue   # Navegación inferior
│   │   ├── LazyImage.vue          # Imágenes con lazy loading
│   │   ├── LoadingButton.vue      # Botones con loading
│   │   ├── Modal.vue              # Modales reutilizables
│   │   ├── ProductSkeleton.vue    # Skeleton loaders
│   │   ├── StarRating.vue         # Sistema de calificaciones
│   │   ├── ThemeToggle.vue        # Toggle modo oscuro
│   │   └── Tooltip.vue            # Tooltips informativos
│   ├── layouts/           # Layouts de la aplicación
│   │   └── UserLayout.vue
│   ├── router/            # Configuración de rutas
│   │   ├── guards.js      # Guards de navegación
│   │   └── index.js       # Configuración de rutas
│   ├── stores/            # Gestión de estado (Pinia)
│   │   ├── auth.js        # Store de autenticación
│   │   └── theme.js       # Store de tema
│   ├── views/             # Vistas/páginas
│   │   ├── auth/          # Páginas de autenticación
│   │   │   ├── LoginCommonView.vue
│   │   │   ├── LoginCompanyView.vue
│   │   │   ├── RegisterCommonView.vue
│   │   │   └── RegisterCompanyView.vue
│   │   ├── public/        # Páginas públicas
│   │   │   └── HomeView.vue
│   │   └── user/          # Páginas de usuario autenticado
│   │       ├── CategoriesView.vue
│   │       ├── MapView.vue
│   │       ├── ProfileView.vue
│   │       └── SearchView.vue
│   ├── App.vue            # Componente raíz
│   ├── main.js            # Punto de entrada
│   └── style.css          # Estilos globales
├── tailwind.config.js     # Configuración de Tailwind CSS
├── vite.config.js         # Configuración de Vite
├── package.json           # Dependencias y scripts
├── README.md              # Este archivo
└── .gitignore            # Archivos ignorados por Git
```

## 🎮 Scripts Disponibles

```bash
# Ejecutar en modo desarrollo con hot-reload
npm run dev

# Construir para producción
npm run build

# Vista previa de la build de producción
npm run preview
```

## 🎨 Características de UI/UX

### Tema Oscuro/Claro
- **Persistente**: Se guarda la preferencia del usuario en localStorage
- **Automático**: Se aplica en todas las vistas automáticamente
- **Accesible**: Alto contraste y buena legibilidad

### Animaciones y Transiciones
- **Fade-in escalonado** para elementos de lista
- **Hover effects** suaves en todos los componentes
- **Transiciones de página** fluidas
- **Loading states** para mejor UX
- **Skeleton loaders** durante carga

### Componentes Reutilizables
- **Modal**: Diálogos personalizables con acciones
- **Tooltip**: Ayudas contextuales
- **LoadingButton**: Botones con estados de carga y spinners
- **ToastNotification**: Notificaciones no intrusivas
- **LazyImage**: Imágenes con carga diferida y blur placeholder
- **StarRating**: Sistema de calificaciones con estrellas
- **AdvancedFilters**: Panel lateral con sliders y dropdowns
- **ThemeToggle**: Botón para cambiar tema con variantes

### Contacto por WhatsApp
- **Botón directo** en cada producto (esquina superior derecha)
- **Mensaje predefinido** automático
- **Protección**: Solo usuarios autenticados pueden contactar
- **Fallback**: Mensaje si no hay enlace configurado

## 🔐 Autenticación y Roles

### Tipos de Usuario
- **Cliente**: Usuario común que compra productos
- **Empresa**: Comercio que vende productos

### Rutas Protegidas
- `/app/*`: Solo usuarios autenticados
- `/dashboard/*`: Solo usuarios empresa (próximamente)
- `/auth/*`: Solo usuarios no autenticados

## 📱 Diseño Responsivo

La aplicación está optimizada para:
- **Móviles** (320px+)
- **Tablets** (768px+)
- **Desktop** (1024px+)

## 🧪 Testing

```bash
# Ejecutar tests (cuando se implementen)
npm run test

# Ejecutar tests con coverage
npm run test:coverage
```

## 🚀 Despliegue y Vistas Preliminares

### Despliegue Automático en Vercel (Recomendado)

#### Opción 1: Despliegue Directo desde GitHub
1. **Ve a [vercel.com](https://vercel.com)**
2. **Importa tu repositorio**: `github.com/chongo00/App-Movisoft`
3. **Configura automáticamente** (Vercel detecta Vite automáticamente)
4. **¡Listo!** Obtén una URL como: `https://app-movisoft.vercel.app`

#### Opción 2: Despliegue Manual
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Para producción
vercel --prod
```

### Despliegue en Netlify

#### Desde GitHub (Automático)
1. **Ve a [netlify.com](https://netlify.com)**
2. **Conecta tu repositorio GitHub**
3. **Configura build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **¡Desplegado!** URL automática generada

#### Deploy Manual
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Desplegar
netlify deploy --prod --dir=dist
```

### GitHub Pages (Gratuito)

#### Configuración del Proyecto
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar scripts al package.json
"scripts": {
  "deploy": "gh-pages -d dist",
  "build-deploy": "npm run build && npm run deploy"
}
```

#### Configurar Vite para GitHub Pages
```javascript
// vite.config.js
export default defineConfig({
  base: '/App-Movisoft/', // Nombre de tu repo
  build: {
    outDir: 'dist'
  }
})
```

#### Desplegar
```bash
# Construir y desplegar
npm run build-deploy

# URL final: https://chongo00.github.io/App-Movisoft/
```

### Preview de Pull Requests

#### Vercel + GitHub
- **Cada PR** genera automáticamente una preview URL
- **Comentarios** en el PR con el enlace de preview
- **Deploy previews** para testing antes del merge

#### Netlify + GitHub
- **Deploy previews** automáticos en cada PR
- **URLs temporales** para testing
- **Integración con checks** de GitHub

### Configuración de Branch Protection
```yaml
# .github/workflows/preview.yml
name: Preview Deployment
on:
  pull_request:
    branches: [ main ]

jobs:
  preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: netlify/actions/cli@master
        with:
          args: deploy --dir=dist --alias=$BRANCH
```

---

## 🔄 Estrategia Offline-First

### Arquitectura Offline-First Implementada

#### 1. **Service Worker para Cache**
```javascript
// public/sw.js (por implementar)
const CACHE_NAME = 'tu-mercadito-v1';

// Archivos para cachear
const STATIC_CACHE = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  // ... otros assets críticos
];

// Cache de runtime para API calls
const RUNTIME_CACHE = 'runtime-cache';

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_CACHE))
  );
});

// Estrategia Cache First para assets estáticos
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/api/')) {
    // Network First para APIs
    event.respondWith(networkFirstStrategy(event.request));
  } else {
    // Cache First para assets
    event.respondWith(cacheFirstStrategy(event.request));
  }
});

// Network First Strategy
async function networkFirstStrategy(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || new Response('Offline', { status: 503 });
  }
}

// Cache First Strategy
async function cacheFirstStrategy(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Fallback para archivos críticos
    if (request.destination === 'document') {
      return caches.match('/offline.html');
    }
  }
}
```

#### 2. **IndexedDB para Datos Locales**
```javascript
// src/utils/indexedDB.js
class LocalDatabase {
  constructor() {
    this.dbName = 'TuMercaditoDB';
    this.version = 1;
  }

  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        
        // Store para productos favoritos
        if (!db.objectStoreNames.contains('favorites')) {
          db.createObjectStore('favorites', { keyPath: 'id' });
        }
        
        // Store para carrito de compras
        if (!db.objectStoreNames.contains('cart')) {
          db.createObjectStore('cart', { keyPath: 'id' });
        }
        
        // Store para datos de usuario
        if (!db.objectStoreNames.contains('userData')) {
          db.createObjectStore('userData', { keyPath: 'key' });
        }
        
        // Store para búsquedas recientes
        if (!db.objectStoreNames.contains('recentSearches')) {
          db.createObjectStore('recentSearches', { keyPath: 'id', autoIncrement: true });
        }
      };
    });
  }

  async saveToStore(storeName, data) {
    const db = await this.init();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.put(data);
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async getFromStore(storeName, key) {
    const db = await this.init();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([storeName], 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.get(key);
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async getAllFromStore(storeName) {
    const db = await this.init();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([storeName], 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.getAll();
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
}

export default new LocalDatabase();
```

#### 3. **Persistencia de Estado con Pinia**
```javascript
// src/stores/cart.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import localDB from '@/utils/indexedDB'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const isOnline = ref(navigator.onLine)

  // Cargar datos del localStorage/IndexedDB al iniciar
  const loadCart = async () => {
    try {
      const savedCart = await localDB.getAllFromStore('cart')
      if (savedCart && savedCart.length > 0) {
        items.value = savedCart
      }
    } catch (error) {
      console.error('Error loading cart:', error)
    }
  }

  // Guardar en IndexedDB cuando cambie
  const saveCart = async () => {
    try {
      // Limpiar store anterior
      const existingItems = await localDB.getAllFromStore('cart')
      for (const item of existingItems) {
        await localDB.saveToStore('cart', { ...item, _deleted: true })
      }
      
      // Guardar items actuales
      for (const item of items.value) {
        await localDB.saveToStore('cart', item)
      }
    } catch (error) {
      console.error('Error saving cart:', error)
    }
  }

  // Sincronizar con servidor cuando esté online
  const syncWithServer = async () => {
    if (!isOnline.value) return
    
    try {
      // Enviar cambios pendientes al servidor
      const pendingChanges = items.value.filter(item => item.pendingSync)
      if (pendingChanges.length > 0) {
        await fetch('/api/cart/sync', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ changes: pendingChanges })
        })
        
        // Marcar como sincronizados
        pendingChanges.forEach(item => {
          item.pendingSync = false
        })
      }
    } catch (error) {
      console.error('Error syncing cart:', error)
    }
  }

  // Detectar cambios de conectividad
  window.addEventListener('online', () => {
    isOnline.value = true
    syncWithServer()
  })

  window.addEventListener('offline', () => {
    isOnline.value = false
  })

  // Watch para guardar automáticamente
  watch(items, saveCart, { deep: true })

  return {
    items,
    isOnline,
    loadCart,
    syncWithServer,
    // ... otras funciones del carrito
  }
}, {
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'cart',
        storage: localStorage,
      }
    ]
  }
})
```

#### 4. **PWA Manifest**
```json
// public/manifest.json
{
  "name": "Tu Mercadito",
  "short_name": "Mercadito",
  "description": "Conecta con comercios locales",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2196F3",
  "orientation": "portrait",
  "scope": "/",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "categories": ["shopping", "business"],
  "lang": "es",
  "dir": "ltr"
}
```

#### 5. **Registro del Service Worker**
```javascript
// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import './style.css'
import { useThemeStore } from './stores/theme'

// Registrar Service Worker para PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Detectar cambios de conectividad
window.addEventListener('online', () => {
  console.log('Conexión restablecida');
  // Trigger sync de datos pendientes
});

window.addEventListener('offline', () => {
  console.log('Modo offline activado');
  // Mostrar indicador de offline
});

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia)
app.use(router)

// Inicializar el store de tema para aplicar el tema guardado
const themeStore = useThemeStore()

app.mount('#app')
```

#### 6. **Componente de Estado de Conectividad**
```vue
<!-- src/components/ConnectivityStatus.vue -->
<template>
  <div 
    v-if="!isOnline" 
    class="fixed top-0 left-0 right-0 bg-orange-500 text-white px-4 py-2 text-center text-sm z-50"
  >
    <div class="flex items-center justify-center gap-2">
      <WifiOff :size="16" />
      <span>Modo offline - Los cambios se sincronizarán cuando vuelvas a conectarte</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { WifiOff } from 'lucide-vue-next'

const isOnline = ref(navigator.onLine)

const updateOnlineStatus = () => {
  isOnline.value = navigator.onLine
}

onMounted(() => {
  window.addEventListener('online', updateOnlineStatus)
  window.addEventListener('offline', updateOnlineStatus)
})

onUnmounted(() => {
  window.removeEventListener('online', updateOnlineStatus)
  window.removeEventListener('offline', updateOnlineStatus)
})
</script>
```

#### 7. **Estrategias de Sincronización**

##### **Background Sync**
```javascript
// Service Worker - Background Sync
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    // Obtener datos pendientes de IndexedDB
    const pendingData = await getPendingData();
    
    // Enviar al servidor
    for (const data of pendingData) {
      await fetch('/api/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    }
    
    // Limpiar datos sincronizados
    await clearPendingData();
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}
```

##### **Queue de Cambios**
```javascript
// src/utils/syncQueue.js
class SyncQueue {
  constructor() {
    this.queue = []
    this.isProcessing = false
  }

  async addToQueue(action) {
    this.queue.push(action)
    await this.processQueue()
  }

  async processQueue() {
    if (this.isProcessing || !navigator.onLine) return
    
    this.isProcessing = true
    
    while (this.queue.length > 0 && navigator.onLine) {
      const action = this.queue.shift()
      try {
        await action()
      } catch (error) {
        console.error('Sync action failed:', error)
        // Re-queue para retry
        this.queue.unshift(action)
        break
      }
    }
    
    this.isProcessing = false
  }
}

export default new SyncQueue()
```

---

## 🎯 Beneficios de la Estrategia Offline-First

### Para Usuarios
- ✅ **Acceso instantáneo** sin conexión
- ✅ **Funcionalidad completa** offline
- ✅ **Sincronización automática** al reconectar
- ✅ **No pérdida de datos** por conexión inestable
- ✅ **Experiencia nativa** como app móvil

### Para el Negocio
- ✅ **Mayor engagement** de usuarios
- ✅ **Mejor experiencia** en áreas con mala conexión
- ✅ **Reducción de carga** en servidor
- ✅ **Confianza del usuario** (no pierde trabajo)
- ✅ **Posibilidad de PWA** (instalable en móvil)

### Técnicamente
- ✅ **Performance superior** con cache
- ✅ **Escalabilidad** del backend
- ✅ **Resiliencia** a fallos de red
- ✅ **Desarrollo modular** con Service Workers
- ✅ **Actualizaciones automáticas** de la app

## 🤝 Contribución

### Flujo de Trabajo
1. **Fork** el proyecto
2. Crea una **branch** para tu feature: `git checkout -b feature/nueva-funcionalidad`
3. **Commit** tus cambios: `git commit -m 'Agrega nueva funcionalidad'`
4. **Push** a la branch: `git push origin feature/nueva-funcionalidad`
5. Abre un **Pull Request**

### Estándares de Código
- Usar **Vue 3 Composition API**
- Seguir las **convenciones de Vue**
- Usar **TypeScript** en futuras versiones
- Mantener **documentación actualizada**
- Escribir **tests** para nuevas funcionalidades

### Convenciones de Commits
```
feat: nueva funcionalidad
fix: corrección de bug
docs: cambios en documentación
style: cambios de estilo (formateo, etc.)
refactor: refactorización de código
test: agregar o modificar tests
chore: cambios en herramientas, configuración, etc.
```

## 👥 Equipo

- **Desarrollador Principal**: [Tu Nombre]
- **Equipo**: Desarrolladores de MoviSoft
- **Diseño UX/UI**: Equipo de diseño
- **QA**: Equipo de testing

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o consultas:
- Email: soporte@movisoft.cu
- WhatsApp: +53 5XXX XXXX
- Documentación: [Link a docs]

## 🔄 Estado Actual del Proyecto

### ✅ Completado (Sprint 1)
- [x] **Autenticación básica** con roles
- [x] **Interfaz responsive** completa
- [x] **Modo oscuro/claro** persistente
- [x] **Sistema de navegación** completo
- [x] **Componentes reutilizables** avanzados
- [x] **Contactos WhatsApp** integrados
- [x] **Animaciones y UX** premium
- [x] **Gestión de estado** robusta

### 🔄 En Desarrollo (Sprint 2)
- [ ] Implementar **API REST** completa
- [ ] **Base de datos MongoDB**
- [ ] **Autenticación JWT** real
- [ ] **Panel administrativo** para empresas
- [ ] **Sistema de reseñas** y calificaciones
- [ ] **Carrito de compras** y pagos
- [ ] **Notificaciones push**
- [ ] **Geolocalización** real

### 🔮 Próximas Versiones
- [ ] **Modo offline-first** con Service Workers
- [ ] **PWA** completa
- [ ] **Analytics** y métricas
- [ ] **Multi-idioma** (español/inglés)
- [ ] **Integración redes sociales**
- [ ] **Sistema de cupones/descuentos**

---

**Desarrollado con ❤️ por MoviSoft**
