# Accessibility

1. Purpose of Accessibility
2. WCAG
3. Testing Accessibility
4. Keep in mind

## Purpose of Accessibility

- To make sure the website is available to the largest possible group of people.
- A website meanse distributing content, this content should be accessible.
  - Not only for disabled people
    - Visually
    - Auditory
    - Cognitive
    - Physical
    - Speech
  - Also:
    - mobile devices
    - slow network
    - the sun is reflecting in my screeb
    - ...

## WCAG (Web Content Accessibility Guidelines)

- Developed by W3C
- 12 duidelines in 4 categories with basic rules
  - Perceivable
  - Operable
  - Understandable
  - Robust
- 3 levels
  - A
  - AA
  - AAA

### Perceivable

- Provide text alternatives for non-textual content
  - alt attribute for images
  - name attributes for inputs
- Provide alternative for time base media
  - captions in video
- Adaptable content
  - responsive design
  - reading version continues to work
  - tet size is adjustable
  - correct reading order
- Distinguishable
  - clear distinction between foreground and background
  - color contrast
  - audio control (for more than 3 seconds)

### Operable

- Keyboard accessible
- Providing enough time to view content
  - no time limits
  - add pause button
- Do not design content in a way that is known to cause seizures
  - no more than 3 flashes per second
- Navigation
  - bypass block (skip links)
  - focus order and visibility
  - page titles

### Understandable

- Readanle
  - long tags
  - explain abbreviations
- Predictable
  - no unexpected context changes on focus of input
- Input Assistance: preventing and resolving input errors
  - always use a clear label
  - identofy errors, provide suggestions and prevent them

### Robust

- aCompatibility
  - use standard HTML tags
  - buttons
  - form elements

## Testing Accessibility

Use Chrome Web Developer tools:

- Lighthouse tab
- Only check accessiblity
- Run the audit
- Check the results

## Keep in mind

- Always set the **alt** attribute in **`<img>`** tag
- Do not skip **titles**
- Use **semantic** tags
- Navigate with your **keyboard** (only!)

> Accessibility is not only for disabled users, it concersn all your users.
