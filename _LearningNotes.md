- cikguwilson@gmail.com
- https://claude.ai/chat/3825558d-6379-4862-adb5-035562b170af
- https://github.com/cikguwilson-tech/v3-assumpta
- https://vercel.com/my-team-f826
- https://motionsites.ai/?prompt=synth-mode
- https://aistudio.google.com/

# Catholic Assumption Mass landing page design

# claude prompt

## I want to develop a Catholic Feast Day Mass - Assumption of Mother Mary with the Mass content and accompanying hymns with modifications on the following prompts of a Futuristic Fashion landing page from https://motionsites.ai/?prompt=synth-mode:

Modifications - please provide modifications to the enclosed prompts, with Mother Mary's Blue rather than white, suitable Catholic fonts rather than futuristic fonts, A good and clear Mother Mary's Assumption picture rather than the futuristic picture, mobile-compliant, with appropriate changes to ALL descriptions of fashion to the Mass Liturgy.
Then I want to feed your impeccable modified prompts to Google AI Studio.

# copy prompt from https://motionsites.ai/?prompt=synth-mode

Build a pure-white, minimal, futuristic fashion landing page titled **"LGPSM — Future Forward Fashion"**. Stack: React 19 + Vite + TypeScript + Tailwind CSS v4 + lucide-react. Page title: `LGPSM — Future Forward Fashion`. Description vibe: pure white minimal futuristic fashion website interface. Full-viewport single composition, black text on white, no purple, no cream, no cards-as-decoration, no glow effects.

---

## FONTS (exact Google Fonts)

Load via Google Fonts:

```
https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=Michroma&family=Orbitron:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap
```

Usage:

- **Orbitron** (600/700/800/900): logo `LGPSM`, main headline `FUTURE FORWARD FASHION`, drawer titles, collection titles
- **Plus Jakarta Sans** (400/500/600/700): body UI, nav links, taglines, buttons, drawer content (default page font)
- Michroma and Chakra Petch may be loaded but are unused on the main UI

CSS utilities:

- `.font-orbitron { font-family: 'Orbitron', sans-serif; }`
- `.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }`

Body: `bg-white text-black antialiased`, selection: `selection:bg-black selection:text-white`.

---

## FLUID SIZE SYSTEM (exact CSS variables)

All sizes scale with viewport via `clamp()` — no hard fixed px breakpoints for type/spacing:

```css
:root {
  --pad-x: clamp(1.25rem, 4.5vw, 5rem);
  --pad-y: clamp(1rem, 3vh, 4rem);
  --header-pt: clamp(1.25rem, 2.5vh, 2.5rem);
  --gap-nav: clamp(1rem, 2.2vw, 2.25rem);
  --logo: clamp(1.35rem, 1.2vw + 0.9rem, 2.1rem);
  --logo-deg: clamp(0.65rem, 0.4vw + 0.45rem, 0.9rem);
  --nav: clamp(0.65rem, 0.35vw + 0.5rem, 0.875rem);
  --headline: clamp(2.15rem, 4.5vw + 0.75rem, 5.25rem);
  --body: clamp(0.7rem, 0.35vw + 0.55rem, 0.9rem);
  --micro: clamp(0.55rem, 0.25vw + 0.45rem, 0.7rem);
  --btn-px: clamp(1.15rem, 1.4vw, 1.75rem);
  --btn-py: clamp(0.6rem, 0.9vh, 0.85rem);
  --btn-gap: clamp(0.75rem, 1vw, 1.1rem);
  --feature-pad: clamp(1rem, 1.5vw, 1.75rem);
  --feature-min: clamp(13rem, 18vw, 20rem);
  --globe: clamp(2.25rem, 2.5vw + 1rem, 3.25rem);
  --checker-w: clamp(2.75rem, 4.5vw, 6.5rem);
  --checker-h: clamp(1.35rem, 2.2vw, 3rem);
  --corner: clamp(0.65rem, 0.4vw + 0.4rem, 0.95rem);
  --icon: clamp(1rem, 0.6vw + 0.7rem, 1.35rem);
  --drawer-pad: clamp(1.25rem, 2.5vw, 2.25rem);
  --drawer-max: clamp(18rem, 28vw, 28rem);
  --section-gap: clamp(0.75rem, 1.5vh, 1.5rem);
  --main-py: clamp(1.25rem, 4vh, 4rem);
}
```

---

## EXACT BACKGROUND IMAGE URLS

