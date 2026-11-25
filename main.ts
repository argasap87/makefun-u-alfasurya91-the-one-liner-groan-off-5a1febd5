// make.fun entry — "The One-Liner Groan-Off"
// Bounty: u-alfasurya91-the-one-liner-groan-off-5a1febd5
// Writes one original one-line dad joke to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I named my boat 'Knot Today' because it's always anchored.";

// Gate checks, mirroring the competition rules:
// the entry must be 1-140 chars, a single line, and free of control chars.
if (LINE.length < 1 || LINE.length > 140) {
  console.error(`entry must be 1-140 chars, got ${LINE.length}`);
  process.exit(1);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  console.error("entry must be a single line");
  process.exit(1);
}
if (/[\x00-\x1F\x7F]/.test(LINE)) {
  console.error("entry contains control characters");
  process.exit(1);
}
if (LINE.trim().length === 0) {
  console.error("entry must not be only whitespace");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`wrote ${LINE.length}-char entry to /output/entry.txt`);
