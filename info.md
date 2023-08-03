# Android TV Remote Card

A fork of usernein's tv-card for the Home Assistant [Android TV Remote](https://www.home-assistant.io/integrations/androidtv_remote/) integration. This fork also:

- Allows touchpad swipes to remap to custom keys, allowing for use with more than Android TV or other media players.
- Changes long press/hold to only repeat for directional keys/touch and volume up/down, and does a long press action for anything else.
- Tweaks navigation behavior to behave more like the Google TV remote.
- Lets you name rows anything and add unlimited rows as long as they have `_row` in the name and don't have duplicate names.
- Allows you to change the touchpad height using the configuration option `touchpad_height`.
- Many more default keys and sources
	- *Not all working or tested at this time, let me know if you find the correct source/activity for the broken ones!
- Keyboard text entry via the [Android Debug Bridge integration](https://www.home-assistant.io/integrations/androidtv/).
- Quick global Google Assistant search also via ADB.

**Sample overview:**

<img src="https://github.com/Nerwyn/android-tv-card/blob/main/assets/screenshot.png" alt="screenshot" width="300"/>

Add this to your lovelace configuration:

```yaml
type: custom:android-tv-card
remote_id: remote.google_chromecast
media_player_id: media_player.google_chromecast
adb_id: media_player.google_chromecast_adb
title: Example
power_row:
  - back
  - power
  - home
apps_row:
  - netflix
  - youtube
  - spotify
volume_row: slider
navigation_row: touchpad
media_control_row:
  - previous
  - play_pause
  - next
keyboard_row:
  - delete
  - keyboard
  - enter
  - search

```

You may want to set custom buttons for your tv. [Check it out](https://github.com/Nerwyn/android-tv-card/blob/main/README.md#notice).

Look at [README](https://github.com/Nerwyn/android-tv-card/blob/main/README.md) for more information
