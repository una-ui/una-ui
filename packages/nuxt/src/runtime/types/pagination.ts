import type { PaginationEllipsisProps, PaginationFirstProps, PaginationLastProps, PaginationListItemProps, PaginationListProps, PaginationNextProps, PaginationPrevProps, PaginationRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

interface BaseExtensionProps {
  square?: HTMLAttributes['class']
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

  // sub-components
  _paginationList?: Partial<NPaginationListProps>
  _paginationListItem?: Partial<NPaginationListItemProps>
  _paginationEllipsis?: Partial<NPaginationEllipsisProps>
  _paginationFirst?: Partial<NPaginationFirstProps>
  _paginationPrev?: Partial<NPaginationPrevProps>
  _paginationNext?: Partial<NPaginationNextProps>
  _paginationLast?: Partial<NPaginationLastProps>

  una?: NPaginationUnaProps
}

export interface NPaginationListProps extends PaginationListProps, BaseExtensionProps {
  una?: Pick<NPaginationUnaProps, 'paginationList'>
}

export interface NPaginationListItemProps extends PaginationListItemProps, NButtonProps {
  isSelected?: boolean
  page?: PaginationRootProps['page']
}

export interface NPaginationEllipsisProps extends PaginationEllipsisProps, BaseExtensionProps {
  paginationEllipsis?: HTMLAttributes['class']

  una?: Pick<NPaginationUnaProps, 'paginationEllipsis' | 'paginationEllipsisIconBase' | 'paginationEllipsisIcon'>
}

export interface NPaginationFirstProps extends PaginationFirstProps, NButtonProps {
}

export interface NPaginationPrevProps extends PaginationPrevProps, NButtonProps {
}

export interface NPaginationNextProps extends PaginationNextProps, NButtonProps {
}

export interface NPaginationLastProps extends PaginationLastProps, NButtonProps {
}

interface NPaginationUnaProps {
  paginationRoot?: HTMLAttributes['class']
  paginationList?: HTMLAttributes['class']
  paginationListItem?: HTMLAttributes['class']
  paginationEllipsis?: HTMLAttributes['class']
  paginationEllipsisIconBase?: HTMLAttributes['class']
  paginationEllipsisIcon?: HTMLAttributes['class']
}
