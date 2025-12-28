# Task 004: Create WebSocket Server for Web Terminal

**Estimated Time**: 1h  
**Difficulty**: Junior  
**Prerequisites**: {{PREREQUISITES}}

## Overview

Build a WebSocket server that bridges the web frontend (xterm.js) to the TUI backend. This enables real-time bidirectional communication.

## Steps

1. Create server.ts with WebSocket handling
2. Integrate with Next.js custom server (or API route)
3. Wire WebSocket messages to TUI input/output
4. Handle connection lifecycle
5. Update dev script to use custom server
6. Test WebSocket connection with simple client

## Acceptance Criteria

Before submitting your work, verify:

- [ ] WebSocket server runs alongside Next.js
- [ ] Spawns TUI instance per connection
- [ ] Messages flow: xterm → WS → TUI → WS → xterm
- [ ] Connection cleanup on disconnect
- [ ] Works with Next.js dev server

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
