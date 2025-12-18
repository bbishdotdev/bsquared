/**
 * Interface for the TUI instance returned by createTUI()
 */
export interface TUIInstance {
  /**
   * Writes text to the output pane
   */
  write: (text: string) => void;

  /**
   * Reads input from the user (when they submit)
   */
  onInput: (callback: (input: string) => void) => void;

  /**
   * Starts the TUI (begins rendering)
   */
  start: () => Promise<void>;

  /**
   * Stops the TUI and cleans up
   */
  stop: () => void;
}

/**
 * Options for creating a TUI instance
 */
export interface TUIOptions {
  prompt?: string;
}
