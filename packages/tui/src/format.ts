import pc from "picocolors";

/**
 * Semantic text formatters using ANSI colors
 * Designed for clean, modern terminal output inspired by OpenCode/Warp
 */
export const fmt = {
  // Headers and structure
  header: (text: string) => pc.bold(pc.white(text)),
  subheader: (text: string) => pc.bold(pc.cyan(text)),
  sectionTitle: (text: string) => pc.bold(pc.blue(text)),

  // Commands and actions
  command: (text: string) => pc.yellow(text),
  action: (text: string) => pc.cyan(text),

  // Status
  success: (text: string) => pc.green(text),
  error: (text: string) => pc.red(text),
  warning: (text: string) => pc.yellow(text),

  // Content
  muted: (text: string) => pc.dim(text),
  highlight: (text: string) => pc.cyan(text),
  link: (text: string) => pc.underline(pc.blue(text)),
  value: (text: string) => pc.white(text),

  // Special
  brand: (text: string) => pc.bold(pc.red(text)),
  badge: (
    text: string,
    color: "green" | "yellow" | "blue" | "cyan" | "dim" | "red",
  ) => {
    const colorFn =
      color === "green"
        ? pc.green
        : color === "yellow"
          ? pc.yellow
          : color === "blue"
            ? pc.blue
            : color === "cyan"
              ? pc.cyan
              : color === "red"
                ? pc.red
                : pc.dim;
    return colorFn(`[${text}]`);
  },

  // Prefix markers (like OpenCode's colored dots)
  marker: (
    color: "cyan" | "green" | "yellow" | "blue" | "red" | "dim" = "cyan",
  ) => {
    const colorFn =
      color === "cyan"
        ? pc.cyan
        : color === "green"
          ? pc.green
          : color === "yellow"
            ? pc.yellow
            : color === "blue"
              ? pc.blue
              : color === "red"
                ? pc.red
                : pc.dim;
    return colorFn("●");
  },

  // Key-value formatting
  key: (text: string) => pc.dim(text),
  label: (text: string) => pc.bold(pc.dim(text)),
};

/**
 * Create a section with header and content
 */
export function section(title: string, content: string): string {
  return `${fmt.header(title)}\n${content}`;
}

/**
 * Create a styled response header (like OpenCode's task headers)
 * Shows: ● CommandName  description
 */
export function responseHeader(
  name: string,
  description?: string,
  color: "cyan" | "green" | "yellow" | "blue" = "cyan",
): string {
  const marker = fmt.marker(color);
  const title = fmt.subheader(name);
  const desc = description ? `  ${fmt.muted(description)}` : "";
  return `${marker} ${title}${desc}`;
}

/**
 * Create a card-like block for an item (job, project, etc.)
 * CSS handles word-wrapping on web; terminal will character-wrap
 */
export function card(
  title: string,
  subtitle: string,
  content: string[],
  meta?: string,
): string {
  const pad = "  ";

  const lines = [
    `${pad}${fmt.header(title)}${meta ? `  ${meta}` : ""}`,
    `${pad}${fmt.muted(subtitle)}`,
  ];

  if (content.length > 0) {
    lines.push("");
    content.forEach((line) => {
      lines.push(`${pad}${line}`);
    });
  }

  return lines.join("\n");
}

/**
 * Indent all lines of content
 */
export function indent(content: string, spaces = 2): string {
  const pad = " ".repeat(spaces);
  return content
    .split("\n")
    .map((line) => `${pad}${line}`)
    .join("\n");
}

/**
 * Create an aligned list of items (for commands, etc.)
 * @param items Array of [left, right] tuples
 * @param leftWidth Width of left column (auto-calculated if not provided)
 */
export function alignedList(
  items: Array<[string, string]>,
  leftWidth?: number,
): string {
  const width =
    leftWidth ?? Math.max(...items.map(([left]) => stripAnsi(left).length)) + 2;
  return items
    .map(([left, right]) => {
      const padding = " ".repeat(Math.max(0, width - stripAnsi(left).length));
      return `  ${left}${padding}${right}`;
    })
    .join("\n");
}

/**
 * Create a simple bullet list
 */
export function bulletList(items: string[], bullet = "•"): string {
  return items.map((item) => `  ${fmt.muted(bullet)} ${item}`).join("\n");
}

/**
 * Horizontal rule (simple dashes)
 */
export function hr(width = 40): string {
  return fmt.muted("─".repeat(width));
}

/**
 * A subtle divider with optional label
 */
export function divider(label?: string, width = 50): string {
  if (!label) {
    return fmt.muted("─".repeat(width));
  }
  const labelPart = ` ${label} `;
  const sideWidth = Math.max(0, Math.floor((width - labelPart.length) / 2));
  const left = "─".repeat(sideWidth);
  const right = "─".repeat(width - sideWidth - labelPart.length);
  return fmt.muted(`${left}${labelPart}${right}`);
}

/**
 * Strip ANSI codes for length calculation
 */
function stripAnsi(str: string): string {
  return str.replace(
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
    "",
  );
}

/**
 * Add blank lines for spacing
 */
export function spacer(lines = 1): string {
  return "\n".repeat(lines);
}

// Legacy export for backwards compatibility (now just returns content without box)
export function box(content: string, _title?: string): string {
  return content;
}
