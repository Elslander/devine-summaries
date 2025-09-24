# Responsive to the user

**User Preferences**:

- Light / Dark mode
  - `prefers-color-scheme`
  - `light-dark`
- Reduced motion
  - `prefers-reduced-motion`
- High contrast
  - `prefers-contrast`

**Emulate**

**Simulate and test**:

- iOS Simulator
- Chrome remote debugging
- https://[your ip]:[dev-server-port]
  - Start a dev-server with your project
    - Get the ip address of host machine (opt-click WiFi icon)
  - On a mobile device, on the same WiFi network
    - Open a browser, navigate to that IP + port address

## Mobile? Hamburger!

**I need a hamburger menu**:

- Maybe you don't
  - At least 5 options?
- Do it in a progressively enhanced way
  - Show a meny even without JS
- Do it in an accessible way
  - Keyboard accessible
- Use an SVG
  - not the unicode 'trigram for heaven'
- Avoid a checkbox hack
  - semantic confusion for assistive technology users.

## One more thing

**Baseline**: Are features ready?

**Interop**: The benchmark.
