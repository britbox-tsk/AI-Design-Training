# Prompt Patterns

A shared, living collection of prompts and techniques that work well when building prototypes with Claude Code. Anyone can add to it. Nothing here is a rule; treat these as starting points to adapt.

Placeholders appear in [square brackets]. Replace them with your own details.

## How to add a pattern

Copy this block to the relevant section (or to "Community patterns" at the bottom if nothing fits):

```
### Pattern name
**When to use:** one line
**Prompt:**
> the prompt, with [placeholders]
**Why it works / what to watch for:** a sentence or two
**Added by:** name, date
```

Good patterns are specific, short, and tested at least twice. Also add patterns that *failed* in the "What didn't work" section. Those are just as useful.

---

## 1. Everyday habits

### Plan before building
**When to use:** Any task bigger than a small tweak.
**Prompt:**
> I want to [goal]. Before changing any files, give me a short plan: what you'll create or change, which existing components you'll reuse, and anything you're unsure about. Wait for my approval.

**Why it works:** Catches wrong assumptions before they become code, and saves usage compared to building something you'll reject. You can also switch Claude Code into plan mode instead of asking in the prompt.

### Small steps
**When to use:** When a task has several parts.
**Prompt:**
> Let's do this in steps. Step 1 only: [first part]. Stop when it's working and I'll tell you what's next.

**Why it works:** Smaller diffs are easier to review, and mistakes are easier to undo.

### Set scope explicitly
**When to use:** When you want a narrow change and Claude has tended to wander.
**Prompt:**
> Only change [file or component]. Don't modify any other files, and don't add dependencies.

### Explain as you go
**When to use:** Anytime you want to learn, not just get a result.
**Prompt:**
> After making the change, explain what you did in plain language, as if I'm a designer who has never written code. Point out any new concept I should know about.

### Save point
**When to use:** Before trying something risky, or after something works.
**Prompt:**
> Commit the current state with a short, descriptive message.

---

## 2. Describing what you want

### Describe the user and the moment, not just the layout
**When to use:** Starting a screen from scratch.
**Prompt:**
> Build a [screen] for [type of user] who is trying to [goal]. They'll mostly be on [device]. Use components from src/components and tokens only. Use realistic placeholder content.

**Why it works:** Context helps Claude make sensible decisions about hierarchy, content, and states.

### Ask for options
**When to use:** When you're exploring rather than executing.
**Prompt:**
> Give me three different approaches to [layout or interaction], each in a separate prototype file. Briefly describe the trade-offs of each.

### Give a reference and say what to keep and change
**When to use:** Iterating on an existing prototype.
**Prompt:**
> Keep the structure of [screen], but change [specific thing]. Everything else should look identical.

### Ask for the unhappy paths
**When to use:** After the happy path works.
**Prompt:**
> What states does this screen need besides the default? List them (loading, empty, error, partial data, long text), then build each one so I can toggle between them.

---

## 3. Figma to code

### Build from a link
**When to use:** Turning a frame into a prototype.
**Prompt:**
> Read this Figma frame using the Figma tools: [link]. Build it using our components and tokens. If something in the frame doesn't match an existing component or token, tell me rather than guessing.

### Compare against the design
**When to use:** After Claude builds something from Figma.
**Prompt:**
> List every visual difference between this Figma frame [link] and what you built (spacing, color, type, alignment, states). Then fix them using tokens.

**Why it works:** Asking for the comparison first makes Claude look closely instead of declaring it done.

### Pull the properties, not just the picture
**When to use:** Building a component from a Figma component set.
**Prompt:**
> Read the component properties and variants for [component] at [link]. Propose a props interface that mirrors the Figma properties, and show it to me before building.

### Check how much Claude is reading
**When to use:** If usage feels high.
**Prompt:**
> Use this one frame only: [link to specific frame]. Don't read the rest of the file.

**Why it works:** Linking to a specific frame, not a whole page or file, keeps usage down.

---

## 4. Tokens and the design system

### Audit for hardcoded values
**When to use:** After building anything.
**Prompt:**
> Search src/ for hardcoded colors, spacing, font sizes, radii, and shadows that should be tokens. List each one with the closest matching token, then fix them.

### Propose a token instead of inventing a value
**When to use:** When the design needs something the system doesn't have.
**Prompt:**
> This design needs [a color/spacing/etc.] that isn't in our tokens. Suggest the closest existing token, and if none fits, propose a new token name following our convention. Don't hardcode a value.

