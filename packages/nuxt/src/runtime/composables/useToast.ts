import type { Ref } from 'vue'
import type { NToastProps } from '../types'
import { useState } from '#app'

type Toaster = NToastProps & {
  id: string
}

interface ToastReturn {
  toasts: Ref<Toaster[]>
  add: (toast: Partial<Toaster>) => void
  remove: (id: string) => void
  clear: () => void
}

export function useToast(): ToastReturn {
  const toasts = useState<Toaster[]>('toasts', () => [])

  const add = (toast: Partial<Toaster>): Partial<Toaster> => {
    const body = {
      id: new Date().getTime().toString(),
      ...toast,
    }

    const index = toasts.value.findIndex((t: Toaster) => t.id === body.id)
    if (index === -1) {
      toasts.value.push(body as Toaster)
    }

    return body
  }

  const remove = (id: string): void => {
    toasts.value = toasts.value.filter((t: Toaster) => t.id !== id)
  }

  const clear = (): void => {
    toasts.value = []
  }

  return {
    toasts,
    add,
    remove,
    clear,
  }
}
