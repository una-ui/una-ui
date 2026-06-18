type FormPrefix = 'form'

export const staticForm: Record<`${FormPrefix}-${string}` | FormPrefix, string> = {
  // base
  'form': '',

  'form-field': '',
  'form-field-description': 'text-muted-foreground',
  'form-field-hint': 'text-sm leading-none text-muted-foreground',
  'form-field-message': '',

  // wrappers
  'form-field-top-wrapper': 'flex flex-col space-y-1.5 pb-0.5',
  'form-field-top-wrapper-inner': 'flex justify-between items-end space-x-1.5',
  'form-field-bottom-wrapper': 'flex space-x-1.5 justify-between items-start',
  'form-field-message-wrapper': '',

  // label
  'form-field-label-wrapper': 'flex',
  'form-field-label': 'block',
  'form-field-label-required': 'after:content-[\'*\'] after:-ms-0.9 after:text-error',

  'form-message': 'text-0.8rem font-medium transition-all duration-1000 ease-in-out text-error',
  'form-label': '',
  'form-description': 'text-sm text-muted-foreground',
  'form-item': 'space-y-2',
}

export const form = [
  staticForm,
]
