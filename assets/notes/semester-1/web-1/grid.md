# Positioning using Grid

1. Purpose of grid
2. Container and item
3. Terminology
4. Defining rows and columns
5. Placing items in the container
6. Grid area
7. Implicit vs explicit
8. Autoflow

## Purpose of grid

Positioning elements in rows and columns

## Container and item

- Similar to flexbox
- Container: parent element
- Items direct child elements

## Terminology

### Grid line

A line with the grid

- can either be horizontal or vertical
- numbering starts at 1

### Grid track

The space between 2 lines

- 2 horizontal lines = a row
- 2 vertical lines = a column

### Grid cell

The space between 2 horizontal and 2 vertical lines

### Grid area

The space between four connecting lines

- consists of multiple cells

## Defining rows and columns

### Grid-template

- 2 properties to define rows and columns
  - `grid-template-rows`
  - `grid-template-columns`
  - shorthand: `grid-template: row / column`
- Values separated by a space
- You can use several units

```css
.container {
  grid-template-columns: 4rem 5rem auto 5rem 4rem;
  grid-template-rows: 25% 10rem auto;
}
```

### Track list units

- Pixels, rem, percentage
- Also other possibilities
  - fraction
    - remaining space after the absolute numbers (px and rem) are taken
  - max-content
    - largest possible size for the content
  - min-content
    - smallest possible size for the content
  - auto
    - take all the remaining space
  - minmax(min, max)
    - set a minimum and maximum
    - for both row and column
    - fr only for the maximum, not for the minimum
  - repeat()
    - same values or group of values
    - is a shorthand notation

### Gap

Space between rows and columns

- column-gap
- row-gap
- shorthand: `gap: row column;`

## Placing items in the container

- Is done automatically
- You can manipulate this
  - Replacing one cell
  - Span over multiple cells

### Replacing one cell

- `grid-column` and `grid-row`
- Based on the line number
  - First number is 1
  - Starts upper left
  - You can use a negative number

### Span over multiple cells

- `grid-column` and `grid-row`
  - start / end
  - start /span x number of rows or columns
  - span x number of rows or columns / end

## Grid area

- Set a name for each part of the grid using grid-template-areas
- Address the part using grid-area
- Put elements in multiple cells
- Indicate an empty cell with a dot (.)

## Implicit vs explicit

- Only used explicit until now
  - number of items = number of cells in the grid
- More items than cells?
  - Is an implicit grid
  - Grid is automatically extended
  - Set size using `grid-auto-rows` and `grid-auto-columns`

## Autoflow

- Default flow
  - from left to right
  - from top to bottom
- Adjust using `grid-auto-flow``
  - row (default): line by line
  - columns: column by column
  - dense row / column: no empty space for elements with a specific position

## Align items in a cell

- Horizontal
  - `justify-items`: for each item in the container
  - `justify-self`: for one specific item in the container
  - Common values: start, end, center and stretch
- Vertical
  - `align-items`: for each items in the container
  - `align-self`: for one specific item in the container
  - common values: start, end, center and stretch

### Place item

- Shorthand for `justify-items` and `align-items`
- Center horizontally and vertically with 2 lines of css
