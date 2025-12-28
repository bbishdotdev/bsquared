# Task 005: Connect XTerminal to WebSocket Backend

**Estimated Time**: 1h  
**Difficulty**: Junior  
**Prerequisites**: {{PREREQUISITES}}

## Overview

Wire the xterm.js component to the WebSocket server, enabling the full web terminal experience.

## Steps

1. Add WebSocket connection logic to XTerminal
2. Wire onData to WebSocket send
3. Wire WebSocket messages to terminal write
4. Add connection state handling
5. Test full flow: type → echo → display

## Acceptance Criteria

Before submitting your work, verify:

- [ ] XTerminal connects to WebSocket on mount
- [ ] Keyboard input sent to server
- [ ] Server responses rendered in terminal
- [ ] Reconnection handling for dropped connections
- [ ] Loading state while connecting

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
