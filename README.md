# TV Remote Card

[![GitHub Release][releases-shield]][releases]
[![License][license-shield]](LICENSE.md)

![Project Maintenance][maintenance-shield]
[![GitHub Activity][commits-shield]][commits]
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)
[![Discord][discord-shield]][discord]
[![Community Forum][forum-shield]][forum]

[![Github][github]][github]


## Demo:
<img src="KOLwmt1vGh.png" alt="ex" width="200"/>

## Options

| Name | Type | Requirement | Description
| ---- | ---- | ------- | -----------
| type | string | **Required** | `custom:tv-card`
| entity | string | **Required** | `random` entity
| remote | string | **Optional** | `remote` entity of Roku device. Default assume named like `entity`
| name | string | **Optional** | Card name
| theme | string | **Optional** | Card theme
| tv | boolean | **Optional** | If `true` shows volume and power buttons. Default `false`
| power | `service` | **Optional, Exclusive**| service to call when power button pressed. When `power` defined, `power_on` and `power_off` are disabled, even when defined
| power_on | `service` | **Optional, Exclusive**| service to call when power_on button pressed. Only enabled if no `power` defined.
| power_off | `service` | **Optional, Exclusive**| service to call when power_off button pressed. Only enabled if no `power` defined.
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
| netflix | `service` | **Optional**| service to call when netflix button pressed
| prime_video | `service` | **Optional**| service to call when prime video button pressed
| youtube | `service` | **Optional**| service to call when youtube button pressed

## `service` Options
| Name | Type | Requirement | Description
| ---- | ---- | ------- | -----------
| service | string | **Required** | Service to call
| service_data | string | **Optional** | Service data to use


## Installation

### Step 1:
Install using HACS or [see this guide](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins).

### Step 2:

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
That means that you can create an input_boolean which opens a popup when you click its icon:

```yaml
type: entities
entities:
  - entity: input_boolean.tv
    name: TV
    tap_action:
      action: fire-dom-event
      browser_mod:
        command: popup
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
[github]: https://img.shields.io/github/followers/marrobHD.svg?style=social
