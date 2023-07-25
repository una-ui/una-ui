export const miscFormGroup = {
  // base
  'form-group': 'space-y-2 flex flex-col',
  'form-group-description-base': 'text-sm leading-6 text-$c-gray-500',

  // wrappers
  'form-group-top-wrapper': 'flex flex-col',
  'form-group-top-wrapper-inner': 'flex justify-between items-end',
  'form-group-bottom-wrapper': 'flex justify-between items-start space-x-2',

  'form-group-hint-base': 'text-sm leading-6 text-$c-gray-500',

  // label
  'form-group-label-wrapper': 'flex',
  'form-group-label-base': 'block text-sm leading-6 font-medium text-$c-gray-900',
  'form-group-label-required': 'after:content-[\'*\'] after:ms-0.5 after:text-error',

  // message
  'form-group-message-wrapper': '',
  'form-group-message-base': 'text-sm',

  // counter
  'form-group-counter-wrapper': 'text-sm',
  'form-group-counter-error': 'text-error',
  'form-group-counter-current': 'text-$c-gray-900',
  'form-group-counter-separator': 'text-$c-gray-500',
  'form-group-counter-max': 'text-$c-gray-500',
}

export const formGroup = [
  miscFormGroup,
]
