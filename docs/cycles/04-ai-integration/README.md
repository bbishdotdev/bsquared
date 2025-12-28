# Cycle 04: AI Integration

**Duration**: 1 week  
**Estimated Hours**: 14 hours  
**Status**: Not Started

## Overview

Add AI agent with RAG for natural language Q&A. Users can ask freeform questions about Brenden's experience and get contextual answers.

## Goal

Working AI chat where non-command input gets answered by LLM with RAG context. Low confidence responses redirect to /message.

## Tasks (6 total)

- [ ] **[001](./001-setup-openai-api-integration.md)** - Setup OpenAI API Integration (1h)

- [ ] **[002](./002-setup-supabase-pgvector-for-rag.md)** - Setup Supabase pgvector for RAG (1h)

- [ ] **[003](./003-create-document-indexer.md)** - Create Document Indexer (1h)

- [ ] **[004](./004-implement-rag-pipeline.md)** - Implement RAG Pipeline (1h)

- [ ] **[005](./005-implement-llm-agent-loop.md)** - Implement LLM Agent Loop (1h)

- [ ] **[006](./006-add-confidence-scoring-and-message-fallback.md)** - Add Confidence Scoring and /message Fallback (1h)

## Progress Tracker

**Completed**: 0/6 tasks (0%)

```
[░░░░░░░░░░░░░░░░░░░░] 0%
```

### Session Log

| Date | Duration | Tasks Completed | Notes       |
| ---- | -------- | --------------- | ----------- |
| -    | -        | -               | Not started |

## Success Criteria

By the end of this cycle, you should be able to:

- Ask "What languages does Brenden know?" → get relevant answer
- LLM uses resume/skills context for responses
- Low confidence → suggests /message
- /message captures user email and message
- Works on both SSH and Web

## Deliverables

- OpenAI API integration (gpt-4-mini)
- Supabase pgvector for embeddings
- RAG pipeline for context retrieval
- LLM agent loop in TUI
- Confidence scoring
- Fallback to /message for low confidence
- /message command with email capture

## Next Cycle

**Cycle 05** will build on this foundation to add:

_To be defined_

## Development Workflow

> **📖 Read First**: See **[WORKFLOW.md](../../WORKFLOW.md)** for the complete development workflow including git branches and PR process.

### Quick Workflow Summary

**For each task:**

1. **Start**: `git checkout -b feat/cycle-04-task-XXX-description`
2. **Work**: Follow task instructions, commit incrementally
3. **Test**: Verify all acceptance criteria
4. **PR**: Push branch and open pull request
5. **Complete**: After PR merge, task marked complete automatically
6. **Next**: Move to next task

## Tips for Success

**Starting a session:**

1. Review the cycle README (this file)
2. Check which task you're on
3. Create a feature branch for the task
4. Read the full task before starting
5. Set a timer based on task duration

**Ending a session:**

1. Commit your work incrementally
2. Push your branch
3. Open PR if task is complete
4. After merge: log your session in the table above
5. Note where to pick up next time

**Staying motivated:**

- Each task has clear duration → track your progress
- Check off tasks as you complete them
- Update the progress bar
- Celebrate completing the cycle! 🎉

## Questions or Blockers?

If stuck for >15 minutes:

1. Check the task's "Troubleshooting" section
2. Review the acceptance criteria
3. Look at the "Testing Your Work" section
4. Consider the "Alternative Approach" if provided

## Notes

_Use this space for cycle-specific notes, learnings, or adjustments_
