import type { ExternalToast } from 'vue-sonner'
import type { NToastProps } from '../types'
import { markRaw } from 'vue'
import { toast as sonner } from 'vue-sonner'
import Toast from '../components/overlays/toast/Toast.vue'

type RichOptions = ExternalToast & Pick<NToastProps, 'actions' | 'showProgress' | 'progress' | 'leading' | 'una'>
type ToastType = NToastProps['type']

/** vue-sonner has one `action` + one `cancel` and no progress bar; these need a custom toast. */
function isRich(opts?: RichOptions) {
  return Boolean(opts && ((opts.actions?.length ?? 0) > 0 || opts.showProgress))
}

function rich(message: string, opts: RichOptions, type?: ToastType) {
  const { actions, showProgress, progress, leading, una, description, ...rest } = opts
  const duration = rest.duration ?? 4000

  return sonner.custom(markRaw(Toast) as any, {
    ...rest,
    duration,
    componentProps: {
      type,
      title: message,
      description,
      actions,
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
