type AlertPrefix = 'alert'

export const staticAlert: Record<`${AlertPrefix}-${string}` | AlertPrefix, string> = {
  // config
  'alert-info-icon': 'i-lucide-info',
  'alert-error-icon': 'i-lucide-circle-alert',
  'alert-success-icon': 'i-lucide-circle-check',
  'alert-warning-icon': 'i-lucide-triangle-alert',
  'alert-close-icon': 'i-lucide-x',

  // base
  'alert': 'rounded-lg relative grid grid-cols-[0_1fr] w-full items-start gap-y-0.14285714285714285em px-4 py-3 text-0.875em leading-1.4285714285714286em has-[>span[icon-base]]:grid-cols-[calc(var(--spacing)*4)_1fr] [&>span[icon-base]]:translate-y-0.5 has-[>span[icon-base]]:gap-x-0.8571428571428571em [&>span[icon-base]]:text-current [&>span[icon-base]]:square-1.1428571428571428em',
  'alert-title': 'col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight',
  'alert-description': 'text-muted-foreground col-start-2 grid justify-items-start gap-0.017857142857142856em text-0.875em leading-1.4285714285714286em [&_p]:leading-relaxed',
  'alert-close-wrapper': 'absolute right-3 top-3',

  // static variants
  'alert-solid-primary': ' bg-primary text-primary-foreground [&_[data-slot="alert-description"]]:text-primary-foreground/90',
  'alert-solid-gray': ' bg-secondary border text-secondary-foreground [&_[data-slot="alert-description"]]:text-secondary-foreground/90',
  'alert-solid-white': ' border text-foreground bg-background [&_[data-slot="alert-description"]]:text-foreground',
  'alert-solid-black': ' text-background bg-foreground [&_[data-slot="alert-description"]]:text-background',

  'alert-soft-gray': ' border bg-card text-card-foreground [&_[data-slot="alert-description"]]:text-card-foreground/90',
  'alert-soft-primary': ' bg-primary/10 text-primary [&_[data-slot="alert-description"]]:text-primary/90',

  'alert-outline-gray': ' bg-background border text-card-foreground [&_[data-slot="alert-description"]]:text-card-foreground/90',
  'alert-outline-primary': 'bg-background border border-primary/90 text-primary [&_[data-slot="alert-description"]]:text-primary/90',

  'alert-text-gray': ' border bg-card text-card-foreground',
  'alert-text-primary': 'border border-border bg-card text-primary [&_[data-slot="alert-description"]]:text-primary/90',

  'alert-border-gray': 'border-l-4 rounded-none bg-card text-card-foreground [&_[data-slot="alert-description"]]:text-card-foreground/90',
  'alert-border-primary': 'border-l-4 rounded-0 border-primary/90 bg-primary/10 text-primary [&_[data-slot="alert-description"]]:text-primary/90',
}

export const dynamicAlert: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic variants
  [/^alert-border(-(\S+))?$/, ([, , c = 'primary']) => `rounded-none border-l-4 border-${c}-600 dark:border-${c}-500 bg-${c}-50 dark:bg-${c}-950 text-${c}-900 dark:text-${c}-100 [&_[data-slot="alert-description"]]:text-${c}-900/90 dark:[&_[data-slot="alert-description"]]:text-${c}-100/90`],
  [/^alert-solid(-(\S+))?$/, ([, , c = 'primary']) => ` bg-${c}-600 dark:bg-${c}-500 text-background [&_[data-slot="alert-description"]]:text-background/90`],
  [/^alert-outline(-(\S+))?$/, ([, , c = 'primary']) => ` bg-background border border-${c}-600 dark:border-${c}-500 text-${c}-600 dark:text-${c}-500 [&_[data-slot="alert-description"]]:text-${c}-600/90 dark:[&_[data-slot="alert-description"]]:text-${c}-500/90`],
  [/^alert-soft(-(\S+))?$/, ([, , c = 'primary']) => ` border-${c}-50 bg-${c}-50 text-${c}-900 dark:border-${c}-950 dark:bg-${c}-950 dark:text-${c}-100 [&_[data-slot="alert-description"]]:text-${c}-900/90 dark:[&_[data-slot="alert-description"]]:text-${c}-100/90`],
  [/^alert-text(-(\S+))?$/, ([, , c = 'primary']) => ` border bg-card text-${c}-600 dark:text-${c}-500 [&_[data-slot="alert-description"]]:text-${c}-600/90 dark:[&_[data-slot="alert-description"]]:text-${c}-500/90`],
]

export const alert = [
  ...dynamicAlert,
  staticAlert,
]
