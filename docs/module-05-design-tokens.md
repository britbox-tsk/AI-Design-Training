# Module 5: Design Tokens and Your System

**Time:** 3-5 hours (comfortably split over several sessions)
**Prerequisites:** Modules 1-4. Figma is connected, and you've built a screen from a Figma link.
**You're done when:** a prototype uses tokens throughout, and you've seen a rule in CLAUDE.md change how Claude behaves.

## What this module is for

This is where your design system stops being a picture and starts steering the code. You'll follow a token from Figma into the browser, change one and watch it ripple through, and learn how the project's `CLAUDE.md` file nudges Claude toward your tokens and away from hardcoded values. Finally, you'll write and test a rule of your own.

Related docs: `design-tokens-pipeline.md` (the technical detail behind this module) and `CLAUDE.md` (the rules file in your repo).

---

## The big picture (read first, 5 min)

```
Figma variables  ->  tokens/tokens.json  ->  npm run tokens  ->  src/styles/tokens.css  ->  utility classes  ->  your components
```

- **Figma variables** are the source of truth for design decisions.
- **`tokens/tokens.json`** is a snapshot of them in a code-friendly format.
- **`npm run tokens`** converts that snapshot into CSS variables (`tokens.css`). That file is generated, so never edit it by hand.
- **Utility classes** like `bg-brand-primary` or `p-4` use those CSS variables.
- **Components** use the classes. They should never contain raw hex codes or pixel values.

If it works, changing one variable in Figma changes the product everywhere, with no component edits.

> Ask Claude: *"Explain this pipeline using the actual files in my project. Show me where each step lives."*

---

## Part A: Trace a token end to end (30 min)

Pick one token, for example `color/brand/primary`. Follow it all the way through. Try it yourself before asking Claude for help.

1. **In Figma:** find the variable in the Semantic collection. Note its name, its value, and which primitive it points to.
2. **In `tokens/tokens.json`:** find the same token. What's its name here? How did the slash in Figma become structure in JSON?
3. **In `src/styles/tokens.css`:** find the CSS variable. What does it look like?
4. **In a component:** search for the utility class. Where does `bg-brand-primary` appear?
5. **In the browser:** right-click an element using it, choose Inspect, and look at its computed background color.

Then ask Claude:

> Trace the token `color-brand-primary` from tokens.json to the browser, naming every file and the exact line where it changes form.

Check its answer against what you found.

## Part B: Change a token and watch it ripple (30-45 min)

This is the payoff exercise.

1. Make a branch: *"Create a branch called experiment/token-change."*
2. **In Figma**, change the value of `color/brand/primary` (try a bold, obviously different color). Check that components in the file update.
3. **Export the change.** Two routes:
   - **With Claude and Figma connected:** *"Read the variables from the Figma file [link] and update tokens/tokens.json to match. Show me the diff before saving."*
   - **With a plugin:** export from Figma using the method your lead set up (see `design-tokens-pipeline.md`), and replace the JSON.
4. **Review the diff.** Only the color should have changed. If many tokens changed, ask Claude why before continuing.
5. **Regenerate the CSS:** `npm run tokens`
6. **Look at the browser.** Every button, link, and accent using that token should change, and you edited zero components.
7. **Revert** to the original color in Figma and re-export, or switch branches to discard the experiment.

Write one sentence in your learning log about why this is useful, and one about where it might break down.

## Part C: See what CLAUDE.md actually does (45-60 min)

`CLAUDE.md` is a file in your project that Claude reads at the start of every session. It's like a brief you'd give a new teammate. Time to see its effect directly.

> **Important:** Claude reads CLAUDE.md when a session starts. After you edit it, start a fresh session so the changes take effect.

### C1. Read it

Open `CLAUDE.md` and read the "Design system rules" section. Ask Claude:

> Explain each rule in the design system section in your own words. Which one do you think matters most, and why?

### C2. The baseline test

In a fresh session, on a throwaway branch, ask:

> Create a small promo banner component with a custom purple background and some padding.

Notice what Claude does. With the rules in place, it should either use existing tokens or stop and ask. Note exactly what happened.

### C3. Remove the rule and test again

1. On your throwaway branch, open `CLAUDE.md` and delete (or comment out) rule 1, "Never hardcode design values" and rule 2, "If a needed token doesn't exist, stop and ask."
2. Start a **new** Claude session.
3. Give the exact same prompt as C2.
4. Compare the results. Does it hardcode a hex value now? Does it ask? Was the code different?

### C4. Restore and test again

