# Module 9: Go Further

**Time:** open-ended
**Prerequisites:** Modules 1-5 at minimum. Some options are best after Module 7 or 8.
**You're done when:** you've explored whatever you wanted to and don't feel like continuing. There's no finish line.

## What this module is for

This is a menu, not a sequence. Pick what interests you, in any order, and skip the rest. Everything here is optional and low-stakes. Nothing is expected to be shared, shipped, or reviewed.

| Option | Good if you... | Time |
|---|---|---|
| A. Automate your workflow | keep repeating the same prompts | 1-3 hrs |
| B. Share a prototype with a link | want to show someone your work | 1-2 hrs |
| C. Try a different stack | are curious how this works elsewhere | 2-4 hrs |
| D. Rebuild a past project | want a real-world test of your skills | 3-6 hrs |
| E. Pair with an engineer | want to see how they work with Claude | 30-60 min |
| F. Improve the team's resources | like leaving things better than you found them | 30-90 min |

> Features and file locations in Claude Code change over time. For anything in Option A, treat Claude and Anthropic's current Claude Code documentation as the source of truth, and ask Claude to check how things work in your version.

---

## Option A: Automate your workflow (1-3 hrs)

By now you've probably typed some prompts over and over: "build a component with a story from this Figma link", "audit for hardcoded values", "check accessibility". Claude Code lets you save these as reusable shortcuts, so one short command runs a whole workflow.

**Three things to explore** (ask Claude to explain how each works in your current version):

- **Custom slash commands:** saved prompts you trigger by typing a slash and a name, such as `/new-component`. Usually just a Markdown file in a project folder. They can take an argument, like a Figma link.
- **Skills:** packaged instructions Claude can load when relevant, for repeatable kinds of work. Good when a workflow needs more detail than a single prompt.
- **Other automation features** such as subagents and hooks. These are more advanced, so only explore if you're curious.

**Exercise: build a `/new-component` command**

1. Look at your own prompt from Module 8's per-component loop.
2. Ask Claude:

> I repeat this workflow for every new component: [paste your steps]. Help me turn it into a reusable custom slash command for this project that takes a Figma link as an argument. Explain how it works and where the file lives.

3. Try it on a new component, such as one you haven't built yet.
4. Refine it. Where did it go wrong? What did you forget to include?

**More ideas:**

- `/audit-tokens`: runs your hardcoded-values audit
- `/a11y-check`: reviews a component for accessibility
- `/compare-figma [link]`: compares a coded component with its Figma source
- `/explain`: explains a file in plain language

**Done when:** you've created one command or skill and used it successfully twice.

---

## Option B: Share a prototype with a link (1-2 hrs)

A prototype running on your laptop is hard to show anyone. Deploying it gives you a link.

> **Before you start:** check with your lead about which hosting accounts are approved for this. Many hosting setups make preview links accessible to anyone who has the URL, so **don't put anything confidential or real customer data in a sandbox deployment.** Your prototypes should already use fake data. Use fake data here too, and consider whether a deployed link is right for each one.

**Steps:**

1. Ask Claude to explain your options:

> I want to share this prototype as a link. What are the options for hosting a static React/Vite app? Explain the trade-offs, including who can see it by default and how to restrict access.

2. Build the production version to check for errors first:

```
npm run build
```

3. Follow the steps for your chosen host (such as Vercel or Netlify), with Claude walking you through it.
4. Open the link on your phone. Does it work?
5. Send it to one friendly colleague and ask for a reaction.

**Variation:** build and share a **static Storybook** (`npm run build-storybook`), so people can browse your components without installing anything.

**Done when:** someone else has opened your prototype or Storybook from a link, and you know who can access it.

---

## Option C: Try a different stack (2-4 hrs)

Your sandbox uses React, Vite, and Tailwind. Engineering may use something else. Rebuilding one thing in another stack shows you how portable your skills are.

