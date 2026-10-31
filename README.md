# Design Sandbox: Learn AI-Assisted Prototyping at Your Own Pace

A self-paced learning path for designers who want to build prototypes and coded components with Claude Code, using a design system managed in Figma.

This is a **sandbox**. Nothing here is meant to ship, be reviewed, or be measured. The goal is to build skills in a low-stakes place where experimenting is the whole point.

## Who this is for

Designers who are comfortable in Figma and curious about code, with no coding experience required. You'll need:

- A laptop where you can install software
- Access to Claude Code (a Claude account that includes it)
- Access to the [playground Figma file](https://www.figma.com/design/cRiEaXOIvJU9Jcm2d51gdf/Playground-spec) (see "The Figma file" below)
- About 1-2 hours a week, however you'd like to spend them

## How it works

- **Pick your pace.** There's no schedule, no cohort, and no deadline.
- **Modules are standalone.** Each has an estimated time, a hands-on exercise, and a "you're done when" checklist. Skip around or stop at any point.
- **Learn by building.** You'll work in your own copy of this repo, using the playground Figma file as your design source.
- **Ask for help.** Claude is your tutor throughout, and your teammates are a message away.

## Quick start

1. Open **[Module 1: Get Set Up](docs/module-01-get-set-up.md)** and follow the steps.
2. When `npm run dev` shows the starter page in your browser, you're ready for Module 2.

## The modules

| # | Module | Time | You'll be able to... |
|---|---|---|---|
| 1 | [Get Set Up](docs/module-01-get-set-up.md) | 1-2 hrs | Run the starter project locally and chat with Claude Code about it |
| 2 | [Your First Prototype](docs/module-02-first-prototype.md) | 2-4 hrs | Describe, plan, review, and iterate on a screen |
| 3 | [Dev Literacy, Just Enough](docs/module-03-dev-literacy.md) | 2-3 hrs | Read basic code and use Git to experiment safely |
| 4 | [Connect Figma](docs/module-04-connect-figma.md) | 2-4 hrs | Build screens from real Figma frames |
| 5 | [Design Tokens and Your System](docs/module-05-design-tokens.md) | 3-5 hrs | Get Figma variables into code and steer Claude with rules |
| 6 | [Interactive Prototypes](docs/module-06-interactive-prototypes.md) | 3-5 hrs | Build behavior Figma does awkwardly |
| 7 | [Storybook Basics](docs/module-07-storybook-basics.md) | 3-5 hrs | Browse and review coded components and their states |
| 8 | [Build a Mini Component Library](docs/module-08-mini-component-library.md) | 4-6 hrs | Mirror a Figma library in code and spot the drift |
| 9 | [Go Further](docs/module-09-go-further.md) | Open-ended | Explore automation, sharing, other stacks, and more |

Modules 1-8 build on each other, so go in order if you're new. Module 9 is a menu.

## Supporting docs

- [Getting Unstuck](docs/getting-unstuck.md): what to do when something breaks
- [Prompt Patterns](docs/prompt-patterns.md): a shared, growing collection of prompts that work
- [Learning Log Template](docs/learning-log-template.md): an optional private notebook for your own reflection
- [Token Pipeline](docs/design-tokens-pipeline.md): how Figma variables become CSS
- [Playground Figma Spec](docs/playground-figma-spec.md): what's in the practice Figma file

## What's in this repo

```
README.md                  You are here
CLAUDE.md                  Instructions Claude reads in every session
docs/                      Modules and supporting guides
tokens/                    Design tokens exported from Figma
src/
  components/              Reusable components
  prototypes/              Your prototypes
  styles/tokens.css        Generated from tokens/ (don't edit by hand)
```

## The Figma file

The exercises use a small playground design system: a fictional product, about 40 variables, 10 components, and 4 sample screens. See the [spec](docs/playground-figma-spec.md) for details.

The playground file is here: https://www.figma.com/design/cRiEaXOIvJU9Jcm2d51gdf/Playground-spec — make a copy in your own Figma account if you'd like to edit it.

## Tips for a good experience

- **Commit often.** It makes experiments safe.
- **Plan before building.** Ask Claude for a plan first and read it.
- **Go in small steps.** Smaller changes are easier to review and undo.
- **Mind your usage.** Start fresh sessions for new tasks, and point Claude at specific files or Figma frames instead of whole projects.
- **Share what works.** Add your best prompts to the prompt patterns doc.

## A note on what this is (and isn't)

This is a learning sandbox built around a fictional product. It uses placeholder content and sample tokens. It isn't a production design system, and nothing here reflects any real product or brand. Setup instructions and tool behavior change over time, so check the current documentation for Claude Code, Figma, Storybook, and the other tools mentioned if something doesn't match.

## Contributing

Found something confusing, outdated, or broken? Improvements to the modules and docs are welcome. Just message me or the team directly — no formal process, and a quick note about what tripped you up is genuinely useful.

## License

TODO: choose a license for the course materials, or state that all rights are reserved. A public repo with no license means others can view it but have no clear permission to reuse it.
