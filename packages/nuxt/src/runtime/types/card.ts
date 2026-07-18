import type { HTMLAttributes } from 'vue'

interface BaseExtensions {
  class?: HTMLAttributes['class']
}

export interface NCardProps extends BaseExtensions {
  /**
   * Allows you to add `UnaUI` card preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/card.ts
   * @example
   * card="outline-green"
   */
  card?: string
  /**
   * Add a title to the card.
   */
  title?: string
  /**
   * Add a description to the card.
   */
  description?: string

  // sub-components
  _cardContent?: Partial<NCardContentProps>
  _cardTitle?: Partial<NCardTitleProps>
  _cardDescription?: Partial<NCardDescriptionProps>
  _cardHeader?: Partial<NCardHeaderProps>
  _cardFooter?: Partial<NCardFooterProps>
  _cardAction?: Partial<NCardActionProps>
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/card.ts
   */
  una?: NCardUnaProps
}

export interface NCardContentProps extends BaseExtensions {
  una?: Pick<NCardUnaProps, 'cardContent'>
}

export interface NCardTitleProps extends BaseExtensions {
  una?: Pick<NCardUnaProps, 'cardTitle'>
}

export interface NCardDescriptionProps extends BaseExtensions {
  una?: Pick<NCardUnaProps, 'cardDescription'>
}

export interface NCardHeaderProps extends BaseExtensions {
  una?: Pick<NCardUnaProps, 'cardHeader'>
}

export interface NCardFooterProps extends BaseExtensions {
  una?: Pick<NCardUnaProps, 'cardFooter'>
}

export interface NCardActionProps extends BaseExtensions {
  una?: Pick<NCardUnaProps, 'cardAction'>
}

export interface NCardUnaProps {
  cardDefaultVariant?: HTMLAttributes['class']
  cardTitle?: HTMLAttributes['class']
  cardDescription?: HTMLAttributes['class']
  cardContent?: HTMLAttributes['class']
  cardHeader?: HTMLAttributes['class']
  cardFooter?: HTMLAttributes['class']
  cardAction?: HTMLAttributes['class']
}
