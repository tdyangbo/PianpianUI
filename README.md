# PianpianUI

`dsh-pianpian-ui` is a DeepSeek Harness Web UI plugin. It uses `assets/pianpian.jpg` as a translucent chat-page background and keeps the normal chat workflow readable.

## Features

- Adds `assets/pianpian.jpg` as the background of the DSH chat page.
- Keeps the sidebar, input box, buttons, and message content readable with light glass styling.
- Shows a small `UI` button on the lower-right side of the chat page.
- Provides two live controls:
  - `Opacity`: adjusts how visible the background image is.
  - `Depth`: adjusts the background depth, shading, and contrast.
- Saves the control values in browser `localStorage`, so the same browser keeps the chosen look after refresh.
- Hides the control button when DSH dialogs or settings pages are open.

## Install From GitHub

Install this plugin into the DSH Web UI profile:

```sh
dsh plugin --profile web add git+https://github.com/tdyangbo/PianpianUI.git
```

Start DSH Web UI:

```sh
dsh web
```

`dsh web` uses the `web` profile by default. You can also write it explicitly:

```sh
dsh web --profile web
```

After the page opens, press `Ctrl + F5` in the browser if the old UI is still cached.

## Install From Local Checkout

From the project folder:

```sh
cd /d E:\software2\codex_project\pianpian
dsh plugin --profile web add file:.
dsh web
```

This is useful for testing local changes before uploading them to GitHub.

## Use

Open the DSH chat page. A small `UI` button appears near the lower-right corner.

Click `UI` to open the control panel:

- Move `Opacity` right to make the image more visible.
- Move `Opacity` left to make the image lighter.
- Move `Depth` right to make the background deeper and more contrasted.
- Move `Depth` left to make the page brighter and softer.
- Click `Reset` to restore the default values.

The controls only affect the browser display. They do not change your chat content, model settings, workspace files, or DSH data.

## Update An Existing Install

If the plugin was already installed and you pushed a new version to GitHub, reinstall it:

```sh
dsh plugin --profile web remove dsh-pianpian-ui
dsh plugin --profile web add git+https://github.com/tdyangbo/PianpianUI.git
dsh web
```

Then refresh the browser with `Ctrl + F5`.

## Disable Or Remove

To stop using the plugin:

```sh
dsh plugin --profile web remove dsh-pianpian-ui
dsh web
```

If the browser still shows old styling, press `Ctrl + F5` or restart the browser tab.

## Files

- `package.json` declares the DeepSeek Harness plugin metadata.
- `cordis.patch.yml` adds the plugin to the DSH bundle layer.
- `lib/index.cjs` is the server-side plugin entry.
- `lib/client.js` injects the chat-page background, glass styling, and UI controls.
- `assets/pianpian.jpg` is the bundled background image.
- `PROMPT.md` records the implementation prompt for future maintenance.
- `docs/DSH_INSTALL.md` records additional DSH installation notes.

## Publish To GitHub

For the first upload:

```sh
git init
git add .
git commit -m "Add Pianpian UI DSH plugin"
git branch -M main
git remote add origin https://github.com/tdyangbo/PianpianUI.git
git push -u origin main
```

For later updates:

```sh
git add README.md lib/client.js
git commit -m "Update Pianpian UI plugin"
git pull --rebase origin main
git push origin main
```

If `git push` fails with a GitHub timeout, it is a network or proxy problem. The local commit is still safe; retry after the network works, or edit the changed file directly on GitHub.
