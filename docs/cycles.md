# Bsquared Development Cycles

This document tracks all development cycles for the Bsquared interactive portfolio project. Each cycle is designed to be completed in 1-2 weeks of part-time work (~8-12 hours total).

> **📖 New to the workflow?** Read the **[Workflow Guide](./WORKFLOW.md)** to learn how to work with cycles, tasks, branches, and pull requests.

## Overview

**Current Cycle**: 01 (MVP)
**Total Cycles Planned**: 5+
**Completed**: Cycle 01 in progress

## Cycle Structure

```
/docs/cycles/
  /01-mvp-landing-normal/              ✓ In Progress (NEW)
  /02-hardcore-tui-distribution/       ○ Planned (former Cycle 01)
  /03-command-system/                  ○ Planned
  /04-ai-integration/                  ○ Planned
  /05-mobile-polish/                   ○ Planned
```

## Cycles

### ✅ Cycle 01: MVP - Landing + Normal Mode

**Status**: In Progress
**Duration**: 1-2 weeks
**Hours**: ~12 hours

**Goal**: Ship a production-ready portfolio with mode selection landing page and full Magic UI Normal mode.

**Deliverables**:

- Landing page with 50/50 Normal | Hardcore split
- Mobile detection + auto-redirect to Normal
- Full Normal mode portfolio with Magic UI:
  - Hero, About, Work, Education, Skills, Projects, Contact
- Hardcore placeholder page ("Coming soon")
- Content data files (JSON)
- SEO, robots, sitemap

**Tech Stack**:

- Next.js 16
- Tailwind CSS v4
- shadcn/ui
- Magic UI
- Framer Motion

---

### ○ Cycle 02: Hardcore Mode (TUI Distribution)

**Status**: Planned
**Duration**: 1-2 weeks
**Hours**: ~8 hours

**Goal**: Build shared TUI package and enable terminal access via both SSH and Web.

**Planned Features**:

- Complete `@bsquared/tui` package with opentui
- SSH server using the shared TUI
- Web terminal with xterm.js using the shared TUI
- WebSocket bridge for web terminal
- Echo functionality working on both platforms
- Replace Hardcore placeholder with actual terminal

**Dependencies**: Cycle 01 must be complete

---

### ○ Cycle 03: Command System

**Status**: Planned
**Duration**: 1-2 weeks
**Hours**: ~8 hours

**Goal**: Implement slash command parsing and routing.

**Planned Features**:

- Command parser (detects `/` prefix)
- Command dispatcher in `@bsquared/agent-core`
- Implement core commands:
  - `/help` - Show available commands
  - `/skills` - Display skills from data file
  - `/achievements` - Show achievements
  - `/links` - Display GitHub, LinkedIn, etc.
  - `/references` - Show professional references
  - `/tldr` - Display self-pitch
  - `/download` - Provide resume download link
- Error handling for unknown commands
- Help text generation

**Dependencies**: Cycle 02 must be complete

---

### ○ Cycle 04: AI Integration

**Status**: Planned
**Duration**: 2-3 weeks
**Hours**: ~10-12 hours

**Goal**: Add AI agent with RAG for natural language Q&A.

**Planned Features**:

- Set up `@bsquared/agent-core` package
- Integrate OpenAI API (gpt-4-mini)
- Set up Supabase for pgvector
- Implement `@bsquared/indexer` for embeddings
- RAG pipeline for context retrieval
- LLM agent loop
- Confidence scoring
- Fallback to `/message` for low confidence
- Message capture system (email required)

**Dependencies**: Cycle 03 must be complete

---

### ○ Cycle 05: Mobile & Polish

**Status**: Planned
**Duration**: 1-2 weeks
**Hours**: ~8 hours

**Goal**: Mobile optimization and production polish.

**Planned Features**:

- Mobile keyboard toolbar for Hardcore (Esc, Ctrl, Tab, Arrows)
- PWA support for Normal mode
- Responsive terminal sizing (100dvh)
- Hidden input trick for mobile keyboards
- PostHog telemetry integration
- Rate limiting
- Session idle timeout
- Input validation and sanitization
- Production deployment configs

**Dependencies**: Cycle 04 must be complete

---

## Future Cycles

Additional cycles may include:

- **Cycle 06**: Blog Implementation (MDX, RSS feed)
- **Cycle 07**: Deployment & Infrastructure (Vercel, SSH hosting, monitoring)
- **Cycle 08**: Advanced Features (command history, autocomplete, themes)
- **Cycle 09**: Analytics & Optimization (query analysis, caching, performance)

## Progress Tracking

### Overall Progress

```
Cycle 01: [██████████] Complete
Cycle 02: [░░░░░░░░░░] Planned
Cycle 03: [░░░░░░░░░░] Planned
Cycle 04: [░░░░░░░░░░] Planned
Cycle 05: [░░░░░░░░░░] Planned
```

### Time Investment

| Cycle     | Estimated | Actual | Variance |
| --------- | --------- | ------ | -------- |
| 01        | 12h       | TBD    | -        |
| 02        | 8h        | -      | -        |
| 03        | 8h        | -      | -        |
| 04        | 12h       | -      | -        |
| 05        | 8h        | -      | -        |
| **Total** | **48h**   | **-**  | **-**    |

## Working on a Cycle

> **Important**: Follow the [Workflow Guide](../WORKFLOW.md) for the complete git workflow including feature branches and pull requests.

### Starting a New Cycle

1. Navigate to the cycle directory: `cd docs/cycles/0X-cycle-name/`
2. Read the cycle README thoroughly
3. Create a feature branch: `git checkout -b feat/cycle-0X-task-001-description`
4. Start with task 001
5. Follow the task instructions
6. Open a PR when complete
7. Update progress in the cycle README after merge

### Completing a Task

1. Check all acceptance criteria
2. Run all tests in "Testing Your Work"
3. **Push branch and open a Pull Request**
4. After PR is reviewed and merged:
   - Mark task as complete in cycle README: `- [x]`
   - Update progress bar
   - Log session in session log
   - Commit progress update
5. Move to next task

**See [WORKFLOW.md](./WORKFLOW.md) for detailed PR process.**

### Completing a Cycle

1. Verify all success criteria met
2. Run end-to-end tests
3. Update cycle status to "Complete"
4. Update this file's progress tracker
5. Celebrate! 🎉
6. Plan next cycle if needed

## Commit Message Format

Following conventional commits:

```
<type>(<cycle>): <description>

[optional body]

[optional footer]
```

**Examples**:

- `feat(cycle-01): add landing page with mode selector`
- `feat(cycle-01): build normal mode portfolio sections`
- `fix(cycle-01): correct mobile redirect logic`
- `docs(cycle-01): update PRD and TDD for dual-mode`
- `chore(cycle-01): complete cycle 01 - MVP`

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## Staying on Track

**Weekly Check-in Questions**:

- [ ] Am I on track to complete the cycle in 1-2 weeks?
- [ ] Are any tasks taking significantly longer than estimated?
- [ ] Do I need to adjust the scope or break tasks down further?
- [ ] Have I committed my work regularly?
- [ ] Am I blocked on anything?

**Motivation Tips**:

- 🎯 Focus on one task at a time
- ⏱️ Use 1-hour timeboxes
- ✅ Check off tasks frequently for quick wins
- 📝 Keep notes of learnings and blockers
- 🎉 Celebrate completing each cycle
- 🚀 Ship working features incrementally

## Notes

_Cycle 01 pivoted from TUI-first to Landing + Normal mode first. TUI work moved to Cycle 02._

---

**Last Updated**: December 2025
**Next Review**: After completing Cycle 01
