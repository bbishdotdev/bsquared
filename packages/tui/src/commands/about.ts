import { fmt, responseHeader } from "../format";
import type { CommandDefinition } from "../dispatcher";

export interface AboutConfig {
  name: string;
  title: string;
  bio: string;
}

export function createAboutCommand(config: AboutConfig): CommandDefinition {
  return {
    name: "about",
    description: "Learn about Brenden",
    usage: "/about",
    handler: () => {
      const lines = [
        "",
        responseHeader("About", config.name, "cyan"),
        "",
        `  ${fmt.header(config.name)}`,
        `  ${fmt.muted(config.title)}`,
        "",
        `  ${config.bio}`,
        "",
      ];

      return lines.join("\n");
    },
  };
}
