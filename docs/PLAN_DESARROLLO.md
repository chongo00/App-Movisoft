# 📅 Plan de Desarrollo - Tu Mercadito v2.0

## 👥 Equipo de Desarrollo

- **Frontend Developer 1** (FE1) - Senior
- **Frontend Developer 2** (FE2) - Mid-level
- **Backend Developer 1** (BE1) - Full-stack

---

## 🎯 Resumen Ejecutivo

**Duración Total Estimada**: 8-10 semanas  
**Fases**: 4 fases principales  
**Hitos**: 8 milestones críticos

---

## 📊 Fase 1: Completar Frontend Base (2-3 semanas)

### Sprint 1.1 - Formularios y Validaciones (1 semana)

#### **FE1 - Formularios de Empresa (5 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Formulario crear/editar empresa | 2 días | Alta |
| Validaciones con Vee-Validate | 1 día | Alta |
| Manejo de errores y feedback | 1 día | Media |
| Testing de formularios | 1 día | Media |

**Entregables**:
- `CompanyFormView.vue` completamente funcional
- Validaciones: nombre, email, teléfono, categoría
- Mensajes de error en español

#### **FE2 - Formularios de Productos (5 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Formulario crear/editar producto | 2 días | Alta |
| Upload de imágenes con preview | 1.5 días | Alta |
| Validaciones de campos | 1 día | Alta |
| Testing de formularios | 0.5 día | Media |

**Entregables**:
- `ProductFormView.vue` completamente funcional
- Sistema de upload de imágenes
- Preview de imágenes antes de guardar

#### **BE1 - API Base (5 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Setup proyecto Node.js + Express | 1 día | Alta |
| Configurar base de datos (PostgreSQL/MongoDB) | 1 día | Alta |
| Modelos: User, Company, Product | 1 día | Alta |
| Endpoints de autenticación (JWT) | 1.5 días | Alta |
| Documentación API (Swagger) | 0.5 día | Media |

**Entregables**:
- API REST funcional en puerto 3001
- Endpoints: `POST /auth/login`, `POST /auth/register`
- Documentación en Swagger
- Variables de entorno configuradas

---

### Sprint 1.2 - Más Formularios y Conexión (1 semana)

#### **FE1 - Formularios Contactos y Localizaciones (5 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Formulario de contactos | 2 días | Media |
| Formulario de localizaciones | 2 días | Media |
| Integración con mapa (opcional) | 1 día | Baja |

**Entregables**:
- `ContactFormView.vue` funcional
- `LocationFormView.vue` funcional
- Validaciones completas

#### **FE2 - Servicio API y Conexión (5 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Crear `src/services/api.js` | 1 día | Alta |
| Interceptores axios (auth, errors) | 1 día | Alta |
| Conectar stores con API real | 2 días | Alta |
| Testing de integración | 1 día | Media |

**Entregables**:
- Servicio API con interceptores
- Stores conectados al backend
- Manejo de errores centralizado

#### **BE1 - CRUD Completo (5 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Endpoints empresas (CRUD) | 1.5 días | Alta |
| Endpoints productos (CRUD) | 1.5 días | Alta |
| Endpoints contactos (CRUD) | 1 día | Media |
| Endpoints localizaciones (CRUD) | 1 día | Media |

**Entregables**:
- CRUD completo de Companies
- CRUD completo de Products
- CRUD completo de Contacts
- CRUD completo de Locations

---

### Sprint 1.3 - Búsqueda y Filtros (3-5 días)

#### **FE1 - Búsqueda Avanzada (3 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Vista de búsqueda con filtros | 1.5 días | Alta |
| Filtros múltiples (categoría, precio, ubicación) | 1 día | Alta |
| Paginación de resultados | 0.5 día | Media |

**Entregables**:
- `SearchView.vue` completamente funcional
- Filtros dinámicos
- Paginación

