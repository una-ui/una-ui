import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  // TODO: Implement presetUno merge
  // eg: return unoMerge(clsx(inputs))
  return twMerge(clsx(inputs))
}
