# Fullness Fisio

Plataforma web moderna para la clínica de fisioterapia Fullness. Desarrollada con React, TypeScript y Tailwind CSS.

## 🚀 Tecnologías

- **React 18** - Librería de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y servidor de desarrollo
- **Tailwind CSS** - Framework CSS utility-first
- **React Router** - Enrutamiento
- **Prettier** - Formatter de código

## 📋 Requisitos

- Node.js 16 o superior
- npm o pnpm

## ⚙️ Instalación

```bash
# Clonar el repositorio
git clone <repo-url>

# Instalar dependencias
npm install
```

## 🛠️ Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
```

Accede a `http://localhost:5173` en tu navegador.

## 📦 Compilación para Producción

```bash
# Generar build optimizado
npm run build

# Previsualizar build de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/              # Componentes reutilizables
│   ├── buttons/            # Componentes de botones
│   ├── common/             # Componentes de layout (Header, Topbar, Footer)
│   └── sections/           # Secciones de contenido
├── pages/                  # Páginas de la aplicación
├── hooks/                  # Custom React Hooks
├── types/                  # Tipos TypeScript compartidos
├── utils/                  # Funciones auxiliares
├── App.tsx                 # Componente raíz con rutas
├── main.tsx                # Punto de entrada
└── index.css               # Estilos globales
```

Para más detalles sobre la arquitectura, ver [src/README.md](./src/README.md)

## 🎨 Paleta de Colores

- **Primary**: `#003366`
- **Primary Light**: `#004488`

## 🔗 Rutas Disponibles

- `/` - Página de inicio
- `/pacientes` - Información para pacientes
- `/profesionales` - Información para profesionales
- `/blog` - Blog de salud

## 📝 Convenciones de Código

- Componentes funcionales con TypeScript
- Importaciones usando barrel exports (`index.ts`)
- Nomenclatura clara y descriptiva
- Componentes reutilizables en `src/components/`
- Páginas en `src/pages/`

## 👥 Equipo

Desarrollado por el equipo de Fullness.

## 📄 Licencia

Copyright © 2026 Fullness. Todos los derechos reservados.
