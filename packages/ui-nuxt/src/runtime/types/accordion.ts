import type { NButtonProps } from './button'

export interface NAccordionProps {
  /**
   * Allows you to add `NexveltUI` preset properties to the button,
   * Think of it as a shortcut for adding classes to the button preset.
   * see https://github.com/nexvelt/ui/blob/main/packages/ui-preset/src/_shortcuts/button.ts
   * @example
   * btn="solid-green block square"
  */
  accordion?: string
  leading?: string
  trailingOpen?: string
  trailingClose?: string

  multiple?: boolean
  collapsible?: boolean
  reverse?: boolean
  variantMode?: boolean

  items: (NButtonProps & {
    content: string
    trailingOpen?: string
    trailingClose?: string

    open?: boolean
    reverse?: boolean
    defaultOpen?: boolean
    closeOthers?: boolean
  })[]

  nv?: {
    accordionWrapper?: string
    accordionItem?: string
    accordionButton?: string
    accordionPanel?: string
    accordionButtonLeading?: string

    accordionTrailingOpen?: string
    accordionTrailingClose?: string
  }
}
