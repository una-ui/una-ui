import type { UnaFontSizePreset } from './types'

export const RADIUS = [0, 0.25, 0.375, 0.5, 0.625, 0.75, 1] as const

export const DEFAULT_FONT_SIZE_PRESETS: UnaFontSizePreset[] = [
  { label: 'Smaller', value: 14 },
  { label: 'Small', value: 15 },
  { label: 'Default', value: 16 },
  { label: 'Large', value: 17 },
  { label: 'Larger', value: 18 },
]
