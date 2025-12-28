# Task 003: Add xterm.js Terminal Component

**Estimated Time**: 1h  
**Difficulty**: Junior  
**Prerequisites**: {{PREREQUISITES}}

## Overview

Create a React component wrapping xterm.js for the web terminal. This will be the frontend piece that connects to the TUI backend.

## Steps

1. Install xterm and xterm-addon-fit
2. Create components/terminal/XTerminal.tsx
3. Setup useEffect for terminal initialization
4. Configure theme and sizing
5. Expose refs/callbacks for data handling
6. Create simple test page to verify rendering

## Acceptance Criteria

Before submitting your work, verify:

- [ ] XTerminal component renders xterm.js
- [ ] Terminal fits container with proper sizing
- [ ] Green-on-black theme matches /hardcore aesthetic
- [ ] Component is client-only (dynamic import)
- [ ] Exposes onData and write methods for parent

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