#### **FE2 - Vistas de Detalle (3 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Vista detalle de producto completa | 1.5 días | Alta |
| Vista catálogo por empresa | 1 día | Media |
| Vista detalle de empresa | 0.5 día | Media |

**Entregables**:
- `ProductDetailView.vue` funcional
- `CompanyCatalogView.vue` funcional
- `CompanyDetailView.vue` funcional

#### **BE1 - Búsqueda y Filtros Backend (3 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Endpoint de búsqueda con filtros | 1.5 días | Alta |
| Índices de base de datos | 0.5 día | Alta |
| Optimización de queries | 1 día | Media |

**Entregables**:
- `GET /api/search?q=...&category=...&priceMin=...`
- Queries optimizadas
- Paginación backend

---

## 📊 Fase 2: Features Avanzadas (2-3 semanas)

### Sprint 2.1 - Upload de Imágenes y Storage (1 semana)

#### **FE1 - Componente Upload Mejorado (3 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Componente drag & drop | 1.5 días | Media |
| Crop y resize de imágenes | 1 día | Baja |
| Múltiples imágenes por producto | 0.5 día | Media |

**Entregables**:
- Componente `ImageUpload.vue`
- Drag & drop funcional
- Preview múltiple

#### **FE2 - Optimización de Imágenes (2 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Lazy loading de imágenes | 1 día | Alta |
| Placeholders y skeletons | 1 día | Media |

**Entregables**:
- Imágenes con lazy loading
- Skeleton loaders

#### **BE1 - Storage de Imágenes (5 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Setup Cloudinary/S3 | 1 día | Alta |
| Endpoint upload de imágenes | 1.5 días | Alta |
| Resize automático en servidor | 1 día | Media |
| CDN para servir imágenes | 1.5 días | Media |

**Entregables**:
- `POST /api/upload` funcional
- Integración con Cloudinary/S3
- URLs de imágenes optimizadas

---

### Sprint 2.2 - Geolocalización (1 semana)

#### **FE1 - Mapa Interactivo (5 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Integración Google Maps / Mapbox | 2 días | Alta |
| Marcadores de tiendas en mapa | 1 día | Alta |
| Filtro por distancia | 1 día | Media |
| Ruta a tienda desde ubicación actual | 1 día | Baja |

**Entregables**:
- `MapView.vue` con mapa real
- Marcadores interactivos
- Cálculo de distancias

#### **FE2 - Selector de Ubicación (3 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Componente selector de ubicación | 1.5 días | Media |
| Autocompletado de direcciones | 1 día | Media |
| Geocoding reverso | 0.5 día | Baja |

**Entregables**:
- Componente `LocationPicker.vue`
- Autocompletado con API

#### **BE1 - Geolocalización Backend (5 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Almacenar coordenadas (lat/lng) | 1 día | Alta |
| Endpoint búsqueda por proximidad | 2 días | Alta |
| Cálculo de distancias | 1 día | Media |
| Caché de resultados geo | 1 día | Baja |

**Entregables**:
- `GET /api/companies/nearby?lat=...&lng=...`
- Queries geoespaciales optimizadas

---

### Sprint 2.3 - WhatsApp Integration (3-5 días)

#### **FE1 - Botones de WhatsApp (2 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Componente botón WhatsApp | 0.5 día | Media |
| Templates de mensajes | 0.5 día | Media |
| Integración en vistas de producto | 1 día | Media |

**Entregables**:
- Componente `WhatsAppButton.vue`
- Mensajes pre-formateados

#### **FE2 - Testing E2E (3 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Setup Cypress/Playwright | 1 día | Media |
| Tests de flujos principales | 2 días | Media |

**Entregables**:
- Tests E2E básicos
- CI/CD con tests

#### **BE1 - WhatsApp Business API (opcional) (5 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Setup Twilio WhatsApp API | 2 días | Baja |
| Endpoint envío de mensajes | 1.5 días | Baja |
| Webhooks para respuestas | 1.5 días | Baja |

**Entregables**:
- API de WhatsApp funcional (opcional)
- Logs de mensajes

