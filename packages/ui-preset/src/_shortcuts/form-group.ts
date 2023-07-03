export const staticFormGroup = {
  'form-group-wrapper': 'space-y-1 flex flex-col',
  'form-group-top-wrapper': 'flex justify-between items-center',
  'form-group-bottom-wrapper': 'flex justify-between items-center space-x-2',

  'form-group-label-base': 'block text-sm font-medium leading-6 text-$c-gray-900',
  'form-group-label-required': 'after:content-[\'*\'] after:ms-0.5 after:text-error-500 dark:after:text-error-400',
  'form-group-hint-wrapper': 'text-sm leading-6 text-$c-gray-500',

  'form-group-error-message': 'text-sm leading-6 text-error-500 dark:text-error-400',
  'form-group-help-message': 'text-sm leading-6 text-$c-gray-500',

  'form-group-counter-wrapper': 'text-sm leading-6',
  'form-group-counter-error': 'text-error-500 dark:text-error-400',
  'form-group-counter-current': 'text-$c-gray-900',
  'form-group-counter-separator': 'text-$c-gray-500',
  'form-group-counter-max': 'text-$c-gray-500',
}

export const dynamicFormGroup = [
]

export const formGroup = [
  ...dynamicFormGroup,
  staticFormGroup,
]
