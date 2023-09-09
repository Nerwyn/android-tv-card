# Android TV Remote Card

A fork of usernein's tv-card for the Home Assistant [Android TV Remote](https://www.home-assistant.io/integrations/androidtv_remote/) integration. This fork also:

- Allows touchpad swipes to remap to custom keys, allowing for use with more than Android TV or other media players.
- Fixes touchpad double tap behavior and allows for long single taps on the touchpad to be remapped.
- Allows you to change the touchpad height using the configuration option `touchpad_height`.
- Changes long press/hold to only repeat for directional keys/touch and volume up/down, and does a long press action for anything else.
- Tweaks navigation behavior to behave more like the Google TV remote.
- Changes row configuration to nested arrays. Every level nested past the second array alternates between columns and rows, allowing for much more customization.
- Many more default keys and sources
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
adb_id: media_player.google_chromecast_adb
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
