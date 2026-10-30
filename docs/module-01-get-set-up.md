# Module 1: Get Set Up

**Time:** 1-2 hours
**Prerequisites:** A Claude Code login (your team has these), a laptop where you can install software
**You're done when:** you can see the starter page in your browser, running from your own copy of the repo.

## What this module is for

By the end you'll have everything installed and running, and you'll have had your first short conversation with Claude Code about a real project. That's all. No design work yet, and no pressure to understand what you're seeing.

If something goes wrong, that's normal, and it's the most common thing in this module. See `getting-unstuck.md`, or ask Claude to help (Claude Code can help diagnose its own install problems once it's running).

> **Placeholders to fill in before sharing this guide:** repo URL, required Node version, and your preferred install method for each OS. They're marked TODO below.

---

## Step 1: Meet the terminal (10 min)

The terminal is a text window where you type commands instead of clicking. You'll use it a little, and Claude Code will do most of the typing for you.

- **Mac:** open the app called *Terminal* (press Cmd+Space and type "Terminal").
- **Windows:** open *PowerShell* from the Start menu. (TODO: confirm whether your team uses WSL or plain Windows.)

Try these three commands. Press Enter after each:

```
pwd
ls
cd Documents
```

- `pwd` shows which folder you're in.
- `ls` lists what's in it (on Windows PowerShell, `dir` also works).
- `cd Documents` moves into a folder. `cd ..` moves back up.

That's all the terminal knowledge you need for now.

## Step 2: Install Node.js (10 min)

Node runs the tools that build and preview the prototype.

1. Go to the Node.js website and download the **LTS** version. TODO: specify the exact version the starter repo needs.
2. Run the installer with the default options.
3. Close and reopen your terminal, then check it worked:

```
node -v
npm -v
```

You should see version numbers for both. If you get "command not found", close and reopen the terminal once more. If that doesn't work, see "If something goes wrong" below.

## Step 3: Install Git (10 min)

Git is the save-point system for code.

1. Check whether you already have it: `git --version`. Mac users may be prompted to install developer tools, which is fine.
2. If not installed, download it from the Git website and run the installer with defaults.
3. Tell Git who you are (use your real name and work email):

```
git config --global user.name "Your Name"
git config --global user.email "you@company.com"
```

## Step 4: Install Claude Code (10-15 min)

Claude Code can be used in the terminal or in the desktop app. If the terminal feels intimidating, the desktop app is a friendlier start, and you can switch any time. Both do the same work.

Installation instructions change, so use Anthropic's current Claude Code documentation for your operating system rather than anything copied here. TODO: add your team's preferred method and link.

Once it's installed:

1. Sign in with your work Claude account when prompted.
2. Confirm it runs. In the terminal, typing `claude` should start a session. In the desktop app, open the Code tab.

You don't need to do anything in Claude Code yet. Just confirm it opens and you're signed in. Type `/exit` (or close it) when you're done.

## Step 5: Get the starter repo (10 min)

A *repository* (repo) is just a project folder tracked by Git. You'll make your own copy of the sandbox starter.

1. In the terminal, go to a folder where you keep projects. Create one if needed:

```
cd ~
mkdir projects
cd projects
```

2. Copy the starter repo. The repo is public, so you don't need a GitHub account or to sign in. (TODO: replace with your repo URL.)

```
git clone https://github.com/<OWNER>/<REPO>.git design-sandbox
cd design-sandbox
```

If you see a request to sign in, check that you typed the URL exactly. Ask Claude or a teammate for help if it persists.

3. Take a look inside:

```
ls
```

You should see files like `CLAUDE.md`, `package.json`, a `src` folder, and a `tokens` folder. You don't need to understand them yet.

## Step 6: Run it (10 min)

1. Install the project's dependencies (the code libraries it relies on). This takes a minute or two:

```
npm install
```

2. Start the preview server:

```
npm run dev
```

3. The terminal will show a local address, usually `http://localhost:5173`. Open it in your browser.

You should see the starter page. This is your copy, running on your laptop. Nothing you do here can affect anyone else.

Leave that terminal window running. To stop the server later, click the terminal and press **Ctrl+C**.

## Step 7: Your first conversation with Claude Code (15 min)

Open a **second** terminal window (or a new tab) in the same `design-sandbox` folder, and start Claude Code there. In the desktop app, open the `design-sandbox` folder as your project.

Try these prompts one at a time. They're about exploring, and nothing will be changed.

1. > Give me a short tour of this project. What is it for, and what are the main folders? Explain it as if I'm a designer who has never written code.

2. > Read CLAUDE.md and tell me, in your own words, the three most important rules for working in this project.

3. > Which file would I edit to change the text on the starter page? Don't change anything, just point me to it.

Notice how Claude reads the actual files, rather than guessing. This is the starting point for everything else in the course.

## Step 8: Wrap up

- Stop Claude Code (`/exit`) and stop the server (Ctrl+C).
- Next time, you'll restart both: `npm run dev` in one window and Claude Code in another.

## You're done when

- [ ] `node -v` and `git --version` both show version numbers
- [ ] Claude Code opens and you're signed in
- [ ] You cloned the repo and `npm run dev` shows the starter page in your browser
- [ ] You've asked Claude at least one question about the project and gotten a sensible answer

## If something goes wrong

- **"command not found" for node, npm, git, or claude:** close and reopen the terminal and try again. If it persists, the install may not have added the program to your path. Ask a teammate, or ask Claude if you can get it started.
- **`npm install` fails:** paste the full error to Claude (or to a teammate) and ask it to explain. Check `node -v` against the required version.
- **Page won't load:** check the terminal where `npm run dev` is running for the real address and for errors.
- **Anything else:** see `getting-unstuck.md`.

## Optional reflection

Jot a few lines in your learning log (`learning-log-template.md`): What was the most confusing part? Is there anything you'd tell the next person to do differently?

## Next

**Module 2: Your First Prototype.** You'll recreate a screen from the playground Figma file as a working prototype.
