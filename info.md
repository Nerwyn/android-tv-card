**Sample overview:**

![Sample overview](https://github.com/marrobHD/tv-card/blob/master/KOLwmt1vGh.png)

Add this to your lovelace configuration:

```yaml
type: custom:tv-card
entity: sun.sun
name: Bedroom TV
tv: true
power:
  service: switch.turn_on
  service_data:
    entity_id: switch.bedroom_tv_power
```

Look at [README](https://github.com/marrobHD/tv-card/blob/master/README.md) for more information
