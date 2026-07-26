import type { ExternalToast } from 'vue-sonner'
import type { NToastProps } from '../types'
import { markRaw } from 'vue'
import { toast as sonner } from 'vue-sonner'
import Toast from '../components/overlays/toast/Toast.vue'

type RichOptions = ExternalToast & Pick<NToastProps, 'actions' | 'showProgress' | 'progress' | 'leading' | 'una'>
type ToastType = NToastProps['type']

/**
 * Anything with a button or a progress bar renders through our own component, so
 * the buttons are real `Button`s carrying `btn` variants rather than sonner's
 * internal `[data-button]`, which can only be reached with class overrides.
 */
function isRich(opts?: RichOptions) {
  return Boolean(opts && ((opts.actions?.length ?? 0) > 0 || opts.action || opts.cancel || opts.showProgress))
}

function rich(message: string, opts: RichOptions, type?: ToastType) {
  const { actions, action, cancel, showProgress, progress, leading, una, description, ...rest } = opts
  const duration = rest.duration ?? 4000

  // sonner's single `action`/`cancel` are folded into the array so every button
  // takes the same path — a real `Button` with a `btn` variant
  const paired = [
    ...(action ? [{ ...action as object, btn: 'outline-gray' }] : []),
    ...(cancel ? [{ ...cancel as object, btn: 'ghost-gray' }] : []),
  ]
  const resolved = [...paired, ...(actions ?? [])] as NToastProps['actions']

  // sonner renders its own action/cancel pair inline, so keep that shape rather
  // than stacking them — `actions[]` is una's own superset and still stacks.
  const inlineActions = paired.length > 0 && !actions?.length

  return sonner.custom(markRaw(Toast) as any, {
    ...rest,
    duration,
    componentProps: {
      type,
      title: message,
      description,
      actions: resolved,
      inlineActions,
      showProgress,
      progress,
      leading,
      una,
      duration,
    },
  } as any)
}

function create(type?: ToastType) {
  return (message: string, opts?: RichOptions) => {
    if (isRich(opts))
      return rich(message, opts!, type)
    return type ? sonner[type](message, opts) : sonner(message, opts)
  }
}

/** vue-sonner's `toast`, with `actions[]` and `showProgress` added. */
const toast = Object.assign(create(), sonner, {
  success: create('success'),
  error: create('error'),
  warning: create('warning'),
  info: create('info'),
  loading: create('loading'),
})

interface UseToast {
  toast: typeof toast
  /** Dismiss a toast by id, or every toast when called with no argument. */
  dismiss: typeof sonner.dismiss
}

function useToast(): UseToast {
  return {
    toast,
    dismiss: sonner.dismiss,
  }
}

export { toast, useToast }
