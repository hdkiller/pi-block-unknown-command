import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

const BUILT_IN_COMMANDS = new Set([
  "login",
  "logout",
  "model",
  "scoped-models",
  "settings",
  "import",
  "resume",
  "new",
  "name",
  "session",
  "tree",
  "fork",
  "compact",
  "copy",
  "export",
  "share",
  "reload",
  "hotkeys",
  "changelog",
  "quit"
]);

export default function blockUnknownCommands(pi: ExtensionAPI) {
  pi.on("input", async (event, ctx) => {
    const text = event.text.trim();

    if (!text.startsWith("/")) {
      return { action: "continue" };
    }

    if (event.source === "extension") {
      return { action: "continue" };
    }

    const commandName = text.slice(1).split(/\s+/)[0];

    if (!commandName) {
      return { action: "continue" };
    }

    if (BUILT_IN_COMMANDS.has(commandName)) {
      return { action: "continue" };
    }

    const commands = pi.getCommands();
    const isKnown = commands.some((cmd) => cmd.name === commandName);

    if (isKnown) {
      return { action: "continue" };
    }

    ctx.ui.notify(
      `Unknown command: /${commandName}\nType / to see available commands.`,
      "warning"
    );
    return { action: "handled" };
  });
}
