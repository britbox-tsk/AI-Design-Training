# Module 6: Interactive Prototypes

**Time:** 3-5 hours (choose your own challenges)
**Prerequisites:** Modules 1-5. You can build a screen from a Figma link and your prototypes use tokens.
**You're done when:** you've built something that would have been painful to prototype in Figma.

## What this module is for

Figma is great for exploring look and feel. Code is great at *behavior*: real validation, data that changes, filters that actually filter, flows that remember what you entered. This module is where that difference becomes obvious.

You'll pick at least **two challenges** from the four below. Each uses a screen from the playground Figma file and ends with a short test pass.

> This module is also a chance to develop a skill that matters beyond Claude: describing behavior precisely. The clearer your rules, the better the result.

---

## Before you start (10 min)

### Write behavior as rules, not vibes

When you ask for interactivity, "make it work" produces guesses. A short list of rules produces something you can actually test. For each challenge, write a mini spec first. Use this template:

```
Screen: [name]
What the user is trying to do: [goal]
Rules:
- When [action], then [result].
- When [action], then [result].
Edge cases:
- If [unusual situation], then [result].
States to show: default, loading, empty, error, success
```

You don't need to know how to implement any of it. You only need to say what should happen. Ask Claude to critique your spec before building:

> Here's my behavior spec. Before building anything, tell me what's ambiguous, what's missing, and what edge cases I haven't covered.

### Working habits for this module

- Use plan mode, and build one screen at a time (large requests get hard to review and use more of your usage budget).
- Branch for each challenge: *"Create a branch called proto/[challenge-name]."*
- Commit when something works.
- Ask for a **debug panel** early. It's the single most useful tool for testing behavior (see the prompt in Challenge 3).

---

## Challenge 1: Form validation (45-60 min)

**Screen:** Sign in (your Module 2/4 version), or Create project, step 1.
**Why code beats Figma:** Figma can show an error state. Code can show it *at the right moment*, in response to real typing.

**Write your rules.** Some starting points:

- Email must be a valid format. Show the error after the user leaves the field, not on every keystroke.
- Password must be at least 8 characters.
- The submit button stays disabled until both fields are valid.
- On submit, show a loading state for about 1.5 seconds, then either succeed or show an error.
- Errors must be announced accessibly and not rely on color alone.

**Prompt to adapt:**

> Add validation to this form using the rules in my spec: [paste]. Use our error styles and components. Don't submit until everything's valid. Ask me about anything ambiguous before you start.

**Test it:**

- [ ] Type an invalid email, then tab away. Does the error appear at the right time?
- [ ] Fix it. Does the error go away at the right time?
- [ ] Submit with empty fields. What happens?
- [ ] Paste something very long. Does the layout hold?
- [ ] Use only the keyboard. Can you complete the form and see the errors?

**Stretch:** add a "show password" toggle, or simulate a server error ("Email already registered").

---

## Challenge 2: Search, filter, and sort a list (60-90 min)

**Screen:** Project list (Screen 2).
**Why code beats Figma:** a prototype that lets a stakeholder actually *use* filters shows you problems that static frames never will.

**Write your rules.** Some starting points:

- Search matches project names, case-insensitively.
- Filter tabs: All, Active, Completed.
- Sort by name or last updated.
- Search and filter work together.
- If nothing matches, show the empty state with a "Clear filters" action.

**Start with realistic data.** The data matters as much as the code:

> Create a realistic mock dataset of 24 projects, with varied name lengths, a mix of statuses, different owners, and a few edge cases (a very long name, a missing description, an old date). Put it in a separate data file so I can edit it.

Then:

> Make the project list searchable, filterable, and sortable using the rules in my spec. Reuse our Card, Badge, Avatar, and Input components.

**Test it:**

- [ ] Search for something that matches nothing. Is the empty state helpful?
- [ ] Combine a filter and a search. Do the results make sense?
- [ ] Find the long-name project. How does the card handle it?
- [ ] Change the data file to have 200 projects. What happens to the experience?

**Stretch:** pagination, a "grid vs list" toggle, or remembering the last filter after refresh.

---

## Challenge 3: A multi-step flow (60-90 min)

