# Layout using Flexbox

1. Purpose of flexbox
2. Container and item
3. Main-axis and cross-axis
4. Flex container properties
5. Flex item properties

## Purpose of flexbox

- Position elements in a row or a column = 1D
- CSS grid (later) = 2D

## Container and item

- Container: parent element
- Items: direct child elements

## Main-axis and cross-axis

- Main-axis: axis that determines the flow of the items
- Cross-axis: perpendicular (rotates 90 degress) to the main-axis
- Depends on the flex-direction (horizontal / row by default)

## Flex container properties

### Flex-flow

Shorthand for 2 properties

- **flex-direction**: row (horizontal) or column (vertical), can also be reversed. Default: row.
- **flex-wrap**: wrap to the next line when out of space, can also be reverse. Default: nowrap.

### Justify-content

- Align items on the main-axis

### Align-items

- Align items on the cross-axis
- **Note**: make sure the container has a sufficient height.

### Alignt-content

- Align items over multiple lines

### Gap

- Minimal space between rows & columns

## Flex item properties

### Order

- Adjust order of the elements in the container
- Is a dimensionless number
- Lowest first, highest last

### Align-self

- Aligns 1 specific item in the container
- Works only on the cross axis

### Flex

Combines 3 properties

- **flext-grow**: how much an element can grow if necessary (dimensionless)
- **flext-shrink**: how much an element can shrink if necessary (dimensionless)
- **flext-basis**: default size (has a unit)