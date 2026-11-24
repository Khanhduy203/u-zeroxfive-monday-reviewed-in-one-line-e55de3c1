import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Monday: a weekly software update nobody asked for — it reboots your weekend, crashes your motivation, and still demands a five-star rating.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
const lines = ENTRY.split("\n");
if (lines.length !== 1) {
  throw new Error(`entry must be exactly one line, got ${lines.length}`);
}
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY + "\n", "utf8");

console.log(ENTRY);
console.log(`chars: ${ENTRY.length}`);
console.log(`bytes: ${Buffer.byteLength(ENTRY, "utf8")}`);
console.log(`wrote: ${outPath}`);
