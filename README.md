# Safety Co-Pilot Playbook

A static reference site for using Microsoft Copilot on M365 in safety work. Seven sections covering how Copilot works, how to design prompts, and ready-to-use prompt templates for regulations, workplans, insights, SOPs and safety education material.

Plain HTML, CSS and JavaScript. No framework and no build step, so it can be hosted free on GitHub Pages.

## Structure
```
index.html              Overview / landing page
01-how-it-works/        How Safety Copilot works on M365
02-prompt-design/       Designing useful prompts
03-regulations-query/   Query on Safety Regulations
04-safety-workplan/     Generation of Safety Workplan
05-safety-insights/     Generation of Safety Insights
06-safety-sop/          Generation of Safety SOPs
07-safety-education/     Generation of Safety Education Material
assets/                 Shared CSS and JS (copy-to-clipboard, mobile nav)
```

## Publish it on GitHub Pages (free)

1. Create a new repository on GitHub. For free Pages hosting, make it **Public** (see the note below before you do).
2. Upload every file in this folder to the repo, keeping the folder structure intact. Drag-and-drop on github.com works, or `git push` from your machine.
3. In the repo, go to **Settings > Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. GitHub gives you a URL like `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Public vs private

GitHub Pages is free only for **public** repositories, which means anyone with the link can read the site. This playbook is internal Safety Inspectorate material, so before publishing publicly, confirm that none of the content is sensitive.

If it needs to stay access-controlled, a public repo is not the right fit. Host it instead on your organisation's SharePoint or intranet, or use a GitHub plan that supports private Pages. The site is just static files, so it will run from any web host or file share without changes.

## Adding the Copilot upload screenshots (Section 01)

Section 01 shows the two-step flow for adding reference files in Copilot, on desktop and mobile. Save your four screenshots into `assets/img/` with these exact names and they appear automatically (hard-refresh to clear the cache):

- `upload-desktop-1.png` — desktop, the plus button next to the message box
- `upload-desktop-2.png` — desktop, the Add content / Upload menu
- `upload-mobile-1.png` — mobile, the plus button in the message bar
- `upload-mobile-2.png` — mobile, the File / Reference sheet

Until those files exist, framed placeholders show in their place (`upload-desktop.svg` and `upload-mobile.svg`). PNG or JPG both work; landscape suits the desktop slots and portrait the mobile slots, and the layout scales each to fit.

## Editing content later

Each page is a self-contained HTML file. To change wording, edit the text directly in the file for that section. Shared styling lives in `assets/style.css`, and the copy-button and mobile-nav behaviour in `assets/script.js`.

To add a new section, copy an existing section folder as a starting point, then add its link to the sidebar nav and the Overview tile grid on every page.

The `.claude/` folder only holds a local preview configuration and can be ignored or deleted. It has no effect on the hosted site.
