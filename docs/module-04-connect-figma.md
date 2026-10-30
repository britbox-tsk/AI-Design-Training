# Module 4: Connect Figma

**Time:** 2-4 hours
**Prerequisites:** Modules 1-3. You built the sign-in screen in Module 2 from your own description.
**You're done when:** you've generated a screen from a Figma frame and noted where it matched your design and where it missed.

## What this module is for

In Module 2, Claude built a screen from your *words*. Now Claude reads the *Figma file itself*: structure, styles, components, and variables. You'll rebuild the same screen from a Figma link and compare the two, which teaches you what the connection is good at and where it still needs your judgment.

> **Placeholders to fill in before sharing:** the playground file link, the Figma access requirements for your team (see Step 0), and your team's tested connection steps.

---

## Step 0: Check you have access (5 min)

Figma's connection to Claude has requirements that depend on your plan and seat type, and they change over time. Before you start:

- Confirm you can open the playground Figma file (TODO: link).
- Confirm what seat or plan your team needs for the Figma MCP integration. TODO: verify against Figma's current documentation and note the answer here.
- If you duplicated the playground file for yourself, use links from *your* copy.

If you're blocked at this step, ask your lead rather than troubleshooting alone.

## Step 1: Connect Figma to Claude Code (15-30 min)

Figma provides an official MCP server, which lets Claude Code read your Figma files. There are a couple of ways to connect (a remote server you sign in to, or a local one that runs through the Figma desktop app), and the details change as Figma updates it. Use Figma's current setup instructions as the source of truth. TODO: add your team's tested method and link here.

In general, the steps look like this:

1. Add the Figma server to Claude Code, using the command or settings from Figma's documentation.
2. Sign in to Figma when prompted and approve access.
3. Restart Claude Code if it asks you to.

If you get stuck, ask Claude Code itself:

> I'm trying to connect the Figma MCP server. Here's what I tried and the error: [paste]. Help me troubleshoot.

## Step 2: Check the connection (5 min)

In Claude Code, type `/mcp`. You should see Figma listed as connected. If it says it needs authentication, follow the prompt to sign in.

Then try a simple test. Open the playground file in Figma, select a **single frame** (for example, the Sign in screen), right-click, and choose **Copy link to selection**. Paste the link into Claude Code:

> Read this Figma frame and describe what's in it: [link]. Don't build anything. List the components, the text, and any variables or styles you can see.

If Claude gives an accurate description, you're connected. If not, see "If something goes wrong" below.

**Tip:** Always link to a specific frame, not a whole file or page. It's faster, more accurate, and uses less of your usage budget.

## Step 3: Rebuild the sign-in screen from Figma (45-60 min)

1. Switch back to your main branch and make a fresh branch for this:

> Switch to the main branch and create a new branch called proto/sign-in-figma.

2. Ask for a plan first, as you did in Module 2, this time with the link:

> Read this Figma frame using the Figma tools: [link]. Build it as a sign-in screen using our components and tokens. If something in the frame doesn't match an existing component or token, tell me rather than guessing. Before changing any files, give me a short plan and wait for my approval.

3. Read the plan. Does it correctly identify the components and the variables?
4. Approve it, let Claude build, then review in the browser just like Module 2.
5. Commit when it looks reasonable.

## Step 4: Compare the two versions (30 min)

This is the heart of the module. Put the following side by side:

- A. The Figma design
- B. Your Module 2 version (built from your description)
- C. Your Module 4 version (built from the Figma link)

Switch between branches to view B and C, or ask Claude to run both on different ports. Fill in a quick comparison:

| | B: from description | C: from Figma link |
|---|---|---|
| Layout and structure | | |
| Spacing | | |
| Colors and tokens | | |
| Typography | | |
| Component usage | | |
| States (error, hover, disabled) | | |
| Anything surprising | | |

Useful questions:

- Where did C clearly beat B? Where did B hold up fine?
- What did Figma contain that you forgot to describe?
- What did Figma *not* contain that matters (interaction, behavior, intent)?

Then ask Claude for its own comparison:

> List every visual difference between the Figma frame [link] and what you built (spacing, color, type, alignment, states). Don't fix anything yet.

Compare its list with yours. Did it catch things you missed, or miss things you caught?

## Step 5: Close the gap (30 min)

Pick three differences and have Claude fix them, one at a time:

> Fix [specific difference] so it matches the Figma frame. Use tokens, not raw values. Tell me what you changed.

Commit after each fix. Then check again.

## Step 6: Explore what Claude can read (30 min, optional)

Try a few prompts to get a feel for the connection's range. Always link to a specific frame or component:

- **Variables:** *"Read the variables used in this frame [link]. Which tokens does it use, and do they all exist in our code?"*
- **Component properties:** *"Read the properties and variants of this component [link]. Propose a props interface that mirrors them. Don't build yet."*
- **Descriptions:** *"Is there any documentation or description in Figma for this component? Summarize it."*
- **Another screen:** Try Screen 2 (Project list) the same way, and note whether larger frames behave differently.

## What to know about the connection

- **It reads structure and styling, not intent.** Claude sees layers, auto layout, styles, and variables. It doesn't know how the screen should *behave* unless you tell it.
- **Results vary.** The same prompt can produce slightly different output each time. Review every time.
- **A well-built Figma file helps a lot.** Auto layout, meaningful layer names, and bound variables lead to better results. Messy frames lead to messy code, which is useful feedback on your Figma hygiene.
- **Bigger frames cost more.** Large, complex frames use more of the shared budget. Link to the smallest frame that does the job. Check `/cost` before and after a Figma prompt to see what it used.
- **It can say it's matched when it hasn't.** Keep asking for the comparison step.

## You're done when

- [ ] Figma shows as connected in Claude Code (check with `/mcp`)
- [ ] You generated a screen from a Figma link, not from your description
- [ ] You compared it against your Module 2 version and the Figma design
- [ ] You noted at least three places where it matched and three where it missed
- [ ] You fixed at least three differences and committed them

## What to notice

For your learning log:

- Was the Figma-driven version better? In what ways? Was it ever worse?
- What did you have to tell Claude that Figma can't express?
- Did this make you want to change how you build Figma files?
- When would you start from a description, and when from a link?

Consider adding your best Figma-related prompt to `prompt-patterns.md`.

## If something goes wrong

- **Figma doesn't show as connected:** run `/mcp`, follow the sign-in prompt, and restart Claude Code. Check your Figma access (Step 0).
- **Claude says it can't access the link:** make sure the link is to a frame you can open, copied via *Copy link to selection*, and that your account has permission to the file.
- **Output looks nothing like the design:** ask Claude to read the frame again and describe what it sees first, before building. If its description is wrong, the problem is the read, not the build.
- **Usage is climbing fast:** use a smaller frame, start a fresh session, and avoid pasting multiple links at once.
- See also `getting-unstuck.md`.

## Next

**Module 5: Design Tokens and Your System.** You'll get Figma variables into code, and learn how CLAUDE.md steers Claude toward your tokens.
