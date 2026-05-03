import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Turbopack's PostCSS worker doesn't set result.opts.from, so @tailwindcss/postcss
// computes base = path.dirname(process.cwd()) = "D:\2025\Github" (one level up).
// Enhanced-resolve then looks for node_modules walking up from that parent directory
// and never finds the project's node_modules.
// globalThis.__tw_resolve is the intentional override hook in @tailwindcss/node.
globalThis.__tw_resolve = (id, _base) => {
  if (id === "tailwindcss") {
    return path.join(__dirname, "node_modules", "tailwindcss", "index.css");
  }
  return null;
};

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
