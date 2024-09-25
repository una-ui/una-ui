type Prefix = 'animate'

export const staticAnimate: Record<`${Prefix}-${string}` | Prefix, string> = {
  // base
  'animate': '',

  'animate-base': '[&[data-state$=open]]:animate-in [&[data-state=closed]]:animate-out',
  'animate-default': `animate-base animate-duration-fast
    [&:not([data-animate]):not([animate])]:animate-fade-0
    [&:not([data-animate]):not([animate])]:animate-slide-2
    [&:not([data-animate]):not([animate])]:animate-zoom-95
  `,

  // static duration
  'animate-duration-fast': '[&[data-state$=open]]:animate-duration-250 [&[data-state=closed]]:animate-duration-250',
  'animate-duration-slow': '[&[data-state$=open]]:animate-duration-1s [&[data-state=closed]]:animate-duration-1s',
}

export const dynamicAnimate: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset

  // unocss doesn't like multiple data-xxx variants
  [/^animate-slide(-[^-]+)?$/, ([,value = '']) => `
    [&[data-side=bottom]]:animate-slide-from-top${value}
    [&[data-side=left]]:animate-slide-from-right${value}
    [&[data-side=right]]:animate-slide-from-left${value}
    [&[data-side=top]]:animate-slide-from-bottom${value}
  `],
  [/^animate-slide-from-(top|left|right|bottom)(-[^-]+)?$/, ([,dir, value = '']) => `
    data-[state$=open]:slide-in-from-${dir}${value}
    data-[state=closed]:slide-out-to-${dir}${value}
  `],
  [/^animate-fade(-[^-]+)?$/, ([,opac = '']) => `
    data-[state$=open]:fade-in${opac}
    data-[state=closed]:fade-out${opac}
  `],
  [/^animate-zoom(-[^-]+)?$/, ([,level = '']) => `
    data-[state$=open]:zoom-in${level}
    data-[state=closed]:zoom-out${level}
  `],
  [/^animate-spin(-[^-]+)?$/, ([,value = '']) => `
    data-[state$=open]:spin-in${value}
    data-[state=closed]:spin-out${value}
  `],

  // data- alias for attributify
  [/^data-animate-(.+)$/, ([,value]) => `animate-${value}`],
]

export const animate = [
  ...dynamicAnimate,
  staticAnimate,
]
