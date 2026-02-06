# Fullness - Arquitectura del Proyecto

## Estructura de Carpetas

```
src/
├── components/                 # Componentes reutilizables
│   ├── buttons/               # Componentes de botones
│   │   ├── Button.tsx         # Botón base con múltiples variantes
│   │   ├── PillButton.tsx     # Botón redondeado tipo píldora
│   │   ├── ImageButton.tsx    # Botón basado en imagen
│   │   ├── WhatsAppButton.tsx # Botón flotante de WhatsApp
│   │   └── index.ts
│   ├── common/                # Componentes de layout común
│   │   ├── Header.tsx         # Encabezado con navegación
│   │   ├── Topbar.tsx         # Barra superior con contacto
│   │   ├── Footer.tsx         # Pie de página
│   │   └── index.ts
│   ├── sections/              # Componentes de secciones
│   │   ├── Hero.tsx           # Sección principal (hero)
│   │   ├── Features.tsx       # Sección de características
│   │   ├── Services.tsx       # Sección de servicios
│   │   ├── SectionBanner.tsx  # Banner reutilizable para secciones
│   │   ├── BlogCarousel.tsx   # Carrusel del blog
│   │   └── index.ts
│   └── index.ts
├── pages/                     # Páginas de la aplicación
│   ├── HomePage.tsx           # Página de inicio
│   ├── PacientesPage.tsx      # Página de pacientes
│   ├── ProfesionalesPage.tsx  # Página de profesionales
│   └── BlogPage.tsx           # Página de blog
├── hooks/                     # Custom React Hooks (cuando sea necesario)
├── utils/                     # Funciones auxiliares
├── types/                     # Tipos TypeScript compartidos
├── App.tsx                    # Componente raíz con rutas
├── main.tsx                   # Punto de entrada
└── index.css                  # Estilos globales
```

## Convenciones del Proyecto

### Componentes
- **Buttons**: Componentes interactivos y reutilizables de botones
- **Common**: Componentes de layout que aparecen en todas las páginas
- **Sections**: Componentes de contenido grandes y modulares

### Imports
Usar los barrel exports (`index.ts`) para importaciones limpias:

```tsx
// ✅ Correcto
import { Button, PillButton } from '../components/buttons';
import { Header, Footer } from '../components/common';
import { Hero, Features } from '../components/sections';

// ❌ Evitar
import Button from '../components/buttons/Button';
import Header from '../components/common/Header';
```

### Propiedades de Componentes
- Cada componente tiene una interfaz `Props` claramente definida
- Los componentes son funcionales y usan TypeScript
- Se usan valores por defecto en las props

## Estilos
- **Tailwind CSS** para todos los estilos
- **Colores personalizados** en `tailwind.config.js`:
  - Primary: `#003366`
  - Primary-Light: `#004488`
- **Radio de esquinas estándar**: `rounded-[16px]` (16px)

## Rutas Disponibles
- `/` - Página de inicio
- `/pacientes` - Página para pacientes
- `/profesionales` - Página para profesionales
- `/blog` - Página de blog

## Próximas Mejoras
- [ ] Implementar custom hooks para lógica compartida
- [ ] Crear tipos globales en `src/types/`
- [ ] Agregar funciones auxiliares en `src/utils/`
- [ ] Implementar menú móvil responsivo
- [ ] Agregar animaciones avanzadas
