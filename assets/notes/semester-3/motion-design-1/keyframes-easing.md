# Keyframing & Easing

## Keyframes

Keyframes are essential for setting parameters in motion effects, audio, and various other properties in After Effects. These parameters typically change over time, and keyframes mark specific points where you define values for a layer, such as position, opacit,...

The values between keyframes are interpolated, meaning the software calculates teh in-between values to create a smooth animation. At least two keyframes are needed to create any change over time: one to capture the initial value and another to set the new value.

To add a keyframe, click the stopwatch icon next to the property you wish to animate. Once the stopwatch is activated for a property, After Effects will automatically set keyframes when you adjust the value. If the stopwatch is inactive and the valye doesn't change, it will remain constant throughout the layer's duration. Disabling the stopwatch for a property with existing keyframes will remove all keyframes for that property.

To quickly navigate through keyframes:

- Use the arrows next to the keyframe icon on the left of the layer.
- Use the J and K keys (this will move between keyframes of properties that are currently visible).

By default, when you add a new keyframe, it will be a linear keyframe. This means the change in value occurs at a constant rate, without any acceleration or deceleration. To gain more control over the speed of these transitions, you can use easing curves.

## Easing

While linear animations can work in some cases, smoother animations are often preferable. To achieve this, you can apply easing to you keyframes, which controls the speed of transitions. You can further fine-tune easing using the Graph Editor.

At the bottom of the graph Editor, you can switch between two graph types by clicking the **second icon**. These options are **Speed Graph** and **Value Graph**.

- **Speed Graph**: This graph displays the rate at which the property's value changes over time. Units vary depending on the property (eg. degrees/seconds for rotation, percentage/second for opacity). The graph visually represents acceleration.

- **Value Graph**: This graph shows the actual values of the property on the vertical axis and time on the horizontal acis. The slope of the line between keyframes represents the rate of change. Straight lines indicate constant speed, while curved lines reflect acceleration.

Some properties have multiple dimensions or values. For example, position has both x and y values. You can separate these dimensions by right-clicking on the property and selecting "Separate Dimensions" or using the corresponding button at the bottom of the Graph Editor.

## Keyframes / Easing Options

In the Graph Editor, you can choose how keyframes interact with each other by selecting different options such as **Hold**, **Linear**, or **Bezier**. Additionally, preset Bezier easing options like **Easy Ease**, **Ease In**, and **Ease Out** are available. You can manually adjust these curves to further fine-tune your animation.

In the timeline, keyframes will display differently depending on the selected option. Holding the cmd key whild clicking on a keyframe allows you to cycle through or reset these different states.

- **Convert Selected Keyframes to Hold**: This options creates an abrupt change rather than a smooth animation. For example, the square will instantly jump to a new position at each keyframe, with no gradual transition. 
- **Convert Selected Keyframes to Linear**: With linear keyframes, the square moves smoothly between points, creating a straight line in the graph (interpolation). In this scenario, any additional keyframes between the start and end points may be unnecessary.
- **Convert Selected Keyframes to Auto Bezier**: Auto Bezier applies a smooth curve between keyframes, making transitions less rigid, but only if the animated values are not constant. By selecting **Easey Ease**, your graph will take on a more fluid shape, reducing the need for extra keyframes and giving your animation a natural feel.

## Keyframe Interpolation

Interpolation is the process of filling in the in-between frames between keyframes. When you select an animated property, the interpolation path becomes visible. Keyframes are marked by small squares, while interpolated frames are shown as small dots. You can adjust the path directly in the Composition window using the Move Tool.

After Effects calculates the interpolation automatically, allowing for variations in time and space. To modify the interpolation, select the keyframes, right-click and choose "Keyframe Interpolation".

