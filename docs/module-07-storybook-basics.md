# Module 7: Storybook Basics

**Time:** 3-5 hours
**Prerequisites:** Modules 1-5 (Module 6 is helpful but not required). Figma is connected and your tokens work.
**You're done when:** you can browse your components and all their states in Storybook.

## What this module is for

So far your components have lived inside screens. Storybook shows them on their own, one at a time, in every variant and state. Think of it as the Components page of your Figma file, except live, interactive, and made of real code.

By the end you'll have Storybook running, a few components with stories, and a feel for reviewing coded components the way you'd review designs.

> **If your starter repo already includes Storybook** (TODO: confirm), skip Step 2 and go straight to Step 3.

---

## What's a story? (5 min)

A **story** is one example of a component in a particular state: "Button, primary, large" or "Input, error". A component gets a **stories file** holding several of them. Storybook reads these files and builds a browsable catalog, with controls to change props live.

You won't write stories by hand. Claude will. Your job is to decide which variants and states should exist, and to review them.

---

## Step 1: Understand the goal (5 min)

Ask Claude:

> Explain Storybook to me as a designer who knows Figma well. How is a story like a Figma variant? Where is the analogy weak?

Note the answers. They'll make the rest easier.

## Step 2: Add Storybook (20-30 min)

Make a branch: *"Create a branch called proto/storybook."*

Ask for a plan first:

> I want to add Storybook to this project. Before changing anything, tell me what you'll install and which files you'll create or change. Make sure our design tokens (src/styles/tokens.css) load in Storybook so components look right. Wait for my approval.

Review the plan. Storybook installs a lot: besides Storybook itself, recent versions also pull in a test runner (Vitest), a browser-automation tool (Playwright), and a set of browser binaries, so the install is sizeable and can take a few minutes. It also **modifies your `vite.config.ts`** (adding a test configuration) and adds a small `vitest.shims.d.ts` file. None of that is cause for alarm, but it's good to know before you approve, especially given the shared usage budget. When you approve, Claude will set it up.

Then start it:

```
npm run storybook
```

It should open at `http://localhost:6006`. If you see a sidebar and some example stories, it's working.

**Common first problem:** components look unstyled in Storybook even though they look fine in the prototype. This happens because Storybook's generated `.storybook/preview.tsx` doesn't import your global CSS, so Tailwind and your tokens never load. The fix is one line at the top of `.storybook/preview.tsx`: `import '../src/styles/index.css'`. Tell Claude: *"Our components look unstyled in Storybook. Make sure it loads the same global styles and tokens as the app."*

Commit when it works.

## Step 3: Your first component and story (45-60 min)

Start with **Button**, since it's simple and has lots of variants.

In the playground Figma file, find the Button component set and copy the link to it (select the component set, then Copy link to selection).

> Create a Button component that mirrors this Figma component: [link]. Read its properties and variants first and tell me the props interface you propose before building. Then build it with a Storybook story that shows every variant, size, and state, with controls for the props. Follow the conventions in CLAUDE.md.

Review the proposed props. Do they match Figma's property names (`Variant=Primary` becomes `variant="primary"`)? If not, say so before it builds.

### Explore what you got

In Storybook, try each of these:

- **The sidebar:** each story appears under the component name.
- **Controls panel:** change props live. Try every combination.
- **Docs tab** (if enabled): an auto-generated page describing the component and its props.
- **Viewport toolbar:** try mobile sizes.
- **Background and theme toolbars,** if available.

Ask Claude:

> Where in the code does Storybook get its list of controls? Show me the part of the stories file that defines them.

## Step 4: Review it like a designer (30 min)

Now do what you'd do in a design review, but for code.

**Checklist for every component:**

- [ ] Every Figma variant exists
- [ ] Every state exists: default, hover, focus-visible, disabled, loading (where relevant)
- [ ] Spacing, color, and type match Figma
- [ ] No hardcoded values (tokens only)
- [ ] Keyboard focus is visible
- [ ] Labels and prop names make sense to a designer
- [ ] It behaves well with very long or very short text

Put the Figma component and the Storybook component side by side. Ask Claude:

> Compare our coded Button to the Figma component at [link]. List differences in variants, states, spacing, and naming.

Fix the differences, one at a time, and commit.

**Note on hover and focus:** hover and focus states are hard to display in a static catalog, since you have to interact to trigger them. Ask Claude how to show them, such as dedicated stories or a Storybook addon that forces those states. Compare the options it gives you.

## Step 5: Add two more components (45-60 min)

Repeat Step 3 for **Input** and **Card**. They add new challenges:

- **Input** has more states (error, disabled, filled) and uses a label and helper text.
- **Card** introduces *composition*, since it holds other content.

You'll go faster this time. Notice what you're reusing from the Button process, and if the prompt got easier to write, add it to `prompt-patterns.md`.

## Step 6: The accessibility addon (30-45 min)

Storybook has an accessibility addon (`@storybook/addon-a11y`) that checks components for common problems. Recent versions of Storybook include it by default, so it's probably already there; if for some reason it isn't, ask Claude to add it.

1. Open any story and find the **Accessibility** panel.
2. Look at the results: *violations* (definite problems), *passes*, and *incomplete* (needs manual review).
3. Click a violation to see what it flagged and which element it concerns.

**Try it on all three components.** If you don't see any violations, you can create one on purpose. The Figma Exercises page has a deliberate contrast failure (see `playground-figma-spec.md`). Build a component or story from it and see whether the addon catches it.

Ask Claude:

> Explain this accessibility violation in plain language: [paste or describe]. Why does it matter to a real user, and how should we fix it?

Then have it fix the problem and recheck the panel.

**An important caveat:** automated checks catch only some problems, often cited as a minority of all accessibility issues. Passing the addon is a starting point, not proof of an accessible component. Also try the component with your keyboard alone.

## Step 7: Wrap up (10 min)

- Commit your work.
- Look at your Storybook as a whole. Is it something a teammate could use to understand your components?
- Ask Claude: *"What's missing from this Storybook that would make it more useful to a designer?"*

---

## You're done when

- [ ] Storybook runs at localhost:6006 with your tokens applied
- [ ] You have at least three components (Button, Input, Card) with stories covering their variants and states
- [ ] You've compared at least one to Figma and fixed a difference
- [ ] You've run the accessibility panel and fixed at least one finding (or checked a deliberate failure)
- [ ] You can explain what a story is to a colleague

## What to notice

For your learning log:

- How did reviewing in Storybook compare with reviewing in Figma?
- What did the Controls panel make easy that Figma makes tedious?
- What did the accessibility panel tell you that you wouldn't have noticed?
- How closely did Claude's props match Figma on the first try?

## If something goes wrong

- **Storybook won't start:** paste the terminal error to Claude. Version conflicts are the usual cause.
- **Components look unstyled:** see the "common first problem" note in Step 2.
- **A story shows an error:** the stories file probably references a prop that was renamed. Ask Claude to explain and fix.
- **Controls don't appear for a prop:** ask Claude to check how the component's props are typed and how the story declares them.
- **Usage is climbing:** build one component per session, point Claude at a specific Figma component link, and avoid asking it to scan the whole project.
- See also `getting-unstuck.md`.

## Next

**Module 8: Build a Mini Component Library.** You'll scale up to 8-10 components mirroring your Figma library, and learn where code and design drift apart.
