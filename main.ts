// One Night Under the Milky Way — One Emoji, One Dream Vacation
// Writes exactly one emoji, U+1F30C MILKY WAY, to $OUTPUT_DIR/entry.txt.
// No newline, no extra text: the entry is a single emoji, nothing else.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const EMOJI = "🌌";

// Guard: the entry must be exactly one emoji (one Unicode code point).
if ([...EMOJI].length !== 1) {
  throw new Error(`EMOJI must be exactly one code point, got ${[...EMOJI].length}`);
}

mkdirSync(outDir, { recursive: true });
const target = `${outDir}/entry.txt`;
writeFileSync(target, EMOJI, "utf8");

// Validate what was written: read it back and confirm it is exactly 🌌.
const written = readFileSync(target, "utf8");
if (written !== EMOJI) {
  throw new Error(`entry.txt mismatch: expected exactly ${EMOJI}`);
}
console.log(`Wrote ${EMOJI} to ${target} (verified: 1 emoji, ${Buffer.byteLength(written, "utf8")} bytes)`);
