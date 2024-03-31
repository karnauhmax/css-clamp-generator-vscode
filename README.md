The extension works like a charm!

To run the generate function you should use CTRL + SHIFT + P for Windows and Command + Shift + P for Mac OS and then select the "Generate Clamp" option.

In total you have four inputs: 
 1. Minimum value (for example: 16px) - the value, the final value won't be less than this.
 2. Maximum value (for example: 24px) - the value, the starting value won't be greater than this.
 3. Minimum viewport (for example: 375px) - the size of the viewport to which the total value will not be reduced.
 4. Maximum viewport (for example: 1920px) - the viewport size from which the value will start decreasing.

 You can read more about CSS Clamp here: https://developer.mozilla.org/en-US/docs/Web/CSS/clamp

 Here is an example how to use it:

 ![Extension Demo](https://s12.gifyu.com/images/SVcJX.gif)

TODO: 
- [ ] Unit testing