**Base image (BG_IMAGE_1)** — always visible full-bleed desktop background; also used as the mobile static image:

```
https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260802_074534_f0d9d476-3f86-4c67-9b12-dfc63d99da41.png&w=1920&q=85
```

**Reveal image (BG_IMAGE_2)** — second image revealed only inside the mouse spotlight mask:

```
https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260802_075145_1b557479-775b-43af-8270-f45d79d97d5a.png&w=1920&q=85
```

Both layers: `absolute inset-0`, `background-size: cover`, `background-position: center`, `background-repeat: no-repeat`.

---

## DESKTOP INTERACTIVE IMAGE REVEAL EFFECT (exact behavior)

Component: `ImageRevealBackground`. Desktop only: `hidden lg:block fixed inset-0 pointer-events-none z-0 overflow-hidden`.

### Layers (bottom → top)

1. Base layer: BG_IMAGE_1 full bleed
2. Reveal layer: BG_IMAGE_2 full bleed, clipped by a CSS/WebKit mask generated from an offscreen canvas
3. Subtle SVG grid overlay at `opacity: 0.10`, stroke `#64748b`, strokeWidth `0.6`

### Spotlight / mask algorithm (exact)

- Track raw mouse (`mousemove` on `window`) into `mouseRef`
- Every animation frame, ease `smoothRef` toward mouse with factor **0.1**:
  - `smooth.x += (mouse.x - smooth.x) * 0.1`
  - `smooth.y += (mouse.y - smooth.y) * 0.1`
- Spotlight radius (fluid): `Math.round(Math.min(420, Math.max(160, window.innerWidth * 0.16)))`
- Draw soft radial gradient circle on offscreen canvas at smoothed cursor:
  - `createRadialGradient(cx, cy, 0, cx, cy, radius)`
  - stops exactly:
    - 0 → `rgba(255,255,255,1)`
    - 0.4 → `rgba(255,255,255,1)`
    - 0.6 → `rgba(255,255,255,0.75)`
    - 0.75 → `rgba(255,255,255,0.4)`
    - 0.88 → `rgba(255,255,255,0.12)`
    - 1 → `rgba(255,255,255,0)`
- Export canvas each frame as `toDataURL()` and apply to BG_IMAGE_2 as:
  - `mask-image: url(dataUrl)` / `-webkit-mask-image: url(dataUrl)`
  - `mask-size: 100% 100%`
- Result: moving the cursor smoothly reveals BG_IMAGE_2 inside a soft circular spotlight while BG_IMAGE_1 remains everywhere else

### Parallax grid

- Grid cell size (fluid): `Math.round(Math.min(64, Math.max(36, window.innerWidth * 0.028)))`, update on resize
- SVG `<pattern>` with path `M {cell} 0 L 0 0 0 {cell}`
- Offset grid with eased parallax: normalize smoothed cursor to container (`cx`, `cy` from −0.5 to 0.5), ease offset toward `cx*16` / `cy*16` with factor **0.06**
- Pattern `x`/`y` = that eased offset

On viewports below `lg`, hide this interactive background and instead show a static bordered image of BG_IMAGE_1 in a section below the hero (`aspect-[4/5]` mobile, `sm:aspect-[16/9]`, border `border-gray-200`).

---

## PAGE STRUCTURE & EXACT COPY

Root: `min-h-screen bg-white text-black font-jakarta flex flex-col justify-between relative overflow-hidden`.

### 1. Header (z-20)

Padding: `paddingInline: var(--pad-x)`, `paddingTop: var(--header-pt)`, `paddingBottom: var(--section-gap)`. Flex space-between.

**Logo (left):** Orbitron black/900, letter-spacing `0.15em`, size `var(--logo)`. Text: `LGPSM` + small degree symbol `˚` (size `var(--logo-deg)`, slightly raised `-mt-0.5 ml-0.5`). Clicking closes any open drawer. Hover opacity 80%.

**Nav (right):** Plus Jakarta Sans, medium, uppercase, tracking `0.2em`, size `var(--nav)`, gap `var(--gap-nav)`.
Links (buttons): `SHOP` | `COLLECTIONS` | `JOURNAL` then gray `|` divider then lucide `ShoppingBag` icon (stroke 1.5, size `var(--icon)`).
Hover: opacity 50%. Cart shows black circular badge with item count when cart has items.

### 2. Main hero (flex-1)

