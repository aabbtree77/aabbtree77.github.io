## Introduction

This is an online cv (portfolio) page: TypeScript, Vite, React, and Github Pages.

## Deployment

```sh
npm install
npm run build
git add .
git commit -m "minor update"
git push origin main
git subtree push --prefix dist origin gh-pages
```

Hosting on Github Pages without a custom domain demands setting `base` to the github repo name with proper slashes inside `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cv/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  // You can add more configuration options here
});
```

Github Pages with a custom domain may require `base` to be removed.

## Warning About Astro

I tried Astro instead of Vite previously, but the resource paths were incorrect after `npm run build`. The only way to get it right was to edit `dist` files manually after the build.

Whatever these frameworks generate, github pages `dist/index.html` should have absolute paths set as

```html
<script type="module" crossorigin src="/cv/assets/index-C4HptKlK.js"></script>
<link rel="stylesheet" crossorigin href="/cv/assets/index-W54NxveC.css">
```

Notice the forward slash and the repo name. There will also be Js files inside folders such as `assets` with relative paths `src:"assets/rg.jpg"` which seem to be correct. Absolute paths `/cv/assets/rg.jpg` should also work.

## References

[Forrest Knight. minimal-portfolio. 2022.](https://github.com/ForrestKnight/minimal-portfolio)

[Coby Chapple. Deploying a subfolder to GitHub Pages. 2022](https://gist.github.com/cobyism/4730490)
