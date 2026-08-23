# dsh-pianpian-ui

`dsh-pianpian-ui` is a lightweight DeepSeek Harness UI plugin. It adds `assets/pianpian.jpg` as a translucent, full-window background in the DSH Web UI and lightly glass-styles common panels so the interface remains readable.

## Install

From a GitHub repository:

```sh
dsh plugin --profile default add git+https://github.com/tdyangbo/PianpianUI.git
```

From a local checkout:

```sh
dsh plugin --profile default add file:.
```

Restart the DSH Web UI after installation:

```sh
dsh web --profile default
```

## Files

- `package.json` declares the DeepSeek Harness plugin metadata.
- `cordis.patch.yml` adds the plugin to the DSH bundle layer.
- `lib/index.cjs` is the server-side plugin entry.
- `lib/client.js` injects the UI background CSS in the browser.
- `assets/pianpian.jpg` is the bundled background image.
- `PROMPT.md` records the implementation prompt for future maintenance.

## Tuning

The client CSS exposes these custom properties:

```css
:root {
  --pianpian-bg-opacity: 0.28;
  --pianpian-bg-vignette: rgba(2, 8, 14, 0.68);
  --pianpian-panel-bg: rgba(8, 18, 25, 0.76);
  --pianpian-panel-border: rgba(137, 190, 216, 0.22);
}
```

Edit `lib/client.js` if you want the background to be lighter, darker, or less transparent.

## Publish To GitHub

```sh
git init
git add .
git commit -m "Add pianpian DSH UI plugin"
git branch -M main
git remote add origin https://github.com/<your-name>/dsh-pianpian-ui.git
git push -u origin main
```

Then install it with the GitHub command above.

## Update An Existing Install

If the plugin was already installed before an update was pushed, remove and add it again:

```sh
dsh plugin --profile default remove dsh-pianpian-ui
dsh plugin --profile default add git+https://github.com/tdyangbo/PianpianUI.git
dsh web --profile default
```
