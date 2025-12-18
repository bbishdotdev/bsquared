#!/usr/bin/env bun
/**
 * Simple test script to verify the TUI package works
 * Run with: bun run packages/tui/test.ts
 */

import { createTUI } from "./src/index.js";

async function main() {
  console.log("Starting TUI test...\n");

  const tui = await createTUI({
    prompt: "> ",
  });

  // Set up echo functionality
  tui.onInput((input) => {
    tui.write(`Echo: ${input}`);
  });

  // Start the TUI
  await tui.start();
}

main().catch((error) => {
  console.error("Error starting TUI:", error);
  process.exit(1);
});