- **Temporal Interpolation**: Temporal Interpolation refers to how After Effects calculates the transition between two keyframes over time. This can be done linearly or with acceleration, using options like Bezier or Auto Bezier. You can see how the frames are distributed over time in the image. For more precision, use the **Value Graph** in the Graph Editor to adjust the timing of keyframes. The Value graph shows the x-axis values in red, y-axis values in green, and z-axis (for 3D animations) in blue.
- **Spatial Interpolation & Motion Path**: Spatial Interpolation determines how After Effects calculates the frames between two keyframes based on their position in space. When you adjust spatial interpolaiton for a property like position, you modify the motion path in the composition panel. Keyframes along this path represent different types of interpolation. You can view a selected keyframe's spatial interpolation type in the info panel. By defaul, After Effects uses **Auto Bezier** for spatial interpolation, which smooths out the motion path. However, if you prefer linear spatial interpolation, you can change the default setting by going to *Preferences > General* and enabling "Default Spatial Interpolation to Linear".
- **Roving Keyframes**: Roving keyframes allow you to distribute the animation speed evenly across two or more keyframes. This can help smooth out the motion across multiple points.

In some cases, Auto Bezier may create unwanted back-and-forth or "boomerang" motions when position keyframes have the same value. To fix this, you can either set the earlier keyframe to **Hold interpolation** or switch both keyframes to **Linear interpolation** to avoid the unintended movement.

## Motion Blur

In video, when an object moves quickly, it often appears blurred in a single frame. This happens because each frame represents a brief moment in time (typically 1/24 of a second in film), during which a moving object occupies multiple positions, resulting in a blurred image. The faster the object moves, the more pronounced the blur. The camera's shutter angle and shutter phase control the appearance of this blur.

However, in computer-generated animation, moving objects may appear sharp and in focus, making it hard to tell what is in motion. Without motion blur, transitions between positions can look stiff or unnatural. Applying motion blur in After Effects helps create smoother, more realistic animations.

To enable motion blur for a layer, click the motion blur icon next to that layer. However, the blur wont be visible until the composition's main motion blur switch (located at the top of the timeline) is also activated.

Be mindful that enabling motion blur can significantly slow down rendering, so it's common to leave it off while working on a composition, only turning it on when previewing the final result.

### Advanced Composition Settings for Motion Blur

You can control the amount of motion blur for an entire composition by adjusting settings in the **Advanced** tab of the Composition Settings.

- **Samples Per Frame**: this is the minimum number of samples taken per frame when After Effects cannot determine an adaptive sampling rate. It's used primarily for 3D and shape layers.
- **Adaptive Sample Limit**: This sets the maximum number of samples for motion blur.
- **Shutter Angle**: Measured in degrees, this simulates the exposure of a rotating camera shutter. A larger shutter angle creates more motion blur.
- **Shutter Phase**: Also measured in degrees, this determines when the shutter opens relative to the start of a frame. It's often set to half the shutter angle (eg. a shutter phase of -90 for a shutter angle of 180), centering the blur on the object's motion path.

## Working with Vector Layers

When importing vector graphics into After Effects, the software will automatically rasterise them. If you plan to scale a vector beyond 100%, you'll need to enable continous rasterisation to maintain image quality. This feature, known as Continuously Rasterise, can be activated by clicking the sun icon next to the layer.

You can apply continuous rasterisation to any vector file, such as Illustrator, EPS, or PDF formats. After Effects will re-rasterise the graphic for every frame. While this generally leads to sharper results, it can also slow down rendering times, so only use it where necessary.

Not that shape and text layers are always continuously rasterised by default.

### Create shapes from vector layers

In the previous lesson, we covered how to import vector layers and discussed the importance of organising your artwork before bringing it into After Effects. If your artwork isn't devided into separate layers, you won't be able to manipulate infividual elements. However, there's another way to break a vector file into layers: by converting it into shape layers. This allows you to select and edit each vector element separately. Keep in mind that after this conversion, you're no longer working with the original vector file, but with a new shape layer that contains shapes based on the vector design.

To do this, right-click on the vector layer and select *Create > Shapes from Vector layer*. You can also apply this technique to text layers.

The main drawback of this method is that it creates one layer with many groups inside, which can make working with complex vector files more difficult. It's best to use this technique with simpler, smaller vector layers or a prepped illustrator file.