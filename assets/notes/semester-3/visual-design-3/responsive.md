# Responsive

## Intro

1. Fixed width
2. Wider, wider, wider
3. Liquid layouts (%)
4. Separate sites
5. Adaptive

**Responsive design**:

- Fluid grids
- Fluid media
- Media queries

**The _new_ responsive**:

- Responsive to the user
- Responsive to the container
- Responsive to the form factor

## Mediia Queries

### Media types and features

**Types**:

- screen
- print
- all

**Features**:

- width
- height
- prefers-reduced-motion
- prefers-reduced-data
- orientation
- aspect-ratio

### Combinations

`@media print and (orientation: portrait) { ... }`
`@media screen and (min-width: 30em) and (orientations: landscape) { ... }`

### New syntax

Old: `@media (min-width: 400px) { ... }`

New: `@media (width >= 400px) { ... }`

### Mobile first

- Start mobile
- Almost the HTML structure
- Use `min-width` (or `width >=`) queries
- Progressively enhance your design

Starting at desktop size and "simplifying" a design is #!%£!!

### Media query units

**MDN**

"_Use **em** for a11y reasons._"

**Web.dev**

"_You can use any CSS length units in your media queries. If your content is mostly **image-based**, **pixels** might make the most sense. If your content is mostly **text-based**, it probably makes more sense to use a relative unit that's based on text size, like **em** or ch._"

**Josh W Comeau**

"_I recommend using **rem** for media queries. It means that users who crank up their default font sie will see the "mobile" view even on a desktop computer, but this is generally a better user experience than a super-crowded desktop layout with huge text._"
