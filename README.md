# Universal Remote Card

[![GitHub Release][releases-shield]][releases]
[![License][license-shield]](LICENSE.md)
[![hacs_badge](https://img.shields.io/badge/HACS-Default-blue.svg?style=for-the-badge)](https://github.com/hacs/integration)
![Project Maintenance][maintenance-shield]
[![GitHub Activity][last-commit-shield]][commits]
[![Community Forum][forum-shield]][forum]

[![Github][github]][github]

[![My Home Assistant](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?repository=android-tv-card&owner=Nerwyn&category=Plugin)

_Formerly called Android TV Card_

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/screenshot.png" alt="example" width="300"/>

A super customizable universal remote card iterating on the work of several other developers. Featuring:

- Configuration UI.
- Out of the box support for several platforms with default keys and sources lists.
  - Android TV
  - Fire TV
  - Roku
  - Kodi
  - Apple TV (no keyboard)
  - Samsung TV (no keyboard)
  - LG webOS (no keyboard)
- Support for multiple buttons, touchpads, and sliders using default or user defined actions.
- Complete [Home Assistant actions](https://www.home-assistant.io/dashboards/actions/) support.
- Keyboard and search dialog actions for most platforms.
- Template support for almost all fields using nunjucks.
- Toggleable haptics.
- Touchpad multi-touch gesture support.
- User configurable remote layout.
- Icons and labels for all elements.
- CSS style options for all sub-elements.

# How To Use

This project now has a fully featured configuration user interface! To get started, install this project using HACS. Then go to a dashboard and create a universal remote card or edit an existing one.

The editor has four tabs - General, Layout, Actions, and Icons.

# General

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/editor_general_tab.png" alt="editor general tab" width="600"/>

## Media Platform and Entity IDs

This card supports several media platforms with default key and source lists. It uses the Home Assistant integrations for these platforms via their remote and/or media player entities. Different platforms use the remote and media player entities for different functions as shown below. For platforms with keyboard support, the keyboard entity ID (which doesn't always match the remote and media player entities) can also be provided.

| Platform                                                                   | Remote                   | Media Player                       | Keyboard                                                                                                 |
| -------------------------------------------------------------------------- | ------------------------ | ---------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [Android TV](https://www.home-assistant.io/integrations/androidtv_remote/) | Default keys and sources | Default slider                     | [ADB](https://www.home-assistant.io/integrations/androidtv/) remote (preferred) or media player          |
| [Fire TV](https://www.home-assistant.io/integrations/androidtv/)           | Default keys             | Default sources and slider         | Remote (preferred) or media player                                                                       |
| [Roku](https://www.home-assistant.io/integrations/roku/)                   | Default keys             | Default sources and slider         | Remote for keyboard, media player for search (provide one for keyboard ID and the other in their fields) |
| [Kodi](https://www.home-assistant.io/integrations/kodi/)                   | NA                       | Default keys, sources, and slider  | Media player                                                                                             |
| [Apple TV](https://www.home-assistant.io/integrations/apple_tv)            | Default keys             | Default sources and slider         | NA                                                                                                       |
| [Samsung TV](https://www.home-assistant.io/integrations/samsungtv/)        | Default keys             | Default sources and slider         | NA                                                                                                       |
| [LG webOS](https://www.home-assistant.io/integrations/webostv/)            | NA                       | Default keys, sources, and sliders | NA                                                                                                       |

## Action Timings

Double tap and hold actions have user adjustable timings to change how they are triggered.

### Hold Time

Hold actions are triggered by holding down on a button for a defined amount of time and then releasing. The default amount of time is 500ms. You can change this by setting `Hold time` in the hold action to a different number.

### Repeat and Repeat Delay

By setting a hold action to `repeat`, the tap action will repeat while the button is held down. The default delay between repeats is 100ms. You can change this by setting `Repeat delay` in the hold action to a different number.

The following default keys have hold actions set to `repeat` by default. You can disable this by creating a custom action for them and setting their hold actions to `none` or a different action. The touchpad direction actions also are set to repeat when held, and can similarly be disabled or remapped by creating a custom action for the touchpad and changing it's hold action.

- up
- down
- left
- right
- volume_up
- volume_down
- delete
- forward_delete
- touchpad up/down/left/right

### Double Tap Window

Double tap actions have a default window of 200ms to trigger before a single tap action is triggered instead. You can change this by setting `Double tap window` in the double tap action to a different number.

**NOTE**: Setting `Double tap window` above or too close to `Hold time` can result in undesirable behavior, as the hold timer expires before the double tap window does.

## Miscellaneous

### CSS Styles

Styles can be set and changed for all remote sub-elements using regular CSS and templating. CSS styles have to be encapsulated in a CSS selector like the following.

| CSS Selector  | Element               |
| ------------- | --------------------- |
| :host         | Global values.        |
| .row          | All rows.             |
| .column       | All columns.          |
| .button-pad   | All button pads.      |
| remote-button | All buttons.          |
| #row-1        | The first row.        |
| #column-1     | The first column.     |
| #pad-1        | The first button pad. |

```css
.row {
  justify-content: center;
}
remote-button {
  background: rgb(27, 27, 27);
  padding: 8px;
  margin: 4px;
  border-radius: 24px;
  --size: 24px;
}
```

To get ID selectors for individual rows, columns, and pads, hover over the card preview window. A red dashed outline will appear over the currently hovered element with a tooltip with either the element name or the row, column, or pad ID selector.

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/editor_hover_id.png" alt="editor hover id" width="600"/>

### Autofill and Haptics

When creating custom actions, the card editor will autofill fields using information set in the general tab. This can be disabled by toggling `Autofill` off. This value can also be set at the custom remote element level. Haptics can be similarly toggled globally or for individual custom remote elements.

### Other

You can add a title to the card with the title field.

If you are updating from an older version of this card, you may find that your configurations no longer work. Sorry! To upgrade them, click the button `UPDATE OLD CONFIG` at the bottom of the general tab. It should update your configuration to work with newer versions of this card.

# Layout

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/editor_layout_tab.png" alt="editor layout tab" width="600"/>

The remote layout is defined using a series of nested arrays. The lowest level of arrays is each row. As you nest arrays further it switches between rows and columns, allowing you to create unique remote layouts.

```yaml
- - home
  - menu
  - back
  - keyboard
- - - volume_buttons
    - momentary_light
  - - netflix
    - hulu
    - disney
    - max
    - primevideo
  - touchpad
  - slider
- - chandelier_light_color
  - light_color
  - sunroom_light
  - search
```

The default keys and sources lists for your selected platform are displayed below the layout code editor. If you have configured any custom actions, they will be displayed above this. You can use this as reference as you create your remote, or drag and drop entries from these lists to the editor. The default keys list also includes the default touchpad and slider, along with some special elements for button pads and layouts. Not all special elements are available for all platforms.

| Name               | Type        | Description                                                                                                                                                                                     |
| ------------------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| touchpad           | touchpad    | A touchpad for navigation.                                                                                                                                                                      |
| slider             | slider      | A slider that controls the volume of the entity defined by `media_player_id`. **NOTE**: volume slider support is dependent on the media player supporting the `media_player.volume_set` action. |
| volume_buttons     | button rows | Shorthand to generate a set of volume down, volume mute, and volume up buttons in a row or column.                                                                                              |
| navigation_buttons | button rows | Shorthand to generate a set of up, down, left, right, and center buttons across three rows within a column.                                                                                     |
| dpad               | button grid | Shorthand to generate a set of up, down, left, right, and center buttons arranged in a square grid.                                                                                             |
| numpad             | button grid | Shorthand to generate a set of 1-9 buttons arranged in a square grid. Does not include `n0`.                                                                                                    |
| xpad               | button grid | Shorthand to generate a set of A, B, X, and Y buttons arranged in a square grid.                                                                                                                |
| npad               | button grid | Shorthand to generate a set of A, B, X, and Y buttons arranged in an alternate square grid.                                                                                                     |

# Actions

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/editor_actions_tab.png" alt="editor actions tab" width="600"/>

In addition to the default keys and actions, you can create your own custom actions. You can also overwrite default keys and sources by setting the custom action name to match a default one. If you do so the default key or source information will be autopopulated if autofill is enabled.

Click the `ADD REMOTE ELEMENT` button to add a custom action remote element. Custom action remote elements can be buttons, sliders, or touchpads.

Custom actions in this list can be reordered for organization, but does not have any effect on the the cards layout. They can also be deleted, copied, and edited.

## General Options

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/editor_actions_general_options.png" alt="editor actions general options" width="600"/>

Every remote element must have a name so that it can be added to your remote.

Every remote element can have an entity assigned to it, which is used to track it's internal value. This value can then be used in styles and actions using templates, like `{{ value | float }}` By default the value will be derived from the entity state, but it can be changed to an attribute use the corresponding field.

Some additional logic is applied for certain attributes:

- `brightness` - Converted from the default range of 0-255 to 0-100.
- `media_position` - Updated twice a second using the current timestamp and the attribute `media_position_updated_at` when the entity state is `playing`, and locked to a max value using the attribute `media_duration`.
- `elapsed` - Only for timer entities. Updated twice a second using the the current timestamp and the attributes `duration`, `remainin`, and `finishes_at`, and locked to a max value using the attribute `duration`.
  - NOTE: elapsed is not an actual attribute of timer entities, but is a possible attribute for timer entities for the purpose of displaying accurate timer elapsed values. Timer entities do have an attribute `remaining`, which only updates when the timer state changes. The actual `remaining` attribute can be calculated using the elapsed value and the timer duration attribute.

If you find that the autofilling of the entity ID in the action or remote element value is causing issues, setting `Autofill` to false may help. Just remember to set the entity ID of the remote element and the entity, device, area, or label ID of the action target.

Haptics are enabled for remote elements by default, but can be toggled globally or at the custom action level.

### Slider General Options

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/editor_actions_general_options_slider.png" alt="editor actions general options slider" width="600"/>

Sliders have some additional general options. They can have range `Min` and `Max` values defined by the user, but default to 0 and 1. They can also have a `Step` size defined, which defaults to 0.01.

Sliders will wait one second before updating their internal values from Home Assistant. This time can be changed by setting `Update after action delay`.

### Touchpad Tabs

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/editor_actions_general_options_touchpad.png" alt="editor actions general options touchpad" width="600"/>

Touchpads have five tabs at the top of their actions page - up, down, center, left, and right. Only the center tab has general options as these apply to the entire touchpad remote element. Center and each remote direction have their own options for appearance and interactions as described below.

## Appearance

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/editor_actions_appearance_options.png" alt="editor actions appearance options" width="600"/>

All remote elements can have a `Label`, `Icon`, and `Units`. These fields can also be set using templates. Similar to the general tab, each remote element can have it's CSS styles set (including using templates).

You may find the following CSS selectors useful for styling:

| CSS Selector | Element                        |
| ------------ | ------------------------------ |
| :host        | The element itself.            |
| .icon        | The element icon.              |
| .label       | The element label.             |
| button       | A button element background.   |
| toucharea    | A touchpad element background. |
| input        | A slider element.              |
| .background  | A slider element background.   |
| .tooltip     | A slider element tooltip.      |
| .button-pad  | All button pads.               |

While you can now set most CSS fields directly using their sub-element selectors, you may find the following CSS properties useful, especially for the slider which uses and modifies them internally.

| Name                | Description                                                                                                                                                                                                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --size              | Height and width of the icon.                                                                                                                                                                                                                                               |
| --thumb-width       | Slider thumb width, defaults to 48px.                                                                                                                                                                                                                                       |
| --height            | Slider height when horizontal and width when vertical.                                                                                                                                                                                                                      |
| --tooltip-label     | Slider tooltip label template, defaults to `'{{ value }}'`.                                                                                                                                                                                                                 |
| --tooltip-transform | Slider tooltip location transform function, defaults to `translate(var(--thumb-offset), calc(-0.5 * var(--height) - 0.4em - 10px))` for horizontal sliders and `translate(calc(-0.3 * var(--height) - 0.8em - 18px), calc(-1 * var(--thumb-offset)))` for vertical sliders. |
| --icon-transform    | Slider icon transform function, defaults to `translateX(var(--thumb-offset)).                                                                                                                                                                                               |

### Vertical Sliders

Sliders have an additional `Vertical` toggle to make a vertical. By default sliders will be horizontal.

### Multiple Icons and Labels for Touchpads

Touchpads can have a separate icon and label for the center and each direction. You can also style each of these icons and labels independently using their own `CSS Styles` fields. General touchpad styles such as those for `toucharea` like touchpad height should go in the center tab styles.

### A Note on Templating

Almost all fields support nunjucks templating. Nunjucks is a templating engine for JavaScript, which is heavily based on the jinja2 templating engine for Python which Home Assistant uses. While the syntax of nunjucks and jinja2 is almost identical, you may find the [nunjucks documentation](https://mozilla.github.io/nunjucks/templating.html) useful. Not all functions supported by Home Assistant templates are supported by this templating system. Please see the [ha-nunjucks](https://github.com/Nerwyn/ha-nunjucks) repository for a list of available functions. If you want additional functions to be added, please make a feature request on that repository, not this one.

You can include the current value of a remote element and it's units by using the variables `value` and `unit` in a label template. You can also include `hold_secs` in a template if performing a momentary end action. Each remote element can also reference it's configuration using `config` within templates. `config.entity` and `config.attribute` will return the remote element's entity ID and attribute with their templates rendered (if they have them), and other templated config fields can be rendered within templates by wrapping them in the function `render` within a template.

## Interactions

There are three traditional ways to trigger an action - tap, double tap, and hold. Buttons, selector options, and spinbox buttons support all three, and sliders only support tap actions. Defining a double tap action that is not `none` introduces a 200ms delay to single tap actions.

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/editor_actions_interactions.png" alt="editor actions interactions" width="600"/>

Each action also supports the `confirmation` field. More information on Home Assistant action confirmations can be found [here](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation).

When setting the action for a slider, you must use `value` within a template in the action data to use the feature value in action. For convenience, a codebox for the action will be displayed below the normal action options.

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/editor_actions_interactions_slider.png" alt="editor actions interactions slider" width="600"/>

### Action Types

Actions follow the [Home Assistant actions](https://www.home-assistant.io/dashboards/actions/) syntax. All Home Assistant actions are supported along with some additional ones.

| Action         | Description                                                                                                                                                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| More info      | Open the more info dialog.                                                                                                                                                                                                              |
| Toggle         | Toggle between the target's on and off (or similar) states.                                                                                                                                                                             |
| Navigate       | Navigate to another Home Assistant page.                                                                                                                                                                                                |
| URL            | Navigate to an external URL.                                                                                                                                                                                                            |
| Perform action | Call any Home Assistant service action.                                                                                                                                                                                                 |
| Assist         | Open the assist dialog. Uses the mobile dialog if available, like in the Home Assistant app. The pipeline ID and start listening options only work in the mobile assist dialog.                                                         |
| Key            | Send a key to the media platform via the action `remote.send_command`. If no hold action is defined, then `hold_secs: 0.5` is added when a hold action is fired.                                                                        |
| Source         | Open a source via the action `remote.turn_on`.                                                                                                                                                                                          |
| Keyboard       | Open a dialog for sending seamless keyboard input.                                                                                                                                                                                      |
| Textbox        | Open a dialog for sending bulk keyboard input.                                                                                                                                                                                          |
| Search         | Open a dialog for sending a global search query.                                                                                                                                                                                        |
| Fire DOM event | Fire a browser dom event using the action object as the event detail. Useful for opening [browser mod popup cards](https://github.com/thomasloven/hass-browser_mod?tab=readme-ov-file#how-do-i-update-a-popup-from-the-browser-mod-15). |
| Repeat         | Repeat the tap action ten times a second while held. Only applicable to hold.                                                                                                                                                           |
| Nothing        | Explicilty set a command to do nothing.                                                                                                                                                                                                 |

### Key and Source

`Key` and `Source` are shortcuts for `remote.send_command` and `remote.turn_on` respectively. They will use the general remote ID if set but can be overridden at the custom action level.

The `key` field does not refer to the default key name as it appears in the list, but as the actual key string to be sent in the action data. You should read the documentation for the platform you are using to learn more about available options.

The `source` field generally refers to an application to open and varies by platform. For Android TV you may find the [Android TV deep linking guide helpful](https://community.home-assistant.io/t/android-tv-remote-app-links-deep-linking-guide/567921).

If you find keys or sources that are not part of the default lists that you wish to add, please make a feature or even a pull request to add them, especially if they are for a platform other than Android TV (Android TV default list improvements also welcome).

Not all platforms use `Key` and `Source` for their default keys and sources, some instead use `Perform action` to call alternate services.

### Momentary Mode

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/editor_actions_interactions_momentary.png" alt="editor actions interactions momentary" width="600"/>

As an alternative to normal tap, hold, and double tap actions, buttons and the touchpad center can also be used in a momentary mode. Configuring this option disables the normal tap, hold, and double tap actions.

The momentary start action is fired when you first press down on a button or touchpad. The momentary end action is fired when you release the button or touchpad. While these are meant to be used together you can use one or the other.

You can include the number of seconds a button has been held down using `hold_secs` in a template. For convenience, the momentary end action YAML is included in a code box below the action, like shown above.

### Touchpad Actions

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/editor_actions_interactions_touchpad.png" alt="editor actions interactions touchpad" width="600"/>

The touchpad's center acts like a button, with support for the same actions. The touchpad's direction actions are activated when the user swipes in a direction, and do not support double tap actions or momentary mode.

Touchpads support an additional multi-touch mode, which fires alternate actions when more than one finger is used with it. This mode is disabled by default but can be enabled by setting it's actions to something other than `Nothing`. Multi-touch mode supports tap, double tap, and hold actions. Touchpad swipe directions do not support momentary mode, but it's center does.

### Keyboard, Textbox, and Search

This card supports sending text to the following platforms:

- Android TV
- Fire TV
- Roku
- Kodi

If the general platform is listed above, then any action set to a keyboard action will inherit it. Otherwise it will default to `Android TV`. Keyboard support for more platforms can be added if there is a way to do so through their Home Assistant (or possibly community made) integrations.

When you use any keyboard action, a dialog will open that can be typed into.

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/keyboard_dialog.png" alt="keyboard dialog" width="300"/>

You can change the prompt text that appears before you type anything using the `Prompt` field at the action level.

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/editor_actions_interactions_keyboard_prompt.png" alt="editor actions interactions keyboard prompt" width="300"/>

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/keyboard_dialog_custom_prompt.png" alt="keyboard dialog custom prompt" width="300"/>

#### Keyboard - Seamless Text Entry

Send text to your supported media platform seamlessly using the action or default key `keyboard`. The dialog has several listeners which will send anything you type to your media platform immediately. You can also paste by holding or typing CTRL + V into the dialog.

Because we do not have a way to retrieve the currently on screen text of most media platforms, the dialog and platform text may become out of sync if a message gets dropped due to a network issue, you attempt to erase more than one character at a time, you try to modify the middle of the entered text, or if you prematurely close the dialog window. The keyboard dialog will attempt to prevent you from doing things that would cause this, but please remember that if you make a mistake you have to backspace all the way to the incorrect character from the end of your input text one character at at a time. In my testing the dialog always kept in sync with the platform text unless I attempted to delete more than one character. This does not apply to Kodi, which sets the text field to the entire dialog text every time it's action is called.

ADB can be slow and you may notice some delay in what you type and what appears on your Android or Fire TV device. Make sure to use the newer ADB integration remote entity for a faster typing experience.

#### Textbox - Bulk Text Entry

Send text to your supported media platform in bulk using the action or default button `textbox`. The dialog will not send any information until you tap the send button. It is highly recommended that you also create buttons for delete and enter so you can easily delete the text you send and quickly search using it.

#### Search - Global Search

Send a global search query to your media platform using the action or default button `search`. Like the bulk entry method, the dialog will not send any information until you tap the search button. This method cannot be used to enter text into currently visible text fields.

For Roku make sure to include both the remote and media player IDs at the general or action level, as the remote ID is used for normal keyboard entry while the media player ID is used for search.

## Icons

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/editor_icons.png" alt="editor icons" width="600"/>

You can add custom SVG path icons to use with this card using the icons tab. The custom icons list works the same as the custom actions list, except that there is only one type of custom icon you can add.

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/editor_icons_editor.png" alt="editor icons editor" width="600"/>

Each custom icon has to have a name and a SVG path. The SVG path must generate a 24x24 pixel icon to properly render in the remote. A preview of the icon is shown below the path. I highly recommend using a tool like [this SVG path editor](https://yqnn.github.io/svg-path-editor/) to modify SVG paths to work with this card.

Once setup, you can reference these icons in custom actions in the icon field by name. Many default sources similarly use SVG paths instead of the Home Assistant built in icons. If you have an SVG icon you wish to add to this project, you can create a feature or pull request to do so.

# YAML Examples

TODO cleanup and convert examples to new format and move user remotes to separate file. Don't forget your spotify controller!

While all configuration can now be done through the user interface, these YAML examples can provide some insight on how to do some advanced styling and templating.

## Example 1

Playing with order, moving and repeating buttons.

```yaml
type: custom:android-tv-card
remote_id: remote.google_chromecast
slider_id: media_player.google_chromecast
title: Example 1
rows:
  - - power
  - - back
    - home
    - tv
    - netflix
  - - youtube
    - spotify
    - netflix
  - - touchpad
  - - slider
  - - channel_up
    - channel_down
    - info
  - - rewind
    - play
    - spotify
    - pause
    - fast_forward
```

Result:

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/disorder.png" alt="disorder example" width="300"/>

## Example 2

Buttons, buttons everywhere!

```yaml
type: custom:android-tv-card
remote_id: remote.google_chromecast
slider_id: media_player.google_chromecast
title: Example 2
rows:
  - - power
    - channel_up
    - info
    - channel_down
  - - netflix
    - youtube
    - spotify
  - - vol_buttons
  - - dpad
  - - back
    - home
    - tv
  - - rewind
    - play
    - pause
    - fast_forward
```

Result:

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/buttons_everywhere.png" alt="buttons example" width="300"/>

## Example 3

Using less and a vertical slider.

```yaml
type: custom:android-tv-card
remote_id: remote.google_chromecast
slider_id: media_player.google_chromecast
title: Example 3
custom_actions:
  slider:
    vertical: true
    icon: mdi:volume-high
rows:
  - - power
    - netflix
    - youtube
    - spotify
  - - touchpad
    - slider
  - - back
    - home
```

Result:

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/using_less.png" alt="less example" width="300"/>

## Example 4

In any row, if you add an empty or `null` item, there will be an empty button sized space.

```yaml
type: custom:android-tv-card
rows:
  - - back
    - home
    - tv
  - - rewind
    - null
    - null
    - fast_forward
```

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/empty_buttons.png" alt="empty buttons example" width="300"/>

## Example 5

A tablet UI using columns.

```yaml
type: custom:android-tv-card
remote_id: remote.google_chromecast
rows:
  - - - - back
        - null
        - home
        - null
        - menu
      - - volume_down
        - null
        - volume_mute
        - null
        - volume_up
      - - rewind
        - null
        - play_pause
        - null
        - fast_forward
      - - netflix
        - disney
        - hulu
        - max
        - primevideo
      - - plex
        - vudu
        - youtube
        - spotify
    - - - keyboard
        - search
      - - touchpad
touchpad_style:
  height: 300px
```

Result:

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/tablet.png" alt="tablet example" width="800"/>

## Example 6

Apple TV.

```yaml
type: custom:android-tv-card
remote_id: remote.appletv
media_player_id: media_player.appletv
autofill_entity_id: true
rows:
  - - power
    - menu
    - home
  - - skip-backward
    - play
    - pause
    - skip-forward
  - - touchpad
  - - appletv
    - netflix
    - disney
    - primevideo
    - allente
  - - nrktv
    - tv2play
    - max
    - skyshowtime
    - plex
  - - viaplay
    - discovery
    - spotify
    - youtube
touchpad_style:
  height: 200px
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/505px-Apple_logo_grey.svg.png")
  background-size: 150px
  background-repeat: no-repeat
  background-position: center
  opacity: 1.0
custom_actions:
  select_source:
    tap_action:
      action: perform-action
      perform_action: media_player.select_source
  power:
    icon: mdi:power
    tap_action:
      action: key
      key: wakeup
    hold_action:
      action: key
      key: suspend
  menu:
    icon: mdi:apple
    tap_action:
      action: key
      key: menu
  home:
    tap_action:
      action: key
      key: home
    hold_action:
      action: more-info
  skip-backward:
    icon: mdi:rewind-10
    tap_action:
      action: key
      key: skip_backward
  skip-forward:
    icon: mdi:fast-forward-10
    action: key
    key: skip_forward
  play:
    tap_action:
      action: key
      key: play
  pause:
    tap_action:
      action: key
      key: pause
  up:
    tap_action:
      action: key
      key: up
  down:
    tap_action:
      action: key
      key: down
  left:
    tap_action:
      action: key
      key: up
  right:
    tap_action:
      action: key
      key: right
  center:
    tap_action:
      action: key
      key: select
    double_tap_action:
      action: key
      key: menu
  primevideo:
    template: select_source
    tap_action:
      data:
        source: Prime Video
  netflix:
    template: select_source
    tap_action:
      data:
        source: Netflix
  spotify:
    template: select_source
    tap_action:
      data:
        source: Spotify
  disney:
    template: select_source
    tap_action:
      data:
        source: Disney+
  youtube:
    template: select_source
    tap_action:
      data:
        source: YouTube
  appletv:
    template: select_source
    tap_action:
      data:
        source: TV
  max:
    template: select_source
    tap_action:
      data:
        source: HBO Max
  skyshowtime:
    template: select_source
    tap_action:
      data:
        source: SkyShowtime
  plex:
    template: select_source
    tap_action:
      data:
        source: Plex
  discovery:
    template: select_source
    icon: discovery
    tap_action:
      data:
        source: discovery+
  viaplay:
    template: select_source
    icon: viaplay
    tap_action:
      data:
        source: Viaplay
  tv2play:
    template: select_source
    icon: tv2play
    tap_action:
      data:
        source: TV 2 Play
  nrktv:
    template: select_source
    icon: nrktv
    tap_action:
      data:
        source: NRK TV
  allente:
    template: select_source
    icon: allente
    tap_action:
      data:
        source: Allente
```

Result:

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/appletv.png" alt="apple tv example" width="400"/>

## Example 7

Kodi with keyboard and touchpad. Use the [Kodi JSON-RPC API](https://kodi.wiki/view/JSON-RPC_API/v13) to add more buttons like below.

```yaml
type: custom:android-tv-card
keyboard_id: media_player.kodi
keyboard_mode: KODI
media_player_id: media_player.kodi
autofill_entity_id: true
rows:
  - - back
    - home
    - menu
  - - info
    - play_pause
  - - - vol_buttons
    - touchpad
    - - textbox
      - null
      - search
touchpad_style:
  height: 200px
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Kodi-logo-Thumbnail-light-transparent.png/600px-Kodi-logo-Thumbnail-light-transparent.png?20141126003611")
  background-size: contain
  background-repeat: no-repeat
  background-position: center
  opacity: 1.0;
custom_actions:
  kodi_command:
    tap_action:
      action: perform-action
      perform_action: kodi.call_method
  up:
    template: kodi_command
    tap_action:
      data:
        method: Input.Up
  down:
    template: kodi_command
    tap_action:
      data:
        method: Input.Down
  left:
    template: kodi_command
    tap_action:
      data:
        method: Input.Left
  right:
    template: kodi_command
    tap_action:
      data:
        method: Input.Right
  center:
    template: kodi_command
    tap_action:
      data:
        method: Input.Select
    double_tap_action:
      action: perform-action
      perform_action: kodi.call_method
      data:
        method: Input.Back
    hold_action:
      action: perform-action
      perform_action: kodi.call_method
      data:
        method: Input.ContextMenu
  back:
    template: kodi_command
    tap_action:
      data:
        method: Input.Back
  search:
    template: kodi_command
    icon: mdi:kodi
    tap_action:
    style:
      --icon-color: rgb(9, 179, 232)
      '--size': 64px
  volume_mute:
    template: kodi_command
    tap_action:
      data:
        method: Application.SetMute
        mute: toggle
  volume_up:
    template: kodi_command
    tap_action:
      data:
        method: Application.SetVolume
        volume: increment
  volume_down:
    template: kodi_command
    tap_action:
      data:
        method: Application.SetVolume
        volume: decrement
  menu:
    template: kodi_command
    tap_action:
      data:
        method: Input.ContextMenu
  home:
    template: kodi_command
    tap_action:
      data:
        method: Input.Home
  info:
    template: kodi_command
    tap_action:
      data:
        method: Input.Info
  play_pause:
    template: kodi_command
    tap_action:
      data:
        method: Player.PlayPause
        playerid: 1
```

Result:

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/kodi.png" alt="kodi example" width="400"/>

## Example 8

Sony Bravia KD.xx TV.

```yaml
type: custom:android-tv-card
remote_id: remote.sony_kd_75xf8596
rows:
  - - touchpad
custom_actions:
  up:
    tap_action:
      action: key
      key: Up
  down:
    tap_action:
      action: key
      key: Down
  left:
    tap_action:
      action: key
      key: Left
  right:
    tap_action:
      action: key
      key: Right
  center:
    tap_action:
      action: key
      key: DpadCenter
    double_tap_action:
      action: key
      key: Back
```

## Example 9

Marantz Receiver.

```yaml
type: custom:android-tv-card
media_player_id: media_player.marantz_sr7013
autofill_entity_id: true
rows:
  - - touchpad
touchpad_style:
  height: 200px
custom_actions:
  denonavr_command:
    tap_action:
      action: perform-action
      perform_action: denonavr.get_command
  down:
    template: denonavr_command
    tap_action:
      data:
        command: /goform/formiPhoneAppDirect.xml?MNCDN
  up:
    template: denonavr_command
    tap_action:
      data:
        command: /goform/formiPhoneAppDirect.xml?MNCUP
  left:
    template: denonavr_command
    tap_action:
      data:
        command: /goform/formiPhoneAppDirect.xml?MNCLT
  right:
    template: denonavr_command
    tap_action:
      data:
        command: /goform/formiPhoneAppDirect.xml?MNCRT
  center:
    template: denonavr_command
    tap_action:
      data:
        command: /goform/formiPhoneAppDirect.xml?MNENT
    double_tap_action:
      action: perform-action
      perform_action: denonavr.get_command
      data:
        command: /goform/formiPhoneAppDirect.xml?MNRTN
```

## Example 10

Even more disorder with columns and special elements in the same row as buttons, and stylized everything.

```yaml
type: custom:android-tv-card
remote_id: remote.google_chromecast
slider_id: media_player.google_chromecast
rows:
  - - - home
      - menu
      - back
      - keyboard
    - - netflix
      - hulu
      - disney
      - max
      - primevideo
    - touchpad
  - - slider
    - search
custom_actions:
  netflix:
    style:
      --icon-color: rgb(229, 9, 20)
  hulu:
    style:
      --icon-color: rgb(28, 231, 131)
  disney:
    style:
      --icon-color: rgb(17, 60, 207)
  max:
    style:
      --icon-color: rgb(0, 35, 246)
  primevideo:
    style:
      --icon-color: rgb(0, 165, 222)
  slider:
    range:
      - 0
      - 0.6
    style:
      height: 24px
      border-radius: 4px
      '--background-height': 12px
      '--color': darkred
      '--background': red
touchpad_style:
  background: >-
    linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)
```

Result:

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/more_disorder.png" alt="more disorder example" width="500"/>

## Example 11

A simple gamepad.

```yaml
type: custom:android-tv-card
remote_id: remote.google_chromecast
rows:
  - - dpad
    - gamepad
custom_actions:
  a:
    style:
      padding: 0
      margin: 0
      --size: 48px
      --icon-color: '#C1121C'
  b:
    style:
      padding: 0
      margin: 0
      --size: 48px
      --icon-color: '#F7BA0B'
  x:
    style:
      padding: 0
      margin: 0
      --size: 48px
      --icon-color: '#00387b'
  y:
    style:
      padding: 0
      margin: 0
      --size: 48px
      --icon-color: '#007243'
button_style:
  background: rgb(27,27,27)
  padding: 8px
  margin: 4px
  border-radius: 24px
  --size: 24px
row_styles:
  rows:
    justify-content: center
```

Result:

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/gamepad.png" alt="gamepad example" width="500"/>

## Example 12

Samsung TV, using [ha-samsungtv-smart](https://github.com/ollo69/ha-samsungtv-smart).

```yaml
type: custom:android-tv-card
remote_id: remote.samsung_tv
media_player_id: media_player.samsung_tv
autofill_entity_id: true
custom_actions:
  n0:
    tap_action:
      action: key
      key: KEY_0
  n1:
    tap_action:
      action: key
      key: KEY_1
  n2:
    tap_action:
      action: key
      key: KEY_2
  n3:
    tap_action:
      action: key
      key: KEY_3
  n4:
    tap_action:
      action: key
      key: KEY_4
  n5:
    tap_action:
      action: key
      key: KEY_5
  n6:
    tap_action:
      action: key
      key: KEY_6
  n7:
    tap_action:
      action: key
      key: KEY_7
  n8:
    tap_action:
      action: key
      key: KEY_8
  n9:
    tap_action:
      action: key
      key: KEY_9
  up:
    tap_action:
      action: key
      key: KEY_UP
  down:
    tap_action:
      action: key
      key: KEY_DOWN
  left:
    tap_action:
      action: key
      key: KEY_LEFT
  right:
    tap_action:
      action: key
      key: KEY_RIGHT
  center:
    tap_action:
      action: key
      key: KEY_ENTER
    double_tap_action:
      action: key
      key: KEY_RETURN
  power:
    icon: mdi:power
    tap_action:
      action: perform-action
      perform_action: media_player.toggle
  home:
    tap_action:
      action: key
      key: KEY_HOME
  back:
    tap_action:
      action: key
      key: KEY_RETURN
  volume_mute:
    tap_action:
      action: key
      key: KEY_MUTE
  ch_up:
    icon: mdi:arrow-up-bold
    tap_action:
      action: key
      key: KEY_CHUP
  ch_down:
    icon: mdi:arrow-down-bold
    tap_action:
      action: key
      key: KEY_CHDOWN
  netflix:
    tap_action:
      action: perform-action
      perform_action: media_player.select_source
      data:
        source: Netflix
  youtube:
    tap_action:
      action: perform-action
      perform_action: media_player.select_source
      data:
        source: YouTube
  primevideo:
    tap_action:
      action: perform-action
      perform_action: media_player.select_source
      data:
        source: Prime Video
  DAZN:
    icon: dazn
    tap_action:
      action: perform-action
      perform_action: media_player.select_source
      data:
        source: DAZN
rows:
  - - power
    - null
    - volume_mute
  - - slider
  - - ch_up
    - ch_down
  - - netflix
    - youtube
    - dazn
    - primevideo
    - spotify
  - - touchpad
  - - back
    - home
  - - n1
    - n2
    - n3
    - n4
    - n5
  - - n6
    - n7
    - n8
    - n9
    - n0
```

## Example 13

Conditional layouts using templating and an input select.

```yaml
type: custom:android-tv-card
remote_id: remote.google_tv
slider_id: media_player.spotify_nerwyn_singh
rows:
  - - next_thing
  - |
    {% if is_state("input_select.select_test", "A") %}
    - touchpad
    - - slider
    {% elif is_state("input_select.select_test", "B") %}
    - dpad
    - - volume_buttons
    {% elif is_state("input_select.select_test", "C") %}
    - numpad
    {% endif %}
custom_keys:
  next_thing:
    icon: mdi:skip-next-circle
    perform_action: input_select.select_next
    data:
      cycle: true
    target:
      entity_id: input_select.select_test
```

<img src="https://raw.githubusercontent.com/Nerwyn/android-tv-card/main/assets/conditional_layouts.png" alt="conditional layouts example" width="500"/>

## Example 14

RGB Remote using Broadlink RM4 Pro.

```yaml
type: custom:android-tv-card
remote_id: remote.rm4_pro
title: TV RGB
rows:
  - - power
    - null
    - poweroff
  - - up
    - null
    - down
  - - 1
    - 2
    - 3
  - - 4
    - 5
    - 6
  - - 7
    - 8
    - 9
  - - 10
    - 11
    - 12
custom_actions:
  '1':
    icon: mdi:circle
    tap_action:
      action: perform-action
      perform_action: remote.send_command
      target:
        entity_id: remote.rm4_pro
      data:
        device: Office TV Led
        command: red
    style:
      '--size': 42px
      --icon-color: red
  '2':
    icon: mdi:circle
    tap_action:
      action: perform-action
      perform_action: remote.send_command
      target:
        entity_id: remote.rm4_pro
      data:
        device: Office TV Led
        command: green
    style:
      '--size': 42px
      --icon-color: green;
  '3':
    icon: mdi:circle
    tap_action:
      action: perform-action
      perform_action: remote.send_command
      target:
        entity_id: remote.rm4_pro
      data:
        device: Office TV Led
        command: dark_blue
    style:
      '--size': 42px
      --icon-color: darkblue;
  '4':
    icon: mdi:circle
    tap_action:
      action: perform-action
      perform_action: remote.send_command
      target:
        entity_id: remote.rm4_pro
      data:
        device: Office TV Led
        command: yellow
    style:
      '--size': 42px
      --icon-color: yellow;
  '5':
    icon: mdi:circle
    tap_action:
      action: perform-action
      perform_action: remote.send_command
      target:
        entity_id: remote.rm4_pro
      data:
        device: Office TV Led
        command: yellow-orange
    style:
      '--size': 42px
      --icon-color: goldenrod;
  '6':
    icon: mdi:circle
    tap_action:
      action: perform-action
      perform_action: remote.send_command
      target:
        entity_id: remote.rm4_pro
      data:
        device: Office TV Led
        command: orange
    style:
      '--size': 42px
      --icon-color: orange;
  '7':
    icon: mdi:circle
    tap_action:
      action: perform-action
      perform_action: remote.send_command
      target:
        entity_id: remote.rm4_pro
      data:
        device: Office TV Led
        command: orange-light
    style:
      '--size': 42px
      --icon-color: lightsalmon;
  '8':
    icon: mdi:circle
    tap_action:
      action: perform-action
      perform_action: remote.send_command
      target:
        entity_id: remote.rm4_pro
      data:
        device: Office TV Led
        command: cyan
    style:
      '--size': 42px
      --icon-color: cyan;
  '9':
    icon: mdi:circle
    tap_action:
      action: perform-action
      perform_action: remote.send_command
      target:
        entity_id: remote.rm4_pro
      data:
        device: Office TV Led
        command: blue
    style:
      '--size': 42px
      --icon-color: blue;
  '10':
    icon: mdi:circle
    tap_action:
      action: perform-action
      perform_action: remote.send_command
      target:
        entity_id: remote.rm4_pro
      data:
        device: Office TV Led
        command: pink
    style:
      '--size': 42px
      --icon-color: magenta;
  '11':
    icon: mdi:circle
    tap_action:
      action: perform-action
      perform_action: remote.send_command
      target:
        entity_id: remote.rm4_pro
      data:
        device: Office TV Led
        command: green_light
    style:
      '--size': 42px
      --icon-color: mediumseagreen;
  '12':
    icon: mdi:circle
    tap_action:
      action: perform-action
      perform_action: remote.send_command
      target:
        entity_id: remote.rm4_pro
      data:
        device: Office TV Led
        command: white
    style:
      '--size': 42px
      --icon-color: white;
  power:
    tap_action:
      action: perform-action
      perform_action: remote.send_command
      target:
        entity_id: remote.rm4_pro
      data:
        device: Office TV Led
        command: 'on'
    style:
      --icon-color: green
  poweroff:
    icon: mdi:power
    tap_action:
      action: perform-action
      perform_action: remote.send_command
      target:
        entity_id: remote.rm4_pro
      data:
        device: Office TV Led
        command: 'off'
    style:
      --icon-color: red
  up:
    tap_action:
      action: perform-action
      perform_action: remote.send_command
      target:
        entity_id: remote.rm4_pro
      data:
        device: Office TV Led
        command: brightness+
  down:
    tap_action:
      action: perform-action
      perform_action: remote.send_command
      target:
        entity_id: remote.rm4_pro
      data:
        device: Office TV Led
        command: brightness-
```

<img src="https://github.com/Nerwyn/android-tv-card/blob/main/assets/rgb.png" alt="rgb remote example" width="500"/>

## Example 15

Style the dpad to be like the Google TV app remote.

```yaml
type: custom:android-tv-card
remote_id: remote.google_tv
rows:
  - - nav_buttons
custom_actions:
  center:
    style:
      --icon-color: rgb(94, 94, 94)
      '--size': 200px
      background: rgb(31, 31, 31)
      border-radius: 200px
      margin: '-70px'
      padding: 70px
  up:
    style:
      --icon-color: rgb(197, 199, 197)
      z-index: 2
      top: 25px
      height: 90px
      width: 300px
  down:
    style:
      --icon-color: rgb(197, 199, 197)
      z-index: 2
      bottom: 25px
      height: 90px
      width: 300px
  left:
    style:
      --icon-color: rgb(197, 199, 197)
      z-index: 2
      left: 30px
      height: 170px
      width: 90px
  right:
    style:
      --icon-color: rgb(197, 199, 197)
      z-index: 2
      right: 30px
      height: 170px
      width: 90px
row_styles:
  row-1:
    justify-content: center
  row-2:
    justify-content: center
  row-3:
    justify-content: center
```

<img src="https://github.com/Nerwyn/android-tv-card/blob/main/assets/google_tv_dpad.png" alt="`google `tv app styled dpad" width="500"/>

[last-commit-shield]: https://img.shields.io/github/last-commit/Nerwyn/android-tv-card?style=for-the-badge
[commits]: https://github.com/Nerwyn/android-tv-card/commits/main
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg?style=for-the-badge
[forum]: https://community.home-assistant.io/t/android-tv-card-a-tv-card-fork-for-android-tv/585089
[license-shield]: https://img.shields.io/github/license/Nerwyn/android-tv-card.svg?style=for-the-badge
[maintenance-shield]: https://img.shields.io/badge/maintainer-Nerwyn-blue.svg?style=for-the-badge
[releases-shield]: https://img.shields.io/github/release/Nerwyn/android-tv-card.svg?style=for-the-badge
[releases]: https://github.com/nerwyn/android-tv-card/releases
[github]: https://img.shields.io/github/followers/Nerwyn.svg?style=social
