# @bsquared/tui

Shared terminal-style command engine for the Bsquared portfolio.

This package is headless: it parses input, dispatches commands, and emits
ANSI-formatted strings. The platform (web, SSH, etc.) decides how to render
that output.

## Usage

```typescript
import { createTUI } from "@bsquared/tui";

const tui = createTUI({
  prompt: "> ",
});

// Send output to your renderer/transport
tui.onOutput((text) => {
  process.stdout.write(text);
});

// Handle user input
tui.onInput((input) => {
  // Custom hooks or analytics can go here
});

await tui.handleInput("/help");
```

## API

### `createTUI(options?)`

Creates a new TUI instance.

**Options:**

- `prompt` (string): Prompt to display (default: `'> '`)
- `welcome` (string): Welcome banner text
- `data` (TUIData): Data used by built-in commands

**Returns:** `TUIInstance`

### `TUIInstance`

**Methods:**

- `handleInput(input: string): Promise<void>`: Process a line of input
- `write(text: string)`: Write text to output
- `writeLine(text: string)`: Write a line to output
- `onOutput(callback: (text: string) => void)`: Receive output
- `onInput(callback: (input: string) => void)`: Receive sanitized input
- `getWelcome(): string`: Get the welcome banner
- `getPrompt(): string`: Get the prompt string
- `getDispatcher(): Dispatcher`: Get the command dispatcher

## Rendering Notes

- Output includes ANSI escape codes for color and formatting.
- Real terminals render ANSI natively; web UIs can parse ANSI to spans.
- This package is not a terminal emulator; it produces formatted text only.
