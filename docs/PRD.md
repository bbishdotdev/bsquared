# Product Requirements Document (PRD) – Bsquared Interactive Portfolio

## 1. Overview

The **Bsquared Portfolio** is a dual-mode interactive portfolio that lets users explore Brenden's career, skills, and achievements through two distinct experiences:

1. **Normal Mode**: A modern, polished web portfolio built with Magic UI and shadcn components
2. **Hardcore Mode**: A terminal-style interface (SSH and web terminal) with slash commands and AI chat

Users can choose their preferred experience from a landing page, with mobile users automatically directed to Normal mode.

## 2. Goals

- Provide an engaging, dev-centric portfolio with multiple experience options
- Support both structured commands (skills, resume, achievements) and open Q&A via LLM (Hardcore mode)
- Enable recruiters, hiring managers, and peers to download resume, see references, and get a TL;DR pitch
- Ensure graceful fallback when AI cannot answer (redirect to /message)
- Mobile-first Normal mode with desktop-optimized Hardcore mode

## 3. Target Users

- **Recruiters**: Want a quick, clear understanding of skills & pitch (Normal mode preferred)
- **Hiring managers / Engineers**: Want technical depth and GitHub projects (may prefer Hardcore)
- **Peers / Network**: Want references, personality, and ways to contact

## 4. Core Features

### Landing Page

- 50/50 split screen: Normal | Hardcore
- Visual distinction between modes (clean vs terminal aesthetic)
- Mobile auto-redirect to Normal mode
- Hardcore shows "Coming soon" state until fully built

### Normal Mode (Magic UI Portfolio)

- **Hero**: Name, title, intro with typing animation
- **About**: Bio paragraph
- **Work Experience**: Timeline of positions
- **Education**: Academic background
- **Skills**: Tech badges and categories
- **Projects**: Featured projects with descriptions
- **Contact**: Social links, resume download
- **Blog**: Simple markdown-based blog posts

### Hardcore Mode (Terminal Experience)

- **Commands**:

  - `/message <text>` – User leaves a message for Brenden (requires email)
  - `/download` – Provides PDF download of resume
  - `/skills` – Lists skills, frameworks, and technologies
  - `/achievements` – Highlights career achievements
  - `/links` – GitHub, LinkedIn, project links
  - `/references` – Reference contacts and quotes
  - `/tldr` – Concise self-pitch

- **AI Interaction**:
  - Freeform Q&A with the LLM
  - Uses RAG context (resume, skills, projects, achievements, personality docs)
  - If unsure: fallback with option to leave a message

## 5. Success Criteria

- Landing page presents clear choice between modes
- Normal mode works fully on mobile and desktop
- Hardcore mode commands work across SSH and web terminal
- AI answers are cited, concise, and relevant (Hardcore)
- Resume downloadable, references viewable, messages capturable
- Distribution: SSH and web at bsquared.dev

## 6. Platforms

- **Web** (Next.js 16 + Magic UI/shadcn for Normal, xterm.js for Hardcore)
- **SSH** (connect to bsquared.dev → auto-launch TUI)
- **Mobile web** (responsive Normal mode + banner suggesting desktop for Hardcore)

## 7. Deliverables & Milestones

- **M1**: Landing page + Normal mode (Magic UI portfolio) + Hardcore placeholder
- **M2**: Hardcore mode (SSH + web terminal with TUI)
- **M3**: Command system for Hardcore
- **M4**: RAG + AI Q&A + fallback messaging
- **M5**: Mobile polish + PWA support
- **M6**: Telemetry
