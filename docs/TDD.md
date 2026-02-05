# Technical Design Document (TDD) – Bsquared Interactive Portfolio

## 1. Architecture

Monorepo with bun workspaces:

```
/apps
  /web         # Next.js 16 + Magic UI (Normal) + terminal-style React UI (Hardcore)
  /ssh         # ssh2 server wrapper for Hardcore mode

/packages
  /tui         # headless command engine + ANSI formatting (shared by SSH + web)
  /agent-core  # LLM loop + command dispatcher (future)
  /tools       # slash commands + RAG tools (future)

/data
  config.json    # site metadata, intro, bio
  resume.json    # structured work/education data
  resume.pdf     # downloadable PDF
  skills.json    # skills by category
  projects.json  # project cards data
  links.json     # social/contact links
```

## 2. Components

### Landing Page

- Full-screen 50/50 split (Normal | Hardcore)
- Mobile detection → auto-redirect to `/normal`
- Mode selector with icons (Globe for Normal, Terminal for Hardcore)
- Hardcore shows "Coming soon" hover state

### Normal Mode (Magic UI Portfolio)

Built with Next.js 16, Tailwind CSS v4, shadcn/ui, and Magic UI:

- **BlurFade**: Section reveal animations
- **TypingAnimation**: Hero text effect
- **Badge/Card**: Content display
- **Avatar**: Profile image

Sections:

- Hero, About, Work, Education, Skills, Projects, Contact
- Blog (MDX-based, future)

### Hardcore Mode (Terminal)

- **Web**: React terminal-style UI that renders ANSI output (no terminal emulator)
- **SSH**: Planned ssh2 server that streams ANSI to a real PTY

### Slash Commands (Future)

- `/message`: capture text + email → Resend/email pipeline
- `/download`: return signed URL for resume.pdf
- `/skills`: return curated markdown file
- `/achievements`: curated markdown
- `/links`: static list (GitHub, LinkedIn, projects)
- `/references`: structured list with quotes
- `/tldr`: self-pitch

### LLM Agent (Future)

- Model: gpt-4.1-mini (fast, cost efficient)
- RAG: Supabase pgvector
- Flow: parse → dispatch command if `/`; else → LLM + RAG. If low confidence → fallback with /message

### TUI (Headless Command Engine)

- Parses input and dispatches slash commands
- Emits ANSI-formatted text for consistent styling
- Web UX: command autocomplete, input history, prompt/welcome banner
- Mobile toolbar and full keymaps are future additions

## 3. Data Sources

- `config.json` - Site metadata, intro, bio
- `resume.json` - Work experience, education
- `resume.pdf` - Downloadable resume
- `skills.json` - Skills categorized
- `projects.json` - Project data
- `links.json` - Social links
- Curated GitHub repos (future)
- personality.md (future)

## 4. Distribution

- **Normal mode**: Vercel (Next.js)
- **Hardcore web**: Vercel (client-only ANSI console)
- **Hardcore SSH**: Dedicated server with ssh2 (planned)

## 5. Security

- Validate email on /message
- Rate limit web/SSH
- Redact sensitive patterns in logs
- Idle timeout on sessions

## 6. Observability

- PostHog events: page_view, mode_selected, resume_downloaded, command_executed, ai_query, message_submitted
- Anonymous session IDs

## 7. Mobile Support

- Normal mode: Fully responsive
- Mobile banner: "Visit on desktop for Hardcore mode"
- Banner dismissible, stored in localStorage
- Hardcore: Not optimized for mobile (desktop/SSH only)

## 8. Risks

- ANSI parsing differences between web and real terminals
- Large output volume can stress React rendering if unbounded
- LLM hallucinations → require citations, fallback
- Abuse via /message → CAPTCHA + rate limits
- Resume hosting issues → stable S3/Supabase bucket

## 9. Milestones

- **M1**: Landing + Normal mode + Hardcore placeholder
- **M2**: Hardcore mode (TUI + SSH + web terminal)
- **M3**: Command system
- **M4**: AI + RAG
- **M5**: Mobile toolbar + PWA
- **M6**: Telemetry + polish
