import type { PaginationEllipsisProps, PaginationFirstProps, PaginationLastProps, PaginationListItemProps, PaginationListProps, PaginationNextProps, PaginationPrevProps, PaginationRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'
import type { NSelectProps } from './select'

interface BaseExtensionProps {
  square?: HTMLAttributes['class'] | boolean
  class?: HTMLAttributes['class']
  rounded?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
}

type isVisible = boolean

export interface NPaginationProps extends
  PaginationRootProps,
  BaseExtensionProps,
  Pick<NButtonProps, 'paginationSelected' | 'paginationUnselected'>,
  Pick<NPaginationEllipsisProps, 'paginationEllipsis'> {
  showFirst?: isVisible
  showPrev?: isVisible
  showNext?: isVisible
  showLast?: isVisible
  showListItem?: isVisible
  /**
   * Render `NPaginationInfo` in the start region.
   *
   * Defaults to `false`, unlike the flags above — the part is new, and
   * turning it on by default would add page meta to every existing usage.
   */
  showInfo?: isVisible
  /**
   * Render `NPaginationRowsPerPage` in the start region.
   *
   * @default false
   */
  showRowsPerPage?: isVisible

  // sub-components
  _paginationList?: Partial<NPaginationListProps>
  _paginationListItem?: Partial<NPaginationListItemProps>
  _paginationEllipsis?: Partial<NPaginationEllipsisProps>
  _paginationFirst?: Partial<NPaginationFirstProps>
  _paginationPrev?: Partial<NPaginationPrevProps>
  _paginationNext?: Partial<NPaginationNextProps>
  _paginationLast?: Partial<NPaginationLastProps>
  _paginationInfo?: Partial<NPaginationInfoProps>
  _paginationRowsPerPage?: Partial<NPaginationRowsPerPageProps>

  una?: NPaginationUnaProps
}

export interface NPaginationInfoProps extends BaseExtensionProps {
  /**
   * Which shape the default text takes.
   *
   * `range` and `total` need `total`, which is optional on the root — both
   * fall back to `page` when it is absent.
   *
   * @default 'page'
   */
  format?: 'page' | 'range' | 'total'

  // standalone fallbacks; supplied by context when nested in `NPagination`
  page?: number
  pageCount?: number
  total?: number
  itemsPerPage?: number

  una?: Pick<NPaginationUnaProps, 'pagination' | 'paginationInfo'>
}

// `open` and `defaultOpen` are dropped deliberately. They are declared
// booleans, so Vue casts an absent value to `false` rather than `undefined`,
// and spreading that into `NSelect` pins `SelectRoot` controlled-closed —
// the select would never open. Compose `NSelect` in the `#start` slot if you
// need to control that.
export interface NPaginationRowsPerPageProps extends Omit<NSelectProps<number>, 'una' | 'items' | 'label' | 'modelValue' | 'defaultValue' | 'open' | 'defaultOpen'> {
  /**
   * The page sizes to offer.
   *
   * @default [10, 20, 30, 40, 50]
   */
  pageSizes?: number[]
  /**
   * Caption rendered before the select, e.g. `"Rows per page"`.
   */
  label?: string
  /** Standalone fallback; supplied by context when nested in `NPagination`. */
  itemsPerPage?: number

  una?: Pick<NPaginationUnaProps, 'pagination' | 'paginationRowsPerPage' | 'paginationRowsPerPageLabel'> & NSelectProps<number>['una']
}

export interface NPaginationListProps extends PaginationListProps, BaseExtensionProps {
  una?: Pick<NPaginationUnaProps, 'paginationList'>
}

export interface NPaginationListItemProps extends PaginationListItemProps, Omit<NButtonProps, 'una'> {
  isSelected?: boolean
  page?: PaginationRootProps['page']

  una?: Pick<NPaginationUnaProps, 'paginationListItem' | 'pagination'> & NButtonProps['una']
}

export interface NPaginationEllipsisProps extends PaginationEllipsisProps, BaseExtensionProps {
  paginationEllipsis?: HTMLAttributes['class']

  una?: Pick<NPaginationUnaProps, 'paginationEllipsis' | 'paginationEllipsisIconBase' | 'paginationEllipsisIcon' | 'pagination'>
}

export interface NPaginationFirstProps extends PaginationFirstProps, Omit<NButtonProps, 'una'> {
  una?: Pick<NPaginationUnaProps, 'paginationFirst' | 'pagination'> & NButtonProps['una']
}

export interface NPaginationPrevProps extends PaginationPrevProps, Omit<NButtonProps, 'una'> {
  una?: Pick<NPaginationUnaProps, 'paginationPrev' | 'pagination'> & NButtonProps['una']
}

export interface NPaginationNextProps extends PaginationNextProps, Omit<NButtonProps, 'una'> {
  una?: Pick<NPaginationUnaProps, 'paginationNext' | 'pagination'> & NButtonProps['una']
}

export interface NPaginationLastProps extends PaginationLastProps, Omit<NButtonProps, 'una'> {
  una?: Pick<NPaginationUnaProps, 'paginationLast' | 'pagination'> & NButtonProps['una']
}

interface NPaginationUnaProps {
  pagination?: HTMLAttributes['class']
  paginationRoot?: HTMLAttributes['class']
  paginationList?: HTMLAttributes['class']
  paginationNext?: HTMLAttributes['class']
  paginationPrev?: HTMLAttributes['class']
  paginationFirst?: HTMLAttributes['class']
  paginationLast?: HTMLAttributes['class']
  paginationListItem?: HTMLAttributes['class']
  paginationEllipsis?: HTMLAttributes['class']
  paginationEllipsisIconBase?: HTMLAttributes['class']
  paginationEllipsisIcon?: HTMLAttributes['class']

  // regions and meta parts
  paginationStart?: HTMLAttributes['class']
  paginationEnd?: HTMLAttributes['class']
  paginationInfo?: HTMLAttributes['class']
  paginationRowsPerPage?: HTMLAttributes['class']
  paginationRowsPerPageLabel?: HTMLAttributes['class']
}
