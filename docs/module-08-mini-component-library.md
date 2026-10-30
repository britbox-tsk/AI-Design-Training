# Module 8: Build a Mini Component Library

**Time:** 4-6 hours (spread over several sessions)
**Prerequisites:** Module 7. Storybook runs, and you have Button, Input, and Card with stories.
**You're done when:** your Storybook looks recognizably like the Figma component library, and you can point out where the two have drifted apart.

## What this module is for

Module 7 built three components. Now you'll scale up to roughly 8-10, mirroring the playground Figma library. The point isn't just volume. Repeating the process shows you:

- How to make component building a **repeatable workflow**
- How **composition** works (components made of other components)
- Where **code and design drift apart**, and how to notice it

> The library you build here is a learning artifact, not something to ship. Aim for understanding, not completeness.

---

## Part A: Plan your library (20 min)

The playground file has ten components in three tiers (see `playground-figma-spec.md`):

| Tier | Components |
|---|---|
| Simple | Button, Badge, Avatar |
| Medium | Input, Checkbox, Toggle, Alert, Card |
| Complex | Modal, Tabs |

You've done Button, Input, and Card. Aim to add **at least five more**, including at least one complex one.

### Make a status tracker

Keep a simple table in your learning log (or ask Claude to create `docs/component-status.md`):

| Component | In Figma | Built | Has stories | A11y checked | Matches Figma? | Notes |
|---|---|---|---|---|---|---|
| Button | yes | yes | yes | yes | mostly | Missing loading state |
| Badge | yes | | | | | |
| ... | | | | | | |

It keeps you oriented, and it becomes the record of drift you'll analyze in Part D.

## Part B: Build with a repeatable workflow (2-3 hours)

Build one component per session or sitting. This keeps usage manageable, since Claude doesn't need to carry everything from earlier components.

### The loop (per component)

1. **Link** to the specific Figma component, not the whole file.
2. **Propose first:**
   > Read the properties and variants of this Figma component: [link]. Propose a props interface that mirrors them and list which states you'll cover. Don't build yet.
3. **Check** the proposal against Figma. Fix anything off.
4. **Build** the component and its story:
   > Build it with a Storybook story showing every variant and state, with controls. Reuse existing components where it makes sense. Follow CLAUDE.md.
5. **Review** in Storybook using the checklist from Module 7.
6. **Check accessibility** with the addon, plus the keyboard.
7. **Compare** with Figma, fix differences, and **commit.**
8. **Update** your status tracker.

By your third or fourth component, this should feel quick. If a step keeps being tedious, that's a hint it could be automated (see Module 9, "Go further").

### What each tier teaches

**Simple (Badge, Avatar):** quick wins. Notice how little a simple component needs, and resist over-engineering.

**Medium (Checkbox, Toggle, Alert):** these introduce *state* (checked, on/off) and, for Alert, dismissal behavior. Ask Claude:

> Should this component manage its own state, or should the parent control it? Explain the trade-offs for a designer.

**Complex (Modal, Tabs):** these combine components and have real accessibility behavior. Modal should:

- Trap keyboard focus inside while open
- Close with the Escape key
- Return focus to where it came from on close

Tabs should respond to arrow keys. Rather than trusting that Claude got these right, test them yourself, and ask:

> What keyboard and screen-reader behaviors does a [Modal/Tabs] need? Which ones does our implementation handle, and which are missing?

### Composition

A Modal contains Buttons. A Card might contain Badges and Avatars. Check that Claude reuses your existing components rather than rebuilding them:

> Does this Modal reuse our Button component for its actions? If not, change it to.

Composition is the code equivalent of nested component instances in Figma. When you change the Button, the Modal's buttons change too.

## Part C: Document it (30 min)

A library nobody can navigate isn't much use. Ask Claude to help you tidy up:

> Organize our Storybook sidebar into groups (e.g. Actions, Forms, Feedback, Layout). Add a short description to each component's docs page covering what it's for, when to use it, and accessibility notes. Base it on the descriptions in Figma where they exist.

