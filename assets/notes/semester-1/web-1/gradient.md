# Gradients

- Transition: one colour to another
- In CSS: images instead of a colour, `background-image` (not `background-color`)

## Types of gradients

- Linear
  - colours flow in a straight line
- Radial
  - Colours flow from a central point outwards
  - Same properties as for a linear-gradient
    - except 'direction'
  - Additional properties
    - center positioning
    - size
- Conic
  - Colours flow around a central point
- Repeating-linear
- Repeating-radial
- Repeating-conic

### Direction

- For linear-gradients
- In the first attribute
  - 'side' -> top, bottom, left, right
    - angle -> top left, bottom right,...
    - prepend with 'to'
  - degrees
  - turns

### More colours

- For every type of gradient
- Add an infinite amount of colours
- Called 'stops'

### Positioning stops

- For every type of gradient
- Transitions are spread evenly by default
- Set a value (absolute or percentage) after a colour to define its position
- Set only a percentage to define the midpoint of a transition

### Hard stops

- For every type of gradient
- Positioning 2 colours close together
  - Only a small transition happens
- Positioning 2 colours at the same location
  - no transition happens, this is called a 'hard stop'
- Also possible by using 0 as the second value

### Repeating

- Every type of gradient has a 'repeating-' version
- Needs a size or a percentage
  - 10rem is repeated every 10rem
  - 20% repeats 5 times in its container
