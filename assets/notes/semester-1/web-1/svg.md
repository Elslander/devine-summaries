# Scalable Vector Graphics (svg)

1. Purpose of SVG

## Purpose of SVG

- Scalable Vector Graphic
- XML based markup (code)
- Mathematically formulated instructions on how to draw a shape or curve with x & y coordinates
- Sharp & flexible (scalable)
- Use it for shapes, icons, logo's, illustrations,...

Using SVG:

- `<img>`
- CSS `background-image`
- Inline SVG

### As an `<img>`

```html
<img src="path/to/file.svg" />
```

### Inline SVG code

```html
<svg viewbox="10 10 10 10" fill="red">
  <path d="..." fill="red" />
  <path d="..." fill="red" />
</svg>
```

### SVG

- X & Y coordinates system to draw shapes
  - rectangles
  - circles & ellipses
  - lines & polylines
  - Polygons and paths
- On an infinite canvas

### SVG viewbox

- Defines the aspect ration (width * height)
- Deines the available visisble coordinates
- Defines the start of the upper left corner
- Unitless instead of pixels
- The dimensions of the svg at 100%
- How large did you actually draw it?
- Width & height in Figma
- Most of the tume you won't change it
- Without it the image will get cut off

### Inline svg necessary attributes

- viewbox
- Optional: width or height to set default dimensions
- CSS to change width and height
- CSS to make it responsive

### Styling svg content using css

- SVG elements and its child elements can be styled using css
- Most visual characteristics and some aspects of elements geometry can be controlled using css properties
- Every element can be given a class
- `fill`: background
- `stroke`: border
  - `stroke-width`
  - `stroke-linejoin`
- Can be used with css variables
- `currentColor` to "inherit" text color of the parent elements

### Why

Separation of structure and presentation.

E.g. colours are no longer inside your image but part of your system.