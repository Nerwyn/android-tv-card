# Android TV Remote Card

A remote card for Home Assistant that also allows for a greater level of customization and keyboard entry for multiple platforms. Works with the [Android TV Remote](https://www.home-assistant.io/integrations/androidtv_remote/) integration by default but can be customized for use with any media platform.

- Fully configurable and remappable touchpad that can now be used for any media platform.
- Holding directional and volume keys causes them to repeat until let go and navigation behavior tweaked to behave more like the Google TV remote.
- Organize buttons into alternating nested rows and columns to create highly customizable layouts.
- Many more default [keys](https://github.com/Nerwyn/android-tv-card/blob/main/src/models/defaultKeys.ts) and [sources](https://github.com/Nerwyn/android-tv-card/blob/main/src/models/defaultSources.ts) with [SVG icons](https://github.com/Nerwyn/android-tv-card/blob/main/src/models/enums/svg.ts) to match the sources.
  - _Not all working or tested at this time, let me know if you find the correct source/activity for the broken ones!_
- Keyboard text entry via the [Android Debug Bridge integration](https://www.home-assistant.io/integrations/androidtv/)
  - Three different methods:
    - `keyboard`: seamless live text entry.
    - `textbox`: bulk text entry.
    - `search`: Google Assistant search.
  - Also supports Kodi
- Example alternate media platform remote configs for Kodi, Apple TV, Sony Bravia TV, and Denon/Marantz in the README examples.

**Sample overview:**

<img src="https://github.com/Nerwyn/android-tv-card/blob/main/assets/screenshot.png" alt="screenshot" width="300"/>

Add this to your lovelace configuration:

```yaml
type: custom:android-tv-card
remote_id: remote.google_chromecast
slider_id: media_player.google_chromecast
keyboard_id: media_player.google_chromecast_adb
title: Example
rows:
  - - back
    - power
    - home
  - - keyboard
    - search
    - slider
  - - - netflix
      - null
      - youtube
      - null
      - spotify
    - touchpad
  - - previous
    - play_pause
    - next
```

You may want to set custom buttons for your tv. [Check it out](https://github.com/Nerwyn/android-tv-card/blob/main/README.md#notice).

Look at [README](https://github.com/Nerwyn/android-tv-card/blob/main/README.md) for more information