If you've got energy, add a "Foundations" story that displays your tokens (color swatches, spacing, type) so the Storybook documents the system, not just the components. Compare it with the Foundations page in Figma.

## Part D: Find the drift (45-60 min)

This is the heart of the module. Code and design never stay perfectly aligned without effort. Hunt for where yours disagree.

### D1. Side by side

For each component, place the Figma version next to the Storybook version. Look for differences in:

- Variants that exist in one but not the other
- Naming (Figma's "Ghost" versus code's "tertiary")
- Spacing and sizing
- States that are shown in Figma but missing in code (or vice versa)
- Behavior that Figma can't express at all

### D2. Ask Claude to audit

Pick three components and run:

> Compare our coded [component] to the Figma component at [link]. List every difference in variants, states, spacing, tokens, and naming. Rank them by how much they matter.

Compare Claude's list with your own. Where did each of you notice things the other missed?

### D3. The Figma-only variant (Exercise 3)

The playground file includes a Button variant that exists only in Figma (see the Exercises page). Handle it as a real workflow:

1. Notice it. Does your status tracker or your audit catch it?
2. Ask Claude to extend the Button and its story to include it.
3. Review the result against Figma.

### D4. Classify what you found

Sort the differences into groups. Examples:

- **Bugs:** code is wrong, Figma is right
- **Design debt:** Figma is out of date
- **Intentional:** the difference is OK (for example, code handles hover more precisely)
- **Unknown:** needs a conversation

Write two or three sentences in your learning log about which category was biggest, and what process might prevent it. This is exactly the kind of thinking that matters if your team ever builds a real coded library.

## Part E: Reflect on the whole process (15 min)

Open your finished Storybook and ask Claude:

> Summarize the state of this component library: what's complete, what's missing compared to Figma, and what are the biggest inconsistencies?

Compare with your own sense. Then decide: if this were a real library, what would you do next?

---

## Stretch goals (optional)

- **Publish it:** ask Claude how to build a static Storybook (`npm run build-storybook`) and share it as a link. See Module 9.
- **Dark mode in Storybook:** if you did the dark mode token stretch in Module 5, add a theme toggle to Storybook.
- **A component contribution guide:** ask Claude to draft a short checklist for "adding a new component to this library", based on what you learned.
- **Visual comparison:** investigate visual regression tools that compare screenshots across changes. Ask Claude what's available and what the trade-offs are. Try only if you're curious, since setup can be involved.
- **Rebuild a screen from the library:** take a screen from Module 6 and rebuild it using only your library components. What's missing?

## You're done when

- [ ] You've built at least eight components (including Button, Input, and Card) with stories
- [ ] At least one is a complex component (Modal or Tabs), and you tested its keyboard behavior
- [ ] You've compared at least three components against Figma and noted the differences
- [ ] Your Storybook is organized and recognizably mirrors the Figma library
- [ ] You can explain where code and design drifted apart in your sandbox

## What to notice

For your learning log:

- What got faster as you repeated the workflow? What stayed slow?
- Where did Claude's output vary the most from component to component?
- What was the most surprising difference between Figma and code?
- What would need to be true for a team to keep these two in sync over time?
- Would you trust this library for real product work? What would you check first?

## If something goes wrong

- **Components look inconsistent with each other:** ask Claude to find shared patterns (spacing, focus styles) and refactor them into one place.
- **Claude rebuilds things instead of reusing them:** tell it explicitly which component to reuse, and consider adding a "reuse before creating" reminder to CLAUDE.md (it's already there, so check the wording).
- **Storybook gets slow or messy:** ask Claude to look for unused stories and organize the sidebar.
- **Usage is high:** one component per session, one Figma link per prompt, and avoid pasting big files.
- **You're stuck on a complex component:** build the simple version first, test it, then add features one at a time.
- See also `getting-unstuck.md`.

## Next

**Module 9: Go Further (optional).** Pick from a menu: custom slash commands and skills, deploying a prototype to share, a new framework, or rebuilding a real past project.
