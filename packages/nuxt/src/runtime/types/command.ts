import type { ListboxContentProps, ListboxFilterProps, ListboxGroupProps, ListboxItemProps, ListboxRootProps, PrimitiveProps, SeparatorProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface BaseExtensions {
  /** CSS class for the component */
  class?: HTMLAttributes['class']
}

export interface NCommandProps extends ListboxRootProps, BaseExtensions {
  /** Props for CommandEmpty */
  _commandEmpty?: Partial<NCommandEmptyProps>
  /** Props for CommandGroup */
  _commandGroup?: Partial<NCommandGroupProps>
  /** Props for CommandInput */
  _commandInput?: Partial<NCommandInputProps>
  /** Props for CommandItem */
  _commandItem?: Partial<NCommandItemProps>
  /** Props for CommandList */
  _commandList?: Partial<NCommandListProps>
  /** Props for CommandSeparator */
  _commandSeparator?: Partial<NCommandSeparatorProps>
  /** Props for CommandShortcut */
  _commandShortcut?: Partial<NCommandShortcutProps>
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/command.ts
   */
  una?: NCommandUnaProps
}

export interface NCommandEmptyProps extends PrimitiveProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: Pick<NCommandUnaProps, 'commandEmpty'>
}

export interface NCommandGroupProps extends ListboxGroupProps, BaseExtensions {
  /** Header text for the command group */
  heading?: string
  /** Additional properties for the una component */
  una?: Pick<NCommandUnaProps, 'commandGroup'>
}

export interface NCommandInputProps extends ListboxFilterProps, BaseExtensions {
  /** Icon name for the command input */
  icon?: string
  /** Additional properties for the una component */
  una?: Pick<NCommandUnaProps, 'commandInput'>
}

export interface NCommandItemProps extends ListboxItemProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: Pick<NCommandUnaProps, 'commandItem'>
}

export interface NCommandListProps extends ListboxContentProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: Pick<NCommandUnaProps, 'commandList'>
}

export interface NCommandSeparatorProps extends SeparatorProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: Pick<NCommandUnaProps, 'commandSeparator'>
}

export interface NCommandShortcutProps extends BaseExtensions {
  /** Additional properties for the una component */
  una?: Pick<NCommandUnaProps, 'commandShortcut'>
}

interface NCommandUnaProps {
  /** CSS class for the CommandEmpty */
  commandEmpty?: HTMLAttributes['class']
  /** CSS class for the CommandGroup */
  commandGroup?: HTMLAttributes['class']
  /** CSS class for the CommandInput */
  commandInput?: HTMLAttributes['class']
  /** CSS class for the CommandItem */
  commandItem?: HTMLAttributes['class']
  /** CSS class for the CommandList */
  commandList?: HTMLAttributes['class']
  /** CSS class for the CommandSeparator */
  commandShortcut?: HTMLAttributes['class']
  /** CSS class for the CommandShortcut */
  commandSeparator?: HTMLAttributes['class']
}
