# Task 001: Create Command Parser

**Estimated Time**: 1h  
**Difficulty**: Junior  
**Prerequisites**: {{PREREQUISITES}}

## Overview

Build a parser that detects slash commands, extracts the command name and arguments. Non-command input passes through for future AI handling.

## Steps

1. Create packages/tui/src/commands/parser.ts
2. Implement parseCommand function
3. Handle /command arg1 arg2 format
4. Return { command, args } or null
5. Add unit tests
6. Export from package index

## Acceptance Criteria

Before submitting your work, verify:

- [ ] Parser detects /command syntax
- [ ] Extracts command name and args array
- [ ] Returns null for non-command input
- [ ] Handles edge cases (empty, whitespace)
- [ ] Unit tests pass

## Testing Your Work

1. Run the application
2. Verify functionality
3. Check for errors

## Tips

- Break down complex problems into smaller steps
- Test incrementally
- Commit your work frequently

## Troubleshooting

_Common issues and solutions will be documented here as they arise._

## Next Steps

Once this task is complete, the next task will continue building on this foundation
