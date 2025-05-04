import { useId } from 'vue'

export * from './cn'

export function rgbToHex(r: number, g: number, b: number): string {
  return `#${[r, g, b].map((x) => {
    const hex = x.toString(16)
    return hex.length === 1 ? `0${hex}` : hex
  }).join('')}`
}

export function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  if (!result)
    throw new Error(`Invalid hex color: ${hex}`)

  return [
    Number.parseInt(result[1], 16),
    Number.parseInt(result[2], 16),
    Number.parseInt(result[3], 16),
  ]
}

export function randomId(prefix: string): string {
  return `una-${prefix}-${useId()}`
}

export function omitProps<T extends Record<string, any>>(obj: T, propsToOmit: Array<keyof T>): Partial<T> {
  const newObj = { ...obj }
  propsToOmit.forEach(prop => delete newObj[prop])
  return newObj
}

export function pickProps<T extends Record<string, any>>(obj: T, propsToPick: Array<keyof T>): Partial<T> {
  const newObj: Partial<T> = {}
  propsToPick.forEach(prop => newObj[prop] = obj[prop])
  return newObj
}

/**
 * Get a value from an object by path
 * @param object - object to get value from
 * @param path - path to get value from
 * @param defaultValue - default value to return if path is not found
 * @returns value from object by path
 */
export function getValue(object: Record<string, any> | undefined, path: (string | number)[] | string, defaultValue?: any): any {
  if (typeof path === 'string') {
    path = path.split('.').map((key) => {
      const numKey = Number(key)
      return Number.isNaN(numKey) ? key : numKey
    })
  }

  let result: any = object

  for (const key of path) {
    if (result === undefined || result === null) {
      return defaultValue
    }

    result = result[key]
  }

  return result !== undefined ? result : defaultValue
}

/**
 * We want to get the first non-undefined value,
 * useful for arguments with multiple sources (local, global, default),
 * this is basically an alternative for `local ?? global ?? default`.
 * I prefer this approach because it's more readable and easier to extend for more sources.
 *
 * @param args - values to check
 * @example
 * ```ts
 * const value = getPriority(specificValue, globalValue, defaultValue)
 * ```
 * @returns first non-undefined value
 */
export function getPriority<T>(...args: (T | undefined)[]): T | undefined {
  for (const arg of args) {
    if (arg !== undefined)
      return arg
  }

  return undefined
}

/**
 * Check if all objects are equal
 * @param objects - objects to compare
 * @returns true if all objects are equal
 * @example
 * ```ts
 * const equal = isEqualObject({ a: 1 }, { a: 1 }, { a: 1 })
 * ```
 */
export function isEqualObject(...objects: Record<string, any>[]): boolean {
  return objects.every((obj, i) => {
    if (i === 0)
      return true

    return JSON.stringify(obj) === JSON.stringify(objects[i - 1])
  })
}
