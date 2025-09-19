import type { AccordionContentProps, AccordionHeaderProps, AccordionItemProps, AccordionRootProps, AccordionTriggerProps } from 'reka-ui'
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
  items?: NAccordionItemProps[]

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/accordion.ts
   */
  una?: NAccordionUnaProps & NButtonProps['una']

  _accordionItem?: Omit<NAccordionItemProps, 'una'>
  _accordionHeader?: Omit<NAccordionHeaderProps, 'una'>
  _accordionTrigger?: Omit<NButtonProps, 'una'>
  _accordionContent?: Omit<NAccordionContentProps, 'una'>
}

export interface NAccordionContentProps extends AccordionContentProps {
  una?: Pick<NAccordionUnaProps, 'accordionContent' | 'accordionPanel'>
}

export interface NAccordionHeaderProps extends AccordionHeaderProps {
  una?: Pick<NAccordionUnaProps, 'accordionHeader' | 'accordionTrigger'>
}

export interface NAccordionTriggerProps extends AccordionTriggerProps, NButtonProps {
  una?: Pick<NAccordionUnaProps, 'accordionTrigger'> & NButtonProps['una']
}

export interface NAccordionItemProps extends AccordionItemProps {
  label?: string
  /**
   * Accordion item content
   */
  content?: string

  una?: Omit<NAccordionUnaProps & NButtonProps['una'], 'accordion'>

  _accordionHeader?: Omit<NAccordionHeaderProps, 'una'>
  _accordionTrigger?: Omit<NAccordionTriggerProps, 'una'>
  _accordionContent?: Omit<NAccordionContentProps, 'una'>
}

interface NAccordionUnaProps {
  accordion?: string
  accordionItem?: string
  accordionHeader?: string
  accordionTrigger?: string
  accordionContent?: string
  accordionPanel?: string
}
