# Development Cycles

This document tracks all development cycles for the Bsquared interactive portfolio project. Each cycle is 1 week with ~8 hours of work (1h tasks, junior tier).

> **📖 New to the workflow?** Read the **[Workflow Guide](../WORKFLOW.md)** to learn how to work with cycles, tasks, branches, and pull requests.

## Overview

**Current Cycle**: 02 (Hardcore Mode)  
**Total Cycles Planned**: 5  
**Completed**: Cycle 01 (Landing + Normal Mode - completed outside cycles-mcp)

## Cycle Structure

```
/docs/cycles/
  /02-hardcore-mode---tui-distribution/   ○ Ready to Start
  /03-command-system/                     ○ Planned
  /04-ai-integration/                     ○ Planned
  /05-mobile-polish-and-telemetry/        ○ Planned
```

## Cycles

### ✅ Cycle 01: Landing + Normal Mode (Complete)

**Status**: Complete (done before cycles-mcp setup)

Built the production-ready portfolio with:
- Landing page with 50/50 Normal | Hardcore split
- Full Magic UI portfolio (Hero, About, Work, Education, Skills, Projects, Contact)
- Hardcore placeholder page ("Coming soon")
- SEO, robots, sitemap

---

### ○ Cycle 02: Hardcore Mode - TUI Distribution

**Status**: Ready to Start  
**Duration**: 1 week  
**Hours**: 6h (6 tasks × 1h)

**Goal**: Working terminal interface accessible via SSH and Web, both using shared `@bsquared/tui` package.

**Tasks**:
1. Complete TUI Echo Functionality
2. Create SSH Server with TUI Integration
3. Add xterm.js Terminal Component
4. Create WebSocket Server for Web Terminal
5. Connect XTerminal to WebSocket Backend
6. Replace /hardcore Placeholder with Live Terminal

**Success Criteria**:
- SSH into localhost:2222 shows terminal
- Browser at /hardcore shows xterm.js terminal
- Echo functionality works on both platforms

---

### ○ Cycle 03: Command System

**Status**: Planned  
**Duration**: 1 week  
**Hours**: 6h (6 tasks × 1h)

**Goal**: Working slash commands for displaying portfolio content.

**Tasks**:
1. Create Command Parser
2. Create Command Dispatcher
3. Implement /help Command
4. Implement /skills and /links Commands
5. Implement /tldr and /download Commands
6. Implement /references and /achievements Commands

**Success Criteria**:
- /help shows all available commands
- Commands display content from data files
- Unknown commands show helpful error

---

### ○ Cycle 04: AI Integration

**Status**: Planned  
**Duration**: 1 week  
**Hours**: 6h (6 tasks × 1h)

**Goal**: LLM-powered Q&A with RAG context retrieval.

**Tasks**:
1. Setup OpenAI API Integration
2. Setup Supabase pgvector for RAG
3. Create Document Indexer
4. Implement RAG Pipeline
5. Implement LLM Agent Loop
6. Add Confidence Scoring and /message Fallback

**Success Criteria**:
- Freeform questions get contextual answers
- Low confidence triggers /message suggestion
- /message captures user contact

---

### ○ Cycle 05: Mobile Polish and Telemetry

**Status**: Planned  
**Duration**: 1 week  
**Hours**: 6h (6 tasks × 1h)

**Goal**: Production-ready with mobile support and analytics.

**Tasks**:
1. Add Mobile Keyboard Toolbar
2. Add PWA Support
3. Integrate PostHog Telemetry
4. Add Rate Limiting
5. Add Session Timeout and Security
6. Production Deployment Configuration

**Success Criteria**:
- Mobile users can use hardcore mode
- Analytics tracking commands and AI queries
- Rate limiting prevents abuse
- Deployed to production

---

## Progress Tracking

### Overall Progress

```
Cycle 01: [██████████] Complete (pre-mcp)
Cycle 02: [░░░░░░░░░░] 0/6 tasks
Cycle 03: [░░░░░░░░░░] Planned
Cycle 04: [░░░░░░░░░░] Planned
Cycle 05: [░░░░░░░░░░] Planned
```

### Time Investment

| Cycle     | Estimated | Actual | Variance |
| --------- | --------- | ------ | -------- |
| 01        | ~12h      | ~12h   | -        |
| 02        | 6h        | -      | -        |
| 03        | 6h        | -      | -        |
| 04        | 6h        | -      | -        |
| 05        | 6h        | -      | -        |
| **Total** | **36h**   | **-**  | **-**    |

## Quick Start

```bash
# Start Cycle 02, Task 001
git checkout main
git pull origin main
git checkout -b feat/cycle-02-task-001-tui-echo

# Read the task
cat docs/cycles/02-hardcore-mode---tui-distribution/001-complete-tui-echo-functionality.md

# Work, commit, push, PR, merge
# Then update progress with cycles-mcp
```

---

**Last Updated**: December 2025  
**Next Review**: After completing Cycle 02
