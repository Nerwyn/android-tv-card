# Android TV Remote Card

A fork of usernein's tv-card for the Home Assistant [Android TV Remote](https://www.home-assistant.io/integrations/androidtv_remote/) integration. This fork also:

-   Remaps touchpad swipes to custom keys, allowing for use with more than Android TV or other media players
-	Changes long press/hold to only repeat for directional keys/touch, and does a long press action for anything else

**Sample overview:**

<img src="https://github.com/Nerwyn/android-tv-card/blob/master/assets/screenshot.png" alt="screenshot" width="300"/>

Add this to your lovelace configuration:

```yaml
type: custom:android-tv-card
remote_id: remote.google_chromecast
media_player_id: media_player.google_chromecast
title: Example 2
power_row:
    - power
channel_row:
    - channel_up
    - info
    - channel_down
apps_row:
    - netflix
    - youtube
    - spotify
volume_row: slider
navigation_row: touchpad
source_row:
    - return
    - home
    - source
media_control_row:
    - rewind
    - play_pause
    - fast_forward
```

You may want to set custom buttons for your tv. [Check it out](https://github.com/Nerwyn/android-tv-card/blob/master/README.md#notice).

Look at [README](https://github.com/Nerwyn/android-tv-card/blob/master/README.md) for more information
