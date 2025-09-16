import type { AccordionItemProps, AccordionRootProps } from 'reka-ui'
import type { NButtonProps } from './button'

export interface NAccordionProps extends AccordionRootProps {
  /**
   * Allows you to add `UnaUI` accordion preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * By default, we don't add any options or variants to the accordion,
   * But you can add your own in the configuration file.
   */
  accordion?: string

  /**
   * List of items to be rendered,
   * It extends the `NButtonProps` interface
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/types/button.ts
   */
  items: NAccordionItemProps[]

  _itemDefaults?: NAccordionItemProps

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/accordion.ts
   */
  una?: {
    accordion?: string
    accordionItem?: string
    accordionButton?: string
    accordionPanel?: string
    accordionLeading?: string
    accordionTrailing?: string
    accordionTrailingOpen?: string
    accordionTrailingClose?: string
    accordionEnterActive?: string
    accordionLeaveActive?: string
  } & NButtonProps['una']
}

export interface NAccordionItemProps extends AccordionItemProps, NButtonProps {
  /**
   * Accordion item content
   */
  content?: string
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
   * Close other accordion items when item is open
   *
   * @default false
   */
  closeOthers?: boolean
  /**
   * By default, all the accordion item is unmounted for performance reasons,
   * You can use the `mounted` prop to render the accordion specific on item.
   *
   * @default false
   */
  mounted?: boolean
  /**
   * Allow dynamic attributes to be added to the accordion item,
   *
   */
  [key: string]: any
}
