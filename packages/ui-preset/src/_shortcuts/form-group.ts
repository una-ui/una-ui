export const miscFormGroup = {
  // base
  'form-group': 'space-y-2 flex flex-col',
  'form-group-description-base': 'text-sm leading-6 text-$c-gray-500',
  'form-group-hint-base': 'text-sm leading-6 text-$c-gray-500',
  'form-group-label-base': 'block text-sm leading-6 font-medium text-$c-gray-900',
  'form-group-label-required': 'after:content-[\'*\'] after:ms-0.5 after:text-error',
  'form-group-message-base': 'text-sm transition-all duration-1000 ease-in-out',

  // wrappers
  'form-group-top-wrapper': 'flex flex-col',
  'form-group-top-wrapper-inner': 'flex justify-between items-end',
  'form-group-bottom-wrapper': 'flex justify-between space-x-2',
  'form-group-label-wrapper': 'flex',
}

export const formGroup = [
  miscFormGroup,
]
