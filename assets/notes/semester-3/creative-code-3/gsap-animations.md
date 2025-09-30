# GSAP Animations

## Tweens & Timelines

The **gsap** object has 3 main methods for creating **Tweens** and optionally adding them to **Timelines**:

- `gsap.to()`
- `gsap.from()`
- `gsap.fromTo()`

**Tween**:

- change a single property of a single object
- change multiple properties of multiple objects
- change multuple properties of multiple objects with staggered start times

**Timeline**:

- contianer for multiple Tweens

To get started, load GSAP from CDN:<br />
`<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>`

## Demo 1 & 2

### Special properties

- **`delay`**: how much time should transpire before an animation begins
- **`repeat`**: how many times to repeat the animation
- **`yoyo`**: when trye, an animation will play back & forth
- **`repeatDelay`**: how much time should transpire between each repeat

### Easing

Easing means controlling **the rate of change** as your animation plays. (eg. slowing down or speeding up)

## Demo 3

### Stagger

- **Offset the start time** of multiple targets in a tween.
- More control using a **stagger object: amount, each, from, axis, grid, ease**.

## Demo 4

### Control Tween Playback

- Set a reference to the tween you want to control.
- Use the methods:
  - `play()`
  - `pause()`
  - `reverse()`
  - `restart()`
- Pause a tween from the start? Use the **paused** special property.

## Demo 5

### TransformOrigin

The origin is the point around which **transforms** will be applied.

**Default**: center point.

Other values set with a pair of **horizontal**(x) and **vertical**(y) **values** as a single string.

- set in pixels
- set in percent
- use CSS keywords: left, right, top, bottom

## Demo 6

It is possible to animate different aspects/paths of an SVG-file.

**Path elements**:

- The **M** command: Move the current point to the x and y coordinates.
- The **L** command: Draw a line from current position to a new position.
- The **V** command: Draws a vertical line.
- The **H** command: Draws a horizontal line.

## Timelines

### Timelines

- Tweens are played one-after-another in the order they were added.

### Delay

```js
const tl = gsap.timeline();

tl.to(".green", { x: 600, duration: 2 });
tl.to(".purple", { x: 600, duration: 1, delay: 1 });
tl.to(".orange", { x: 600, duration: 1 });
```

### Position

```js
const tl = gsap.timeline();

// start at exaclty 1 second into the timeline
tl.to(".green", { x: 600, duration: 2 }, 1);

// insert at the start of the previous animation
tl.to(".purple", { x: 600, duration: 1 }, "<");

// insert 1 second after the end of the timeline
tl.to(".orange", { x: 600, duration: 1 }, "+=1");
```

### Special Timeline properties & callbacks

```js
const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });

tol
  .to(".green", { x: 200 })
  .to(".purple", { x: 200, scale: 0.2 })
  .to(".orange", { x: 200, scale: 2, y: 20 });
```

### Control animations

- `pause()`
- `resume()`
- `reverse()`
- `seek()`
- `timeScale()`
- `kill()`
- ...