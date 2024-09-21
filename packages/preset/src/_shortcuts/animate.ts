type Prefix = 'animate'

export const staticAnimate: Record<`${Prefix}-${string}` | Prefix, string> = {
  // base
  'animate': '',

  'animate-base': '[&[data-state$=open]]:animate-in [&[data-state=closed]]:animate-out',
  'animate-default': 'animate-base animate-duration-fast [&:not([data-animate]):not([animate])]:animate-fade [&:not([data-animate]):not([animate])]:animate-slide-2',

  // static duration
  'animate-duration-fast': 'animate-base animate-duration-250',
  'animate-duration-slow': 'animate-base animate-duration-1s',
}

export const dynamicAnimate: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset

  // unocss doesn't like multiple data-xxx variants
  [/^animate-slide(-[^-]+)?$/, ([,value = '']) => `
    [&[data-state$=open]]:[&[data-side=bottom]]:slide-in-top${value}
    [&[data-state$=open]]:[&[data-side=left]]:slide-in-right${value}
    [&[data-state$=open]]:[&[data-side=right]]:slide-in-left${value}
    [&[data-state$=open]]:[&[data-side=top]]:slide-in-bottom${value}

    [&[data-state=closed]]:[&[data-side=bottom]]:slide-out-top${value}
    [&[data-state=closed]]:[&[data-side=left]]:slide-out-right${value}
    [&[data-state=closed]]:[&[data-side=right]]:slide-out-left${value}
    [&[data-state=closed]]:[&[data-side=top]]:slide-out-bottom${value}
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

  // dynamic duration
  [/^animate-duration(-[^-]+)?$/, ([,value = '150']) => `
    animate-base !animate-duration${value}
  `],
  [/^data-animate-(.+)$/, ([,value]) => `animate-${value}`],
]

export const animate = [
  ...dynamicAnimate,
  staticAnimate,
]
