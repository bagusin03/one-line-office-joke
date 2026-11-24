import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Office Joke: a single line about office life, 105 chars.
// Setup: a long-suffering office plant. Punchline: it outlasts everyone
// and gets promoted — absurd, specific, and instantly recognisable.
// Deterministic: the same fixed string is written on every run, with
// no trailing newline, so the output is byte-identical each time.
const JOKE =
  "Our office plant survived three managers, two layoffs and a rebrand, so HR just promoted it to team lead.";

// Runtime guard: enforce the competition gate (1-200 chars, single line).
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}`);
}
if (JOKE.includes("\n") || JOKE.trim().length === 0) {
  throw new Error("Joke must be a single non-empty line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
