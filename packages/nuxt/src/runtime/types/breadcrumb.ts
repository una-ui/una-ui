import type { HTMLAttributes } from 'vue'

interface Extensions { class?: HTMLAttributes['class'] }

export interface NBreadcrumbProps extends Extensions, Pick<NBreadcrumbItemProps, 'breadcrumb'> {
  /**
   * Configuration for the home icon/name.
   */
  home?: NBreadcrumbItemProps
  /**
   *  An array of children BreadcrumbItem.
   */
  items?: NBreadcrumbItemProps[]

  // sub-components
  _breadcrumbItem?: Partial<NBreadcrumbItemProps>
  _breadcrumbSeparator?: Partial<NBreadcrumbSeparatorProps>
}

export interface NBreadcrumbItemProps extends Extensions {
  /**
   * Allows you to add `UnaUI` breadcrumb preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/breadcrumb.ts
   * @example
   * breadcrumb="solid-yellow"
   */
  breadcrumb?: string
  /**
   * Property name or getter function to use as the label of an item.
   */
  label?: string
  /**
   * Icon of the item.
   */
  icon?: string
  /**
   * Url of the item.
   */
  url?: string

  // sub-components
  _breadcrumbLabel?: Partial<NBreadcrumbLabelProps>
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/breadcrumb.ts
   */
  una?: {
    breadcrumb?: HTMLAttributes['class']
    breadcrumbDefaultVariant?: HTMLAttributes['class']
  }
}

export interface NBreadcrumbSeparatorProps extends Extensions {
  una?: {
    breadcrumbSeparator?: HTMLAttributes['class']
  }
}

export interface NBreadcrumbLabelProps extends Extensions {
  una?: {
    breadcrumbLabel?: HTMLAttributes['class']
  }
}
