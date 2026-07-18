# Una UI

A Vue/Nuxt UI component library built on UnoCSS. Users theme their app at runtime through the ThemeSwitcher, which persists choices to a `una-settings` store.

## Language

### Settings

**Setting**:
A single user-configurable theming value persisted in `una-settings` and applied as a CSS custom property on the document root.

**Aesthetic Setting**:
A Setting that changes visual style without affecting readability or scale — Primary Color, Gray Color, Radius. These are the only Settings included in Shuffle.
_Avoid_: style setting, theme setting

**Comfort Setting**:
A Setting tied to readability or accessibility that reflects a deliberate user choice — Font Size. Never randomized by Shuffle, because a surprise change would undo the user's intent.
_Avoid_: accessibility setting, a11y setting

**Preset**:
A labeled choice offered for a Setting (e.g. "Larger" → 18 for Font Size). Presets are app configuration, not user state — they are never persisted with Settings.
_Avoid_: option, step, tier

### Values

**Font Size**:
The root `html` font-size in pixels (`--una-font-size`). Because component dimensions are expressed in `rem`, changing it rescales the entire UI, not just text. A Comfort Setting.
_Avoid_: text size, scale, zoom

**Radius**:
The base corner radius in rem (`--una-radius`). An Aesthetic Setting.

**Primary Color** / **Gray Color**:
The named theme palettes driving `--una-primary-*` / `--una-gray-*` custom properties. Aesthetic Settings.

### Actions

**Shuffle**:
Randomizes every Aesthetic Setting at once (Primary Color, Gray Color, Radius). Deliberately excludes Comfort Settings.

**Reset**:
Restores all Settings — Aesthetic and Comfort — to their configured defaults.
