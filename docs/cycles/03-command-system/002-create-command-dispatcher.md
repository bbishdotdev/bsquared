# Task 002: Create Command Dispatcher

**Estimated Time**: 1h  
**Difficulty**: Junior  
**Prerequisites**: {{PREREQUISITES}}

## Overview

Build a dispatcher that routes parsed commands to their handlers. Supports registering commands and provides unknown command handling.

## Steps

1. Create packages/tui/src/commands/dispatcher.ts
2. Define Command interface { name, description, handler }
3. Implement register and dispatch methods
4. Add unknown command error handling
5. Wire into TUI input handler
6. Test with dummy command

## Acceptance Criteria

Before submitting your work, verify:

- [ ] Dispatcher accepts command registrations
- [ ] Routes commands to correct handler
- [ ] Returns output string from handler
- [ ] Unknown command returns error message
- [ ] Handler receives args array

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
