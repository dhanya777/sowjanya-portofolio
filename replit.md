# Sowjanya Vangalapudi Portfolio Website

## Overview

This is a modern, professional portfolio website for Sowjanya Vangalapudi, a PSPO-certified QA Leader with 7+ years of experience in software quality assurance. The site is built as a full-stack web application showcasing her expertise, skills, and professional services in the QA domain.

The application features a clean, minimalistic design with sections for About, Skills, Services, and Contact. It includes interactive elements like animated skill bars, a contact form with backend submission handling, and responsive design optimized for all device sizes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, professional UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **UI Components**: Comprehensive shadcn/ui component system including buttons, cards, inputs, toasts, and navigation elements

### Backend Architecture
- **Server Framework**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful API endpoints for contact form submission and data retrieval
- **Development Server**: Vite middleware integration for hot module replacement during development
- **Request Handling**: Express middleware for JSON parsing, logging, and error handling
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

### Data Storage
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL with connection pooling
- **Development Storage**: In-memory storage implementation for rapid development and testing

### Database Schema
- **Users Table**: Basic user authentication structure with username and password
- **Contact Messages Table**: Stores contact form submissions with name, email, subject, message, and timestamp
- **Schema Validation**: Zod schemas for runtime type checking and validation

### Build and Deployment
- **Frontend Build**: Vite builds the React application to static assets
- **Backend Build**: esbuild bundles the Express server for production deployment
- **Development**: Concurrent development server with hot reload for both frontend and backend
- **Asset Management**: Static file serving with proper caching headers

## External Dependencies

### Core Technologies
- **Node.js Runtime**: ES modules with TypeScript compilation
- **PostgreSQL Database**: Neon Database serverless PostgreSQL hosting
- **Vite Development Server**: Fast development experience with HMR

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Radix UI**: Headless UI components for accessibility and functionality
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Custom typography with Poppins and Open Sans font families

### Development Tools
- **TypeScript**: Static type checking and improved developer experience
- **ESLint**: Code quality and consistency enforcement
- **PostCSS**: CSS processing with Tailwind CSS integration
- **Drizzle Kit**: Database schema management and migrations

### Backend Dependencies
- **Express.js**: Web application framework
- **Drizzle ORM**: Type-safe database operations
- **Connect PG Simple**: PostgreSQL session store for Express sessions
- **Zod**: Runtime type validation and schema definition

### Frontend State Management
- **TanStack Query**: Server state management, caching, and synchronization
- **React Hook Form**: Performant form handling with minimal re-renders
- **Wouter**: Lightweight routing solution for single-page application navigation