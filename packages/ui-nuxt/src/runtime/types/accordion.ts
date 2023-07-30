import type { NButtonProps } from './button'

export interface NAccordionProps {
  /**
   * Allows you to add `NexveltUI` preset properties to the accordion,
   * Think of it as a shortcut for adding options or variants to the presset if available.
   *
   * By default, we don't add any options or variants to the accordion,
   * But you can add your own options or variants to the accordion.
   *
   * @see https://github.com/nexvelt/ui/blob/main/packages/ui-preset/src/_shortcuts/accordion.ts
  */
  accordion?: string
  /**
   * Add leading icon to accordion button item,
   * Accepts icon name and utility classes
   *
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
   *
   * @default false
  */
  multiple?: boolean
  /**
   * Allow accordion item to be open by default
   *
   * @default false
  */
  defaultOpen?: boolean
  /**
   * Swap accordion button leading and trailing icons
   *
   * @default false
  */
  reverse?: boolean
  /**
   * Removes border and divider from accordion
   *
   * @default false
  */
  variantMode?: boolean

  /**
   * List of items to be rendered,
   * It extends the `NButtonProps` interface
   *
   * @see https://github.com/nexvelt/ui/blob/main/packages/ui-nuxt/src/runtime/types/button.ts
  */
  items: (NButtonProps & {
    /**
     * Accordion item content
    */
    content: string
    /**
     * Update item leading icon when accordion button item is open,
     * Accepts icon name and utility classes
     *
     * @example
     * trailingOpen='i-heroicons-information-circle text-info'
    */
    trailingOpen?: string
    /**
     * Update item leading icon when accordion button item is closed,
     * Accepts icon name and utility classes
     *
     * @example
     * trailingClose='i-heroicons-information-circle text-info'
    */
    trailingClose?: string
    /**
     * Allow accordion item to be open by default
     *
     * @default false
    */
    defaultOpen?: boolean
    /**
     * Close other accordion items when specific item is open
     *
     * @default false
    */
    closeOthers?: boolean
    open?: boolean
  })[]

  /**
   * `NexveltUI` preset configuration
   *
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
