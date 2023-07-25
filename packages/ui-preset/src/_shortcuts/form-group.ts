type FormGroupPrefix = 'form-group'

export const staticFormGroup: Record<`${FormGroupPrefix}-${string}` | FormGroupPrefix, string> = {
  // base
  'form-group': 'space-y-2 flex flex-col',
  'form-group-description-base': 'text-sm leading-6 text-$c-gray-500',
  'form-group-hint-base': 'text-sm leading-6 text-$c-gray-500',
  'form-group-message-base': 'text-sm transition-all duration-1000 ease-in-out',

  // wrappers
  'form-group-top-wrapper': 'flex flex-col',
  'form-group-top-wrapper-inner': 'flex justify-between items-end space-x-1.5',
  'form-group-bottom-wrapper': 'flex space-x-1.5 justify-between items-start',
  'form-group-message-wrapper': '',

  // label
  'form-group-label-wrapper': 'flex',
  'form-group-label-base': 'block text-sm leading-6 font-medium text-$c-gray-900',
  'form-group-label-required': 'after:content-[\'*\'] after:ms-0.5 after:text-error',

  // counter
  'form-group-counter-wrapper': 'text-sm',
  'form-group-counter-error': 'text-error',
  'form-group-counter-current': 'text-$c-gray-900',
  'form-group-counter-separator': 'text-$c-gray-500',
  'form-group-counter-max': 'text-$c-gray-500',
}

export const formGroup = [
  staticFormGroup,
]
