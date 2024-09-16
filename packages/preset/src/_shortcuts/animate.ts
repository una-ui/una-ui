type KbdPrefix = 'animate'

export const staticAnimate: Record<`${KbdPrefix}-${string}` | KbdPrefix, string> = {
  // base
  'animate': '[&[data-state=open]]:animate-in [&[data-state=closed]]:animate-out',

  // speed
  'animate-fast': 'animate-duration-250!',
  'animate-slow': 'animate-duration-1s!',

  'animate-slide': 'animate-slide-100%',
  'animate-slide-from-top': 'animate-slide-from-top-100%',
  'animate-slide-from-bottom': 'animate-slide-from-bottom-100%',
  'animate-slide-from-left': 'animate-slide-from-left-100%',
  'animate-slide-from-right': 'animate-slide-from-right-100%',

  'animate-fade': 'animate-fade-0',
  'animate-zoom': 'animate-zoom-95',
}

export const dynamicAnimate: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset

  // unocss doesn't like multiple data-xxx variants
  [/^animate-slide-([^-]+)$/, ([,value]) => `
    [&[data-state=open]]:[&[data-side=bottom]]:slide-in-top-${value}
    [&[data-state=open]]:[&[data-side=left]]:slide-in-right-${value}
    [&[data-state=open]]:[&[data-side=right]]:slide-in-left-${value}
    [&[data-state=open]]:[&[data-side=top]]:slide-in-bottom-${value}
    [&[data-state=closed]]:[&[data-side=bottom]]:slide-out-top-${value}
    [&[data-state=closed]]:[&[data-side=left]]:slide-out-right-${value}
    [&[data-state=closed]]:[&[data-side=right]]:slide-out-left-${value}
    [&[data-state=closed]]:[&[data-side=top]]:slide-out-bottom-${value}
  `],
  [/^animate-slide-from-(top|left|right|bottom)-([^-]+)$/, ([,dir, value]) => `
    data-[state=open]:slide-in-from-${dir}-${value}
    data-[state=closed]:slide-out-from-${dir}-${value}
  `],
  [/^animate-fade(?:-([^-]+))?$/, ([,opac]) => `
    data-[state=open]:fade-in${opac && `-${opac}`}
    data-[state=closed]:fade-out${opac && `-${opac}`}
  `],
  [/^animate-zoom(?:-([^-]+))?$/, ([,level]) => `
    data-[state=closed]:zoom-out${level && `-${level}`}
    data-[state=open]:zoom-in${level && `-${level}`}
  `],
]

export const animate = [
  ...dynamicAnimate,
  staticAnimate,
]