Padding: `paddingInline: var(--pad-x)`, `paddingBlock: var(--main-py)`. Layout: column on mobile, `lg:flex-row` space-between.

**Left block** (vertically centered):

1. Small top-left L-corner bracket SVG (stroke 1.5, size `var(--corner)`)
2. Headline — Orbitron extrabold, uppercase, tracking `0.08em`, leading `1.05`, size `var(--headline)`, three lines:
   - `FUTURE`
   - `FORWARD`
   - `FASHION` + inline **checkerboard grid SVG** (viewBox `0 0 36 18`, 4 rows of 3.8×3.8 black squares; even rows shifted by 2.25; size `var(--checker-w)` × `var(--checker-h)`, slightly translated down 2px)
3. Bottom-left L-corner bracket
4. CTA button: border `border-gray-400`, rounded-md, uppercase `SHOP NOW` + lucide `ArrowUpRight`. Tracking `0.18em`, size `var(--body)`, padding `var(--btn-px)` / `var(--btn-py)`. Hover: fill black, text white, border black; icon nudges up-right.

**Right lower feature block** (`self-end`, bottom-aligned on desktop):
Framed box with four corner bracket SVGs (TL/TR/BL/BR) at absolute corners — no filled card background. Inside:

- Wireframe globe SVG (viewBox `0 0 64 64`, stroke 1.2: outer circle r=28, equator line, 2 horizontal ellipses, meridian line, 2 vertical ellipses), size `var(--globe)`
- Tagline in Plus Jakarta Sans semibold uppercase tracking `0.18em`, size `var(--body)`:
  - `BEYOND TRENDS.`
  - `BUILT FOR TOMORROW.`
    min-width `var(--feature-min)`, padding `var(--feature-pad)`.

### 3. Side drawers (exact)

Clicking SHOP / COLLECTIONS / JOURNAL / cart opens a right-side white drawer over dimmed backdrop (`bg-black/20 backdrop-blur-xs`). Max width `var(--drawer-max)`, padding `var(--drawer-pad)`, border-left gray. Header: Orbitron bold uppercase title + lucide `X` close. Click backdrop to close.

**SHOP → title `Catalog`**
Subtitle: `Featured Garments`
Items (exact):

1. CYBER-TEX OVERCOAT — $850 — tag LIMITED EDITION
2. GEO-MESH TECH HOODIE — $320 — tag NEW DROP
3. ORBITAL TAPERED TROUSERS — $290 — tag IN STOCK
4. MODULAR ALL-WEATHER VEST — $410 — tag PRE-ORDER  
   Each row: tag (micro gray), title, price, `ADD` button. ADD adds to cart and shows toast: `Added "{title}" to your shopping bag.` (3s, black toast top-right with lucide Check emerald).

**COLLECTIONS → title `Archive 2026`**
Subtitle: `Season Lineup`

1. SERIES 01 — SYNTHETIC HORIZONS — Ultra-durable weather-sealed fabrics with minimalist silhouette architecture.
2. SERIES 02 — KINETIC FORM — Ergonomic streetwear designed for maximum mobility and temperature equilibrium.
3. SERIES 03 — MONOCHROME ZERO — Pure black and white structural tailoring crafted from 100% recycled polymers.

**JOURNAL → title `Editorial`**
Subtitle: `Latest Dispatches`

1. AUG 2026 — THE ARCHITECTURE OF NEXT-GEN TEXTILES — 4 MIN READ
2. JUL 2026 — CIRCULAR DESIGN IN HIGH-END APPAREL — 6 MIN READ
3. JUN 2026 — MINIMALISM AS A FUNCTIONAL STATEMENT — 3 MIN READ

**CART → title `Shopping Bag`**
Empty: ShoppingBag icon + `Your shopping bag is empty.`
With items: list title/price + Remove. Footer: full-width black `CHECKOUT NOW` + ChevronRight → toast `Order submitted successfully!`, clear cart, close drawer.
Non-cart footer: `LGPSM © 2026 — FUTURE FORWARD FASHION` (micro, gray, centered uppercase).

---

## ICONS

lucide-react only: `ShoppingBag`, `ArrowUpRight`, `X`, `ChevronRight`, `Check`. Custom SVGs for: checkerboard, wireframe globe, four L-shaped corner brackets (paths: TL `M0 11.5V0.5H11.5`, TR `M0.5 0.5H11.5V11.5`, BL `M0 0.5V11.5H11.5`, BR `M0.5 11.5H11.5V0.5`, viewBox `0 0 12 12`).

