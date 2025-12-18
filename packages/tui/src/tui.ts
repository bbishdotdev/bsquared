import {
  createCliRenderer,
  type CliRenderer,
  BoxRenderable,
  TextRenderable,
  InputRenderable,
  InputRenderableEvents,
} from "@opentui/core";
import { TUIInstance, TUIOptions } from "./types.js";

/**
 * Creates a new TUI instance using OpenTUI
 *
 * This sets up:
 * - An input widget for user commands
 * - An output pane for displaying results
 * - Basic layout and styling
 *
 * @param options - Configuration options
 * @returns A TUI instance with methods to interact with the interface
 */
export async function createTUI(
  options: TUIOptions = {}
): Promise<TUIInstance> {
  const prompt = options.prompt || "> ";
  const inputCallbacks: Array<(input: string) => void> = [];

  let renderer: CliRenderer | null = null;
  let rootBox: BoxRenderable | null = null;
  let outputText: TextRenderable | null = null;
  let inputWidget: InputRenderable | null = null;

  const instance: TUIInstance = {
    write: (text: string) => {
      if (outputText) {
        // Append new text to the output
        const currentContent = outputText.content.toString();
        outputText.content = currentContent + text + "\n";
      }
    },

    onInput: (callback: (input: string) => void) => {
      inputCallbacks.push(callback);
    },

    start: async () => {
      // Create the renderer
      renderer = await createCliRenderer({
        exitOnCtrlC: true,
        useAlternateScreen: false,
      });

      // Create root container
      rootBox = new BoxRenderable(renderer, {
        width: "100%",
        height: "100%",
        flexDirection: "column",
      });

      // Create output pane (takes most of the space)
      outputText = new TextRenderable(renderer, {
        content: "Welcome to Bsquared Terminal\n",
        width: "100%",
        flexGrow: 1,
        overflow: "hidden",
      });

      // Create input widget at the bottom
      inputWidget = new InputRenderable(renderer, {
        width: "100%",
        placeholder: "Type a command...",
        value: "",
      });

      // Handle input submission
      inputWidget.on(InputRenderableEvents.ENTER, () => {
        if (inputWidget) {
          const input = (inputWidget as any)._value || "";

          // Clear the input
          (inputWidget as any)._value = "";

          // Call all registered callbacks
          inputCallbacks.forEach((callback) => callback(input));
        }
      });

      // Add children to root box
      rootBox.add(outputText);
      rootBox.add(inputWidget);

      // Add root box to renderer's root
      renderer.root.add(rootBox);

      // Focus the input widget
      if (inputWidget) {
        inputWidget.focus();
      }
    },

    stop: () => {
      if (renderer) {
        renderer.destroy();
        renderer = null;
      }
    },
  };

  return instance;
}
