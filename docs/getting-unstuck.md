# Getting Unstuck

You will get stuck. Everyone does, including engineers. This guide covers the most common situations and what to do about each. Nothing in this sandbox can break anything real, so you can't do lasting damage by experimenting.

## The one habit that makes everything safe

**Commit often.** A commit is a save point you can always return to. Before you try something big or risky, ask Claude: *"Commit the current state with a short message."* If an experiment goes sideways, you can go back.

## Quick fixes, in order

When something isn't working, try these in order before anything else:

1. **Read the message.** Errors look scary but usually say what's wrong in the first line or two.
2. **Ask Claude to explain it.** Paste the error and say: *"I'm a designer, not a developer. Explain what this error means in plain language, then suggest a fix."*
3. **Check the basics.** Is the dev server running? Did you save? Did you refresh the browser?
4. **Undo and retry.** See "Undoing things" below.
5. **Start a fresh session.** If the conversation has gotten long and Claude seems confused, start a new session (`/clear`, or open a new one) and describe the goal again from scratch.
6. **Ask a human.** Post in the team channel or grab a 30-minute pairing session with an engineer. Asking is part of the process, not a failure.

## Common situations

### "The page is blank or shows an error in the browser"
Open the browser console (right-click the page, choose Inspect, then the Console tab). Copy any red messages and paste them to Claude with: *"The page is blank. Here's what the console says."* Also check the terminal where `npm run dev` is running, since it often shows the real error.

### "Nothing changes when I edit or Claude edits"
- Is `npm run dev` still running? If the terminal was closed, restart it.
- Hard refresh the browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows).
- If you changed tokens, run `npm run tokens` first, since tokens aren't regenerated automatically.

### "npm install or npm run dev fails"
- Check your Node version with `node -v`. Ask Claude what version this project needs and whether yours matches.
- Paste the full error to Claude. Try asking: *"Diagnose this. Don't delete anything or change files until you've explained the cause."*
- A common last resort is deleting `node_modules` and reinstalling. Ask Claude to walk you through it rather than doing it blindly.

### "Port already in use"
Another copy of the server is probably still running. Vite often picks the next free port on its own, so check the terminal for the URL it prints. Otherwise ask Claude to help you find and stop the old process.

### "Claude changed things I didn't ask for"
See "Undoing things" below. For next time, be more specific about scope: *"Only change the button component. Don't touch any other files."* Using plan mode beforehand also lets you catch this early.

### "Claude keeps going in circles"
If you've asked for the same fix three times and it isn't working:
- Stop and ask: *"Step back. What do you think is causing this? Explain before changing anything."*
- Give it more information: a screenshot, the exact error, or the Figma link.
- Try a different framing of the task, or break it into smaller steps.
- Start a fresh session with a short summary of what you've tried.

### "The result doesn't look like my Figma design"
- Make sure Claude read the Figma frame through the MCP connection rather than working from your description. Share the Figma link directly.
- Ask Claude to compare: *"List every difference between this Figma frame and what you built, then fix them using our tokens."*
- Check whether the token exists. If not, Claude should ask you, per CLAUDE.md.

### "Claude used hardcoded colors or sizes"
Say: *"Replace every hardcoded color, spacing, and radius in this file with tokens from our design system."* If it keeps happening, check that CLAUDE.md is in the repo root and the rules are clear.

### "Figma MCP isn't working"
- Run `/mcp` in Claude Code to see whether the Figma server is connected.
- Check that you're signed in to Figma and have access to the file.
- Try a link to a specific frame rather than a whole file.
- If it still fails, tell Claude what happened and ask it to help troubleshoot the connection.

### "Storybook won't start, or a story is broken"
Paste the terminal error into Claude. Stories are usually broken by a missing import or a prop that was renamed, and both are quick fixes once Claude can see the message.

### "I hit a usage limit or the budget feels tight"
- Use plan mode so you don't pay for work you'll reject.
- Start fresh sessions for new tasks instead of one endless conversation.
- Point Claude at specific files rather than asking it to scan the whole project.
- Prefer a lighter model for routine edits.
- Check usage in Claude Code with `/cost` (or the equivalent in your app).

## Undoing things

Try these from least to most drastic. If you're unsure, ask Claude: *"I want to undo the last change. Explain my options before doing anything."*

| Situation | What to do |
|---|---|
| Claude is mid-task and heading the wrong way | Press **Esc** to interrupt, then redirect it. |
| I want to see what changed | Ask: *"Show me what changed since the last commit."* (or run `git status` and `git diff`) |
| I don't like changes to one file | Ask Claude to restore that file to the last commit. (`git restore path/to/file`) |
| I don't like any of the uncommitted changes | Ask Claude to discard all uncommitted changes. This is permanent for those changes, so be sure. (`git restore .`) |
| I want to go back to an earlier save point | Ask: *"Show me recent commits and help me safely return to the one from before X."* |
| I want to try something risky | Ask Claude to create a new branch first, so your good version stays untouched. |

Claude Code may also offer a rewind or checkpoint feature in your version. Ask Claude or check the docs for how it works in your setup.

## Useful prompts to keep handy

- *"Explain what you just changed and why, in plain language."*
- *"Before making changes, show me your plan."*
- *"What are the trade-offs of this approach versus a simpler one?"*
- *"Walk me through this file as if I'm a designer who's never seen code."*
- *"Is there anything in this change I should double check?"*
- *"Summarize what we've done so far so I can start a fresh session."*

## When you're truly stuck

Post in the team channel with:
1. What you were trying to do
2. What you expected
3. What happened (include the error text or a screenshot)
4. What you've already tried

That is enough for someone to help you quickly, and it's a good template for prompting Claude too.
