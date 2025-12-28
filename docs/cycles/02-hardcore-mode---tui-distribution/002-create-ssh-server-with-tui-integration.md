# Task 002: Create SSH Server with TUI Integration

**Estimated Time**: 1h  
**Difficulty**: Junior  
**Prerequisites**: {{PREREQUISITES}}

## Overview

Build an SSH server using ssh2 that connects to the shared TUI package. Users can SSH in and interact with the terminal.

## Steps

1. Install ssh2 dependency in apps/ssh
2. Create src/server.ts with ssh2 setup
3. Generate dev host key
4. Wire SSH streams to TUI input/output
5. Add dev script to package.json
6. Test: `ssh -p 2222 test@localhost`

## Acceptance Criteria

Before submitting your work, verify:

- [ ] SSH server runs on port 2222
- [ ] Accepts any username (no auth for dev)
- [ ] Spawns TUI instance per connection
- [ ] Input/output wired to TUI
- [ ] Graceful disconnect handling
- [ ] Host key generated for dev

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
