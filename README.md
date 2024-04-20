# Svelte Avatar Quiz App

Welcome to the Svelte Avatar Quiz App README! This application leverages Svelte integrated with the Flowbite UI component library to deliver a rich, interactive web application. Our app features a dynamic quiz platform, a results page utilizing Svelte's slug routing, an information page with API integration, and a visually appealing credits page.

## Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Installation Guide](#installation-guide)
- [Feature Walkthrough](#feature-walkthrough)
  - [Landing Page](#landing-page)
  - [Quiz Page](#quiz-page)
  - [Results Page](#results-page)
  - [TV Info Page](#tv-info-page)
  - [Credits Page](#credits-page)
- [References](#references)

## Project Overview

This project aims to create an engaging Avatar-themed quiz experience that sorts users into different character profiles from the popular TV show based on their responses. The application showcases modern web development practices and demonstrates the effective use of component-based architecture.

## Technology Stack

- **Svelte**: A modern frontend compiler that provides a new approach to building user interfaces.
- **Flowbite**: A component library built on top of Tailwind CSS that provides ready-made components.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.

## Installation Guide (Alternatively there is a live demo link above to view site)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-tonexie
   cd ./cs732-assignment-tonexie
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```

## Feature Walkthrough

### Landing Page

Entry point to application, with giant hero image.

### Quiz Page

This page features a series of questions with options. Users select answers, and their responses are bound using Svelte's reactive state management.

### Results Page

Utilizes dynamic routes (slugs) to display personalized results based on user answers. Here, the URL reflects the character outcome, e.g., `/results/aang`.

### TV Info Page

Displays detailed information about the "Avatar: The Last Airbender" series fetched from an external API. Includes a search function to query information on other TV shows.

### Credits Page

Credits all sources and provides aesthetic details about the development and design contributions.

## References

- [Svelte Documentation](https://svelte.dev/docs)
- [Flowbite Official Site](https://flowbite.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

