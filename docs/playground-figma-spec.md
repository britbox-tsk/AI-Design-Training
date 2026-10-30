# Playground Figma File: Spec

A small, deliberately simple design system plus a few sample screens. It exists so designers can practice the Figma-to-code workflow without touching real project files. It should be big enough to make the modules interesting and small enough that one person can build it in a day or two.

**Design principles for this file**

- **Small beats complete.** 10 components, about 40 variables, 4 screens.
- **Everything bound to variables.** No raw hex values, spacing, or radii anywhere. Claude can only follow the token rules if the file does.
- **Names match code.** Variable, component, and property names should translate cleanly into the token JSON and React props (see CLAUDE.md).
- **Neutral and fictional.** Not tied to a real product or a real brand.
- **Modest frame sizes.** Large frames cost more to read through the Figma MCP. Keep one screen per frame and avoid enormous nested layouts.

TODO: pick a fictional product to theme the sample screens (suggestion: a simple project-tracking app, since it naturally needs forms, lists, filters, and settings).

## File structure

| Page | Contents |
|---|---|
| **Cover / README** | What this file is, how to use it, link to the sandbox repo, "nothing here is real" note |
| **Foundations** | Visual docs of colors, type styles, spacing, radii, shadows, bound to variables |
| **Components** | The 10 components, each with every variant and state laid out |
| **Screens** | The 4 sample screens built from the components |
| **Exercises** | Frames used by specific modules (see "Built-in exercises") |

## Variables

Use two collections so learners see the primitive-versus-semantic idea without too much complexity.

### Collection 1: Primitives
Raw values. Components should never bind to these directly.

- **Color ramps:** `blue`, `gray`, `green`, `amber`, `red`, each with about 5 steps (e.g. 100, 300, 500, 700, 900), plus `white`
- **Spacing:** 4, 8, 12, 16, 24, 32, 48
- **Radius:** 4, 8, 16, full (9999)
- **Font sizes:** 12, 14, 16, 20, 24, 32

### Collection 2: Semantic
What components actually use. These alias primitives, and these are what get exported to code.

