<div align="center">

# Personal Portfolio

### Full Stack Development · Websites · AI Automation

A responsive developer portfolio showcasing my experience, services, selected projects, and an AI-powered assistant that helps visitors explore my work.

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://marlon-03.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Marlon-03)
[![Email](https://img.shields.io/badge/Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:marlonmovilla03@gmail.com)

</div>

---

## Overview

This portfolio is a Vue 3 single-page website designed to present my development background, services, and project work. Visitors can browse project details, learn about my experience, contact me, and interact with an AI portfolio assistant.

## Tech Stack

![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue_Router-42B883?style=for-the-badge&logo=vuedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css&logoColor=white)
![Make](https://img.shields.io/badge/Make-6D00CC?style=for-the-badge&logo=make&logoColor=white)
![Webhooks](https://img.shields.io/badge/Webhooks-455A64?style=for-the-badge)

## Features

- **Single-page layout:** Home, About, Services, Projects, Experience, and Contact sections.
- **Project showcase:** Dedicated project detail views for websites, web applications, and automation work.
- **AI portfolio assistant:** A chat interface that sends visitor questions to a configured Make webhook and displays responses.
- **Chat rate limiting:** Client-side limits to reduce rapid repeated submissions.
- **Contact form:** A contact page with a Formspree-powered form.
- **Responsive styling:** Layouts and components styled with Tailwind CSS.
- **Client-side navigation:** Vue Router manages the portfolio and project detail routes.

## Preview

**[View the live portfolio →](https://marlon-03.vercel.app/)**

> To add a screenshot, save a real homepage capture as `public/portfolio-preview.png`, then uncomment the line below.

<!-- ![Portfolio homepage](public/portfolio-preview.png) -->

## AI Portfolio Assistant

The portfolio includes an interactive AI chat widget. It sends a visitor's message as a JSON `POST` request to the webhook URL provided by the `VITE_MAKE_WEBHOOK_URL` environment variable. The widget reads the returned answer and displays it in the chat interface.

The connected Make AI Agent and structured portfolio knowledge base provide the automation behind this feature; the Make scenario itself is not included in this repository.

## Getting Started

### Prerequisites

- Node.js and npm (use a version supported by Vite 6)
- A Make webhook URL if you want to enable the AI assistant

### Install and run

```bash
git clone https://github.com/Marlon-03/Personal-Portfolio.git
cd Personal-Portfolio
npm install
npm run dev
```

Open the local URL shown in your terminal.

### Configure the AI assistant

Create a `.env` file in the project root:

```env
VITE_MAKE_WEBHOOK_URL=https://your-make-webhook-url
```

Restart the development server after changing environment variables. Without this value, the AI assistant will show a configuration error when a message is submitted.

**Security note:** Vite variables beginning with `VITE_` are embedded in client-side code. Do not put private API keys or secrets in this variable. For production, consider a server-side proxy if the webhook should not be publicly exposed; client-side rate limiting is not a security boundary.

### Production build

```bash
npm run build
npm run preview
```

`npm run build` generates the production site in `dist/`. `npm run preview` previews that build locally.

## Project Structure

```text
src/
├── assets/        # Images and other assets
├── components/    # Navigation, chat widget, project detail components
├── router/        # Vue Router configuration
├── views/         # Portfolio sections and pages
└── App.vue        # Application layout
public/            # Static public files
```

## Contact

**Marlon Movilla** — AI Full Stack Developer

[Portfolio](https://marlon-03.vercel.app/) · [GitHub](https://github.com/Marlon-03) · [Email](mailto:marlonmovilla03@gmail.com)
