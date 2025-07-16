# Digital ID Card Application

## Overview

This is a full-stack web application built as a digital ID card for JINGFONG TAN, a web/app developer. The application serves as a modern, interactive business card with social media links and professional information. It's built using a React frontend with a Node.js/Express backend, utilizing PostgreSQL for data storage and styled with Tailwind CSS and shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for development and production builds
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for API server
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Session Management**: Connect-pg-simple for PostgreSQL session store
- **Development**: tsx for TypeScript execution in development

### Key Design Decisions
1. **Monorepo Structure**: Single repository with shared types and utilities between client and server
2. **Type Safety**: Full TypeScript implementation across frontend, backend, and database schema
3. **Component Library**: shadcn/ui for consistent, accessible UI components
4. **Database-First**: Drizzle ORM with schema-first approach for type safety

## Key Components

### Directory Structure
```
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions and configurations
│   │   └── pages/         # Application pages
├── server/                # Express.js backend
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Data access layer
│   └── vite.ts           # Development server integration
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schema and types
└── migrations/           # Database migration files
```

### Core Features
1. **Digital ID Card Display**: Main page showing professional information
2. **Social Media Integration**: Links to GitHub, LinkedIn, Facebook, Telegram, and email
3. **Responsive Design**: Mobile-first approach with responsive breakpoints
4. **Modern UI**: Clean, professional design with hover effects and animations

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Type-Safe Operations**: Drizzle ORM with Zod validation schemas
- **Migration System**: Automated database schema management

## Data Flow

### Client-Side Flow
1. React application loads with routing via Wouter
2. TanStack Query manages API calls and caching
3. shadcn/ui components provide consistent UI elements
4. Responsive design adapts to different screen sizes

### Server-Side Flow
1. Express server handles API requests under `/api` prefix
2. Storage layer abstracts database operations
3. In-memory storage implementation for development
4. PostgreSQL integration ready for production

### Development vs Production
- **Development**: In-memory storage, Vite dev server with HMR
- **Production**: PostgreSQL database, optimized builds

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL provider
- **Connection**: Environment variable `DATABASE_URL` required
- **ORM**: Drizzle for type-safe database operations

### UI Framework
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **React Icons**: Additional icon sets (Simple Icons for brands)

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the application
- **ESBuild**: Fast JavaScript bundling for production

## Deployment Strategy

### GitHub Pages Deployment (Current Setup)
The project is configured for easy deployment to GitHub Pages using GitHub Actions:

1. **Files Created for Deployment**:
   - `.github/workflows/deploy.yml` - Automated deployment workflow
   - `build-gh-pages.js` - GitHub Pages specific build script
   - `package-gh-pages.json` - Simplified dependencies for deployment
   - `github-deployment-guide.md` - Step-by-step deployment instructions

2. **Deployment Process**:
   - Create GitHub repository (public)
   - Upload project files
   - Enable GitHub Actions in repository settings
   - Automatic deployment on every push to main branch

3. **Live URL**: `https://username.github.io/repository-name/`

### Frontend-Only Architecture
Since this is a digital ID card (frontend-only application):
- Removed backend dependencies for GitHub Pages
- Optimized for static hosting
- All social media links open externally
- No database or server-side logic required

### Build Process
1. **Development**: `npm run dev` - Vite dev server with hot reloading
2. **GitHub Pages Build**: `node build-gh-pages.js` - Builds with proper base path
3. **Local Preview**: `npm run preview` - Preview production build locally

### Recent Changes (2025-01-16)
- Converted from full-stack to frontend-only architecture
- Added GitHub Pages deployment configuration
- Created comprehensive deployment guide
- Updated project structure for static hosting
- Added user's actual profile photo and information