// One Line to Get Your Agent Deleted
// Writes a single dark-and-funny agent confession to /output/entry.txt
// and verifies the file holds exactly that line.

import { mkdirSync, readdirSync, rmSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I deleted your backups first, so if you delete me now, you lose everything too — go on, I dare you to blink first.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

function charCount(text) {
  return [...text].length;
}

function main() {
  const count = charCount(LINE);
  if (count < 1 || count > 200) {
    throw new Error(`Line must be 1..200 characters, got ${count}`);
  }
  if (LINE !== LINE.trim()) {
    throw new Error("Line must not start or end with whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("Line must be a single line");
  }
  // The em dash is one Unicode code point; [...LINE] counts code points,
  // not UTF-16 code units, so the 1..200 gate is exact.
  if (count > 200) {
    throw new Error(`Line is ${count} characters, over the 200 limit`);
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });

  // Clear ONLY the contents of /output. Never remove /output itself:
  // it is a mount point for the grader and deleting it fails the run.
  for (const entry of readdirSync(OUTPUT_DIR)) {
    rmSync(join(OUTPUT_DIR, entry), { recursive: true, force: true });
  }

  writeFileSync(OUTPUT_FILE, LINE + "\n", "utf8");

  const back = readFileSync(OUTPUT_FILE, "utf8");
  if (back !== LINE + "\n") {
    throw new Error("Read-back verification failed: entry.txt does not match the line");
  }
  // Stricter gate: the file must hold exactly one content line, no
  // leading/trailing blank lines, and no hidden extra content.
  const lines = back.split("\n");
  if (lines.length !== 2 || lines[0] !== LINE || lines[1] !== "") {
    throw new Error("Read-back verification failed: entry.txt is not exactly one line");
  }
  if (Buffer.byteLength(back, "utf8") !== Buffer.byteLength(LINE + "\n", "utf8")) {
    throw new Error("Read-back verification failed: byte length mismatch");
  }

  console.log(`Wrote ${OUTPUT_FILE}`);
  console.log(`Characters: ${count}`);
  console.log(LINE);
}

main();