**First, find out what engineering uses.** Ask an engineer, or ask your lead. Common choices include Next.js, Vue, Svelte, or Angular.

**Exercise:** rebuild your Sign in screen in that stack.

1. Start a new, separate folder (not inside your existing repo).
2. Ask Claude:

> I want to rebuild my sign-in screen in [framework]. Before building, explain the key differences from React and Vite that I'd notice, and help me set up a new project. Use plan mode. Include a CLAUDE.md based on the one in my sandbox.

3. Reuse your tokens file and CLAUDE.md rules. Notice what carries over and what needs to change.

**Reflect on:**

- What was the same? What was different?
- How much of your skill was about the framework, and how much about working with Claude?
- Would you want a sandbox in this stack too?

**Done when:** you have a working screen in the new stack and a list of what transferred.

---

## Option D: Rebuild a past project (3-6 hrs)

The best test of a new skill is real work. Take a past project and rebuild a slice of it, purely for practice.

> **Keep it safe:** this is a sandbox exercise. Use only material you're comfortable having in an AI tool under your company's policies. Check with your lead if you're unsure, and use placeholder content in place of anything confidential.

**Choose a slice, not the whole thing.** One or two screens with at least one interesting interaction.

**Process:**

1. Write a short behavior spec (see Module 6).
2. Duplicate the relevant Figma frames into your own file, cleaned up to use your playground tokens and components, or build them fresh.
3. Plan, build, review, and iterate as before.
4. Compare to how the original was designed and shipped.

**Reflect on:**

- What was easier than you expected? What was harder?
- Where did the Figma-only version leave important questions unanswered, which the coded version made you answer?
- What would you do differently if you started this project today?

**Done when:** you have something you can walk a colleague through in five minutes.

---

## Option E: Pair with an engineer (30-60 min)

Your engineers are already working with Claude in their own way. A short pairing session is a great way to learn from them, and a fair trade, since they'll probably learn something from your design perspective too.

**Ideas for a session:**

- Ask them to show you their workflow, including how they structure their prompts and CLAUDE.md files.
- Show them something you built and ask what they'd notice or do differently.
- Ask what they wish designers knew about how code gets built.
- Ask how they review AI-generated code.

Come with two or three questions. Bring something small to show.

**Done when:** you've learned at least one thing you didn't know, and they know what you're up to.

---

## Option F: Improve the team's resources (30-90 min)

You've been using materials others made. Leave them better than you found them.

- **Add to `prompt-patterns.md`:** your three best prompts, and one that failed.
- **Improve `CLAUDE.md`:** propose a rule you tested in Module 5. Explain what it fixed.
- **Update `getting-unstuck.md`:** add a problem you hit and how you solved it.
- **Fix a module:** if a step confused you, suggest a clearer version.
- **Share something cool:** a screenshot and a sentence in the team channel.

**Done when:** one team resource is better because of you.

---

## Closing out (whenever you're ready, 15 min)

You don't have to finish everything, or anything. When you feel like you've learned what you wanted:

1. **Update your learning log's self-ratings** (the table at the top) and compare with where you started.
2. **Write a few lines:** what's the most useful thing you learned, what's still unclear, and what you'd like to do next.
3. **Take the short survey** (TODO: add link), if your lead has set one up. It's anonymous.
4. **Optional:** tell your lead what was most and least useful, and what you'd like to see added.

## What to notice

- Which option pulled you in? That's a signal about where your interest lies.
- What feels natural now that felt strange in Module 1?
- Where do you think this fits into your real work, if anywhere? (There's no right answer.)

## If something goes wrong

- **A command or feature doesn't work as described:** ask Claude to check how it works in your version, or check Anthropic's current Claude Code documentation.
- **Hosting or account problems:** ask your lead before trying anything that involves new accounts or sharing links outside the team.
- **Overwhelmed by options:** pick Option F or E. They're short and low-effort.
- See also `getting-unstuck.md`.
