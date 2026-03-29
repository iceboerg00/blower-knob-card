# Blower Knob Card

Circular, native-feeling Lovelace control for `fan`, `number`, and `input_number` entities. Theme-aware, responsive, mouse/touch friendly, and ready for HACS as a **Dashboard (plugin)** repository.

![preview](https://via.placeholder.com/1200x600.png?text=Blower+Knob+Card+Preview)

## Features
- Smooth circular knob with progress ring, mouse/touch drag, and keyboard-friendly buttons.
- Auto-detects entity domain (`fan`, `number`, `input_number`) with optional `entity_type` override.
- Reads `min`, `max`, `step` from entity attributes or config.
- Fan support: toggle on/off, set percentage via `fan.set_percentage`.
- Number/input_number support: uses `set_value`.
- Light/dark aware, uses HA theme variables.

## Installation

### HACS (Custom Repository)
1. In Home Assistant open **HACS → 3‑dot menu → Custom repositories**.
2. Repository URL: `https://github.com/<your-account>/blower-knob-card`
3. Type: **Dashboard** (HACS backend name: `plugin`).
4. Add, then install the card from the HACS list.
5. Make sure you install a **Release** (not just a tag) so HACS can track versions cleanly.

### Manual
1. Download the latest release asset `blower-knob-card.js` from GitHub Releases.
2. Place it in `config/www/blower-knob-card.js`.
3. Add a Lovelace resource (Settings → Dashboards → Resources):
   - URL: `/local/blower-knob-card.js`
   - Resource type: `JavaScript Module`

## Usage

```yaml
type: custom:blower-knob-card
entity: fan.growroom_blower
name: Blower
icon: mdi:fan
show_state: true
show_percentage: true
show_buttons: true
```

Number/input_number example:

```yaml
type: custom:blower-knob-card
entity: input_number.blower_speed
name: Blower Speed
min: 0
max: 100
step: 1
show_buttons: true
```

Optional keys:
- `entity_type`: `fan` | `number` | `input_number` (override auto-detect)
- `show_state` (default `true`)
- `show_percentage` (fan only, default `true`)
- `show_buttons` (default `true`)
- `show_secondary` (fan power pill, default `true`)

## Development
```bash
npm ci
npm run build
```
Build output: `dist/blower-knob-card.js` (minified, sourcemap).

## Release workflow
Push a tag like `v1.0.0`. GitHub Actions will:
1. Install deps
2. Build
3. Attach `dist/blower-knob-card.js` to the release

## HACS metadata
- `hacs.json` points to `blower-knob-card.js`
- Release artifacts live in `dist/`
- Validation workflow uses HACS action with category `plugin`

## License
MIT – see [LICENSE](LICENSE).
