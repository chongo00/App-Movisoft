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

## 🚀 Despliegue

### Build de Producción
```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

### Despliegue en Vercel/Netlify
1. Sube el código a tu repositorio Git
2. Conecta con Vercel/Netlify
3. Configura el comando de build: `npm run build`
4. El directorio de salida es `dist`

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
