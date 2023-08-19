export interface Colors {
  [key: string]: Colors & { DEFAULT?: string } | string
}

export interface Theme {
  colors?: Colors
}
