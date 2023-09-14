# Android TV Remote Card

A fork of usernein's tv-card for the Home Assistant [Android TV Remote](https://www.home-assistant.io/integrations/androidtv_remote/) integration that also allows for a greater level of customization and keyboard entry.

- Fully configurable and remappable touchpad that can now be used for more than Android TV.
- Holding directional and volume keys causes them to repeat until let go, with navigation behavior tweaked to behave more like the Google TV remote.
- Changes row configuration to nested arrays. Every level nested past the second array alternates between columns and rows, allowing for much more customization.
- Many more default [keys](https://github.com/Nerwyn/android-tv-card/blob/main/src/models/defaultKeys.ts) and [sources](https://github.com/Nerwyn/android-tv-card/blob/main/src/models/defaultSources.ts) with [SVG icons](https://github.com/Nerwyn/android-tv-card/blob/main/src/models/enums/svg.ts) to match the sources.
  - _Not all working or tested at this time, let me know if you find the correct source/activity for the broken ones!_
- Keyboard text entry via the [Android Debug Bridge integration](https://www.home-assistant.io/integrations/androidtv/) with three methods implemented depending on the button used:
  - `keyboard`: seamless live text entry.
  - `textbox`: bulk text entry.
  - `search`: Google Assistant search.

**Sample overview:**

<img src="https://github.com/Nerwyn/android-tv-card/blob/main/assets/screenshot.png" alt="screenshot" width="300"/>

Add this to your lovelace configuration:

```yaml
type: custom:android-tv-card
remote_id: remote.google_chromecast
media_player_id: media_player.google_chromecast
keyboard_id: media_player.google_chromecast_adb
title: Example
rows:
  - - back
    - power
    - home
  - - keyboard
    - search
    - volume_slider
  - - - netflix
      - null
      - youtube
      - null
      - spotify
    - navigation_touchpad
  - - previous
    - play_pause
    - next
```

You may want to set custom buttons for your tv. [Check it out](https://github.com/Nerwyn/android-tv-card/blob/main/README.md#notice).

Look at [README](https://github.com/Nerwyn/android-tv-card/blob/main/README.md) for more information