---

## VISUAL RULES

- White page, black ink, gray accents only (`gray-200` / `gray-300` / `gray-400` / `gray-500` / `gray-600` / slate grid `#64748b`)
- No purple, no cream, no glow, no floating badges over hero media, no inset hero cards
- Brand `LGPSM` and headline `FUTURE FORWARD FASHION` dominate first viewport
- First viewport content only: logo/nav, headline + checker, SHOP NOW, globe tagline, and full-bleed dual-image reveal background
- UI text sits above background at z-10/z-20; background is z-0 and non-interactive (`pointer-events-none`)

Recreate this page pixel-faithfully with the exact URLs, exact reveal math (ease 0.1, radius `clamp(160, 16vw, 420)`, gradient stops listed), exact copy, fonts, fluid clamps, and drawer contents above.

---

# Modified spec on the above by Claude

Here's the modified spec, ready to paste into Google AI Studio. A few things worth flagging on what I changed and why:

- **Fonts**: swapped Orbitron/Chakra Petch for Cinzel (carved-stone liturgical capitals) and Cormorant/EB Garamond (traditional missal-style serif).
- **Color**: replaced black/white with a Marian-blue palette (`#0B2C6B` navy, `#1E4FA0` mid-blue, `#A9C6E8` pale sky, `#C9A227` gold accent) — no purple, no cream, per your ask.
- **Hero image**: I dropped the fake `higgs.ai` render URLs since those were per-session generated links, not real assets. Instead I gave you two real options — public-domain Assumption paintings on Wikimedia Commons (Rubens, Reni, Botticini, with the `Special:FilePath` direct-link trick so you can hotlink the actual file), or a detailed Imagen generation prompt if you'd rather create a fresh devotional image inside AI Studio.
- **Checkerboard → twelve-stars crown**, **globe → radiant emblem** — both drawn from actual Marian iconography (Revelation 12's "crown of twelve stars").
- **Copy**: SHOP/COLLECTIONS/JOURNAL → LITURGY/HYMNS/READINGS, with real Mass propers for the Assumption (Rev 11:19a–12:6a,10ab, Ps 45, 1 Cor 15:20–27, Luke 1:39–56) and three well-known Marian hymns.
- **Mobile compliance**: I went further than the original (which only had a static-image fallback) — added bottom-sheet drawers, 44px touch targets, a subtle cross-fade in place of the pointer-reveal, safe-area padding, and `prefers-reduced-motion` support.
- **One deliberate exception to "no glow"**: I kept a soft gold-white halo effect in the desktop reveal mask, since it reads as a halo around Our Lady rather than a tech glow — flagged clearly in the doc in case you'd rather strip it out.

You'll want to fill in `[PARISH NAME]` before publishing.

# Modified spec:

# PROMPT FOR GOOGLE AI STUDIO — Assumption of the Blessed Virgin Mary, Solemn Feast Day Mass Landing Page

Build a Marian-blue, reverent, minimal landing page titled **"ASSUMPTA — Solemnity of the Assumption of the Blessed Virgin Mary"**. Stack: React 19 + Vite + TypeScript + Tailwind CSS v4 + lucide-react. Page title: `ASSUMPTA — Solemnity of the Assumption of Our Lady`. Description vibe: reverent, minimal, luminous Marian-blue liturgical interface for a parish Mass page. Full-viewport single composition, deep Marian-blue text on white, no purple, no neon, no cards-as-decoration, no secular glow effects (a single soft golden halo treatment around Our Lady's image is the one intentional exception — see Visual Rules). Fully mobile-compliant (this spec upgrades the original desktop-only reveal effect to a touch-friendly version — see section 5).

---

## 1. FONTS (exact Google Fonts — Catholic/liturgical register, replacing the futuristic set)

Load via Google Fonts:

```
https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Marcellus&display=swap
```

Usage (replaces Orbitron / Michroma / Chakra Petch / Plus Jakarta Sans):

- **Cinzel** (600/700/800) — classical carved-stone capitals evocative of church inscriptions and missals: page wordmark `ASSUMPTA`, main headline `ASSUMPTA EST MARIA` / `MARY IS TAKEN UP`, drawer titles, feast/reading titles
- **Cormorant Garamond** (400/500/600, italic for emphasis) — elegant traditional book-serif for body text, taglines, hymn verses, reading excerpts (default page font)
- **EB Garamond** — alternate body serif for longer liturgical text blocks (readings, prayers) where a slightly more compact classic serif reads better at small sizes
- **Marcellus** — optional small-caps accents for micro-labels (e.g. liturgical dates, tags) if a lighter touch than Cinzel is wanted

CSS utilities:

- `.font-cinzel { font-family: 'Cinzel', serif; }`
- `.font-garamond { font-family: 'Cormorant Garamond', 'EB Garamond', serif; }`

Body: `bg-white text-marian-navy antialiased`, selection: `selection:bg-marian-navy selection:text-white`.

---

## 2. COLOR SYSTEM (Marian blue replacing black/white)

```css
:root {
  --marian-navy: #0b2c6b; /* primary ink — deep Marian/royal blue, used everywhere black was used */
  --marian-blue: #1e4fa0; /* secondary blue for hover/active states */
  --marian-sky: #a9c6e8; /* pale blue-white for tints, borders, subtle fills */
  --marian-gold: #c9a227; /* halo / feast-day accent — used sparingly, never as a glow wash */
  --paper-white: #ffffff;
  --ink-gray: #5b6b85; /* replaces gray-400/500/600, blue-tinted gray instead of neutral gray */
}
```

Replace every instance of `text-black` → `text-[var(--marian-navy)]`, `border-black` (hover states) → `border-[var(--marian-navy)]`, `bg-black` (hover fills) → `bg-[var(--marian-navy)]`, and all `gray-*` borders/dividers → the blue-tinted `--ink-gray` / `--marian-sky` scale. No purple, no cream, no neon — the palette is strictly navy, mid-blue, pale sky-blue, gold accent, and white.

---

## 3. FLUID SIZE SYSTEM

Keep the same `clamp()`-based fluid system from the original spec **unchanged in structure** (same variable names: `--pad-x`, `--pad-y`, `--header-pt`, `--gap-nav`, `--logo`, `--headline`, `--body`, `--micro`, `--btn-px`, `--btn-py`, `--btn-gap`, `--feature-pad`, `--feature-min`, `--globe`, `--checker-w`, `--checker-h`, `--corner`, `--icon`, `--drawer-pad`, `--drawer-max`, `--section-gap`, `--main-py`). This system was already mobile-first and fluid, so no changes are needed here — carry it over verbatim. (Rename `--globe` → `--emblem` and `--checker-w`/`--checker-h` → `--stars-w`/`--stars-h` for clarity given the new iconography in section 6.)

Add one new variable for mobile-safe-area support:

```css
--safe-bottom: env(safe-area-inset-bottom, 0px);
```

Apply `padding-bottom: calc(var(--pad-y) + var(--safe-bottom))` on the root container so content clears the home-indicator area on iOS.

---

## 4. HERO IMAGE — Our Lady of the Assumption (replacing the futuristic higgs.ai renders)

Do **not** use AI-generated fashion imagery. Use a clear, reverent, public-domain depiction of the Assumption of Mary. Two acceptable sourcing routes:

**Option A — Classical public-domain artwork (recommended for authenticity):**
Source from Wikimedia Commons, which hosts high-resolution public-domain scans of Assumption paintings. Good, clearly-legible choices (all pre-1900, public domain worldwide):

- Peter Paul Rubens, _The Assumption of the Virgin_ (Antwerp Cathedral / Vienna versions)
- Guido Reni, _The Assumption of the Virgin Mary_
- Francesco Botticini, _The Assumption of the Virgin_

Use Wikimedia's direct-file redirect pattern so the exact current file resolves automatically:

```
https://commons.wikimedia.org/wiki/Special:FilePath/File:Peter_Paul_Rubens_-_The_Assumption_of_the_Virgin_Mary_-_Google_Art_Project.jpg?width=1920
```

(Swap the filename for whichever painting you choose from the Commons page: `https://commons.wikimedia.org/wiki/Category:Paintings_of_the_Assumption_of_Mary`.)

**Option B — New devotional illustration generated in AI Studio:**
If you'd rather generate a fresh image with Imagen inside AI Studio, use this description as the generation prompt:

> "A reverent, clear devotional image of the Assumption of the Blessed Virgin Mary: Mary in a white robe and deep blue mantle, arms open and eyes lifted heavenward, rising gently on soft clouds surrounded by cherubs, bathed in warm golden light, traditional Catholic sacred-art style, serene and dignified, no text, high detail, soft realistic lighting, vertical composition."

Use one clear devotional image as **BG_IMAGE_1** (base/full-bleed layer). If you want the reveal-effect described below, generate or source a second, slightly more luminous/close-up variant (e.g. Mary's face and clasped hands haloed in gold) as **BG_IMAGE_2** for the spotlight reveal. If only one image is available, disable the reveal effect and use that single image as a static full-bleed hero (this is also the required mobile behavior — see below).

Both layers: `absolute inset-0`, `background-size: cover`, `background-position: center`, `background-repeat: no-repeat`.

---

## 5. IMAGE REVEAL EFFECT — desktop enhancement, with a mobile-compliant fallback

The original spec made the interactive reveal **desktop-only** and showed a static image on mobile. Keep that safe default, but make it fully mobile-compliant rather than an afterthought:

### Desktop (`lg` and up) — pointer-driven reveal

Component: `ImageRevealBackground`. `hidden lg:block fixed inset-0 pointer-events-none z-0 overflow-hidden`.

Layers (bottom → top):

1. Base layer: BG_IMAGE_1 (full devotional image)
2. Reveal layer: BG_IMAGE_2 (radiant/close-up variant), clipped by a canvas-generated mask
3. Subtle SVG grid overlay at `opacity: 0.08`, stroke `var(--marian-sky)` instead of slate, strokeWidth `0.6` — evokes a faint architectural/stained-glass lattice rather than a tech grid

Spotlight/mask algorithm — same math as the original, only the gradient is now a warm gold-white "halo" rather than a neutral white:

- Ease smoothed cursor toward raw mouse position, factor **0.1** per frame (unchanged)
- Radius: `Math.round(Math.min(420, Math.max(160, window.innerWidth * 0.16)))` (unchanged)
- Radial gradient stops (same structure, warmer tone):
  - 0 → `rgba(255,250,235,1)`
  - 0.4 → `rgba(255,250,235,1)`
  - 0.6 → `rgba(255,250,235,0.75)`
  - 0.75 → `rgba(255,250,235,0.4)`
  - 0.88 → `rgba(255,250,235,0.12)`
  - 1 → `rgba(255,250,235,0)`
- Export as `toDataURL()`, apply as `mask-image` / `-webkit-mask-image` on BG_IMAGE_2, `mask-size: 100% 100%`

Parallax grid: same easing (factor **0.06**), same fluid cell-size formula, unchanged.

### Mobile / tablet (below `lg`) — REQUIRED, not optional

Because pointer-hover has no equivalent on touch devices, mobile does **not** get a degraded/disabled experience — it gets a _different, first-class_ one:

- Show BG_IMAGE_1 as a static, full-width bordered image in a dedicated section directly below the header, `aspect-[4/5]` on phones, `sm:aspect-[16/9]` on tablets, `border border-[var(--marian-sky)]`, `rounded-sm`
- Add a **gentle autoplay cross-fade** (CSS `@keyframes`, 8s ease-in-out loop, `will-change: opacity`) between BG_IMAGE_1 and BG_IMAGE_2 so the "reveal" concept still exists on mobile without requiring touch-drag gymnastics. Keep this subtle (opacity 0 → 1 → 0 over the full loop, never a hard cut).
- All touch targets (nav links, drawer triggers, ADD/RSVP buttons) must be **minimum 44×44px** tap area regardless of the fluid type scale — pad buttons with `min-h-11 min-w-11` even where the fluid clamp would produce something smaller.
- Drawers become **bottom sheets on mobile** (`fixed inset-x-0 bottom-0 max-h-[85vh] rounded-t-2xl`) instead of right-side panels, since right-edge drawers are awkward to reach one-handed on a phone; keep the right-side slide-in panel for `lg:` and above.
- Respect `prefers-reduced-motion: reduce` — disable the cross-fade and any parallax/easing animation entirely for users who request it, showing BG_IMAGE_1 statically instead.

---

## 6. PAGE STRUCTURE & EXACT COPY (Mass Liturgy replacing Fashion)

Root: `min-h-screen bg-white text-[var(--marian-navy)] font-garamond flex flex-col justify-between relative overflow-hidden`.

### 6.1 Header (z-20)

Padding: `paddingInline: var(--pad-x)`, `paddingTop: var(--header-pt)`, `paddingBottom: var(--section-gap)`. Flex space-between.

**Wordmark (left):** Cinzel bold, letter-spacing `0.15em`, size `var(--logo)`. Text: `ASSUMPTA` + a small cross mark `✝` (size `var(--logo-deg)`, slightly raised `-mt-0.5 ml-0.5`) — replacing the `˚` degree symbol. Clicking closes any open drawer. Hover opacity 80%.

**Nav (right):** Cormorant Garamond, medium, uppercase, tracking `0.2em`, size `var(--nav)`, gap `var(--gap-nav)`.
Links (buttons): `LITURGY` | `HYMNS` | `READINGS` then a `|` divider in `var(--ink-gray)`, then a lucide `BookOpen` icon (stroke 1.5, size `var(--icon)`) representing "My Mass Booklet" — replacing the shopping-bag cart icon. Hover: opacity 60%. Booklet icon shows a small gold circular badge with saved-item count when the booklet has items.

### 6.2 Main hero (flex-1)

Padding: `paddingInline: var(--pad-x)`, `paddingBlock: var(--main-py)`. Layout: column on mobile, `lg:flex-row` space-between.

**Left block** (vertically centered):

1. Small top-left L-corner bracket SVG (unchanged mechanic, stroke 1.5, size `var(--corner)`)
2. Headline — Cinzel extrabold, uppercase, tracking `0.06em`, leading `1.1`, size `var(--headline)`, three lines:
   - `ASSUMPTA`
   - `EST MARIA` _(Latin: "Mary has been taken up")_
   - `IN CAELUM` _(Latin: "into Heaven")_ — with an inline **twelve-stars crown SVG** (Marian symbol from Revelation 12:1 — "a woman clothed with the sun... a crown of twelve stars"; viewBox `0 0 36 18`, twelve small 5-point gold stars arranged in a gentle arc, replacing the checkerboard grid), sized `var(--stars-w)` × `var(--stars-h)`, translated down 2px
   - Directly beneath, a smaller English subtitle line in Cormorant Garamond italic: `Solemnity of the Assumption of the Blessed Virgin Mary`
3. Bottom-left L-corner bracket (unchanged)
4. CTA button: border `border-[var(--ink-gray)]`, rounded-md, uppercase `JOIN THE MASS` + lucide `ArrowUpRight`. Tracking `0.18em`, size `var(--body)`, padding `var(--btn-px)` / `var(--btn-py)`. Hover: fill `var(--marian-navy)`, text white, border navy; icon nudges up-right.

**Right lower feature block** (`self-end`, bottom-aligned on desktop; stacks below the CTA on mobile):
Framed box with four corner bracket SVGs (TL/TR/BL/BR) at absolute corners — no filled card background. Inside:

- A simple radiant monstrance/star emblem SVG (viewBox `0 0 64 64`, stroke 1.2: a central circle with 8 evenly-spaced short rays and a small cross above — replacing the wireframe globe), size `var(--emblem)`
- Tagline in Cormorant Garamond semibold italic uppercase tracking `0.14em`, size `var(--body)`:
  - `QUEEN OF HEAVEN.`
  - `MOTHER OF THE CHURCH.`
    min-width `var(--feature-min)`, padding `var(--feature-pad)`.

### 6.3 Side panels — right drawer on desktop, bottom sheet on mobile (see §5)

Clicking LITURGY / HYMNS / READINGS / booklet opens a white panel over a dimmed backdrop (`bg-[var(--marian-navy)]/20 backdrop-blur-xs`). Max width `var(--drawer-max)` (desktop) / full-width (mobile sheet), padding `var(--drawer-pad)`, border `var(--marian-sky)`. Header: Cinzel bold uppercase title + lucide `X` close. Click backdrop to close.

**LITURGY → title `Order of Mass`**
Subtitle: `Solemnity of the Assumption — Proper of the Mass`
Items (exact — replacing the four garment listings):

1. ENTRANCE ANTIPHON — _"Let us all rejoice in the Lord..."_ — tag PROCESSIONAL
2. FIRST READING — Revelation 11:19a; 12:1–6a, 10ab — tag OLD TESTAMENT
3. RESPONSORIAL PSALM — Psalm 45 — tag SUNG RESPONSE
4. SECOND READING — 1 Corinthians 15:20–27 — tag EPISTLE
5. GOSPEL — Luke 1:39–56 (The Visitation and the Magnificat) — tag GOSPEL
6. PREFACE OF THE ASSUMPTION — tag EUCHARISTIC PRAYER
7. COMMUNION ANTIPHON — _"All generations shall call me blessed..."_ — tag COMMUNION

Each row: tag (micro, gold), title, scripture citation (in place of price), an `ADD` button. ADD adds the item to the user's Mass booklet and shows a toast: `Added "{title}" to your Mass booklet.` (3s, navy toast top-right with lucide `Check` in gold).

**HYMNS → title `Hymnal`**
Subtitle: `Feast Day Hymns to Our Lady`

1. SING OF MARY, PURE AND LOWLY — A processional hymn of praise to Mary's humility and her role as Mother of God, sung to the tune "Pleading Savior."
2. HAIL, HOLY QUEEN, ENTHRONED ABOVE — A traditional Marian anthem drawn from the _Salve Regina_, honoring Mary as Queen of Heaven and Mother of Mercy.
3. IMMACULATE MARY — A beloved recessional hymn with the repeated refrain "Ave, Ave, Ave Maria," fitting for the close of the Assumption Mass.

**READINGS → title `Scripture & Reflections`**
Subtitle: `Reflections for the Feast`

1. AUG 2026 — WHY THE ASSUMPTION MATTERS TO THE CHURCH TODAY — 4 MIN READ
2. AUG 2026 — MARY'S MAGNIFICAT: A SONG OF HUMILITY AND HOPE — 6 MIN READ
3. AUG 2026 — THE ASSUMPTION AS A SIGN OF OUR OWN HOPE — 3 MIN READ

**BOOKLET → title `My Mass Booklet`** (replacing the shopping cart)
Empty: `BookOpen` icon + `Your Mass booklet is empty.`
With items: list title + scripture citation, `Remove` button. Footer: full-width navy `CONFIRM ATTENDANCE` button + `ChevronRight` → toast `Attendance confirmed. Ave Maria!`, clears the booklet, closes the panel.
Non-booklet footer (on LITURGY/HYMNS/READINGS panels): `[PARISH NAME] © 2026 — Solemnity of the Assumption of the Blessed Virgin Mary` (micro, `var(--ink-gray)`, centered, uppercase). Replace `[PARISH NAME]` with the actual parish/cathedral name before publishing.

---

## 7. ICONS

lucide-react only: `BookOpen` (replaces `ShoppingBag`), `ArrowUpRight`, `X`, `ChevronRight`, `Check`. Custom SVGs for: twelve-stars crown (replaces checkerboard), radiant star/monstrance emblem (replaces wireframe globe), four L-shaped corner brackets — reuse the exact same bracket paths and viewBox from the original spec (`M0 11.5V0.5H11.5`, etc., viewBox `0 0 12 12`), no change needed there.

---

## 8. VISUAL RULES

- White page, Marian-navy ink, blue-tinted grays and a single gold accent (`--marian-blue`, `--marian-sky`, `--ink-gray`, `--marian-gold`)
- No purple, no cream, no neon glow, no floating badges over the sacred image, no inset "product" cards
- The **one** permitted luminous effect is the warm gold-white halo in the desktop reveal mask (§5) — this is a deliberate devotional choice (evoking a halo/radiance around Our Lady), not a decorative tech glow, and should be used nowhere else on the page
- Wordmark `ASSUMPTA` and headline `ASSUMPTA EST MARIA / IN CAELUM` dominate the first viewport
- First viewport content only: wordmark/nav, headline + twelve-stars crown, JOIN THE MASS button, emblem + tagline, and the full-bleed devotional image (static cross-fade on mobile, interactive reveal on desktop)
- UI text sits above the background image at z-10/z-20; background is z-0 and non-interactive (`pointer-events-none`)
- Maintain WCAG AA contrast: `--marian-navy` (#0B2C6B) on white comfortably clears 4.5:1 for body text; verify any text placed directly over the hero image uses a scrim or the navy/white split-panel treatment rather than sitting on unpredictable image contrast

---

Recreate this page pixel-faithfully with the fluid clamp system, the exact reveal math (ease 0.1 desktop cursor / 0.06 parallax, radius `clamp(160, 16vw, 420)`, the warm gold-white gradient stops listed), the exact Mass-liturgy copy, the Marian-blue/gold palette, Cinzel/Cormorant Garamond fonts, and the drawer/bottom-sheet contents above — with full mobile compliance (44px touch targets, bottom-sheet panels, reduced-motion support, safe-area padding) as specified in §5.
