<h1 align="center">YT & Music Nexus Patch</h1>

<p align="center">
<strong>One Nexus. Two Platforms. A Better Experience.</strong>
</p>

<p align="center">
  <a href="https://github.com/enswrdev/yt-nexuspatch/stargazers">
    <img src="https://img.shields.io/github/stars/enswrdev/yt-nexuspatch?style=flat&color=red" alt="GitHub Stars">
  </a>
  <a href="https://github.com/enswrdev/yt-nexuspatch/releases">
    <img src="https://img.shields.io/github/v/tag/enswrdev/yt-nexuspatch?style=flat&color=red" alt="Latest Version">
  </a>
  <img src="https://img.shields.io/badge/Platforms-YouTube%20%26%20Music-red?style=flat" alt="Platforms">
  <a href="https://github.com/enswrdev/yt-nexuspatch">
    <img src="https://img.shields.io/github/license/enswrdev/yt-nexuspatch?style=flat" alt="License">
  </a>
</p>

---

## Overview

**YT + Music Nexus Patch** is a userscript that brings a cleaner, more consistent, and visually unified experience to [YouTube](https://www.youtube.com/) and [YouTube Music](https://music.youtube.com/).

It introduces custom Premium-inspired branding, cosmetic ad filtering, interface cleanup, and other quality-of-life improvements across both platforms.

Built with simplicity and performance in mind, the script works automatically in the background without requiring manual configuration.

## Features

### 🎨 Custom Branding

- Replaces default YouTube branding with custom Premium-inspired logos.
- Applies consistent visual branding across YouTube and YouTube Music.
- Supports light and dark themes.
- Includes custom logo variations for different interface elements.

### 🧹 Cosmetic Ad Filtering

- Hides selected advertisement elements across YouTube and YouTube Music.
- Removes various promotional banners and sponsored interface elements.
- Uses lightweight CSS-based filtering and dynamic DOM cleanup.
- Automatically handles newly inserted elements during navigation.

*Note: This is cosmetic filtering, not a network-level ad blocker. It does not guarantee that every advertisement will be blocked.*

### ✨ Interface Cleanup

- Hides selected YouTube Premium navigation entries.
- Removes upgrade-related navigation elements from YouTube Music.
- Removes YouTube Playables and gaming-related sections.
- Helps maintain a cleaner and less cluttered interface.

### ⚡ Automatic Adaptation

- Uses MutationObserver to detect dynamic interface changes.
- Automatically reapplies modifications when necessary.
- Supports YouTube's single-page navigation system.
- Runs independently on YouTube and YouTube Music.

### 🔄 Automatic Updates

- Supports userscript manager update mechanisms.
- Receives updates through its configured update source.
- No manual reinstallation is required for supported updates.

## Installation

### 1. Install a Userscript Manager

Choose one of the following browser extensions:

- [Tampermonkey](https://www.tampermonkey.net/)
- [Violentmonkey](https://violentmonkey.github.io/)

### 2. Install YT + Music Nexus Patch

**[Click here to install the latest version](https://github.com/enswrdev/yt-nexuspatch/raw/refs/heads/main/yt-nexuspatch.user.js)**

Your userscript manager should automatically detect the script and prompt you to install it.

### 3. Enjoy!

Visit either YouTube or YouTube Music. The script will initialize automatically and apply the modifications.

No additional configuration is necessary.


## Supported Platforms

### Browsers

| Browser | Support |
|---|---|
| Google Chrome | ✅ Tested |
| Brave | ✅ Tested |
| Mozilla Firefox | ✅ Tested |
| Microsoft Edge | ✅ Tested |
| Opera | ⚠️ Not tested |
| Opera GX | ⚠️ Not tested |
| Vivaldi | ⚠️ Not tested |
| Arc | ⚠️ Not tested |
| Safari | ⚠️ Not tested |
| Zen Browser | ⚠️ Not tested |
| Other Chromium-based browsers | ⚠️ Not tested |

### Websites

| Platform | Support |
|---|---|
| YouTube | ✅ Supported |
| YouTube Music | ✅ Supported |

**Requirements:**
- A compatible userscript manager is required.
- Tampermonkey or Violentmonkey is recommended.
- Browser compatibility may vary depending on the userscript manager and browser version.

**Found an unsupported or incompatible browser?**

If you discover that YT + Music Nexus Patch does not work properly on a browser, please let me know by opening an [Issue](https://github.com/enswrdev/yt-nexuspatch/issues).

When reporting a compatibility issue, please include:
- Browser name and version.
- Operating system.
- Userscript manager and its version.
- A brief description of the issue.

Your feedback helps improve browser compatibility and make Nexus Patch accessible to more users!

*Note: Browsers marked as "Not tested" may work, but their compatibility has not been officially verified.*


## Project Structure

```text
yt-nexuspatch/
├── LICENSE
├── README.md
└── yt-nexuspatch.user.js
```

## Updates

YT + Music Nexus Patch is actively maintained and may receive new features, improvements, and compatibility updates over time.

Make sure automatic updates are enabled in your userscript manager to stay up to date.

## Contributing

Suggestions, bug reports, and contributions are welcome!

If you encounter an issue or have an idea for a new feature:

1. Open an [Issue](https://github.com/enswrdev/yt-nexuspatch/issues).
2. Describe the problem or suggestion.
3. Include relevant details and reproduction steps when reporting a bug.

Pull requests are also welcome.

## Disclaimer

YT + Music Nexus Patch is an independent, community-developed userscript.

It is not affiliated with, endorsed by, or officially associated with Google or YouTube.

YouTube frequently updates its interface, and changes to its internal structure may temporarily affect some features.

YouTube and YouTube Music are trademarks of Google LLC.

## License

This project is distributed under the **GNU General Public License v2.0 (GPL-2.0)**.

See the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/enswrdev">enswrdev</a>
</p>

<p align="center">
  <strong>One Nexus. Two Platforms. A Better Experience.</strong>
</p>
