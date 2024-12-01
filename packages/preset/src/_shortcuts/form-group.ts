type FormGroupPrefix = 'form-group'

export const staticFormGroup: Record<`${FormGroupPrefix}-${string}` | FormGroupPrefix, string> = {
  // base
  'form-group': 'space-y-2',
  'form-group-description': 'text-0.8rem text-muted',
  'form-group-hint': 'text-sm text-muted',
  'form-group-message': 'text-0.8em transition-all duration-1000 ease-in-out',

  // wrappers
  'form-group-top-wrapper': 'flex flex-col space-y-1.5',
  'form-group-top-wrapper-inner': 'flex justify-between items-end space-x-1.5',
  'form-group-bottom-wrapper': 'flex space-x-1.5 justify-between items-start',
  'form-group-message-wrapper': '',

  // label
  'form-group-label-wrapper': 'flex',
  'form-group-label': 'block label-base',
  'form-group-label-required': 'after:content-[\'*\'] after:ms-0.5 after:text-error',

  // counter
  'form-group-counter-wrapper': 'text-0.8em',
  'form-group-counter-error': 'text-error',
  'form-group-counter-current': 'text-accent',
  'form-group-counter-separator': 'text-muted',
  'form-group-counter-max': 'text-muted',
}

export const formGroup = [
  staticFormGroup,
]
