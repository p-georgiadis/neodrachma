
# My NeoDrachma App

My NeoDrachma App is a modern, React-based web application built with Vite that brings the futuristic "Atomic Age" design of the NeoDrachma project to life. Featuring animated hero sections, retro terminal interfaces, and dynamic visual effects, this project represents Greece’s digital currency initiative and economic revival concept.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Development](#development)
- [Production Build](#production-build)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

My NeoDrachma App is designed to showcase the NeoDrachma project—Greece's digital currency for economic independence. The app utilizes React along with Vite for fast development and Hot Module Replacement (HMR). Custom CSS gives the app its retro and futuristic look with neon glows, animated meters, and vintage overlays.

## Features

- **Animated Hero Section:** Includes a dynamic power meter and atomic symbol animation.
- **Retro Terminal:** Simulated terminal-style text animation with a nostalgic look.
- **Strategic Roadmap:** A visual timeline displaying different phases of the project.
- **Intelligence FAQ:** Interactive FAQ with search and category filtering.
- **Mascot Profile:** A vintage card layout featuring the project’s mascot with a classified overlay.
- **Navigation:** A clean, centered navigation bar with an orbiting animation over the coin logo.
- **Responsive Design:** Uses CSS media queries to adjust layout across various screen sizes.

## File Structure

```
my-neodrachma-app/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── .gitignore
├── eslint.config.js
├── public/
│   ├── css/
│   │   └── styles.css         // Main CSS (if using public assets)
│   ├── images/
│   │   ├── neodrachma_coin.png
│   │   ├── neodrachma_poster.png
│   │   ├── neodrachma_hero.png
│   │   ├── pumpfun-logo.png
│   │   ├── dexscreener-logo.png
│   │   ├── neodrachma_logo.png
│   │   └── grain-texture.png
│   └── fonts/
│       ├── spaceage.ttf
│       └── monofonto.woff2
└── src/
├── main.jsx
├── App.jsx
├── App.css                // Global CSS if you prefer bundling CSS here
├── index.css              // Optional additional CSS
└── components/
├── AnimatedHero.jsx
├── Footer.jsx
├── Hero.jsx
├── IntelligenceFAQ.jsx
├── MainSections.jsx
├── MascotProfile.jsx
├── Navigation.jsx
├── RetroTerminal.jsx
└── StrategicRoadmap.jsx
```

## Installation

This project uses [Yarn](https://yarnpkg.com/) (alternatively, you can use npm). To install the dependencies, run:

```bash
yarn install
```

## Development

Start the Vite development server with:

```bash
yarn run dev
```

Open your browser and navigate to the local development URL (typically [http://localhost:5173](http://localhost:5173)). HMR is enabled so your changes will update instantly.

## Production Build

To build a production-ready version of the app, run:

```bash
yarn run build
```

This produces an optimized bundle in the `dist/` directory. To preview the production build locally, run:

```bash
yarn run preview
```

## Contributing

Contributions are welcome! If you have suggestions or improvements, please create a pull request or open an issue. Please follow the existing code style and add tests where applicable.

## License

This project is licensed under the [MIT License](LICENSE).