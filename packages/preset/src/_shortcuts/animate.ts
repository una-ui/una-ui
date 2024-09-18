type Prefix = 'data-animate'

export const staticAnimate: Record<`${Prefix}-${string}` | Prefix, string> = {
  // base
  'data-animate': '',

  'data-animate-base': '[&[data-state=open]]:animate-in [&[data-state=closed]]:animate-out',

  // static duration
  'data-animate-duration-fast': 'animate-duration-250!',
  'data-animate-duration-slow': 'animate-duration-1s!',
}

export const dynamicAnimate: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset

  // unocss doesn't like multiple data-xxx variants
  [/^data-animate-slide(-[^-]+)?$/, ([,value = '']) => `
    data-animate-base 

    [&[data-state=open]]:[&[data-side=bottom]]:slide-in-top${value}
    [&[data-state=open]]:[&[data-side=left]]:slide-in-right${value}
    [&[data-state=open]]:[&[data-side=right]]:slide-in-left${value}
    [&[data-state=open]]:[&[data-side=top]]:slide-in-bottom${value}

    [&[data-state=closed]]:[&[data-side=bottom]]:slide-out-top${value}
    [&[data-state=closed]]:[&[data-side=left]]:slide-out-right${value}
    [&[data-state=closed]]:[&[data-side=right]]:slide-out-left${value}
    [&[data-state=closed]]:[&[data-side=top]]:slide-out-bottom${value}
  `],
  [/^data-animate-slide-from-(top|left|right|bottom)(-[^-]+)?$/, ([,dir, value = '']) => `
    data-animate-base 
    data-[state=open]:slide-in-from-${dir}${value}
    data-[state=closed]:slide-out-to-${dir}${value}
  `],
  [/^data-animate-fade(-[^-]+)?$/, ([,opac = '']) => `
    data-animate-base 

    data-[state=open]:fade-in${opac}
    data-[state=closed]:fade-out${opac}
  `],
  [/^data-animate-zoom(-[^-]+)?$/, ([,level = '']) => `
    data-animate-base 

    data-[state=open]:zoom-in${level}
    data-[state=closed]:zoom-out${level}
  `],

  // dynamic duration
  [/^data-animate-duration(-[^-]+)?$/, ([,value = '150']) => `
    !animate-duration${value}
  `],
]

export const animate = [
  ...dynamicAnimate,
  staticAnimate,
]