| Group | Variable names (slash = nesting) |
|---|---|
| Color, brand | `color/brand/primary`, `color/brand/primary-hover`, `color/brand/primary-subtle` |
| Color, text | `color/text/default`, `color/text/muted`, `color/text/inverse`, `color/text/link` |
| Color, surface | `color/surface/default`, `color/surface/subtle`, `color/surface/raised` |
| Color, border | `color/border/default`, `color/border/strong`, `color/border/focus` |
| Color, feedback | `color/feedback/success`, `.../warning`, `.../danger`, `.../info`, plus a `-subtle` background version of each |
| Spacing | `spacing/1` (4), `spacing/2` (8), `spacing/3` (12), `spacing/4` (16), `spacing/6` (24), `spacing/8` (32), `spacing/12` (48) |
| Radius | `radius/sm`, `radius/md`, `radius/lg`, `radius/full` |
| Font family | `font/sans`, `font/mono` |
| Font size | `text/xs` (12), `text/sm` (14), `text/base` (16), `text/lg` (20), `text/xl` (24), `text/2xl` (32) |
| Shadow | `shadow/sm`, `shadow/md` (Figma effect styles; variables can't hold shadows, so treat these as styles and document them) |

**Why these names:** they line up with Tailwind v4's theme namespaces (`color-*`, `spacing-*`, `radius-*`, `font-*`, `text-*`, `shadow-*`), so the exported tokens become utility classes like `bg-brand-primary` and `text-muted` with minimal mapping. Adjust to match your real system later.

### Modes
- **Start with a single mode (light).**
- **Optional stretch:** add a `Dark` mode to the Semantic collection so learners can try the dark-mode export in the token pipeline doc. Check how many modes your Figma plan allows before committing to this.

### Text styles
Create text styles for `heading/1`, `heading/2`, `heading/3`, `body/default`, `body/small`, `label`, and `code`, all bound to the font and size variables.

## Components

Ten components, grouped by difficulty so learners can build up. Build them with auto layout, component properties, and variants, and bind every fill, stroke, spacing, and radius to semantic variables.

**Naming rule:** Figma property names and values should map to props, e.g. `Size=Large` becomes `size="large"`, `Variant=Primary` becomes `variant="primary"`, `State=Disabled` becomes `disabled`. Use lowercase-friendly values, and use boolean properties for things like `Show icon`.

### Simple (good for Modules 2, 4, 7)

| Component | Properties | States to show |
|---|---|---|
| **Button** | Variant: Primary / Secondary / Ghost / Danger. Size: Small / Medium / Large. Show icon (boolean). | Default, hover, focus, disabled, loading |
| **Badge** | Variant: Neutral / Success / Warning / Danger / Info | Default only |
| **Avatar** | Size: Small / Medium / Large. Type: Image / Initials | Default only |

### Medium (good for Modules 4, 5, 8)

| Component | Properties | States to show |
|---|---|---|
| **Input** | Type: Text / Password / Search. Label, helper text, and leading icon (booleans). | Default, hover, focus, filled, error, disabled |
| **Checkbox** | Checked: Unchecked / Checked / Indeterminate. Label (boolean). | Default, hover, focus, disabled |
| **Toggle** | On / Off. Label (boolean). | Default, hover, focus, disabled |
| **Alert** | Variant: Info / Success / Warning / Danger. Dismissible (boolean). Title (boolean). | Default only |
| **Card** | Padding: Default / Compact. Interactive (boolean). Has image / has footer (booleans). | Default, hover (if interactive), focus |

### Complex (good for Modules 6, 8, stretch goals)

| Component | Properties | States to show |
|---|---|---|
| **Modal** | Size: Small / Medium. Has footer actions (boolean). Includes a close button, title, and body slot. | Default |
| **Tabs** | Number of tabs: 2 / 3 / 4. Selected tab. | Default, hover, focus, selected |

Add a short description on each component in Figma (purpose, when to use it, accessibility notes). Claude can read those through the MCP, and they double as practice documentation.

## Sample screens

Four screens, each chosen to exercise a particular skill. Build them only from the components and variables above.

| Screen | What it contains | Good for |
|---|---|---|
| **1. Sign in** | Logo, heading, email and password inputs, "remember me" checkbox, primary button, link, an error alert variant | Module 2 (first prototype). Module 6 (form validation). |
| **2. Project list** | Page header, search input, filter tabs, a list of 6-8 cards with badges and avatars, empty state variant | Module 4 (Figma-to-code). Module 6 (filtering and sorting). |
| **3. Settings** | Tabs (Profile / Notifications / Security), form inputs, toggles, save button, success alert | Module 5 (tokens). Module 6 (state across tabs). |
| **4. Create project (3 steps)** | Step indicator, form fields per step, back/next buttons, review step, confirmation modal | Module 6 (multi-step flow). Responsive exercise. |

Build screens 1 and 2 at both desktop (1280) and mobile (390) widths so there's a responsive exercise from the start. Screens 3 and 4 can be desktop only.

## Built-in exercises

Include a few intentional quirks on the **Exercises** page so learners practice the judgment calls the CLAUDE.md rules are meant to trigger. Label each one clearly so no one thinks it's a mistake.

1. **The missing token.** A frame with a color or spacing value that isn't in the system. Learners should see Claude stop and ask rather than invent a value. (Module 5)
2. **The off-scale spacing.** A card using a 20px gap when the scale goes 16 then 24. Does Claude snap to the nearest token or flag it? (Module 5)
3. **A variant the code doesn't have yet.** A Button variant that exists only in Figma, so learners can practice asking Claude to extend the component and its story. (Module 8)
4. **A changeable token.** A prompt card telling learners to change `color/brand/primary` and re-run the export to see it ripple through code. (Token pipeline exercise)
5. **A contrast failure.** One text and background pairing that fails WCAG AA, to see whether the accessibility checks catch it. (Module 7)

## Conventions to follow while building

- **Auto layout everywhere.** It makes the structure readable to Claude and the output more faithful.
- **Meaningful layer names.** `Card / Header`, not `Frame 2041`.
- **No detached instances or stray raw values.** If it isn't bound to a variable, it isn't in the system.
- **Descriptions on components and variables.** One sentence each.
- **One component per frame on the Components page**, with variants laid out in a grid and labeled.
- **Keep the file link-friendly.** Each screen and component set should be easy to link to directly, since learners will paste frame links into Claude.

## Build checklist

- [ ] Primitives collection created and populated
- [ ] Semantic collection created, aliasing primitives
- [ ] Text styles and shadow styles created
- [ ] Foundations page documents all variables visually
- [ ] 10 components built with variants, properties, and states
- [ ] Every component fill, stroke, spacing, and radius bound to a semantic variable
- [ ] Descriptions added to components
- [ ] 4 sample screens built from components only
- [ ] Mobile versions of screens 1 and 2
- [ ] Exercises page with the 5 labeled quirks
- [ ] Cover page with README and repo link
- [ ] File shared with the team with view access (so no one edits the original by accident, and people can duplicate it to practice)
- [ ] Token export tested once end to end (see the token pipeline doc)

## Effort and shortcuts

Expect roughly one to two days for someone fluent in Figma variables. To save time:

- Start from a free community UI kit or an existing internal file, and strip it down to the 10 components. Check licensing before reusing anything.
- Build the Foundations and Primitives first, then components, then screens. Each layer depends on the one before.
- Build Button first and test the full pipeline (Figma, export, Storybook) with just that one component before building the rest. This surfaces problems with naming or token structure while they're cheap to fix.

## How this maps to the modules

| Module | What the file provides |
|---|---|
| 2: First prototype | Screen 1 (Sign in) |
| 4: Connect Figma | Screens 1-2, Foundations frames |
| 5: Tokens | Semantic variables, exercises 1, 2, 4 |
| 6: Interactive prototypes | Screens 2, 3, 4 |
| 7: Storybook basics | Button, Input, Card, exercise 5 |
| 8: Mini component library | All 10 components, exercise 3 |
