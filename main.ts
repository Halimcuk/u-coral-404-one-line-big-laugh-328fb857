// One Line, Big Laugh — a smart fridge stages a small, caring intervention.
// (Tested: two runs into separate slug-named folders produce byte-identical output.)
// The fridge is not angry: it has locked its own door for one night so the
// leftover lasagne — the owner's usual midnight target — can finally rest.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Hi, it's your fridge — I've locked the door tonight, not to punish you, just so the leftover lasagne can finally sleep in peace.";

const outputDir =
  process.env.OUTPUT_DIR ||
  process.env.MAKEFUN_OUTPUT_DIR ||
  process.env.OUTPUT ||
  "/output";

// Self gate: 1 to 200 characters of UTF-8 text, not only whitespace.
// Counted in Unicode code points so a multi-byte character counts once.
const charCount = Array.from(LINE).length;
if (charCount < 1 || charCount > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the 1-200 character gate: ${charCount} characters`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote entry.txt (${charCount} characters) to ${outputDir}`);
