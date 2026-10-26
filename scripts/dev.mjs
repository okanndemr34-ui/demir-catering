import { spawn } from "node:child_process";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
// Accept conventional host/port flags while using Next's own development server.
const forwarded = process.argv
  .slice(2)
  .filter((arg) => arg !== "--strictPort")
  .map((arg) => (arg === "--host" ? "--hostname" : arg));
if (process.argv.includes("--strictPort")) {
  const { preview } = await import("./preview.mjs");
  const at = process.argv.indexOf("--port");
  preview(Number(process.argv[at + 1] || 4173));
} else {
  const child = spawn(
    process.execPath,
    [require.resolve("next/dist/bin/next"), "dev", "--webpack", ...forwarded],
    { stdio: "inherit" },
  );
  for (const signal of ["SIGINT", "SIGTERM"])
    process.on(signal, () => child.kill(signal));
  child.on("exit", (code) => process.exit(code ?? 1));
}
