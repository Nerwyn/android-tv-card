# TV Remote Card
📺 [Roku Lovelace Card](https://github.com/custom-cards/roku-card) editited by mar_robHD

[![GitHub Release][releases-shield]][releases]
[![License][license-shield]](LICENSE.md)

![Project Maintenance][maintenance-shield]
[![GitHub Activity][commits-shield]][commits]
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)
[![Discord][discord-shield]][discord]
[![Community Forum][forum-shield]][forum]

[![Twitter][twitter]][twitter]
[![Github][github]][github]

## Support

This card is for [Lovelace](https://www.home-assistant.io/lovelace) on [Home Assistant](https://www.home-assistant.io/) that display a [TV]() remote.

# NOTE: Firefox releases before 67 are not supported
https://twitter.com/_developit/status/1090364879377260544

![ex](KOLwmt1vGh.png)

## Options

| Name | Type | Requirement | Description
| ---- | ---- | ------- | -----------
| type | string | **Required** | `custom:tv-card`
| entity | string | **Required** | `random` entity
| remote | string | **Optional** | `remote` entity of Roku device. Default assume named like `entity`
| name | string | **Optional** | Card name
| theme | string | **Optional** | Card theme
| tv | boolean | **Optional** | If `true` shows volume and power buttons. Default `false`
| power | `service` | **Optional**| service to call when power button pressed
| volume_up | `service` | **Optional**| service to call when volume_up button pressed
| volume_down | `service` | **Optional**| service to call when volume_down button pressed
| back | `service` | **Optional**| service to call when back button pressed
| info        | `service` | **Optional**| service to call when info button pressed
| home | `service` | **Optional**| service to call when home button pressed
| up | `service` | **Optional**| service to call when up button pressed
| left | `service` | **Optional**| service to call when left button pressed
| select | `service` | **Optional**| service to call when select button pressed
| right | `service` | **Optional**| service to call when right button pressed
| down | `service` | **Optional**| service to call when down button pressed
| reverse | `service` | **Optional**| service to call when reverse button pressed
| play | `service` | **Optional**| service to call when play button pressed
| forward | `service` | **Optional**| service to call when forward button pressed
| source | `service` | **Optional**| service to call when source button pressed
| channelup | `service` | **Optional**| service to call when channelup button pressed
| channeldown | `service` | **Optional**| service to call when channeldown button pressed
| volume_up | `service` | **Optional**| service to call when volume up button pressed
| volume_down | `service` | **Optional**| service to call when volume down button pressed
| volume_mute | `service` | **Optional**| service to call when volume mute button pressed

## `service` Options
| Name | Type | Requirement | Description
| ---- | ---- | ------- | -----------
| service | string | **Required** | Service to call
| service_data | string | **Optional** | Service data to use


## Installation

### HACS:

1.

Add this to your `HACS settings tab`:

```
https://github.com/marrobHD/tv-card
```
![example](https://i.imgur.com/2urg4m2.png)

### Step 1

Install `tv-card` by copying `tv-card.js` and `tv-card-editor.js` from this repo to `<config directory>/www/tv-card.js` on your Home Assistant instance.

**Example:**

```bash
wget https://raw.githubusercontent.com/marrobHD/tv-card/master/tv-card.js
wget https://raw.githubusercontent.com/marrobHD/tv-card/master/tv-card-editor.js
mv tv-card* /config/www/
```

### Step 2

Link `tv-card` inside your `ui-lovelace.yaml`.

```yaml
resources:
  - url: /local/tv-card.js?v=1
    type: module
```

### Step 3

Add a custom element in your `ui-lovelace.yaml`

```yaml
      - type: custom:tv-card
        entity: sun.sun
        name: Bedroom TV
        tv: true
        power:
          service: switch.turn_on
          service_data:
            entity_id: switch.bedroom_tv_power
```

### Example 1:

You can use the card in combination with the [browser mod integration](https://github.com/thomasloven/hass-browser_mod).
That means that you can create a ex. input_boolean which opens when you click on its icon:

```yaml
type: entities
entities:
  - entity: input_boolean.tv
    name: TV
    tap_action:
      action: call-service
      service: browser_mod.popup
      service_data:
        style:
          border-radius: 20px
          '--ha-card-border-radius': 0px
        title: TV Fernbedienung
        card:
          type: 'custom:tv-card'
          entity: sun.sun
          back:
            service: broadlink.send
            service_data:
              host: 192.168.1.53
              packet: >-
                JgBGAJOVEzcROBI4ERQRFBEUERQRFBE5ETgSOBEUERQRFBEUEhMRFBEUERQROBI4ERQROBITEjgROBI4EhMSExI4ERQROBIADQUAAA==
          backs:
            service: androidtv.adb_command
            service_data:
              command: BACK
              entity_id: media_player.firetv
          channeldown:
            service: broadlink.send
            service_data:
              host: 192.168.1.53
              packet: >-
                JgBGAJOVEjgSNxI4EhMRFBEUERQRFBE5ETgSOBEUERQRFBEUERQRFBEUERQRFBE4EhMSExITEjgROBI4ETgSExI4ETgSOBIADQUAAA==
          channelup:
            service: broadlink.send
            service_data:
              host: 192.168.1.53
              packet: >-
                JgBGAJKWETgSOBE5ERQRFBETEhMSExI4ETkROBITEhMSExEUERQRFBE5ERQRFBE4EhMSExITETkSExE4EjgRFBE4EjgROBIADQUAAA==
          down:
            service: broadlink.send
            service_data:
              host: 192.168.1.53
              packet: >-
                JgBGAJOVEzcSOBE4EhMSExITEhMSExI4ETgSOBITERQRFBEUERQROBITExISExITEjgROBITExISOBE4EjgROREUEhMROBEADQUAAA==
          forward:
            service: broadlink.send
            service_data:
              host: 192.168.1.53
              packet: >-
                JgBGAJOVEjgSOBI3EhMSExITEhMSExI4ETgSOBEUERQRFBEUERQRFBEUERQSNxMSExISOBITETgTNxI4ERQROBI3EhQSNxIADQUAAA==
          home:
            service: broadlink.send
            service_data:
              host: 192.168.1.53
              packet: >-
                JgBGAJSUEjgROBI4ERQRFBEUERQRFBE4EjgSNxITExISExITExISOBITETgSOBEUETgSExMSEhMSOBEUERQROBITEjgROBIADQUAAA==
          info:
            service: broadlink.send
            service_data:
              host: 192.168.1.53
              packet: >-
                JgBGAJOVETgSOBE4EhMSExITEhMSExI4ETgTNxEUERQRFBEUERQROBI4EjgROBITEhMSOBEUERQRFBITERQROBI4ERQSNxEADQUAAA==
          left:
            service: broadlink.send
            service_data:
              host: 192.168.1.53
              packet: >-
                JgBGAJOVEzcSOBE4EhMSExITEhMSExE5ETgSOBITERQSExEUERQROBITEjgRFBEUETgSOBEUERQRORETEjgSOBEUERQROBIADQUAAA==
          play:
            service: broadlink.send
            service_data:
              host: 192.168.1.53
              packet: >-
                JgBGAJOVEjgSOBE4EhMSExITEhMSExI4ETgSOBITERQRFBEUERQROBI4EjcSExITEhMTNxEUERQRFBEUETgSOBE4EhMSOBIADQUAAA==
          power:
            service: broadlink.send
            service_data:
              host: 192.168.1.53
              packet: >-
                JgBGAJOWEjcSOBI3EhMTEhITEhMSExI4ETgSOBEUERQRFBEUERQRFBI3EhMSFBETEhMSExMSEjgSExE4EzcRORI3ETkROBIADQUAAA==
          remote: input_select.tv_input
          reverse:
            service: broadlink.send
            service_data:
              host: 192.168.1.53
              packet: >-
                JgBGAJOVETYUOBE5ERQRFBEUERQRFBE4ETkROBITEhMSExITEhMSOBEUETgSExITEhMSOBEUERQROBITEjgROBI4ERQROBMADQUAAA==
          right:
            service: broadlink.send
            service_data:
              host: 192.168.1.53
              packet: >-
                JgBGAJOVETkROBI4EhMRFBEUERQRFBE4EjgROBITEhMSExITEhMSExI4ERQRFBEUETgSOBEUETgSExI4ETgSOBEUERQROBIADQUAAA==
          select:
            service: broadlink.send
            service_data:
              host: 192.168.1.53
              packet: >-
                JgBGAJSVETgSOBE4EhMSExITEhMSExI4ETgSOBEUERQSExEUERQRFBEUERQROBITEjgROBMSEjgSNxM3EhMSOBEUERQROBEADQUAAA==
          source:
            service: broadlink.send
            service_data:
              host: 192.168.1.53
              packet: >-
                JgBGAJKXEDkRORA4EhQSExETEBYRFRA5EDgTOBAVDxcPFRAVEBURNxMTERQRFBITERQRFBEUERQQOhI2EjkQORE5EDkSNxEADQUAAA==
```

**Custom Updater:**

Add this to your `configuration.yaml`

```
custom_updater:
  card_urls:
    - https://raw.githubusercontent.com/marrobHD/tv-card/master/tracker.json
```


[Troubleshooting](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins)

[commits-shield]: https://img.shields.io/github/commit-activity/y/marrobHD/tv-card.svg?style=for-the-badge
[commits]: https://github.com/marrobHD/tv-card/commits/master
[discord]: https://discord.gg/ND4emRS
[discord-shield]: https://img.shields.io/discord/579704220970909717.svg?style=for-the-badge
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg?style=for-the-badge
[forum]: https://community.home-assistant.io/t/lovelace-tv-remote-card/91476
[license-shield]: https://img.shields.io/github/license/marrobHD/tv-card.svg?style=for-the-badge
[maintenance-shield]: https://img.shields.io/badge/maintainer-marrobHD-blue.svg?style=for-the-badge
[releases-shield]: https://img.shields.io/github/release/marrobHD/tv-card.svg?style=for-the-badge
[releases]: https://github.com/marrobHD/tv-card/releases
[twitter]: https://img.shields.io/twitter/follow/TechxHome.svg?style=social
[github]: https://img.shields.io/github/followers/marrobHD.svg?style=social
