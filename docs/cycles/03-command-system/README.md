# Cycle 03: Command System

**Duration**: 1 week  
**Estimated Hours**: 14 hours  
**Status**: Not Started

## Overview

Implement slash command parsing and routing. Add core commands that display content from data files.

## Goal

Working command system where users can type /help, /skills, /links, etc. and get formatted responses from the terminal.

## Tasks (6 total)

- [ ] **[001](./001-create-command-parser.md)** - Create Command Parser (1h)

- [ ] **[002](./002-create-command-dispatcher.md)** - Create Command Dispatcher (1h)

- [ ] **[003](./003-implement-help-command.md)** - Implement /help Command (1h)

- [ ] **[004](./004-implement-skills-and-links-commands.md)** - Implement /skills and /links Commands (1h)

- [ ] **[005](./005-implement-tldr-and-download-commands.md)** - Implement /tldr and /download Commands (1h)

- [ ] **[006](./006-implement-references-and-achievements-commands.md)** - Implement /references and /achievements Commands (1h)

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

- Type /help → see list of commands
- Type /skills → see skills from data file
- Type /links → see GitHub, LinkedIn, etc.
- Unknown command → helpful error message
- Commands work on both SSH and Web

## Deliverables

- Command parser (detects / prefix)
- Command dispatcher in @bsquared/tui
- Core commands: /help, /skills, /links, /tldr, /download, /references, /achievements
- Error handling for unknown commands
- Help text generation

## Next Cycle

**Cycle 04** will build on this foundation to add:

_To be defined_

## Development Workflow

> **📖 Read First**: See **[WORKFLOW.md](../../WORKFLOW.md)** for the complete development workflow including git branches and PR process.

### Quick Workflow Summary

**For each task:**

1. **Start**: `git checkout -b feat/cycle-03-task-XXX-description`
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
