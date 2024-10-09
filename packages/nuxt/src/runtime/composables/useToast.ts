import type { Ref } from 'vue'
import type { Toaster } from '../types'
import { useState } from '#app'

interface ToastReturn {
  toasts: Ref<Toaster[]>
  add: (toast: Partial<Toaster>) => void
  update: (id: string, toast: Partial<Toaster>) => void
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
    const index = toasts.value.findIndex(t => t.id === body.id)
    if (index === -1) {
      toasts.value.push(body)
    }

    return body
  }

  function update(id: string, toast: Partial<Toaster>): void {
    const updateToastOne = toasts.value.find(t => t.id === id)
    if (updateToastOne) {
      Object.assign(updateToastOne, toast)
    }
  }

  const remove = (id: string): void => {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }

  const clear = (): void => {
    toasts.value = []
  }

  return {
    toasts,
    add,
    update,
    remove,
    clear,
  }
}
