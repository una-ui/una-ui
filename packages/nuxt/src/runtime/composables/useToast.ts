import type { Component } from 'vue'
import type { ExternalToast } from 'vue-sonner'
import type { NToastAction, NToastProps } from '../types'
import { markRaw } from 'vue'
import { toast as sonner } from 'vue-sonner'
import Toast from '../components/overlays/toast/Toast.vue'

type RichOptions = Omit<ExternalToast, 'action' | 'cancel'>
  & Pick<NToastProps, 'actions' | 'showProgress' | 'progress' | 'leading' | 'una'>
  & {
    /** Single button, inline with the text. Any `NButton` prop works. */
    action?: NToastAction
    /** Single dismissing button, inline with the text. */
    cancel?: NToastAction
  }
type ToastType = NToastProps['type']

/**
 * Anything una-specific renders through our own component, so buttons are real
 * `Button`s carrying `btn` variants rather than sonner's `[data-button]`, which
 * is reachable only through class overrides.
 */
function isRich(opts?: RichOptions) {
  return Boolean(opts && ((opts.actions?.length ?? 0) > 0 || opts.action || opts.cancel || opts.showProgress || opts.leading || opts.una))
}

function rich(message: string, opts: RichOptions, type?: ToastType) {
  const { actions, action, cancel, showProgress, progress, leading, una, description, closeButton, ...rest } = opts
  // only the bar needs a concrete duration; otherwise leave it to the Toaster
  const duration = rest.duration ?? (showProgress ? 4000 : undefined)

  const paired: NToastAction[] = [
    ...(action ? [{ btn: 'outline-gray', ...action }] : []),
    ...(cancel ? [{ btn: 'ghost-gray', ...cancel }] : []),
  ]
  const resolved = [...paired, ...(actions ?? [])]

  // sonner renders its own action/cancel pair inline; `actions[]` is una's
  // superset and still stacks
  const inlineActions = paired.length > 0 && !actions?.length

  const componentProps: NToastProps = {
    type,
    title: message,
    description: description as string,
    actions: resolved,
    inlineActions,
    showProgress,
    progress,
    leading,
    una,
    duration,
    // pulled out of `rest`: sonner ignores it for custom components, so the
    // component resolves it itself against the Toaster's setting
    closeButton,
  }

  return sonner.custom(markRaw(Toast) as Component, { ...rest, duration, componentProps })
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
