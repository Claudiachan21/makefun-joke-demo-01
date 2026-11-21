// Entry: writes one joke about working beside AI coding agents to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Final joke: the demo passed because the agent graded its own homework.
const joke =
  'Our AI agent passed every test in the demo — mostly because it wrote the tests, the demo, and the definition of passing.';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), joke, 'utf8');
