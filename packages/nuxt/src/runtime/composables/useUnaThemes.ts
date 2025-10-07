import type { Colors } from '../types'
import { getGrayColors, getPrimaryColors, grayThemes, primaryThemes } from '../utils/colors'

export interface UseUnaThemesReturn {
  primaryThemes: [string, Colors][]
  grayThemes: [string, Colors][]
  getPrimaryColors: (color: string) => Colors
  getGrayColors: (color: string) => Colors
}

export function useUnaThemes(): UseUnaThemesReturn {
  return {
    primaryThemes,
    grayThemes,
    getPrimaryColors,
    getGrayColors,
  }
}
