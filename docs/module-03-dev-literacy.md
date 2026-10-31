# Module 3: Dev Literacy, Just Enough

**Time:** 2-3 hours (split across sessions if you like)
**Prerequisites:** Modules 1 and 2. You have a working sign-in prototype and a branch or two of experiments.
**You're done when:** you can find where a button's color and label are defined, and change them yourself without asking Claude.

## What this module is for

You don't need to become a developer. But a little literacy goes a long way: you'll write better prompts, spot problems sooner, and feel less like you're operating a black box. You'll also learn basic Git, so experimenting feels safe instead of scary.

The method is simple: use the code Claude already wrote as your textbook, and ask Claude to be your tutor. Everything here uses your own prototype, so it's concrete.

---

## Part A: Read code like a designer (45 min)

You'll look at your sign-in prototype's Button and one screen file. Open the project folder in a code editor (we suggest VS Code, a free download for macOS), or just ask Claude to show you the code in the chat.

### A1. A guided tour

Ask Claude:

> Walk me through [the Button component file] top to bottom. For each section, say what it does in plain language. Use analogies from Figma where they help.

Don't try to memorize anything. Just notice the overall shape: some lines at the top, a block that describes the inputs, and a block that describes what appears on screen.

### A2. Six words that unlock most of what you'll see

Ask Claude to explain each using *your project's code* as the example, not generic definitions:

| Word | Rough Figma analogy | Prompt to try |
|---|---|---|
| **Component** | A component or main component | "What is a component? Show me one in this project." |
| **Props** | Component properties and variants (Size, Variant, Label) | "What are props? Which props does Button have?" |
| **State** | What changes while the user interacts (typed text, open/closed) | "What is state? Where is state used in my sign-in screen?" |
| **Import** | Pulling an instance of one thing into another place | "What does the import at the top of this file do?" |
| **className** | Applying styles; here, tokens as utility classes | "What do these classes on the button mean?" |
| **Render** | Drawing the component on screen | "What does 'render' mean here?" |

The analogies are approximate and Claude may refine them. That's fine. Treat them as handholds, not exact equivalents.

### A3. Ask the "what if" question

> If I changed [one thing you're curious about], what would happen on screen? Don't change anything, just explain.

Pick three things. Then check whether the answers matched your expectations once you try them in Part B.

---

## Part B: The treasure hunt (30 min)

Now find things yourself. Do the hunt *before* asking Claude where things are, and ask only when you're stuck. Use your editor's search (Cmd+Shift+F or Ctrl+Shift+F) to search across the whole project. It works like Figma's find, but for code.

**Hunt 1: Find the label.**
Find where the text on your sign-in button is written. Hint: search for the exact words on the button.

**Hunt 2: Change it by hand.**
Edit the text, save the file, and look at the browser. It should update on its own, usually without a refresh. That instant feedback is what makes code prototyping fast.

**Hunt 3: Find the color.**
Find where the button's background color is set. You'll probably see a class name like `bg-brand-primary`. That's a *token*. Search the project for `brand-primary` and see where else it shows up. Try to trace it back to `src/styles/tokens.css`.

Don't worry if the trail gets complicated. Module 5 goes deeper. Just notice that the button doesn't contain a hex code. It points to a token.

**Hunt 4: Change something small.**
Pick a spacing class on the button (like `px-4`) and change the number to another step on your scale. Save and watch the browser. Then ask Claude:

> I changed [what you changed] by hand. Is that consistent with our design system rules? What would you have done differently?

**Hunt 5: Ask Claude to quiz you.**
> Look at [the screen file]. Ask me three questions about how it works, one at a time, and tell me if I'm right.

---

## Part C: Break it on purpose (20 min)

Seeing an error when you *meant* to cause it takes the fear out of it.

1. Make sure everything is committed (ask Claude, or see Part D).
2. In a component file, delete a closing bracket or misspell a word inside the code.
3. Save and look at the browser. You'll likely see an error message on the page, and the terminal will show something similar.
4. Read the first couple of lines. Often it points at the file and the line number.
5. Ask Claude:

> I broke this on purpose. Explain the error in plain language and tell me what caused it. Don't fix it yet.

6. Now fix it yourself, or undo with Git (see below).

The lesson: errors are usually short, specific, and fixable. They are information, not failure.

---

## Part D: Git, hands-on (45 min)

Until now Claude has done your Git work. This time, run the commands yourself at least once, so it isn't a mystery. You can still ask Claude whenever you like.

Open a terminal in your project folder. Make a small change first (edit some text on your screen), then try each command.

| Goal | Command | What it does |
|---|---|---|
| What's changed? | `git status` | Lists files you've changed or added |
| Show me the changes | `git diff` | Shows what lines changed |
| Stage and save | `git add -A` then `git commit -m "Describe the change"` | Creates a save point |
| See the history | `git log --oneline` | Lists save points, newest first |
| Start an experiment | `git switch -c experiment/try-darker-header` | New branch, safe to play in |
| Go back to the main line | `git switch main` | Returns to your clean version (our default branch is `main`) |
| Throw away changes to a file | `git restore path/to/file` | Permanent for those uncommitted changes |

### The fearless-experiment loop

Practice this once:

1. Commit your current working version.
2. Create a new branch: `git switch -c experiment/something`.
3. Ask Claude to try a bold change (a different layout, a different color treatment).
4. Look at the result. If you love it, commit. If you hate it, switch back: `git switch main`. Your original is untouched.
5. List your branches with `git branch` and notice that your experiments are still there if you want them.

This is the biggest benefit of Git for designers: **you can try bold ideas without risking your good version.**

### Confidence check

Ask Claude to explain the pieces you're unsure about:

> Explain commits, branches, and the difference between "uncommitted changes" and "committed changes" using an example from my project.

---

## Mini glossary

- **Repo:** the project folder, tracked by Git.
- **Commit:** a saved snapshot you can return to.
- **Branch:** a separate line of work, so experiments don't touch your main version.
- **Dev server:** the thing started by `npm run dev` that shows your prototype in the browser.
- **Dependency:** a code library the project relies on. (`npm install` fetches them.)
- **Token:** a named design value (color, spacing) stored once and reused.
- **Diff:** a view of what changed between two versions.
- **Hot reload:** the browser updating automatically as you save.

---

## You're done when

- [ ] You can describe, in your own words, what a component, props, and state are
- [ ] You found the label and the color of a button, and changed both yourself
- [ ] You've triggered an error on purpose and read the message
- [ ] You've made a commit, created a branch, and switched back from the terminal
- [ ] You tried a "fearless experiment" on a branch

## What to notice

For your learning log:

- Which concept clicked fastest? Which is still fuzzy?
- Did understanding the code change how you'd write your next prompt?
- Did editing by hand feel faster or slower than asking Claude? When would you choose each?

## If something goes wrong

- **You can't find a file or a piece of text:** use project-wide search, or ask Claude "Where is [text or style] defined?"
- **A Git command says something scary:** paste it to Claude and ask for a plain-language explanation before doing anything else.
- **You edited the wrong file and lost track:** `git status` and `git diff` show what changed. Ask Claude to help you undo selectively.
- See also `getting-unstuck.md`.

## Next

**Module 4: Connect Figma.** You'll link Claude to your Figma file so it reads real frames and variables instead of working from your descriptions.
