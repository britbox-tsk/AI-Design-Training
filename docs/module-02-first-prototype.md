# Module 2: Your First Prototype

**Time:** 2-4 hours (it's fine to split across sessions)
**Prerequisites:** Module 1 complete. The starter repo runs on your machine.
**You're done when:** you have a working screen in the browser and have changed at least three things by asking Claude.

## What this module is for

You'll learn the basic working loop that everything else in this course builds on:

1. **Describe** what you want
2. **Plan** before anything gets built
3. **Review** what Claude did
4. **Iterate** in small steps
5. **Save** your progress

The goal is to get comfortable with the rhythm, not to produce a perfect screen. Rough and wrong is a perfectly good first result, and fixing it is the actual exercise.

> A note on tokens and components: you'll hear Claude mention tokens and components while it works. The starter repo and `CLAUDE.md` already steer it toward your design system, so you don't need to set anything up. Module 5 explains how that works. For now, just notice it.

---

## Step 1: Set up your workspace (5 min)

1. Open two terminal windows in your `design-sandbox` folder (or use the desktop app plus one terminal):
   - One running `npm run dev` (leave it running)
   - One running Claude Code
2. Make sure you've got the starter page open in your browser.
3. Create a branch for this exercise. A branch is a separate line of work, so your experiments never touch the clean starter. Ask Claude:

> Create a new Git branch called proto/sign-in and switch to it.

## Step 2: Look at your target (10 min)

Open the [playground Figma file](https://www.figma.com/design/cRiEaXOIvJU9Jcm2d51gdf/Playground-spec) and find the **Sign in · Desktop** frame on the Screens page. Spend a few minutes studying it:

- What's on the screen, top to bottom?
- What are the components (inputs, buttons, checkbox, link)?
- Are there states you can see, such as an error alert?
- Which parts look like they depend on tokens (colors, spacing, type)?

Write down a few sentences describing it in your own words. This is good practice: clear descriptions get better results from Claude, and you'll be surprised how much detail a designer notices.

*Claude can't read Figma directly yet. You'll set that up in Module 4. For now you'll describe the screen, and optionally share a screenshot (you can drag or paste an image into Claude Code).*

## Step 3: Ask for a plan, not code (15 min)

Resist the urge to say "build this." Start with a plan. Write your own description based on what you noticed, using this as a model:

> I want to build a sign-in screen for a project-tracking app. It's for returning users who want to get in quickly, mostly on desktop. The screen has: [your description of the layout, top to bottom]. Use realistic placeholder content. Before changing any files, give me a short plan: what you'll create, which existing components you'll reuse, and anything you're unsure about. Wait for my approval.

If you have a screenshot, attach it and add: *"Here's the Figma design for reference."*

Read the plan Claude gives you. Questions to ask yourself:

- Does the structure match what I described?
- Is it reusing things that already exist, or building everything from scratch?
- Is there anything it's unsure about that I can answer?

If something's off, reply and adjust the plan. You can also ask: *"What's the simplest version of this you could build first?"*

When you're happy, say: **"Looks good, go ahead."**

## Step 4: Review what Claude built (20 min)

Claude will create or edit some files. Before you celebrate, do three things:

**1. Look at it in the browser.** Refresh `http://localhost:5173` (or the address your terminal shows). Does it look like the design? Where does it differ?

**2. Ask Claude to explain what it did:**

> Summarize what you changed: which files, and what each one does. Explain it for a designer, not a developer.

**3. Look at the changes.** You don't need to read code line by line. Just get a feel for it:

> Show me what changed since the last commit.

Notice the shape of the changes: how many files, how big, whether anything unexpected appears. Over time, that sense of scale becomes a useful instinct.

When it looks reasonable, save your progress:

> Commit this with a short, descriptive message.

## Step 5: Iterate (45-90 min)

Now the real work. Make **at least three changes** by describing them to Claude. Use your design eye. Here are some ideas, but pick whatever you'd actually want to change:

**Layout and spacing**
> The spacing between the form fields feels too tight. Increase it by one step on our spacing scale.

**Content and hierarchy**
> Make the heading stronger and add a short supporting line underneath it.

**States**
> Show an error state: if the email is invalid, show our error treatment under the field. Let me toggle it so I can see both versions.

**Responsive**
> Make this work well at 390px wide. Same components, adjust the layout only, and tell me what changed.

**Compare directions**
> Give me two alternative layouts for this screen in separate files, and tell me the trade-offs.

After each change:

1. Check the browser.
2. If it's good, commit: *"Commit this."*
3. If it's not, tell Claude what's wrong, or undo it (see below).

### Habits to practice

- **One change at a time.** If you ask for five things at once, it's hard to tell what went wrong.
- **Be specific.** "Make it better" gives you generic results. "Increase the contrast of the helper text" gives you what you want.
- **Say what to keep.** *"Keep everything else exactly as it is."*
- **Commit when it's good.** You always have somewhere to go back to.

### Undoing something

If Claude makes a change you don't like:

> Undo that last change. Restore the files to how they were at the last commit.

See `getting-unstuck.md` for the full list of options.

## Step 6: Stretch goals (optional)

If you've got time and energy:

- Add a "show password" toggle.
- Add the "forgot password" link and a simple page for it.
- Make the button show a loading state when clicked.
- Ask Claude: *"What's missing from this screen that a real product would need?"* and pick one thing to add.
- Try the **Explain** prompts from `prompt-patterns.md` to understand a piece of the code you've been curious about.

## You're done when

- [ ] You have a sign-in screen working in your browser
- [ ] You asked for a plan before building, and read it
- [ ] You've changed at least three things by asking Claude
- [ ] You've made at least two commits with sensible messages
- [ ] You've used the "explain" prompt at least once

## What to notice

These observations are worth jotting in your learning log:

- Where did Claude's first attempt match your expectations, and where did it surprise you?
- What kind of instructions got the best results?
- What did you find yourself wanting to say that was hard to put into words?
- How did the plan step change what got built?

Also try adding one prompt that worked well to `prompt-patterns.md`.

## If something goes wrong

- **The page looks broken or blank:** check the console and terminal. See "Page is blank" in `getting-unstuck.md`.
- **Claude changed too much:** undo, then re-ask with tighter scope: *"Only change [file]."*
- **Claude keeps missing the mark:** ask it to step back and explain its understanding of what you want, then correct that.
- **You're out of ideas for what to change:** ask Claude for three small improvements a designer might make to this screen, and try one.

## Next

**Module 3: Dev Literacy, Just Enough.** You'll ask Claude to explain the code it wrote, and learn basic Git so experimenting feels safe.
