# @bsquared/tui

Shared TUI package for Bsquared portfolio, built with OpenTUI.

## Usage

```typescript
import { createTUI } from "@bsquared/tui";

// Create a TUI instance
const tui = await createTUI({
  prompt: "> ",
});

// Handle user input
tui.onInput((input) => {
  tui.write(`You typed: ${input}`);
});

// Start the TUI
await tui.start();
```

## API

### `createTUI(options?)`

Creates a new TUI instance.

**Options:**

- `prompt` (string): The prompt to display (default: `'> '`)

**Returns:** `Promise<TUIInstance>`

### `TUIInstance`

**Methods:**

- `write(text: string)`: Writes text to the output pane
- `onInput(callback: (input: string) => void)`: Registers a callback for user input
- `start()`: Starts the TUI (returns a Promise)
- `stop()`: Stops the TUI and cleans up

## Development

This package uses OpenTUI for terminal UI rendering. Both the SSH and Web apps depend on this package to ensure a consistent experience.

## Architecture

The TUI consists of:

- **Output Pane**: A scrollable text area that displays content (takes up most of the screen)
- **Input Widget**: A single-line input field at the bottom for user commands

The layout is managed using OpenTUI's flexbox-based layout system.

