# Transform and Transition

1. Transform
2. Transition
3. Easing
4. Tips

## Transform

### Individual transform properties

- Properties to change the size, rotation and position of elements without influencing the rest of the document
- Only work on block elements
- Scale:
  - make it bigger or smaller
  - not the same as width and height
- Translate
  - move it
  - instead of e.g. margin-left or left, it's not the same
- Rotate
  - rotate it

### Transform property functions

- Transform: `skex()` -> distort it
- Transform: `matric()` -> make it weird

### Transform origin

- `Tranform-origin`
- Where would the transformation start
- Default: `transform-origin: center center``
- `Transform-origin: x y;`
  - `transform-origin: 0 0;` = from the top left - or `transform-origin: top left;`
  - e.g. `transform-origin: 100% 100%;` = from the bottom right - or `transform-origin: bottom right;`

## Transition

- Transition between 2 states e.g. default and `:hover` state
- With 4 properties
  - `transition-property`
  - `transition-duration`
  - `transition-timing-function`
  - `transition--delay`
- Always add the transition property to the original state
- Transition auto reverse the animation to te original state

### Multiple transitions

Use transition on multiple properties:

- separate them with a comma
- order only matters when a delay is used
- animate all properties using `all`

### Transform with a transition

Gradual transition of the transform.

## Easing

### Transition-timing-function

- `transition-timing-function`
- = easing
- How the animation or transition accelerates or decelerates
- Instead of linear
- **Motion design**

The different options:

- `ease-in` (start slow, end fast)
- `ease-out` (start fest, end slow)
- `ease-in-out` (start slow, accelerate, end slow)
- `ease` (start a bit slow, accelerate fast, end slow)
- `linear` (no acceleration)
- `cubic-bezier()` (for more complex / prenounced easing)
- `steps(4)` (for changing it to steps instead of a smooth animation)

## Tips

- Don't animate the margin, width, height properties
- Animate it via the transform properties instead (translate, rotate, scale)

**A11Y** tip:

- Not everybody like animations
- There is a way to turn them off
