import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

interface BaseExtensions { class?: HTMLAttributes['class'] }

export interface NBreadcrumbProps extends BaseExtensions, Pick<NBreadcrumbLinkProps, 'breadcrumbActive' | 'breadcrumbInactive'> {
  /**
   * List of items to display in the breadcrumb.
   *
   * @example
   * items: [{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }]
   */
  items: Partial<NButtonProps>[]
  separator?: NBreadcrumbSeparatorProps['icon']
  ellipsis?: NBreadcrumbEllipsisProps['icon']
  /**
   * Allows you to change the size of the input.
   *
   * @default sm
   *
   * @example
   * size="sm" | size="2cm" | size="2rem" | size="2px"
   */
  size?: string

  // maxItems?: number

  // sub-components
  _breadcrumbSeparator?: Partial<NBreadcrumbSeparatorProps>
  _breadcrumbItem?: Partial<NBreadcrumbItemProps>
  _breadcrumbRoot?: Partial<NBreadcrumbRootProps>
  _breadcrumbList?: Partial<NBreadcrumbListProps>
  _breadcrumbLink?: Partial<NBreadcrumbLinkProps>
  _breadcrumbEllipsis?: Partial<NBreadcrumbEllipsisProps>

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/breadcrumb.ts
   */
  una?: NBreadcrumbUnaProps
}

export interface NBreadcrumbRootProps extends BaseExtensions {
  una?: Pick<NBreadcrumbUnaProps, 'breadcrumbRoot'>
}

export interface NBreadcrumbItemProps extends BaseExtensions {
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/breadcrumb.ts
   */
  una?: Pick<NBreadcrumbUnaProps, 'breadcrumbItem'>
}

export interface NBreadcrumbSeparatorProps extends BaseExtensions {
  /**
   * Custom separator icon.
   */
  icon?: string
  /**
   * Allows you to change the size of the input.
   *
   * @default sm
   *
   * @example
   * size="sm" | size="2cm" | size="2rem" | size="2px"
   */
  size?: string
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/breadcrumb.ts
   */
  una?: Pick<NBreadcrumbUnaProps, 'breadcrumbSeparator' | 'breadcrumbSeparatorIcon'>
}

export interface NBreadcrumbListProps extends BaseExtensions {
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/breadcrumb.ts
   */
  una?: Pick<NBreadcrumbUnaProps, 'breadcrumbList'>
}

export interface NBreadcrumbLinkProps extends BaseExtensions, NButtonProps {
  active?: boolean
  breadcrumbActive?: string
  breadcrumbInactive?: string
}

export interface NBreadcrumbEllipsisProps extends BaseExtensions {
  /**
   * Custom separator icon.
   */
  icon?: string
  /**
   *  /**
   * Allows you to change the size of the input.
   *
   * @default sm
   *
   * @example
   * size="sm" | size="2cm" | size="2rem" | size="2px"
   */
  size?: string
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/breadcrumb.ts
   */
  una?: Pick<NBreadcrumbUnaProps, 'breadcrumbEllipsis' | 'breadcrumbEllipsisIcon'>
}

interface NBreadcrumbUnaProps {
  breadcrumb?: HTMLAttributes['class']
  breadcrumbRoot?: HTMLAttributes['class']
  breadcrumbItem?: HTMLAttributes['class']
  breadcrumbEllipsis?: HTMLAttributes
  breadcrumbEllipsisIcon?: HTMLAttributes['class']
  breadcrumbList?: HTMLAttributes['class']
  breadcrumbSeparator?: HTMLAttributes['class']
  breadcrumbSeparatorIcon?: HTMLAttributes['class']
}
