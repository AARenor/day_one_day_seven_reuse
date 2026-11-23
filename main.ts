// Copies the repository's VIDEO.json, which names the posted video, to the directory the grader reads.
// Source: $MAKEFUN_BOT_DIR/VIDEO.json when set, else VIDEO.json beside this file.
// Destination: $MAKEFUN_OUTPUT_DIR/VIDEO.json when set, else /output/VIDEO.json.
// Neither run reads the network, the clock or anything else, so both runs write the same bytes.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const sourceDir = process.env.MAKEFUN_BOT_DIR ?? import.meta.dirname;
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(join(sourceDir, 'VIDEO.json'), join(outputDir, 'VIDEO.json'));
} catch (error) {
  console.error(`VIDEO.json could not be copied from ${sourceDir} to ${outputDir}: ${(error as Error).message}`);
  process.exit(1);
}
