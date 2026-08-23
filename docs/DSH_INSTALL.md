# DeepSeek Harness Install

Use one of the following commands after uploading this folder to GitHub.

```sh
dsh plugin --profile default add git+https://github.com/<your-name>/dsh-pianpian-ui.git
```

For local testing from this folder:

```sh
dsh plugin --profile default add file:.
```

Restart the Web UI:

```sh
dsh web --profile default
```

If your DSH profile is not named `default`, replace `default` with your profile name.
