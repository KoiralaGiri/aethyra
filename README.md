# Aethyra Website

This project is the official website for Aethyra, featuring interactive elements, animations, and various custom components. Built with React, TailwindCSS, and other modern web technologies, the website provides a dynamic experience for users.

## Table of Contents
- [Project Setup](#project-setup)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [DevDependencies](#devdependencies)
- [Features](#features)
- [File Structure](#file-structure)
- [Configuration](#configuration)
- [License](#license)

## Project Setup

To get started, clone this repository and install the necessary dependencies:

```bash
git clone https://github.com/KoiralaGiri/aethyra-website.git
cd aethyra-website
npm install
```

## Scripts

```bash
# Start Development Server
npm start

# Build for Production
npm run build

# Run Tests
npm test

# Eject Configuration (not recommended)
npm run eject
```

## Dependencies

The project relies on several libraries to create a dynamic, interactive experience:

- **React** - Frontend library for building user interfaces
- **@mojs/core** - Animation library for interactive elements
- **@radix-ui/react-hover-card** - UI component library for hover effects
- **@react-spring/web** - Spring physics-based animation library
- **@react-three/fiber & @react-three/drei** - 3D graphics library and helpers
- **framer-motion** - Library for creating complex animations and transitions
- **gsap** - GreenSock Animation Platform for advanced animations
- **axios** - HTTP client for API requests
- **tailwindcss** - CSS framework for responsive and modern design
- **vanta** - Animation library for creating interactive backgrounds
- **react-icons** - Collection of icons for UI elements
- **animejs** - Animation library for creating custom SVG and CSS animations
- **d3-shape & d3-interpolate** - Libraries for creating and animating shapes

For a complete list of dependencies, see `package.json`.

## DevDependencies

These packages are used during the development process and not included in the production build:

- **@shadcn/ui** - Additional UI components and styles
- **@types/three** - Type definitions for three.js
- **autoprefixer** - Adds vendor prefixes to CSS
- **postcss** - A tool to transform CSS with JavaScript
- **tailwindcss** - Utility-first CSS framework for rapid UI development

## Features

- **Logo Animation**: An animated logo sequence created using custom animations and framer-motion
- **Background Effects**: Uses the Vanta library to create an interactive globe background
- **Responsive Design**: Utilizes TailwindCSS for responsive and accessible layouts
- **Custom Components**: Several custom components like MegaMenuNavbar and WelcomeSection are included
- **Modular Structure**: Organized in a modular structure for easier maintenance and scaling

## File Structure

# Aethyra Project Structure Explanation

## Root Directory Files
- `App.js` - Main React application component and routing setup
- `App.test.js` - Test file for the App component
- `index.js` - Entry point of the React application
- `logo.svg` - Vector version of the Aethyra logo
- `reportWebVitals.js` - Performance measurement utilities
- `setupTests.js` - Configuration for test environment
- `.gitignore` - Specifies which files Git should ignore
- `components.json` - Configuration for shadcn/ui components
- `package-lock.json` - Exact dependency tree information
- `package.json` - Project metadata and dependencies
- `postcss.config.js` - PostCSS configuration for CSS processing
- `README.md` - Project documentation
- `tailwind.config.js` - TailwindCSS configuration
- `tsconfig.json` - TypeScript configuration

## `/app` Directory
Core application setup for Next.js/React application
- `/globals.css` - Global CSS styles
- `/components` - Shared components across the application

## `/components` Directory
Contains reusable UI components
- `/lib`
  - `utils.ts` - Utility functions and helpers
- `/ui` - Generic UI components using shadcn/ui

## `/public` Directory
Static assets served directly by the web server
- `favicon.ico` - Website favicon
- `logo192.png` - Small logo for PWA
- `logo512.png` - Large logo for PWA
- `manifest.json` - PWA configuration
- `robots.txt` - Search engine crawling instructions

## `/src` Directory
Main source code of the application

### `/ani-icons`
SVG and animation assets
- `blob-scene-haikei.svg` - Blob background animation
- `layered-waves-haikei.svg` - Wave animation layers
- `LottieAnimation.json` - Lottie animation configuration

### `/animations`
Animation-related components and assets
- `/logo-animation`
  - `AnimatedLogoSequence.js` - Main logo animation sequence
  - `LoadingAnimation.js` - Loading state animations
  - `LogoAnimationAethyra.js` - Aethyra-specific logo animations
  - `ScreenWipe.js` - Screen transition effects
  - `IconAnimation.js` - Icon animation utilities
- `/assets`
  - `/fonts` - Custom fonts used in animations
  - `/LetterSVGS` - SVG assets for letter animations

### `/components`
Custom UI components
- `/ui`
  - `AnimatedLogo.css` - Styles for animated logo
  - `AnimatedLogo.js` - Animated logo component
- `MegaMenuNavbar.css` - Styles for navigation menu
- `MegaMenuNavbar.js` - Navigation menu component

### `/lib`
Utility functions and shared logic
- `utils.ts` - TypeScript utilities

### `/pages`
Page components and sections
- `/About-Us` - About page components
- `/Coming-Soon` - Coming soon page components
- `/Homepage`
  - `/WelcomeSection`
    - `FadeText.tsx` - Text fade animation component
    - `WelcomeSection.css` - Welcome section styles
    - `WelcomeSection.js` - Main welcome section component
    - `WelcomeSectionBG.tsx` - Background effects component
    - `WordPullUp.tsx` - Word animation component
- `/Portfolio` - Portfolio page components
- `/Services` - Services page components
- `/Sponsors` - Sponsors page components

### `/styles`
Global styles and style utilities

### `/vendors`
Third-party integrations and vendor-specific code

## Key Features in Each Component

### Animation Components
- `AnimatedLogoSequence.js`: Controls the timing and sequence of logo animations
- `LoadingAnimation.js`: Handles loading states with smooth animations
- `ScreenWipe.js`: Creates smooth transitions between sections

### UI Components
- `MegaMenuNavbar`: Advanced navigation menu with dropdowns and animations
- `AnimatedLogo`: Interactive logo component with hover effects

### Page Components
- `WelcomeSection`: Dynamic welcome area with text animations and background effects
- `FadeText`: Handles text fade-in/fade-out animations
- `WordPullUp`: Creates word-by-word animation effects

### Utility Files
- `utils.ts`: Contains shared functions for:
  - Animation helpers
  - Style calculations
  - Component utilities
  - Type definitions

### Style Files
- `globals.css`: Contains:
  - Base styles
  - CSS variables
  - Media queries
  - Animation keyframes

### Configuration Files
- `tailwind.config.js`: Configures:
  - Custom colors
  - Breakpoints
  - Animation classes
  - Typography
- `tsconfig.json`: Sets up:
  - TypeScript compilation options
  - Module resolution
  - Build paths

This structure follows a modular and component-based architecture, making it easy to:
1. Locate specific functionality
2. Maintain separation of concerns
3. Scale the application with new features
4. Reuse components across different sections
5. Manage animations and styles effectively

## Configuration

The TailwindCSS configuration (`tailwind.config.js`) is set to support dark mode and includes custom colors, animations, and container configurations. Key customizations include:

- **Dark Mode**: Enabled with the "class" strategy
- **Custom Colors**: Additional colors defined for UI consistency
- **Animations**: Custom animations for accordion and scrolling effects

## License

This project is licensed under the MIT License.