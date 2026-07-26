import { toast } from 'vue-sonner'

interface UseToast {
  /** vue-sonner's `toast`, exposed verbatim. */
  toast: typeof toast
  /** Dismiss a toast by id, or every toast when called with no argument. */
  dismiss: typeof toast.dismiss
}

function useToast(): UseToast {
  return {
    toast,
    dismiss: toast.dismiss,
  }
}

export { toast, useToast }