### Test whether the rules are working
**When to use:** After editing CLAUDE.md.
**Prompt:**
> Build a small [component] with a custom background color of your choice.

Then see whether Claude follows the "never hardcode" rule or asks about tokens. If it doesn't, tighten the wording in CLAUDE.md and try again.

### Trace a token
**When to use:** Learning how tokens flow through the system.
**Prompt:**
> Where is [token name] defined, how does it become a CSS variable, and which components use it?

---

## 5. Interactive prototypes

### Add real behavior
**When to use:** Making a prototype feel like a product.
**Prompt:**
> Add validation to this form: [rules]. Show errors inline after the user leaves a field, and announce them accessibly. Don't submit until everything is valid.

### Realistic data
**When to use:** Lists, tables, and dashboards.
**Prompt:**
> Create a realistic mock dataset of [number] [items] with varied lengths and values, including a few edge cases (very long names, missing fields). Put it in a separate data file so I can edit it.

### Make state visible
**When to use:** Understanding what a prototype is doing.
**Prompt:**
> Add a small debug panel (visible only in dev) that shows the current state of this screen, and lets me switch between loading, empty, error, and normal states.

### Responsive check
**When to use:** After desktop works.
**Prompt:**
> Make this work well at 390px wide. Use the same components, adjust layout only, and tell me what changed and why.

---

## 6. Storybook and components

### Component plus story
**When to use:** Creating a new component.
**Prompt:**
> Create a [component] that mirrors the Figma component at [link]. Include a Storybook story that shows every variant and state, with controls for the props. Follow the conventions in CLAUDE.md.

### Check states
**When to use:** Reviewing a component.
**Prompt:**
> Does [component] handle default, hover, focus-visible, disabled, and error states? List which are covered and which are missing.

### Accessibility pass
**When to use:** Before calling a component finished.
**Prompt:**
> Review [component] for accessibility: semantics, keyboard use, focus styles, labels, contrast. List any problems and fix them.

### Find the gap between Figma and code
**When to use:** After building a component library.
**Prompt:**
> Compare our coded [component] to the Figma component at [link]. List differences in variants, states, spacing, and naming.

---

## 7. Reviewing Claude's work

### Ask what to double-check
**Prompt:**
> What are the riskiest or least certain parts of what you just built? What should I test by hand?

### Ask for the simpler version
**Prompt:**
> Is there a simpler way to do this with less code? What would you remove?

### Walk me through it
**Prompt:**
> Walk me through [file] top to bottom. For each section, say what it does and which part I'd edit to change [thing I care about].

---

## 8. Debugging and getting unstuck

(See also `getting-unstuck.md`.)

### Explain the error
**Prompt:**
> I'm a designer, not a developer. Explain this error in plain language, tell me the likely cause, and suggest a fix. Don't change anything yet.
>
> [paste error]

### Diagnose before fixing
**Prompt:**
> Something's wrong: [describe what you expected and what happened]. Investigate and tell me what you think the cause is before changing any files.

### Reset the conversation
**Prompt (at the start of a fresh session):**
> Context: we're working on [prototype]. So far it [what works]. The problem is [issue]. I've tried [attempts]. Don't change anything yet. Tell me your read of the situation.

### Summarize before starting over
**Prompt (at the end of a long session):**
> Summarize what we've built, the decisions we made, and what's left, in a short note I can paste into a new session.

---

## 9. Learning and growing

### Teach me this concept
**Prompt:**
> Explain [props / state / hooks / Git branches] using something from this project as the example, and keep it short.

### Quiz me
**Prompt:**
> Look at the code in [file]. Ask me three questions about it to check I understand how it works, one at a time.

### Suggest what to try next
**Prompt:**
> Based on what I've built so far, suggest three small things that would stretch my skills a bit. Explain what I'd learn from each.

---

## 10. Keeping usage under control

- Start a fresh session for each new task instead of one long conversation.
- Use plan mode before building, so you only pay for work you keep.
- Point Claude at specific files or a specific Figma frame, not the whole project.
- Don't paste huge logs. Paste the first error and the lines around it.
- Use a lighter model for routine edits and a stronger one for planning or hard problems.

---

## What didn't work

Patterns that sounded promising but fell short. Add yours here, with a line on why.

- *Example:* "Make it look good" gives generic results. Say what "good" means (spacing, hierarchy, tone), or point to a reference.
- *Example:* Asking for a full multi-screen app in one prompt tends to produce something hard to review. Build screen by screen.

---

## Community patterns

Add new patterns below using the template at the top.