1. Restore the rules (`git restore CLAUDE.md`).
2. New session, same prompt. Is the behavior back to how it was?

You've just run a real experiment: same prompt, different instructions, different behavior. Note what you learned.

### C5. Try the built-in puzzles

The Exercises page in the playground Figma file includes some deliberate quirks (check `playground-figma-spec.md` for details). Try:

- **The missing token:** build from the frame containing a color that isn't in the system. Does Claude stop and ask, invent a value, or silently pick something near? Was that what you wanted?
- **The off-scale spacing:** build from the frame with a 20px gap when your scale goes 16 then 24. Does Claude snap to the nearest token or flag it?

When Claude flags a problem instead of guessing, ask yourself what you'd want it to do next. That answer is a rule waiting to be written.

## Part D: Write your own rule (45-60 min)

Rules are most useful when they come from something you noticed. Look back at your own prototypes and think about what you keep having to correct. Ideas:

- Button labels should be sentence case, not title case.
- Always include an empty state when building a list.
- Use the Card component for any grouped content, never a bare styled div.
- Prefer our `Alert` component over custom error messages.
- Always show the loading state of a button when an action takes more than a moment.

### Write it well

Good rules are:

- **Specific and testable.** Weak: "Keep things consistent." Better: "Button labels use sentence case, such as 'Create project', not 'Create Project'."
- **Short.** One or two lines each. A long CLAUDE.md costs usage on every session and dilutes the rules that matter.
- **Reasoned when it helps.** A brief "because..." helps Claude handle edge cases: "Always provide an empty state, because lists with no data are common in real use."
- **Stated positively where possible.** "Use the Card component" works better than a list of things not to do.

### Test it

1. On a branch, add your rule to `CLAUDE.md`.
2. Start a fresh session.
3. Give a prompt that *should* trigger the rule, without mentioning it.
4. Did Claude follow it? If not, reword the rule and try again. Aim for at least two rounds of refine-and-retest.

If it works well, share it with the team. Consider proposing it for the main CLAUDE.md or adding it to `prompt-patterns.md`.

## Part E: Audit for hardcoded values (20 min)

Run this on your sign-in prototype:

> Search src/ for hardcoded colors, spacing, font sizes, radii, and shadows that should be tokens. List each with the closest matching token. Don't fix anything yet.

Review the list. Which ones are real problems, and which are acceptable? Then:

> Fix the real ones using tokens, and explain any you left alone.

Commit the result.

## Stretch goals (optional)

- **Dark mode:** add a `Dark` mode to the Semantic collection in Figma, export it, and set up a second CSS output in the token pipeline. See the dark mode note in `design-tokens-pipeline.md`.
- **A guardrail script:** ask Claude to write a small script that fails if raw hex colors appear in `src/components/`. Ask it to explain how it works.
- **Token documentation:** ask Claude to generate a simple page in the prototype that displays every token (swatches, spacing, type). Compare with your Foundations page in Figma.
- **Semantic layers:** propose a component-level token such as `button-background` that points at `color-brand-primary`. Discuss with Claude whether that's worth the complexity in this sandbox.

## You're done when

- [ ] You've traced a token from Figma to the browser and can explain each step
- [ ] You changed a token in Figma and saw it update the prototype with no component edits
- [ ] You've seen Claude's behavior change when a CLAUDE.md rule was removed and restored
- [ ] You wrote a rule of your own, tested it, and refined it at least once
- [ ] A prototype of yours uses tokens throughout, confirmed by an audit

## What to notice

For your learning log:

- What surprised you about how much CLAUDE.md changed Claude's behavior (or how little)?
- Where did Claude's behavior feel inconsistent? Does it always follow rules?
- What did the missing and off-scale token exercises reveal about the gaps in a design system?
- What would you want in a real project's rules file?

## If something goes wrong

- **Changes to tokens don't appear:** did you run `npm run tokens`? Did you hard refresh the browser? Is the JSON actually different (`git diff`)?
- **Claude ignores a CLAUDE.md rule:** you probably need a new session. If it still ignores it, the rule may be too vague. Reword it to be more specific.
- **The JSON export changed more than expected:** ask Claude to explain each unexpected difference before accepting. Naming differences between export methods are common.
- **`npm run tokens` fails:** paste the error to Claude. Often it's a JSON formatting problem or a missing reference.
- See also `getting-unstuck.md`.

## Next

**Module 6: Interactive Prototypes.** You'll use code for what Figma does awkwardly: real validation, filtering, multi-step flows, and responsive behavior.
