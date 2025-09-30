# GSAP ScrollTrigger

**Installation**:

1. Include scrollTrigger plugin JS code
2. Register the plugin: `gsap.registerPlugin(ScrollTrigger)`

**Tween scrollTrigger property**:

- Play an animation when an element enters the viewport.
  ```js
  gsap.to(".square", {
    x: 700,
    duration: 3,
    scrollTrigger: ".square2",
  });
  ```
- Can also be used as a configuration object.

  ```js
  gsap.to(".square", {
    x: 700,
    duration: 3,
    scrollTrigger: {
      trigger: ".square2",
    },
  });
  ```

## Demo 1 & 2

### Start property

Determines the starting position of the ScrollTrigger.

Start can be a:

- _number_: An exact scroll value.
- _string_: Describes a place on the trigger and a place on the scroller that must meet in order to start the ScrollTrigger (top, bottom, center, left, right, % value, relative value).
- _function_: Gets called when ScrollTrigger calculates positions.

### End position

Determines the ending position of the ScrollTrigger.

End can be a:

- _number_: An exact scroll value.
- _string_: Describes a place on the endTrigger (or trigger if one isn't defined) and a place on the scroller that must meet in ordere to end the ScrollTrigger.
- _function_: Gets called when ScrollTrigger calculates positions.

### Markers property

During development, to see exactly where the start/end/trigger points are.

```js
markers: {
  startColor: "grey",
  endColor: "white",
  fontSize: "25px",
  fontWeight: "bold",
},
```

### ToggleClass property

Adds/removes a class to/from an element (for multiple elements) when the ScrollTrigger toggles active/inactive.

```js
toggleClass: "white",
```

To toggle a class for elements other than just the trigger, use the object syntax:

```js
toggleClass: {
  targets: ".mu-selector",
  className: "active",
}
```

## Demo 3 & 4

### ToggleActions

Determines how the linked animation is controlled at the 4 distinct toggle places - **onEnter, onLeave, onEnterBack, onLeaveBack**.

Possible keywords: _play, pause, resume, reset, restart, complete, reverse, none_.

## Demo 5

### Scrub

Links the progress of the animation directly to the scrollbar so it acts like a scrubber.

- `scrub: true,`
- `scrub: 0.5,` - adds "smoothing"

## Demo 6

### Pin

An element that should be pinned during the time that the ScrollTrigger is active (trigger element or other).

- `pin: true,` - trigger is pinned
- `pin; ".square2",`

## Demo 7

### Timeline & ScrollTrigger

Combine Timeline animation with ScrollTrigger
