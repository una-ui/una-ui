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
  _cardAbout?: Partial<NCardAboutProps>
  _cardFooter?: Partial<NCardFooterProps>
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/card.ts
   */
  una?: {
    cardDefaultVariant: HTMLAttributes['class']
    card?: HTMLAttributes['class']
  }
}

export interface NCardContentProps extends BaseExtensions {
  una?: {
    cardContent?: HTMLAttributes['class']
  }
}

export interface NCardTitleProps extends BaseExtensions {
  una?: {
    cardTitle?: HTMLAttributes['class']
  }
}

export interface NCardDescriptionProps extends BaseExtensions {
  una?: {
    cardSubtitle?: HTMLAttributes['class']
  }
}

export interface NCardHeaderProps extends BaseExtensions {
  una?: {
    cardHeader?: HTMLAttributes['class']
  }
}

export interface NCardAboutProps extends BaseExtensions {
  una?: {
    cardAbout?: HTMLAttributes['class']
  }
}

export interface NCardFooterProps extends BaseExtensions {
  una?: {
    cardFooter?: HTMLAttributes['class']
  }
}
