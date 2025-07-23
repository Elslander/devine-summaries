# Font-face

1. Purpose of font-face
2. Font formats
3. Usage in CSS
4. Google fonts
5. Warning: check your font resource
6. Font-display
7. Variable fonts
8. Font features

## Purpose of font-face

- Use fonts that are **not installed** on the machine of the user
- Is more performant and flexible than using an image

## Font formats

- Different font formats
  - TTF and OTF: large file size, local usage (print)
  - WOFF and WOFF2: small file size, online isage (web)
- Always use WOFF2 -> best compression -> smallest file size
- Converting fonts
  - https://font-converter.net/
  - https://everythingfonts.com/ttf-to-woff2
- Check the license before converting!

## Usage in CSS

- **Font-family**: you choose the name
- **src**: refer to the woff2 file
- set **font-weight** and **font-style**: must match with font

## Google fonts

- https://fonts.google.com
- Select the desired font
- Select the style
- Embed using the `<link>` tag

## Warning: check your font resource

- Font will look correct on your machine if it is installed
  - Will not render on machines where it is not installed
- Always check if the font uses a **Network resource**

## Font-display

- What to do when a font is still loading?
  - Show nothing? Or use a fallback font? For how long?
- Loading time divided in three periods
  - Font **Block** period: nothing is shown
  - Font **Swap** period: text is rendered in fallback font
  - Font **Fallback** period: render in fallback font, stop waiting
- Set the font loading strategy using `font-display`
  - **auto**: let the browser decide
  - **block**: briefly hide the text until the font has fully loaded
  - **swap**: use the fallback font until the font has fully loaded

## Variable fonts

### Font variants

- Regular, bold, italic, thin,...
  - and combination of those
- A lot of different files
- Can take some time to download
- But the typeface designer did such an amazing job, we want them!
  - Browsers' Italic != designers' Italic

### Axis

- Things that can change are defined on an 'Axis'
- Unlimited axes, unlimited values

- Registered axes:
  - weight, width, slant, italic, and optical size
- Custom axes

### Value of an axis

- Use the font-variation-settings property
- Set multiple axes all at once
  `font-variation-settings: 'wght' 375, 'GRAD' 88;`

## Font features

- Some fonts have extra special alternative characters
- Ligatures
- Stylistic alternatives
- Slashed Zero
- ...
