import type { NButtonProps } from './button'

export interface NAccordionProps {
  /**
   * Add leading icon to accordion button item,
   * Accepts icon name and utility classes
   * @example
   * leading='i-heroicons-information-circle text-info'
  */
  leading?: string
  /**
   * Update leading icon when accordion button item is open,
   * Accepts icon name and utility classes
  */
  trailingOpen?: string
  /**
   * Update leading icon when accordion button item is closed,
   * Accepts icon name and utility classes
  */
  trailingClose?: string
  /**
   * Allow multiple accordion items to be open at the same time
   * @default false
  */
  multiple?: boolean
  /**
   * Allow accordion item to be open by default
   * @default false
  */
  collapsible?: boolean
  /**
   * Swap accordion button leading and trailing icons
   * @default false
  */
  reverse?: boolean
  /**
   * Removes border and divider from accordion
   * @default false
  */
  variantMode?: boolean
  /**
   * List of items to be rendered,
   * It extends the `NButtonProps` interface
   * @see {@link https://github.com/nexvelt/ui/blob/main/packages/ui-nuxt/src/runtime/types/button.ts}
  */
  items: (NButtonProps & {
    content: string
    trailingOpen?: string
    trailingClose?: string

    open?: boolean
    defaultOpen?: boolean
    closeOthers?: boolean
  })[]
  /**
   * `NexveltUI` preset configuration
   * @see https://github.com/nexvelt/ui/blob/main/packages/ui-preset/src/_shortcuts/accordion.ts
  */
  nv?: {
    accordionItem?: string
    accordionButton?: string
    accordionPanel?: string
    accordionButtonLeading?: string

    accordionTrailingOpen?: string
    accordionTrailingClose?: string
  }
}
