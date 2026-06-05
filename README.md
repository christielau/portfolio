# Portfolio Website (Eleventy)

This project is a content-led Eleventy portfolio that uses reusable storytelling modules.

## Run locally

- `npm install`
- `npm run dev`
- Build only: `npm run build`

## Case study authoring model

Case studies live in `src/work/*.md` and are rendered with `layout: layouts/case-study.njk`.

Use a `modules` array in front matter. Prefer **structured fields** (arrays of plain strings) over HTML embedded in YAML—templates render paragraphs and lists.

### Example (`reflectionBlock`)

```yaml
modules:
  - type: "reflectionBlock"
    title: "Section title"
    paragraphs:
      - "Opening paragraph as plain text."
      - "Second paragraph."
    bullets:
      - "Supporting point one"
      - "Supporting point two"
    tailParagraphs:
      - "Closing thought."
```

Optional **`media`** (figure full width inside the section):

```yaml
    media:
      image: "/assets/images/example.png"
      alt: "Accessible description"
```

Render order when using structured fields: `paragraphs` → `media` → `paragraphsAfterMedia` → `bullets` → `tailParagraphs`.

Legacy **`body`** (HTML string) is still supported for older case studies.

### Example (`imageText`)

```yaml
  - type: "imageText"
    layout: image-left
    heading: "Section heading"
    paragraphs:
      - "Optional prose before bullets."
    bullets:
      - "Point one"
      - "Point two"
    image: "/assets/images/example.png"
    alt: "Description"
```

Legacy **`body`** HTML is still supported if you need rich markup.

## Available module types

- `hero`
- `projectSnapshot`
- `imageText` (paragraphs, bullets, image, alt, layout, placeholder)
- `mediaFigure` (standalone full-width image)
- `metricRow`
- `callout`
- `processSection`
- `decisionBlock`
- `reflectionBlock` (see above)

## Module renderer

`src/_includes/layouts/case-study.njk` loops through `modules` and includes the matching component in `src/_includes/components/modules/`.

It also supports legacy `sections` for backwards compatibility.

## Design tokens and CSS

- Global tokens and responsive styles live in `src/assets/css/main.css`.
- Keep new styling in token form (colors, spacing, typography) instead of one-off inline styles.

## Speaking page

- Page entry: `src/pages/speaking.njk` (includes the speaking component)
- Content data: `src/_data/speaking.json`
- Layout include: `src/_includes/components/speaking-page.njk`

Update the following front matter keys to edit content without touching layout markup:

- `speaking.intro.heading`
- `speaking.intro.paragraphs[]`
- `speaking.languages[]`
- `speaking.topics[]` (`title`, `body`)
- `speaking.talks[]` (`title`, `body`, `meta`)
- `speaking.workshopFormats[]`
- `speaking.beyondWork[]`
- `speaking.opportunitiesText`
- `speaking.cta.label` and optional `speaking.cta.href`

## Component library

A lightweight internal catalogue page is available at `/component-library/`.

- Route file: `src/component-library/index.njk`
- Example data: `src/_data/componentLibrary.json`
- Components: `src/_includes/components/`
- Case-study modules: `src/_includes/components/modules/`
- Layouts: `src/_includes/layouts/`

### Add a new component

1. Create/update the Nunjucks partial in `src/_includes/components/` (or `modules/`).
2. Add a documentation entry in `src/_data/componentLibrary.json` with purpose, fields, usage, and variants.
3. Add a preview block in `src/component-library/index.njk` if needed.
4. Run `npm run build` and verify `/component-library/`.

### Add a new variant/example

1. Add variant data under the relevant component/module key in `componentLibrary.json`.
2. Reuse existing preview loops in `src/component-library/index.njk` (or add a new loop block).
3. Check both desktop and mobile layout behavior.

This page is for internal reference and is intentionally not linked in primary navigation unless you choose to add it.
