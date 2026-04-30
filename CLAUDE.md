# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
# Start local dev server (with drafts)
hugo server -D

# Production build
hugo --minify

# Create a new blog post
hugo new blogs/my-post-title.md
```

Output goes to `./public/`. Deployment to GitHub Pages is automatic on push to `main` via `.github/workflows/gh-pages.yml` using Hugo 0.154.5.

## Architecture Overview

This is a **Hugo static site** — a bilingual (Spanish/English) personal portfolio and blog for Oscar López, deployed to [oscarlp6.dev](https://oscarlp6.dev).

### Content Structure

- **Blog posts** live in `content/blogs/`. Bilingual support uses filename suffixes: `post-name.md` (Spanish default) and `post-name.en.md` (English).
- **Portfolio data** (experience, skills, projects, education) is stored directly in `config.yaml`, not in markdown files. The entire portfolio is structured YAML data.
- The archetype at `archetypes/default.md` is used when running `hugo new`.

### Theme

The site uses a custom fork of `hugo-profile` at `themes/hugo-profile/` (git submodule pointing to `https://github.com/oscareduardolp6/hugo-profile.git`, branch `my-changes`). When cloning, submodules must be fetched:

```bash
git submodule update --init --recursive
```

Customizations to the theme should go to that fork's `my-changes` branch, not directly into `themes/hugo-profile/`.

### Key Config

`config.yaml` (666 lines) is the single source of truth for:
- Site metadata and base URL
- Bilingual menu definitions (Spanish `es-mx` default, English `en-us`)
- All portfolio sections (hero, about, experience, education, projects, technologies)
- Disqus comments integration (`oscarlp6` shortname)
- Markup settings (Goldmark with unsafe HTML enabled — needed for rendering raw HTML in blog posts)

### Static Assets

`static/` holds PDFs (certifications, CV/resume), project demo files, and images. These are served as-is at the root URL.