**Screen:** Create project (Screen 4, 3 steps plus a confirmation).
**Why code beats Figma:** in Figma, stepping through a flow means wiring dozens of frames. In code, the flow *remembers* what the user entered.

**Write your rules.** Some starting points:

- Three steps: Basics, Team, Review.
- "Next" is disabled until the current step is valid.
- "Back" never loses data the user has entered.
- The Review step shows everything entered, with an "Edit" link back to each step.
- Closing the flow with unsaved changes asks for confirmation (use the Modal).
- On submit, show success and the new project's name.

**Prompt to adapt:**

> Build this 3-step flow from my spec: [paste]. Keep each step's data in one place so Back/Next never loses anything. Use our components and tokens. Give me a plan first.

**Add a debug panel.** This will help throughout the module:

> Add a small debug panel, visible only in development, that shows the current step, all entered values, and validation status. Let me jump directly to any step.

**Test it:**

- [ ] Fill step 1, go to step 2, go back. Is step 1 still filled?
- [ ] Skip to the Review step using the debug panel. What shows for incomplete fields?
- [ ] Close the flow halfway through. Does the confirmation behave?
- [ ] Complete the whole flow quickly, then slowly. Does anything feel off?

**Stretch:** a progress indicator that responds to the real state, or autosaving a draft.

---

## Challenge 4: Responsive behavior (45-60 min)

**Screen:** Any screen from Challenges 1-3, or Screens 1-2 (which have mobile frames in Figma).
**Why code beats Figma:** you can drag the browser edge and watch the layout respond continuously, instead of designing a few fixed widths.

**Prompt to adapt:**

> Make [screen] work well from 360px to 1440px wide. Use the same components. Describe any layout changes you make and why. Mobile reference: [Figma link to the mobile frame, if it exists].

**Test it:**

- [ ] Drag the browser window slowly from wide to narrow. Where does it break first?
- [ ] Use your browser's device toolbar (Inspect, then the device icon) to try phone sizes.
- [ ] Check the in-between widths, not just desktop and mobile. Tablets and small laptops matter too.
- [ ] Is anything cut off or too small to tap?

**Ask Claude to critique:**

> Review this screen at 360px, 768px, and 1280px. What would you change to improve it at each size?

---

## After building: do a real test pass (15-20 min)

Whichever challenges you chose, do this at the end:

1. **Use it like a stranger would.** Click things in the wrong order. Leave fields blank. Mash the buttons.
2. **Ask Claude what you missed:**

> What are the riskiest or least certain parts of what you built? What should I test by hand?

3. **Fix what you find.** One change at a time, committing as you go.

## Compare with Figma (10 min)

Fill this in once you've finished. It's one of the most valuable parts of the module.

| | Figma prototype | Coded prototype |
|---|---|---|
| Time to set up | | |
| Realism of behavior | | |
| Ease of changing a rule | | |
| Ease of changing the visuals | | |
| Good for stakeholder testing? | | |
| Good for early exploration? | | |

Your answers will shape when you choose each approach.

## You're done when

- [ ] You've completed at least two challenges
- [ ] You wrote a behavior spec before building at least one
- [ ] You tested your prototype by hand, including edge cases
- [ ] You can describe one thing that was far easier in code than it would have been in Figma
- [ ] You can describe one thing that was *harder* in code

## What to notice

For your learning log:

- Which was harder: describing behavior precisely, or reviewing what Claude built?
- What did edge cases reveal that you hadn't thought about as a designer?
- When did you find yourself changing the *rules* rather than the visuals?
- What would you want to hand to a developer or engineer from this exercise?

## If something goes wrong

- **Claude built something different from what you meant:** compare it against your spec. If the spec was ambiguous, fix the spec. If it was clear, point to the exact rule that wasn't followed.
- **It works, but you can't tell what's happening:** add a debug panel (see Challenge 3).
- **A change broke something else:** ask Claude to show what changed, or revert to your last commit.
- **Claude's output got huge or confusing:** you probably asked for too much at once. Start a fresh session, summarize the current state, and take a smaller step.
- **Usage is climbing:** build one screen at a time, and start fresh sessions between challenges.
- See also `getting-unstuck.md`.

## Next

**Module 7: Storybook Basics.** You'll add Storybook, generate your first components with stories, and explore the accessibility addon.
