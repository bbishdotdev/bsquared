# Development Workflow

This document outlines the complete development workflow for this project, including how to work with cycles, tasks, branches, and pull requests.

## Table of Contents

- [Overview](#overview)
- [Cycle-Based Development](#cycle-based-development)
- [Git Workflow](#git-workflow)
- [Task Workflow](#task-workflow)
- [Pull Request Process](#pull-request-process)
- [Commit Guidelines](#commit-guidelines)
- [Progress Tracking](#progress-tracking)

## Overview

This project uses a **cycle-based development approach** where work is organized into cycles. Each cycle contains multiple tasks, and each task follows a structured git workflow with feature branches and pull requests.

## Cycle-Based Development

### What is a Cycle?

A **cycle** is a collection of related tasks that deliver a complete feature or milestone. Each cycle:

- Has a defined duration (1-3 weeks, 1-2 months, or 1 quarter)
- Contains multiple tasks that fit within the allocated hours
- Has clear deliverables and success criteria
- Can be completed independently

### Current Cycles

See [cycles.md](./cycles.md) for the complete roadmap.

## Git Workflow

### Branch Structure

```
main
  ├── feat/cycle-01-task-001-description
  ├── feat/cycle-01-task-002-description
  ├── feat/cycle-01-task-003-description
  └── ...
```

### Branch Naming Convention

```
feat/cycle-XX-task-YYY-short-description
```

**Examples**:

- `feat/cycle-01-task-001-setup-database`
- `feat/cycle-01-task-002-create-api`
- `feat/cycle-02-task-001-add-auth`

**Format**:

- `feat/` - Feature branch prefix
- `cycle-XX` - Cycle number (zero-padded)
- `task-YYY` - Task number (zero-padded)
- `short-description` - Brief kebab-case description

### Branch Types

- `feat/` - New feature or task (primary)
- `fix/` - Bug fixes within a task
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `chore/` - Maintenance tasks

## Task Workflow

### Step-by-Step Process

#### 1. Start a New Task

```bash
# Make sure you're on main and up to date
git checkout main
git pull origin main

# Create a feature branch for the task
git checkout -b feat/cycle-01-task-001-description

# Navigate to the cycle directory
cd docs/cycles/01-cycle-name

# Read the task file
cat 001-task-name.md
```

#### 2. Work on the Task

Follow the task instructions step by step:

- Read the entire task before starting
- Follow the steps in order
- Test as you go
- Commit incrementally (see [Commit Guidelines](#commit-guidelines))

```bash
# Make changes
# ... work on the task ...

# Commit incrementally
git add .
git commit -m "feat(cycle-01): describe what you did"

# Continue working
# ... more changes ...

git add .
git commit -m "feat(cycle-01): describe next change"

# And so on...
```

#### 3. Test Your Work

Before considering the task complete:

- ✅ Check all acceptance criteria in the task file
- ✅ Run all tests in the "Testing Your Work" section
- ✅ Verify the code follows clean code principles
- ✅ Ensure linter passes without errors
- ✅ Test edge cases and error conditions

#### 4. Create Pull Request

```bash
# Push your branch
git push origin feat/cycle-01-task-001-description

# Open a PR on GitHub/GitLab
# - Title: "feat(cycle-01): Task description"
# - Description: Reference the task, list what was done, note any deviations
```

**PR Template**:

```markdown
## Task

Completes Task 001 from Cycle 01: Task Name

Closes #XXX (if applicable)

## Changes

- Bullet list of what was implemented
- Key decisions made
- Any deviations from the task

## Testing

- [x] Ran all tests from "Testing Your Work" section
- [x] Verified acceptance criteria
- [x] Tested edge cases

## Acceptance Criteria

- [x] Criterion 1
- [x] Criterion 2
- [x] Criterion 3

## Notes

None / [Any challenges encountered or future improvements]
```

#### 5. Review and Merge

- Self-review the PR (or have someone review it)
- Make any necessary changes based on feedback
- Once approved, merge the PR
- Delete the feature branch

```bash
# After PR is merged
git checkout main
git pull origin main
git branch -d feat/cycle-01-task-001-description
```

#### 6. Mark Task Complete

The task will be automatically marked complete when the PR is merged.

#### 7. Move to Next Task

Repeat the process for the next task!

## Pull Request Process

### Creating a PR

**Title Format**: `<type>(cycle-XX): <description>`

**Examples**:

- `feat(cycle-01): setup database schema`
- `feat(cycle-01): implement user authentication`
- `fix(cycle-01): correct validation logic`

### PR Description

Include:

1. **Task reference** - Which task this completes
2. **Changes** - Bullet list of what was done
3. **Testing** - Checklist of tests performed
4. **Acceptance criteria** - Checklist from task file
5. **Notes** - Any deviations, challenges, or future improvements

### Review Checklist

Before merging:

- [ ] All acceptance criteria met
- [ ] Tests pass
- [ ] Code follows clean code principles
- [ ] No linter errors
- [ ] Documentation updated (if needed)
- [ ] Commit messages follow conventions

### Merging

- Use **Squash and Merge** for cleaner history (optional)
- Or keep all commits if they tell a good story
- Delete branch after merging

## Commit Guidelines

### Conventional Commits

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(cycle-XX): <description>

[optional body]

[optional footer]
```

### Commit Types

- `feat` - New feature or functionality
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style/formatting (no logic change)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Maintenance tasks
- `perf` - Performance improvements

### Examples

```bash
# Good commits
git commit -m "feat(cycle-01): create database schema"
git commit -m "feat(cycle-01): add user model with validation"
git commit -m "fix(cycle-01): correct TypeScript type errors"
git commit -m "docs(cycle-01): update task 003 acceptance criteria"
git commit -m "refactor(cycle-01): extract helper functions"

# With body
git commit -m "feat(cycle-01): implement authentication system

- Set up JWT token generation
- Add login/logout endpoints
- Include refresh token logic
- Add password hashing with bcrypt"
```

### Scope

Always include `cycle-XX` in the scope to make it clear which cycle the work belongs to.

## Progress Tracking

### After Each Work Session

1. **Update cycle README**:
   - Task completion is automatic via PR merge
   - Progress bar updates automatically
   - Log session in session log table

2. **Update cycles.md** (when cycle completes):
   - Update cycle status
   - Update overall progress
   - Update time investment table

### Progress Bar Format

```
0/8:   [░░░░░░░░░░] 0%
1/8:   [█░░░░░░░░░] 12%
2/8:   [██░░░░░░░░] 25%
3/8:   [███░░░░░░░] 37%
4/8:   [████░░░░░░] 50%
5/8:   [█████░░░░░] 62%
6/8:   [██████░░░░] 75%
7/8:   [███████░░░] 87%
8/8:   [██████████] 100%
```

### Session Log

Track each work session in the cycle README:

| Date       | Duration | Tasks Completed | Notes                |
| ---------- | -------- | --------------- | -------------------- |
| 2025-10-11 | 1h       | 001             | Setup went smoothly  |
| 2025-10-12 | 2h       | 002, 003        | API implementation   |
| 2025-10-13 | 1h       | 004             | Testing complete!    |

## Tips for Success

### Daily Workflow

```bash
# 1. Start your work session
git checkout main
git pull origin main

# 2. Create/checkout task branch
git checkout -b feat/cycle-01-task-XXX-description

# 3. Read the task thoroughly
cat docs/cycles/01-../XXX-task-name.md

# 4. Work on the task (commit incrementally)
# ... make changes ...
git add .
git commit -m "feat(cycle-01): progress on task XXX"

# 5. Test your work
# ... run tests ...

# 6. Push and create PR
git push origin feat/cycle-01-task-XXX-description
# Open PR on GitHub

# 7. After merge, progress updates automatically
git checkout main
git pull origin main
```

### Time Boxing

- Set a timer for your task duration
- If a task takes significantly longer, consider breaking it down
- It's okay to take breaks between tasks
- Log actual time spent for future estimation

### Staying Organized

- ✅ Always work on a feature branch
- ✅ Commit frequently with clear messages
- ✅ Open PR when task is complete
- ✅ Progress tracked automatically
- ✅ Don't start next task until previous is merged

### Communication

If working with a team:

- Comment on PRs with questions/suggestions
- Use PR descriptions to explain decisions
- Update task files if instructions need clarification
- Keep notes in cycle README for future reference

## Questions?

If you're unsure about any part of this workflow:

1. Check the task's troubleshooting section
2. Review similar completed PRs
3. Ask in project discussions
4. Document the question/answer for future reference

---

**Remember**: This workflow is designed to keep you organized, track progress, and ensure quality. Follow it consistently for the best experience! 🚀
