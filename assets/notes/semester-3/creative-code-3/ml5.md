# ML5.js

> AI is the science of making things smart. Can be defined as
> "_Human intelligence exhibited by machines._"

**Common AI use cases**:

- object recognition
- speech recognition / sound detection
- natural language processing / sentiment analysis
- creative (eg: style transfer)
- prediction (predict an output)
- translation between languages
- restoration / transformation (eg: generating faces)
- ...

## About AI

### Machine Learning

> **Machine Learning**
> "_A field of study that gives computers the ability to learn without being explicitly programmed._"

Traditional Programming: data & program is run on the computer to produce the output.

Machine Learning: data & output is run on the computer to create a program. This program can be used in traditional computer.

#### Outputs

**Regression**: predict continuous values (eg: price of stock)
**Classification**: predict a class / label (eg: cat or dog)
**Clustering**: most similar other examples (eg: related products)
**Sequence Prediction**: predict the next word/sentence

### Deep Learning

> **Deep Learning**
> "_A technique for implementing Machine Learning._"

Deep learning = machine learning + powerful GPU's + lots of data

- Uses multi-layered artificial **neural networks**.
- Can learn representations / features from data (images, video, text,...)
- Eg: learning difference between oranges & apples (features: colour & weight).

### Types of learning

**Supervised learning**

- training data is labeled

**Unsupervised learning**

- training data is unlabelled, analysis of principal components and clustering

**Reinforcement learning**

- learning by trial-and-error through reward of punishment

## ML5 vs TensorFlow

- **ML5** = build on top of TensorFlow, making machine learning approachable for creative coders / artists.
- **TensorFlow** = a library for handling GPU-accelerated math operations and memory management for ML algorithms.

**Generic ML5 Process**:
`load ML model(s) -> configure input(s) -> start detection loop -> visualise in render loop`

### Models

- **BodyPose**: real time human pose estimation
  - Posenet & Movenet
  - Blazepose (mediapipe)
- **Body Segmentation**: person (& background) and 24 body parts segmentation
  - SelfieSegmentation
  - ...
- **HandPose**
- **FaceMesh**: ML model to detect facial landmarks (486 keypoints). Suited for one or multiple faces. Ported from `TensorFlow.js` Facemesh.
- **ImageClassifier**: recognise content of images
  - mobileNet: CNN for Mobile Vision Applications (small, fast, accurate)
  - DarkNet
  - DarkNet-Tiny: smaller version of DarkNet model
  - DoodleNet
- **SoundClassifier**: classify audio with pre-trained models
  - SpeechCommands18w: can detect 0-9 & up, down, left, right, go , stop, yes, no & unknown word and background noise
- **Sentiment**

#### Model Code (example: body segmentation)

**Load ML Model(s)**:

```js
bodySegmentation = await ml5.bodySegmentation("SelfieSegmentation", {
  maskType: "person",
});
```

**Configure Input(s)**:

```js
// create a mask canvas
maskCanvas = document.createElement("canvas");
maskCtx = maskCanvas.getContext("2d");
// create a video stream - specify a fixed size
const stream = await navigator.mediaDevices.getUserMedia({
  video: {
    width: 640,
    height: 480,
  },
});
video = document.createElement("video");
video.srcObject = stream;
video.play();
```

**Start Detection Loop**:

```js
// start detecting
bodySegmentation.detextStart(video, (result) => {
  // store the result in a global variable
  segmentation = result;
});
```

**Visualise in Render Loop**:

```js
// draw the mask to a separate, invisible canvas
maskCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
maskCtx.putImageData(segmentation.mask, 0, 0);
// draw the video, masked
ctx.save();
ctx.drawImage(video, 0, 0);
ctx.globalCompositeOperation = "xor";
ctx.drawImage(maskCanvas, 0, 0);
ctx.restore();
```

### Other models / tools

- **Teachable Machine**
  - Image recognition
  - Sound recognition

### Neural Networks

Create your own neural network and train it in the browser with `ml5.neuralNetwork`.

Once trained, you can do **classification** or **regression** tasks.

## Application State

### Code

```js
const STATE_LOADING = "loading";
const STATE_SAMPLING = "sampling";
const STATE_TRAINING = "training";
const STATE_PREDICTING = "predicting";

const ALL_STATES = [
  STATE_LOADING,
  STATE_SAMPLING,
  STATE_TRAINING,
  STATE_PREDICTING,
];

let state = STATE_LOADING;

const setState = (value) => {
  console.log("setState", value);
  state = value;
  document.documentElement.classList.remove(...ALL_STATES);
  document.documentElement.classList.add(state);
};

const preload = async () => {
  setState(STATE_LOADING);
  //model loading code...
  requestAnimationFrame(detect);
  console.log("preload");
  handPose = ml5.handPose();
  await handPose.ready;
  console.log("model ready");
  setup();
};

const setup = async () => {
  console.log("setup");
  ctx = $canvas.getContext("2d");
  // create a video stream - specify a fixed size
  // ... here be more code ...
  $save.addEventListener("click", () => classifier.save());

  setState(STATE_SAMPLING);
};

const train = () => {
  classifier.normalizeData();

  const option = {
    epochs: 50,
  };

  classifier.train(option, progress, finished);
  setState(STATE_TRAINING);
};

const finishedTraining = () => {
  console.log("finished training");
  setState(STATE_PREDICTING);
};

const detect = () => {
  if (state === STATE_LOADING) {
    drawLoading();
  } else if (state === STATE_SAMPLING) {
    drawnSampling();
  } else if (state === STATE_TRAINING) {
    drawTraining();
  } else if (state === STATE_PREDICTING) {
    drawPredicting();
  }

  requestAnimationFrame(detect);
};
```
