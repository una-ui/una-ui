import type { PaginationEllipsisProps, PaginationFirstProps, PaginationLastProps, PaginationListItemProps, PaginationListProps, PaginationNextProps, PaginationPrevProps, PaginationRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

interface BaseExtensions {
  class?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
}

export interface NPaginationProps extends NPaginationRootProps, BaseExtensions {
  // sub-components
  _paginationRoot?: Partial<NPaginationRootProps>
  _paginationList?: Partial<NPaginationListProps>
  _paginationItemList?: Partial<NPaginationListItemProps>
  _paginationEllipsis?: Partial<NPaginationEllipsisProps>
  _paginationFirst?: Partial<NPaginationFirstProps>
  _paginationPrev?: Partial<NPaginationPrevProps>
  _paginationNext?: Partial<NPaginationNextProps>
  _paginationLast?: Partial<PaginationLastProps>
}

export interface NPaginationRootProps extends PaginationRootProps, BaseExtensions {
  una?: {
    paginationRoot?: HTMLAttributes['class']
  }
}

export interface NPaginationListProps extends PaginationListProps, BaseExtensions {
  una?: {
    paginationList?: HTMLAttributes['class']
  }
}

export interface NPaginationListItemProps extends PaginationListItemProps, NButtonProps {
}

export interface NPaginationEllipsisProps extends PaginationEllipsisProps, BaseExtensions {
  una?: {
    paginationEllipsis?: HTMLAttributes['class']
    paginationEllipsisIcon?: HTMLAttributes['class']
  }
}

export interface NPaginationFirstProps extends PaginationFirstProps, BaseExtensions {
  una?: {
    paginationFirst?: HTMLAttributes['class']
    paginationFirstIcon?: HTMLAttributes['class']
  }
}

export interface NPaginationPrevProps extends PaginationPrevProps, BaseExtensions {
  una?: {
    paginationPrev?: HTMLAttributes['class']
    paginationPrevIcon?: HTMLAttributes['class']

  }
}

export interface NPaginationNextProps extends PaginationNextProps, BaseExtensions {
  una?: {
    paginationNext?: HTMLAttributes['class']
    paginationNextIcon?: HTMLAttributes['class']
  }
}

export interface NPaginationLastProps extends PaginationLastProps, BaseExtensions {
  una?: {
    paginationLast?: HTMLAttributes['class']
    paginationLastIcon?: HTMLAttributes['class']

  }
}