---

## 📊 Fase 3: Offline-First Completo (1-2 semanas)

### Sprint 3.1 - PWA Implementation (1 semana)

#### **FE1 - Service Worker (5 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Setup vite-plugin-pwa | 1 día | Alta |
| Configurar workbox strategies | 2 días | Alta |
| Cache de assets estáticos | 1 día | Alta |
| Manifest.json y icons | 1 día | Media |

**Entregables**:
- PWA instalable
- Service Worker funcional
- Cache strategies configuradas

#### **FE2 - Cola de Sincronización (5 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Store de sincronización | 2 días | Alta |
| Detector online/offline | 1 día | Alta |
| Auto-sync cuando vuelve conexión | 1.5 días | Alta |
| UI de estado de sync | 0.5 día | Media |

**Entregables**:
- `useSyncStore()` funcional
- Indicador de estado offline
- Sincronización automática

#### **BE1 - Endpoints de Sync (3 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Endpoint batch operations | 1.5 días | Alta |
| Manejo de conflictos | 1 día | Media |
| Timestamps y versionado | 0.5 día | Media |

**Entregables**:
- `POST /api/sync` para operaciones batch
- Resolución de conflictos

---

### Sprint 3.2 - IndexedDB (3-5 días)

#### **FE1 - IndexedDB para Imágenes (3 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Setup localforage | 0.5 día | Media |
| Cache de imágenes en IndexedDB | 1.5 días | Media |
| Fallback a cache cuando offline | 1 día | Media |

**Entregables**:
- Imágenes disponibles offline
- Sistema de caché inteligente

#### **FE2 - Optimización de Performance (3 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Code splitting adicional | 1 día | Media |
| Tree shaking de librerías | 1 día | Baja |
| Lighthouse optimization | 1 día | Media |

**Entregables**:
- Score Lighthouse > 90
- Bundle size optimizado

#### **BE1 - API Caching (2 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Redis para cache de queries | 1.5 días | Media |
| Invalidación de cache | 0.5 día | Media |

**Entregables**:
- Cache de API con Redis
- Mejora de performance

---

## 📊 Fase 4: Producción y Features Extras (2-3 semanas)

### Sprint 4.1 - Seguridad y Optimización (1 semana)

#### **FE1 - Seguridad Frontend (3 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| XSS prevention | 1 día | Alta |
| CSRF tokens | 1 día | Alta |
| Rate limiting en forms | 1 día | Media |

**Entregables**:
- Formularios seguros
- Validación frontend/backend

#### **FE2 - Accesibilidad (3 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| ARIA labels | 1 día | Media |
| Keyboard navigation | 1 día | Media |
| Screen reader testing | 1 día | Baja |

**Entregables**:
- WCAG 2.1 AA compliance
- Accesibilidad mejorada

#### **BE1 - Seguridad Backend (5 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Helmet.js para headers | 0.5 día | Alta |
| Rate limiting (express-rate-limit) | 1 día | Alta |
| Input validation (Joi/Yup) | 1.5 días | Alta |
| SQL injection prevention | 1 día | Alta |
| Setup SSL/HTTPS | 1 día | Alta |

**Entregables**:
- API segura en producción
- Certificados SSL
- Logs de seguridad

---

### Sprint 4.2 - Deploy y Monitoring (1 semana)

#### **FE1 - Deploy Frontend (3 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Setup Vercel/Netlify | 1 día | Alta |
| CI/CD con GitHub Actions | 1 día | Alta |
| Variables de entorno producción | 1 día | Alta |

**Entregables**:
- Frontend en producción
- Pipeline CI/CD

#### **FE2 - Analytics y Monitoring (3 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Google Analytics 4 | 1 día | Media |
| Sentry para errores | 1 día | Alta |
| Performance monitoring | 1 día | Media |

**Entregables**:
- Analytics configurado
- Error tracking

