import type { HTMLAttributes } from 'vue'
import type { PaginationEllipsisProps, PaginationFirstProps, PaginationLastProps, PaginationListItemProps, PaginationListProps, PaginationNextProps, PaginationPrevProps, PaginationRootProps } from 'radix-vue'

interface BaseExtensions {
  class?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
}

type RootExtensions = Omit<PaginationRootProps, 'modelValue'> & BaseExtensions
type ListExtensions = Omit<PaginationListProps, 'value'> & BaseExtensions
type ListItemExtensions = PaginationListItemProps & BaseExtensions
type EllipsisExtensions = PaginationEllipsisProps & BaseExtensions
type FirstExtensions = PaginationFirstProps & BaseExtensions
type PreviousExtensions = PaginationPrevProps & BaseExtensions
type NextExtensions = PaginationNextProps & BaseExtensions
type LastExtensions = PaginationLastProps & BaseExtensions
type PaginationExtensions = NPaginationRootProps & BaseExtensions

export interface NPaginationProps extends PaginationExtensions {

  // sub-components
  _paginationList?: Partial<NPaginationRootProps>
  _paginationItemList?: Partial<NPaginationListItemProps>
  _paginationEllipsis?: Partial<NPaginationEllipsisProps>
  _paginationFirst?: Partial<NPaginationFirstProps>
  _paginationPrev?: Partial<NPaginationPrevProps>
  _paginationNext?: Partial<NPaginationNextProps>
  _paginationLast?: Partial<PaginationLastProps>
}

export interface NPaginationRootProps extends RootExtensions {
  una?: {
    paginationRoot?: HTMLAttributes['class']
  }
}

export interface NPaginationListProps extends ListExtensions {
  una?: {
    paginationList?: HTMLAttributes['class']
  }
}

export interface NPaginationListItemProps extends ListItemExtensions {
  una?: {
    paginationItemList?: HTMLAttributes['class']
  }
}

export interface NPaginationEllipsisProps extends EllipsisExtensions {
  una?: {
    paginationEllipsis?: HTMLAttributes['class']
  }
}

export interface NPaginationFirstProps extends FirstExtensions {
  una?: {
    paginationFirst?: HTMLAttributes['class']
    paginationFirstIcon?: HTMLAttributes['class']
  }
}

export interface NPaginationPrevProps extends PreviousExtensions {
  una?: {
    paginationPrev?: HTMLAttributes['class']
  }
}

export interface NPaginationNextProps extends NextExtensions {
  una?: {
    paginationNext?: HTMLAttributes['class']
  }
}

export interface NPaginationLastProps extends LastExtensions {
  una?: {
    paginationLast?: HTMLAttributes['class']
    paginationLastIcon?: HTMLAttributes['class']

  }
}
