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

Start Development Server: npm start
Build for Production: npm run build
Run Tests: npm test
Eject Configuration (not recommended): npm run eject

Dependencies
The project relies on several libraries to create a dynamic, interactive experience:

React - Frontend library for building user interfaces.
@mojs/core - Animation library for interactive elements.
@radix-ui/react-hover-card - UI component library for hover effects.
@react-spring/web - Spring physics-based animation library.
@react-three/fiber & @react-three/drei - 3D graphics library and helpers.
framer-motion - Library for creating complex animations and transitions.
gsap - GreenSock Animation Platform for advanced animations.
axios - HTTP client for API requests.
tailwindcss - CSS framework for responsive and modern design.
vanta - Animation library for creating interactive backgrounds.
react-icons - Collection of icons for UI elements.
animejs - Animation library for creating custom SVG and CSS animations.
d3-shape & d3-interpolate - Libraries for creating and animating shapes.
For a complete list of dependencies, see package.json.

DevDependencies
These packages are used during the development process and not included in the production build:

@shadcn/ui - Additional UI components and styles.
@types/three - Type definitions for three.js.
autoprefixer - Adds vendor prefixes to CSS.
postcss - A tool to transform CSS with JavaScript.
tailwindcss - Utility-first CSS framework for rapid UI development.
Features
Logo Animation: An animated logo sequence created using custom animations and framer-motion.
Background Effects: Uses the Vanta library to create an interactive globe background.
Responsive Design: Utilizes TailwindCSS for responsive and accessible layouts.
Custom Components: Several custom components like MegaMenuNavbar and WelcomeSection are included.
Modular Structure: Organized in a modular structure for easier maintenance and scaling.

File Structure
aethyra-website/
├── src/
│   ├── animations/              # Animations used across the site
│   ├── components/              # Reusable components like Navbar and Buttons
│   ├── pages/                   # Page components like Homepage and About
│   ├── styles/                  # CSS and Tailwind configurations
│   ├── App.js                   # Main application entry point
│   └── index.js                 # Entry file for React rendering
├── tailwind.config.js           # TailwindCSS configuration file
├── package.json                 # Project metadata and dependencies
└── README.md     
               # Project documentation
Configuration
The TailwindCSS configuration (tailwind.config.js) is set to support dark mode and includes custom colors, animations, and container configurations. Key customizations include:

Dark Mode: Enabled with the "class" strategy.
Custom Colors: Additional colors defined for UI consistency.
Animations: Custom animations for accordion and scrolling effects.
License
This project is licensed under the MIT License.
