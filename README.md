# reinholding.com

The landing page of reinholding.com. The word "Reinholding" draws itself, then redraws every four seconds with a new colour shift and line texture.

![Showcase](screenshots/showcase.gif)

## How it is built

The whole site is `site/index.html`: an inline SVG, CSS keyframes and a few lines of JavaScript. There is no build step and no dependency. Open the file in a browser to preview it.

- The draw animation is a `stroke-dashoffset` keyframe on a mask.
- Colours and textures (dash, hatch) change on each loop in the script at the bottom of the file.
- With `prefers-reduced-motion` the word is shown fully drawn in black and nothing moves.

`assets/` holds the source SVGs the path data came from.

## Deployment

Every push to `master` uploads `site/` to the hosting provider over FTPS, see `.github/workflows/master.yml`. The password lives in the repository secret `FTP_PASSWORD`.
