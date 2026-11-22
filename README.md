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

### 🧹 Ad Blocking

- Removes ad placements, ad slots and sponsored renderers from YouTube's player and feed responses before they reach the page.
- Cleans `ytInitialPlayerResponse` and `ytInitialData` as they are assigned.
- Hides remaining ad surfaces with lightweight CSS and removes ad nodes from the DOM.
- Deletes grid cards left empty by a blocked ad so no blank boxes remain.
- Skips stitched ad segments and accelerates any ad that still starts playing.
- Removes the ad-blocker enforcement dialog without touching login or bot-verification prompts.
- Works across YouTube and YouTube Music and handles single-page navigation.

*Note: YouTube changes its delivery regularly and no userscript can guarantee every ad is blocked. Cosmetic filtering alone never stops playback-level ads, which is why the network and player layers are included.*

#### Options Menu

Click the userscript manager icon and open the Nexus Patch menu to toggle features on the fly. Each entry shows its current state:

| Menu entry | What it controls |
|---|---|
| Console debug | Console logging of blocked ads, cosmetic removals, player actions and option changes |
| YouTube Premium logo | The custom YouTube logo |
| YouTube Music Premium logo | The custom YouTube Music logo |
| Game blocking | Removal of Playables and gaming sections |
| Ad blocking | Network, cosmetic and player-level ad filtering |
| Copy ad report | Copies a diagnostic report of the current page and offers GitHub / GreasyFork links |

Toggles are stored by the userscript manager and survive reloads. Logo toggles are applied and reverted immediately, without reloading the page.

#### Ad Report

When an ad or the ad-blocker warning still gets through, open the menu and choose **Copy ad report**. The script collects the page, the player state, the enabled options, the ad nodes still in the DOM and the recent event log, copies the whole thing as Markdown and shows a small panel with three actions:

- **Open GitHub issue** — starts a new issue with the report already in the body.
- **GreasyFork feedback** — opens the script's feedback page for a quick comment.
- **Close** — dismisses the panel; it also hides itself after 30 seconds.

If the browser blocks clipboard access, the same panel selects the report text so it can be copied manually. The report is only created on your device and is never sent anywhere by the script.

#### Languages

Menu labels, on/off states, the ad report panel and console summaries are translated for every language the script ships with: English, Turkish, Spanish, German, French, Russian, Brazilian Portuguese and Italian. The script picks the best match from your browser's language list and falls back to English, so no configuration is needed.

#### Console Debugging

With **Console debug** enabled, every action is printed to the browser console with a red `[NexusPatch]` prefix: pruned payload keys, cosmetic removals, player interventions, SSAP skips and option changes. In the console, `nexusAdReport()` prints a summary table of the collected events and `nexusAdSelfTest()` verifies that payload pruning is active.

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

No configuration is required, but the userscript menu lets you switch individual features off whenever you want.


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
├── greasyfork-descriptions.md
├── social/
│   └── promo-posts.md
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
