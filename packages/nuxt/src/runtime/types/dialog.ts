import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

export interface NDialogProps {
  dialog?: string
  title?: string
  description?: string
  persist?: boolean
  overlay?: boolean

  _dialogOverlay?: HTMLAttributes
  _dialogContent?: HTMLAttributes
  _dialogTitle?: HTMLAttributes
  _dialogDescription?: HTMLAttributes
  _dialogClose?: NButtonProps

  una?: {
    overlay?: HTMLAttributes['class']
    content?: HTMLAttributes['class']
    title?: HTMLAttributes['class']
    description?: HTMLAttributes['class']
    close?: HTMLAttributes['class']
  }
}
