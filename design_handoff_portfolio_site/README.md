# Handoff: Bhavani Bala — Illustration Portfolio

## Overview
Personal illustration portfolio for Bhavani Bala (she/they), a visual storyteller and comics/illustration artist based in Glasgow & Singapore, and co-founder of Kutty Press. Three pages: a homepage that IS the portfolio gallery ("Work"), an About page, and a Resume page (not yet designed — see "Not Yet Built" below).

Target stack: **Astro**, deployed to **GitHub Pages**.

## About the Design Files
The files in `reference/` are **design references built in HTML/CSS** — static prototypes showing intended look, layout, and hover behavior. They are not production code to import as-is. The task is to **recreate these designs as Astro pages/components**, using Astro's conventions (`.astro` components, content collections for gallery items if useful, etc.), and deploy via GitHub Pages (static output, `astro build` + Pages Action or `gh-pages`).

Each reference HTML file is fully self-contained (inline styles, a `<style>` block only for the hover/pseudo-class rules that can't be inlined) and opens directly in a browser — open it to see real hover interactions.

## Fidelity
**High-fidelity.** Colors, type, spacing, and interaction timings below are final — reproduce pixel-for-pixel using Astro + plain CSS (no particular CSS framework was used or is required; use whatever the target repo already standardizes on, or plain scoped `<style>` in `.astro` files if starting fresh).

## Screens / Views

### 1. Homepage — Gallery ("Work")
**File:** `reference/homepage.html`
**Purpose:** Landing page and full portfolio grid — the primary destination. Clicking a tile should navigate to a full case-study page per project (case-study pages are not yet designed — flag this as an open item, or ask for a follow-up design pass).

**Layout:**
- Top nav bar: flex row, `justify-content: space-between`, padding `26px 48px`, bottom border `2px dashed rgba(51,71,91,.25)`.
  - Left: logo image (`logo.png`), rendered at `height: 56px`, links to homepage.
  - Center: nav links "Work / About / Resume", `Geist Mono`, `14px`, `letter-spacing: .02em`, color `#33475b`. Inactive links at `opacity: .65`. The **active** link is full opacity with a wavy coral underline: `text-decoration: underline wavy #ee6b57; text-underline-offset: 4px`.
  - Right: social glyphs "IG / IN / @", `Geist Mono 12px`, color `#ee6b57`. Only IG is a live link currently (Instagram); others are unlinked placeholders — replace with real profile links or remove if not applicable.
- Gallery grid: CSS grid, `repeat(3, 1fr)`, `gap: 22px`, padding `40px 48px 56px`. No page header/title above the grid by design choice — the work fills the viewport immediately.
- Each tile:
  - Container: `border: 1px solid rgba(51,71,91,.18)`, `border-radius: 2px`, `overflow: hidden`.
  - Image area: `aspect-ratio: 4/3` (currently a diagonal-stripe placeholder pattern — replace with real artwork, `object-fit: cover`).
  - Caption block below image: padding `12px 14px`, `Geist Mono`.
    - Title: `14px / 600 / #33475b`.
    - Medium/subtitle line: `11px`, `rgba(51,71,91,.5)`, `margin-top: 2px`.

**Hover interaction (the chosen direction, "2d" in exploration):**
- Whole tile: `transform: scale(1.035)` and `border-color` animates to `#ee6b57`, both over `.2s ease`. `transform-origin: center`. No box-shadow (explicitly rejected).
- Title gets a **hand-drawn wavy underline that draws in left-to-right** (not a width/scale animation — that caused a "spring" stretch artifact and was rejected). Implementation: an absolutely-positioned `<span>` under the title, `height: 4px`, `bottom: -6px`, background is a small repeating SVG data-URI sine wave (`10×4px` tile, stroke `#ee6b57`, `stroke-width: 1`), revealed via `clip-path: inset(0 calc(100% - var(--u,0)*100%) 0 0)` animated over `.45s ease` — NOT `transform: scaleX`, which distorts the wave shape. `--u` toggles `0→1` on tile `:hover`.
- Reference file has this fully working in plain CSS (`.tile:hover`, `.tile:hover .underline`) — copy that mechanism.

### 2. About Page
**File:** `reference/about.html`
**Purpose:** Bio + contact page.

**Layout:**
- Same nav bar as homepage, with "About" as the active/underlined link instead of "Work".
- Two-column grid below nav: `grid-template-columns: 380px 1fr`, `gap: 64px`, padding `64px 48px 40px`, `max-width: 1240px`, centered (`margin: 0 auto`).
  - Left column: headshot photo in a `4/5` aspect-ratio frame, `border: 1px solid rgba(51,71,91,.18)`, `border-radius: 4px`, `object-fit: cover`.
  - Right column (`max-width: 620px`, `Geist Mono`, color `#33475b`):
    - Name as H1: `Geist` (not mono) `600 / 28px`, color `#ee6b57`, `text-transform: uppercase`, `letter-spacing: .01em`.
    - Pronouns/location line: `13px`, `rgba(51,71,91,.55)`, margin-bottom `28px`.
    - Three bio paragraphs, `15px / line-height 1.75`, `margin-bottom: 20px` (last one `32px`).
    - Footer block within the column: `padding-top: 20px`, top border `1px dashed rgba(51,71,91,.25)`, containing "Find my work on instagram:" label and two IG handle links side by side (`gap: 24px`), each using the **same wavy-underline hover mechanism** as the gallery tile titles.
- Page footer: full-width, `padding: 32px 48px`, top border `1px dashed rgba(51,71,91,.2)`, `Geist Mono 12px`, `rgba(51,71,91,.5)`, copyright line.

**Bio copy (exact text, already final):**
> I am a visual storyteller and facilitator based in Glasgow and Singapore. I have a BA (Architecture) from the National University of Singapore and an MDes (Communication Design) from the Glasgow School of Art.
>
> My creative practice enables the creation of authentic, evocative stories. Through comics and illustration, I explore themes of south asian identity, mental health awareness and featuring (the star of the show) my cat, Kevin. I am currently working on a bunch of community/collaboration-focused comics and publications, focussing on the ripple effects of empire on modern society and how history can be a tool for making sense of the world today.
>
> I meld community engagement and storytelling through my workshop facilitation practice, primarily in Improvisational theatre. I am also the co-founder and Artistic Director of Kutty Press, a mini publishing experiment rooted in the spirit of play, process, and print, weaving together visual storytelling, political reflection, and the tactile joy of printmaking and bookmaking.

Instagram handles: `@bhankadraws` (personal) and `@kuttypress.studio` (press).

### 3. Resume Page — NOT YET BUILT
The nav on both pages already links to a "Resume" item, but that page hasn't been designed. Build it to match the established visual system (same nav, `Geist`/`Geist Mono` type, `#faf8f4` background, `#33475b` ink, `#ee6b57` coral accent, dashed section dividers, wavy-underline hover convention). User indicated they want a styled page **plus a downloadable PDF button** — implement a print/export-to-PDF affordance once content is provided.

## Interactions & Behavior
- **Nav active state:** wavy coral underline (`text-decoration: underline wavy #ee6b57`, `text-underline-offset: 4px`) on the current page's nav link; inactive links at `opacity: .65`.
- **Gallery tile hover:** scale `1.035` + border color to coral + hand-drawn underline draw-in under the title (see above). Duration `.2s` (scale/border), `.45s` (underline clip-path).
- **IG handle hover (About page):** same wavy-underline draw-in mechanism, no scale.
- **Click-through:** gallery tiles should navigate to a per-project case-study page (not yet designed — ask before building placeholder case-study pages, per project convention of not inventing content).
- No responsive/mobile breakpoints have been designed yet — flag if needed for launch.

## State Management
Static content site — no client-side state beyond standard nav highlighting (can be done via Astro's file-based routing + comparing current path, no JS framework required).

## Design Tokens

**Colors**
- Background (page): `#faf8f4`
- Background (deck/canvas, dev-tool only, not part of site): `#efece5` — ignore, artifact of the design tool's option-comparison view.
- Ink / primary text: `#33475b`
- Accent (coral): `#ee6b57`
- Borders (hairline): `rgba(51,71,91,.18)`
- Borders (dashed dividers): `rgba(51,71,91,.25)` at `2px dashed` (nav/section separators), `rgba(51,71,91,.2)` at `1px dashed` (footer separator)
- Muted text: `rgba(51,71,91,.5)` to `rgba(51,71,91,.55)`

**Typography**
- Body / UI: `Geist Mono` (Google Fonts), weights 400/500/600/700
- Headings / display: `Geist` (Google Fonts, sans, not mono), weight 600
- Scale used: `28px` (About H1), `14px` (nav, tile titles), `13px` (meta line), `12px` (footer, social glyphs), `11px` (tile subtitle/placeholder), `15px/1.75` (body paragraphs)

**Spacing**
- Page horizontal padding: `48px`
- Nav vertical padding: `26px`
- Gallery grid gap: `22px`
- About page column gap: `64px`

**Border radius**
- Tiles: `2px`
- Headshot frame: `4px`

**Shadows**
- None used anywhere — explicitly avoided per design direction (shadow-based hover was tried and rejected in favor of scale + border-color).

## Assets
- `assets/logo.png` — wordmark logo, used at `height: 56px` in the nav on every page. Source: user-provided logo image.
- `assets/headshot.jpg` — About page photo. Source: user-provided headshot.
- Gallery artwork: **all placeholders** (diagonal striped color blocks). User will supply real artwork per piece — replace `background` placeholder divs with real `<img>` tags, `object-fit: cover`, same `4/3` aspect-ratio container. Gallery items so far are named (titles + medium, no real images): Ghost Trains (Screen-print, Linocut), Spacing Out (Digital illustration), Shree (Lettering study), Pressure Cooker (Graphite sketch), Tiger Repeat (Surface pattern), Colonised (Zine collage).

## Files
- `reference/homepage.html` — gallery homepage, open directly in a browser to see the hover interaction live.
- `reference/about.html` — About page, same for the IG-link hover.
- `assets/` — logo and headshot images referenced by both.
