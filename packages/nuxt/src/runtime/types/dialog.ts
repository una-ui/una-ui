import type { DialogRootProps, DialogTitleProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

export interface NDialogProps extends DialogRootProps {
  title?: string
  description?: string

  // sub-components
  _dialogTitle?: NDialogTitleProps
  // add more eg. dialogContent, dialogFooter, etc.

  una?: NDialogUnaProps
}

export interface NDialogTitleProps extends DialogTitleProps {
}

// add more sub-components based on the dialog sub-component structure eg. dialogContent, dialogFooter, etc.

export

interface NDialogUnaProps {
  dialogTitle?: HTMLAttributes['class']
  // add more eg. dialogContent, dialogFooter, etc.
}