#### **BE1 - Deploy Backend (5 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Setup servidor (AWS/DigitalOcean) | 1.5 días | Alta |
| Docker containerization | 1 día | Media |
| CI/CD backend | 1 día | Alta |
| Backup automático de DB | 1 día | Alta |
| Monitoring (PM2/New Relic) | 0.5 día | Media |

**Entregables**:
- Backend en producción
- Backups automáticos
- Monitoring activo

---

### Sprint 4.3 - Features Extras (opcional) (1 semana)

#### **FE1 - Notificaciones Push (3 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Setup Firebase Cloud Messaging | 1.5 días | Baja |
| UI de notificaciones | 1 día | Baja |
| Preferencias de usuario | 0.5 día | Baja |

**Entregables**:
- Push notifications funcionales

#### **FE2 - Sistema de Favoritos (3 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| UI de favoritos | 1.5 días | Baja |
| Store de favoritos | 1 día | Baja |
| Persistencia | 0.5 día | Baja |

**Entregables**:
- Sistema de favoritos completo

#### **BE1 - Email Notifications (3 días)**
| Tarea | Tiempo | Prioridad |
|-------|--------|-----------|
| Setup SendGrid/Mailgun | 1 día | Baja |
| Templates de emails | 1 día | Baja |
| Queue de emails (Bull) | 1 día | Baja |

**Entregables**:
- Sistema de emails funcional

---

## 📅 Timeline General

```
Semana 1-2:  Fase 1.1 + 1.2 (Formularios + API Base)
Semana 3:    Fase 1.3 (Búsqueda y Filtros)
Semana 4-5:  Fase 2.1 + 2.2 (Imágenes + Geo)
Semana 6:    Fase 2.3 (WhatsApp + Testing)
Semana 7-8:  Fase 3 (Offline-First Completo)
Semana 9:    Fase 4.1 + 4.2 (Seguridad + Deploy)
Semana 10:   Fase 4.3 (Features Extras) + Buffer
```

---

## 🎯 Milestones Críticos

| # | Milestone | Fecha Estimada | Criterio de Éxito |
|---|-----------|----------------|-------------------|
| M1 | Frontend Base Completo | Semana 2 | Todos los formularios funcionales |
| M2 | API Conectada | Semana 3 | Stores conectados al backend |
| M3 | Búsqueda Funcional | Semana 3 | Búsqueda avanzada operativa |
| M4 | Imágenes y Storage | Semana 5 | Upload y CDN funcionando |
| M5 | Geolocalización | Semana 6 | Mapa con tiendas cercanas |
| M6 | PWA Completo | Semana 8 | App instalable y offline |
| M7 | Producción | Semana 9 | Deploy en servidor real |
| M8 | Launch | Semana 10 | Sistema completo en vivo |

---

## 📊 Distribución de Carga

### Frontend Developer 1 (Senior)
- **Semanas 1-2**: Formularios empresas, contactos, localizaciones
- **Semanas 3-4**: Búsqueda avanzada, upload de imágenes
- **Semanas 5-6**: Mapa interactivo, geolocalización
- **Semanas 7-8**: Service Worker, PWA
- **Semanas 9-10**: Seguridad, deploy, features extras

**Carga**: ~40-45 horas/semana

### Frontend Developer 2 (Mid-level)
- **Semanas 1-2**: Formularios productos, servicio API
- **Semanas 3-4**: Vistas de detalle, optimización imágenes
- **Semanas 5-6**: Selector ubicación, testing E2E
- **Semanas 7-8**: Cola de sync, IndexedDB
- **Semanas 9-10**: Accesibilidad, analytics, favoritos

**Carga**: ~35-40 horas/semana

### Backend Developer 1 (Full-stack)
- **Semanas 1-2**: Setup proyecto, auth, CRUD básico
- **Semanas 3-4**: Búsqueda, storage de imágenes
- **Semanas 5-6**: Geolocalización, WhatsApp API
- **Semanas 7-8**: Endpoints sync, Redis cache
- **Semanas 9-10**: Seguridad, deploy, emails

