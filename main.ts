// Copy VIDEO.json from the bot directory (or this repo root) into the
// scorer's output directory, creating it when missing.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";

const botDir = process.env.MAKEFUN_BOT_DIR ?? import.meta.dirname;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(botDir, "VIDEO.json");
const target = join(outDir, "VIDEO.json");

try {
  mkdirSync(outDir, { recursive: true });
  copyFileSync(source, target);
  console.log(`copied ${source} -> ${target}`);
} catch (error) {
  const reason = error instanceof Error ? error.message : String(error);
  console.error(`failed to copy VIDEO.json to ${target}: ${reason}`);
  process.exit(1);
}
