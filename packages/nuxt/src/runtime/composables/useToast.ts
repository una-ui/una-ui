import type { ComputedRef, VNode } from 'vue'
import type { NToastProps } from '../types'
import { computed, ref } from 'vue'

const TOAST_LIMIT = 10
const TOAST_REMOVE_DELAY = 1000000

export type StringOrVNode =
  | string
  | VNode
  | (() => VNode)

type ToasterToast = NToastProps & {
  id: string
  title?: string
  description?: StringOrVNode
  actions?: NToastProps[]
}

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
    type: ActionType['ADD_TOAST']
    toast: ToasterToast
  }
  | {
    type: ActionType['UPDATE_TOAST']
    toast: Partial<ToasterToast>
  }
  | {
    type: ActionType['DISMISS_TOAST']
    toastId?: ToasterToast['id']
  }
  | {
    type: ActionType['REMOVE_TOAST']
    toastId?: ToasterToast['id']
  }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

function addToRemoveQueue(toastId: string) {
  if (toastTimeouts.has(toastId))
    return

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: actionTypes.REMOVE_TOAST,
      toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

const state = ref<State>({
  toasts: [],
})

function dispatch(action: Action) {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      state.value.toasts = [action.toast, ...state.value.toasts].slice(0, TOAST_LIMIT)
      break

    case actionTypes.UPDATE_TOAST:
      state.value.toasts = state.value.toasts.map(t =>
        t.id === action.toast.id ? { ...t, ...action.toast } : t,
      )
      break

    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action

      if (toastId) {
        addToRemoveQueue(toastId)
      }
      else {
        state.value.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      state.value.toasts = state.value.toasts.map(t =>
        t.id === toastId || toastId === undefined
          ? {
              ...t,
              open: false,
            }
          : t,
      )
      break
    }

    case actionTypes.REMOVE_TOAST:
      if (action.toastId === undefined)
        state.value.toasts = []
      else
        state.value.toasts = state.value.toasts.filter(t => t.id !== action.toastId)

      break
  }
}

type Toast = Omit<ToasterToast, 'id'>

function toast(props: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: actionTypes.UPDATE_TOAST,
      toast: { ...props, id },
    })

  const dismiss = () => dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id })

  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open: boolean) => {
        if (!open)
          dismiss()
      },
    },
  })

  return {
    id,
    dismiss,
    update,
  }
}

interface ToastReturn {
  id: string
  dismiss: () => void
  update: (props: ToasterToast) => void
}

type ToastPresetFunction = (message: string, props?: Omit<Toast, 'toast' | 'title'>) => ToastReturn

interface UseToast {
  toasts: ComputedRef<ToasterToast[]>
  toast: ((props: Toast) => ToastReturn) & {
    success: ToastPresetFunction
    error: ToastPresetFunction
    warning: ToastPresetFunction
    info: ToastPresetFunction
    loading: ToastPresetFunction
  }
  dismiss: (toastId?: string) => void
}

// @unocss-include

function useToast(): UseToast {
  const toastWithPreset = Object.assign(toast, {
    success: (message: string, props?: Omit<Toast, 'toast'>) => toast({ toast: 'solid-success', title: message, ...props }),
    error: (message: string, props?: Omit<Toast, 'toast'>) => toast({ toast: 'soft-error', title: message, ...props }),
    warning: (message: string, props?: Omit<Toast, 'toast'>) => toast({ toast: 'solid-warning', title: message, ...props }),
    info: (message: string, props?: Omit<Toast, 'toast'>) => toast({ toast: 'solid-info', title: message, ...props }),
    loading: (message: string, props?: Omit<Toast, 'toast'>) => toast({ toast: 'solid-loading', title: message, ...props }),
  })

  return {
    toasts: computed(() => state.value.toasts),
    toast: toastWithPreset,
    dismiss: (toastId?: string) => dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
  }
}

export { toast, useToast }