**Carga**: ~45-50 horas/semana

---

## 🔄 Reuniones y Sincronización

### Daily Standup (15 min)
- **Horario**: 9:00 AM
- **Formato**: ¿Qué hiciste? ¿Qué harás? ¿Bloqueos?

### Sprint Planning (2 horas)
- **Frecuencia**: Inicio de cada sprint
- **Objetivo**: Planificar tareas del sprint

### Sprint Review (1 hora)
- **Frecuencia**: Fin de cada sprint
- **Objetivo**: Demo de features completadas

### Sprint Retrospective (1 hora)
- **Frecuencia**: Fin de cada sprint
- **Objetivo**: Mejoras de proceso

---

## 📝 Dependencias Críticas

### Frontend depende de Backend:
1. **Auth endpoints** → Para conectar login/register
2. **CRUD endpoints** → Para formularios funcionales
3. **Storage API** → Para upload de imágenes
4. **Geo endpoints** → Para mapa interactivo

### Backend depende de Frontend:
1. **Validaciones** → Para saber qué validar en API
2. **Estructura de datos** → Para modelos de DB
3. **Flows de usuario** → Para endpoints necesarios

### Ambos dependen de:
1. **Diseño de DB** → Debe estar finalizado semana 1
2. **API contracts** → Documentar en Swagger desde inicio
3. **Variables de entorno** → Definir desde semana 1

---

## ⚠️ Riesgos y Mitigación

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Retrasos en API | Media | Alto | Usar mocks mientras tanto |
| Bugs en producción | Media | Alto | Testing exhaustivo + staging |
| Problemas de performance | Baja | Medio | Monitoring desde inicio |
| Cambios de requisitos | Alta | Medio | Sprints cortos, feedback continuo |
| Issues de seguridad | Baja | Crítico | Auditoría de seguridad antes de launch |

---

## 💰 Estimación de Costos (opcional)

### Equipo (10 semanas)
- FE1 Senior: 10 semanas × $X/semana
- FE2 Mid: 10 semanas × $Y/semana  
- BE1 Full-stack: 10 semanas × $Z/semana

### Infraestructura
- Servidor: $50-100/mes
- Base de datos: $30-50/mes
- CDN/Storage: $20-40/mes
- Dominio: $15/año
- SSL: Gratis (Let's Encrypt)

### Servicios Externos
- Maps API: $200/mes (según uso)
- WhatsApp API: $0-50/mes
- Email service: $10-20/mes
- Monitoring: $0-30/mes

**Total estimado**: Variable según región y seniority

---

## ✅ Definition of Done (DoD)

Una tarea está completada cuando:
1. ✅ Código implementado y funcional
2. ✅ Tests unitarios pasando (coverage > 70%)
3. ✅ Tests E2E para flujos críticos
4. ✅ Code review aprobado
5. ✅ Documentación actualizada
6. ✅ Responsive en móvil/tablet/desktop
7. ✅ Sin errores en consola
8. ✅ Accesibilidad básica (WCAG AA)
9. ✅ Merged a develop branch

---

## 🚀 Launch Checklist

### Pre-Launch (Semana 9)
- [ ] Todos los tests pasando
- [ ] Performance > 90 en Lighthouse
- [ ] Security audit completado
- [ ] Backups configurados
- [ ] SSL instalado
- [ ] Analytics configurado
- [ ] Error tracking activo

### Launch Day (Semana 10)
- [ ] Deploy a producción
- [ ] DNS configurado
- [ ] Monitoring activo
- [ ] Equipo en standby
- [ ] Rollback plan preparado

### Post-Launch (Semana 10+)
- [ ] Monitoreo 24/7 primera semana
- [ ] Recolección de feedback
- [ ] Hotfixes si necesario
- [ ] Documentación de issues
- [ ] Planning de mejoras v2.1

---

**Última actualización**: Octubre 2024  
**Versión**: 1.0  
**Estado**: Listo para iniciar desarrollo
