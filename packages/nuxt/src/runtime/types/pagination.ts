import type { PaginationEllipsisProps, PaginationFirstProps, PaginationLastProps, PaginationListItemProps, PaginationListProps, PaginationNextProps, PaginationPrevProps, PaginationRootProps } from 'reka-ui'
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

export interface NPaginationUnaProps {
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
}
