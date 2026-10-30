# Figma Variables to Code: Token Pipeline

A simple, one-directional pipeline for the sandbox:

```
Figma variables  ->  tokens/*.json  ->  Style Dictionary  ->  src/styles/tokens.css  ->  Tailwind classes
   (design)          (source file)       (npm run tokens)      (generated, @theme)       (used in components)
```

Figma stays the design source of truth. The JSON in `tokens/` is a snapshot of it. Code never writes back to Figma. This is deliberately the simplest approach; two-way sync is not worth the complexity for a sandbox.

> Verify tool details against current docs before relying on them. Figma's variable export options, Style Dictionary, and Tailwind all change quickly. The structure below is what matters; exact flags may need adjusting.

## Step 1: Get variables out of Figma

Pick one. They're ordered from least to most setup.

**Option A: Let Claude read them via the Figma MCP server (easiest for learners).**
With the Figma MCP connected, ask Claude Code to read the variables from the playground file and write them to `tokens/tokens.json` in the format below. No plugin needed. The trade-off is that output can vary run to run, so review the diff and check names against Figma.

**Option B: Export with a plugin.**
Tokens Studio, or one of the "export variables as JSON" plugins in the Figma Community, can export variables as JSON. Prefer one that outputs the W3C Design Tokens (DTCG) format, since Style Dictionary v4 reads it natively. Drop the file into `tokens/`.

**Option C: Figma's Variables REST API.**
Fully scriptable and good for automation, but access to the variables endpoints has historically required an Enterprise plan. Check whether that applies to you before investing here.

Recommendation: start with **A** so designers can learn the loop with no extra tools, and try **B** in a later module so they see a more deterministic route.

## Step 2: Token file format (DTCG)

Keep names aligned with Tailwind v4's theme namespaces so tokens turn into utility classes automatically. `color.*` becomes `bg-*`, `text-*`, `border-*`; `spacing.*` becomes `p-*`, `m-*`, `gap-*`; and so on.

`tokens/tokens.json`:

```json
{
  "color": {
    "brand": {
      "primary": { "$value": "#2F5BEA", "$type": "color" },
      "primary-hover": { "$value": "#244AC4", "$type": "color" }
    },
    "text": {
      "default": { "$value": "#14171F", "$type": "color" },
      "muted": { "$value": "#5B6270", "$type": "color" }
    },
    "surface": {
      "default": { "$value": "#FFFFFF", "$type": "color" },
      "subtle": { "$value": "#F5F6F8", "$type": "color" }
    }
  },
  "spacing": {
    "1": { "$value": "4px", "$type": "dimension" },
    "2": { "$value": "8px", "$type": "dimension" },
    "4": { "$value": "16px", "$type": "dimension" },
    "6": { "$value": "24px", "$type": "dimension" }
  },
  "radius": {
    "sm": { "$value": "4px", "$type": "dimension" },
    "md": { "$value": "8px", "$type": "dimension" },
    "lg": { "$value": "16px", "$type": "dimension" }
  },
  "font": {
    "sans": { "$value": "Inter, system-ui, sans-serif", "$type": "fontFamily" }
  }
}
```

The values above are placeholders (TODO: replace with your real ones). Reference other tokens with `"{color.brand.primary}"` syntax to preserve semantic layers (e.g. a `button.background` token pointing at `color.brand.primary`).

## Step 3: Style Dictionary config

Install: `npm install -D style-dictionary`

`sd.config.mjs`:

```js
export default {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/styles/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            selector: '@theme',
            outputReferences: true,
          },
        },
      ],
    },
  },
};
```

Add to `package.json` scripts:

```json
"tokens": "style-dictionary build --config sd.config.mjs"
```

Running `npm run tokens` should produce `src/styles/tokens.css` along these lines:

```css
@theme {
  --color-brand-primary: #2f5bea;
  --color-brand-primary-hover: #244ac4;
  --spacing-4: 16px;
  --radius-md: 8px;
}
```

## Step 4: Wire it into Tailwind v4

In `src/index.css`:

```css
@import "tailwindcss";
@import "./styles/tokens.css";
```

Components can now use `bg-brand-primary`, `rounded-md`, and so on, with no `tailwind.config` file needed. If the generated `@theme` block doesn't produce utilities as expected, check that the variable names follow Tailwind's namespaces (`--color-*`, `--spacing-*`, `--radius-*`, `--font-*`).

## Optional: Dark mode and other modes

Figma variable modes (light/dark, brand A/B) can be exported as separate token files (`tokens/dark.json`). Add a second platform file in the Style Dictionary config that outputs with `selector: '[data-theme="dark"]'` and filters to the dark tokens. Treat this as a stretch exercise rather than part of the first pass.

## Keeping tokens honest (drift check)

- Re-run the export whenever the playground Figma file changes, and commit the JSON diff so changes are visible.
- Periodically ask Claude: "Search `src/` for hardcoded colors, spacing, and radii that should be tokens." It's a good learning exercise and catches drift.
- Optionally add a lint rule or a simple grep script that fails on raw hex values in `src/components/`.

## Suggested learner exercise

1. Change a color variable in the playground Figma file (e.g. brand primary).
2. Re-export (Option A or B) and run `npm run tokens`.
3. Watch the prototype and Storybook update with no component edits.
4. Write one sentence in your learning log on why that's useful.
