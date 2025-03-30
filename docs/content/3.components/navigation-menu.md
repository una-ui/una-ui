---
description: 'Displays a collection of links for navigating websites.'
navBadges:
  - value: New
    type: lime
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/navigation-menu/NavigationMenu.vue
    target: _blank
  - value: API reference
    to: https://www.reka-ui.com/docs/components/navigation-menu
    target: _blank
---

## Examples

### Basic

| Prop                       | Default      | Type                         | Description                                                                                                                                             |
| -------------------------- | ------------ | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`                    | `[]`         | `NNavigationMenuItemProps[]` | The items to display in the navigation-menu.                                                                                                            |
| `delayDuration`            | `200`        | `number`                     | The duration from when the pointer enters the trigger until the tooltip gets opened.                                                                    |
| `defaultValue`             | -            | `string`                     | The value of the menu item that should be active when initially rendered.                                                                               |
| `dir`                      | -            | `ltr`, `rtl`                 | The reading direction of the combobox when applicable. If omitted, inherits globally from `ConfigProvider` or assumes LTR (left-to-right) reading mode. |
| `disableClickTrigger`      | `false`      | `boolean`                    | If `true`, menu cannot be open by click on trigger.                                                                                                     |
| `disableHoverTrigger`      | `false`      | `boolean`                    | If `true`, menu cannot be open by hover on trigger.                                                                                                     |
| `disablePointerLeaveClose` | -            | `boolean`                    | If true, menu will not close during pointer leave event.                                                                                                |
| `modelValue`               | -            | `string`                     | The controlled value of the menu item to activate. Can be used as v-model.                                                                              |
| `orientation`              | `horizontal` | `horizontal`, `vertical`     | The orientation of the menu.                                                                                                                            |
| `skipDelayDuration`        | `300`        | `number`                     | How much time a user has to enter another trigger without incurring a delay again.                                                                      |
| `unmountOnHide`            | `true`       | `boolean`                    | When true, the element will be unmounted on closed state.                                                                                               |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueNavigationMenuBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/navigation-menu/ExampleVueNavigationMenuBasic.vue
::
:::

:read-more{to="https://www.reka-ui.com/docs/components/navigation-menu#root" title="Reka Navigation Menu Root API." target="_blank"}

### Indicator

::alert{type="info"}
An optional indicator element that renders below the list, is used to highlight the currently active trigger.
::

| Prop        | Default | Type      | Description                                     |
| ----------- | ------- | --------- | ----------------------------------------------- |
| `indicator` | `false` | `boolean` | Set the indicator that renders below the list,. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueNavigationMenuIndicator
::
::div{label="Code"}
@@@ ./components/content/examples/vue/navigation-menu/ExampleVueNavigationMenuIndicator.vue
::
:::

:read-more{to="https://www.reka-ui.com/docs/components/navigation-menu#indicator" title="Reka Navigation Menu Indicator API." target="_blank"}

### Orientation

| Prop          | Default      | Type                     | Description                      |
| ------------- | ------------ | ------------------------ | -------------------------------- |
| `orientation` | `horizontal` | `horizontal`, `vertical` | Set the orientation of the menu. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueNavigationMenuOrientation
::
::div{label="Code"}
@@@ ./components/content/examples/vue/navigation-menu/ExampleVueNavigationMenuOrientation.vue
::
:::

### Variant and Color

| Prop                                       | Default       | Type                | Description                                                                     |
| ------------------------------------------ | ------------- | ------------------- | ------------------------------------------------------------------------------- |
| `navigation-menu`                          | `ghost-white` | `{variant}-{color}` | Set the navigation-menu variant and color.                                      |
| `navigation-menu-link`                     | `ghost-white` | `{variant}-{color}` | Set the navigation-menu link variant and color.                                 |
| `_navigationMenuTrigger.navigation-menu`   | `ghost-white` | `{variant}-{color}` | Set the navigation-menu trigger variant and color via `_navigationMenuTrigger`. |
| `_navigationMenuLink.navigation-menu-link` | `ghot-white`  | `{variant}-{color}` | Set the navigation-menu link variant and color via `_navigationMenuLink`.       |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueNavigationMenuColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/navigation-menu/ExampleVueNavigationMenuColor.vue
::
:::

### Size

Adjust the navigation-menu size without limits. Use `breakpoints` (e.g., `sm:sm`, `xs:lg`) for responsive sizes or `states` (e.g., `hover:lg`, `focus:3xl`) for state-based sizes.

| Prop                          | Default | Type     | Description                                                  |
| ----------------------------- | ------- | -------- | ------------------------------------------------------------ |
| `size`                        | `sm`    | `string` | Adjusts the overall size of the navigation-menu component.   |
| `_navigationMenuItem.size`    | `sm`    | `string` | Customizes the size of each item within the navigation-menu. |
| `_navigationMenuTrigger.size` | `sm`    | `string` | Modifies the size of the navigation-menu trigger element.    |
| `_navigationMenuLink.size`    | `sm`    | `string` | Adjusts the size of the navigation-menu link.                |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueNavigationMenuSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/navigation-menu/ExampleVueNavigationMenuSize.vue
::
:::

## Slots

::alert{type="info"}
It is important that you can also use dynamic slots to customize individual parts of `NavigationMenu`. You also have the option for `item` and `content` to use the slot field in the object itself for further dynamic binding.
::

| Name                       | Props                         | Description               |
| -------------------------- | ----------------------------- | ------------------------- |
| `list`                     | `items`                       | The list slot.            |
| `trigger`                  | `item`, `index`, `modelValue` | The trigger slot.         |
| `item`                     | `item`, `active`              | The item static slot.     |
| `#{{ item.slot }}`         | `item`, `active`              | The item dynamic slot.    |
| `item-content`             | `children`, `item`            | The content static slot.  |
| `#{{ item.slot }}-content` | `children`, `item`            | The content dynamic slot. |

:::CodeGroup
::div{label="Preview"}
:ExampleVueNavigationMenuSlots
::
::div{label="Code"}
@@@ ./components/content/examples/vue/navigation-menu/ExampleVueNavigationMenuSlots.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/navigation-menu.ts [shortcuts/navigation-menu.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/navigation-menu.ts [types/navigation-menu.ts]

## Components

:::CodeGroup
::div{label="NavigationMenu.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/navigation-menu/NavigationMenu.vue

::
::div{label="NavigationMenuRoot.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/navigation-menu/NavigationMenuRoot.vue

::
::div{label="NavigationMenuTrigger.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/navigation-menu/NavigationMenuTrigger.vue

::
::div{label="NavigationMenuItem.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/navigation-menu/NavigationMenuItem.vue

::
::div{label="NavigationMenuContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/navigation-menu/NavigationMenuContent.vue

::
::div{label="NavigationMenuIndicator.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/navigation-menu/NavigationMenuIndicator.vue

::
::div{label="NavigationMenuViewport.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/navigation-menu/NavigationMenuViewport.vue

::
::div{label="NavigationMenuLink.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/navigation-menu/NavigationMenuLink.vue

::
::div{label="NavigationMenuList.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/navigation-menu/NavigationMenuList.vue

::
::div{label="NavigationMenuContentItem.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/navigation-menu/NavigationMenuContentItem.vue

::
:::
