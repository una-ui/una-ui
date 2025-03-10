---
description: A composable, themeable and customizable sidebar component.
navBadges:
  - value: New
    type: lime
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/sidebar
    target: _blank
---

## Structure

A `Sidebar` component is composed of the following parts:

- `SidebarProvider` - Handles collapsible state.
- `Sidebar` - The sidebar container.
- `SidebarHeader` and SidebarFooter - Sticky at the top and bottom of the sidebar
- `SidebarContent` - Scrollable content.
- `SidebarGroup` - Section within the SidebarContent.
- `SidebarTrigger` - Trigger for the Sidebar

<img
  src="/images/sidebar-structure.png"
  width="716"
  height="420"
  alt="Sidebar Structure"
  class="border dark:hidden rounded-lg overflow-hidden mt-6 w-full"
/>
<img
  src="/images/sidebar-structure-dark.png"
  width="716"
  height="420"
  alt="Sidebar Structure"
  class="border hidden dark:block rounded-lg overflow-hidden mt-6 w-full"
/>

## Usage

:::CodeGroup
::div{label="App.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ./components/content/examples/vue/sidebar/ExampleVueSidebarUsage.vue

::
::div{label="AppSidebar.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ./components/content/examples/vue/sidebar/ExampleVueSidebarAppSidebar.vue

::
:::

### Basic

| Prop          | Default     | Type                         | Description                                            |
| ------------- | ----------- | ---------------------------- | ------------------------------------------------------ |
| `sheet`       | `left`      | `left`,`right`               | The side of the sheet. Options are `left` and `right`. |
| `sidebar`     | `sidebar`   | `sidebar`,`floating`,`inset` | The variant of the sidebar.                            |
| `collapsible` | `offcanvas` | `offcanvas`,`icon`,`none`    | Collapsible behavior.                                  |
| `rail`        | `true`      | `boolean`                    | Whether to display the sidebar rail for resizing.      |

:::CodeGroup
::div{label="Preview" preview}
:CommonBlockPreview{url="/iframe-renderer/sidebar/basic"}

::
::div{label="AppSidebar.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ./pages/iframe-renderer/sidebar/basic.vue

::
::div{label="TeamSwitcher.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ./components/TeamSwitcher.vue

::
::div{label="NavMain.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ./components/NavMain.vue

::
::div{label="NavProjects.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ./components/NavProjects.vue

::
::div{label="NavUser.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ./components/NavUser.vue
::
:::

::alert{to="/iframe-renderer/sidebar/basic" target="_blank" icon="lucide:link"}
View the full example in a new tab.
::

### Variants

| Prop      | Default   | Type     | Description                                                                 |
| --------- | --------- | -------- | --------------------------------------------------------------------------- |
| `sidebar` | `sidebar` | `string` | The variant of the sidebar. Options are `sidebar`, `floating`, and `inset`. |

:::CodeGroup
::div{label="Preview" preview}
:CommonBlockPreview{url="/iframe-renderer/sidebar/variants"}
::
::div{label="Code"}
@@@ ./pages/iframe-renderer/sidebar/variants.vue
::
:::

### Positioning

| Prop    | Default | Type     | Description                                            |
| ------- | ------- | -------- | ------------------------------------------------------ |
| `sheet` | `left`  | `string` | The side of the sheet. Options are `left` and `right`. |

:::CodeGroup
::div{label="Preview" preview}
:CommonBlockPreview{url="/iframe-renderer/sidebar/positioning"}
::
::div{label="Code"}
@@@ ./pages/iframe-renderer/sidebar/positioning.vue
::
:::

### Collapsible Modes

| Prop          | Default     | Type     | Description                                                            |
| ------------- | ----------- | -------- | ---------------------------------------------------------------------- |
| `collapsible` | `offcanvas` | `string` | The collapsible behavior. Options are `offcanvas`, `icon`, and `none`. |

:::CodeGroup
::div{label="Preview" preview}
:CommonBlockPreview{url="/iframe-renderer/sidebar/collapsible"}
::
::div{label="Code"}
@@@ ./pages/iframe-renderer/sidebar/collapsible.vue
::
:::

## Available Components

The sidebar system includes several components for building complete navigation interfaces:

| Component                | Description                             |
| ------------------------ | --------------------------------------- |
| `Sidebar`                | Main sidebar container component        |
| `SidebarContent`         | Container for sidebar content           |
| `SidebarHeader`          | Header area of the sidebar              |
| `SidebarFooter`          | Footer area of the sidebar              |
| `SidebarGroup`           | Groups related sidebar items            |
| `SidebarGroupLabel`      | Label for a sidebar group               |
| `SidebarGroupContent`    | Content container for a sidebar group   |
| `SidebarGroupAction`     | Action button for a sidebar group       |
| `SidebarMenu`            | Container for menu items                |
| `SidebarMenuItem`        | Individual menu item container          |
| `SidebarMenuButton`      | Interactive button for menu items       |
| `SidebarMenuButtonChild` | Child menu button for nested structures |
| `SidebarMenuSub`         | Container for submenu items             |
| `SidebarMenuSubItem`     | Individual submenu item                 |
| `SidebarMenuSubButton`   | Interactive button for submenu items    |
| `SidebarMenuAction`      | Action button for menu items            |
| `SidebarMenuBadge`       | Badge display for menu items            |
| `SidebarMenuSkeleton`    | Skeleton loader for menu items          |
| `SidebarSeparator`       | Visual separator for sidebar sections   |
| `SidebarRail`            | Resize handle for the sidebar           |
| `SidebarInset`           | Inset container for the sidebar         |
| `SidebarInput`           | Input field optimized for sidebar       |
| `SidebarTrigger`         | Trigger button to show/hide the sidebar |
| `SidebarProvider`        | Provider component for sidebar context  |

## TypeScript Interfaces

All sidebar components are now typed with dedicated TypeScript interfaces to provide better type safety and IntelliSense support:

| Interface                      | Description                                       |
| ------------------------------ | ------------------------------------------------- |
| `NSidebarProps`                | Props for the Sidebar component                   |
| `NSidebarProviderProps`        | Props for the SidebarProvider component           |
| `NSidebarContentProps`         | Props for the SidebarContent component            |
| `NSidebarHeaderProps`          | Props for the SidebarHeader component             |
| `NSidebarFooterProps`          | Props for the SidebarFooter component             |
| `NSidebarGroupProps`           | Props for the SidebarGroup component              |
| `NSidebarGroupContentProps`    | Props for the SidebarGroupContent component       |
| `NSidebarGroupLabelProps`      | Props for the SidebarGroupLabel component         |
| `NSidebarGroupActionProps`     | Props for the SidebarGroupAction component        |
| `NSidebarMenuProps`            | Props for the SidebarMenu component               |
| `NSidebarMenuItemProps`        | Props for the SidebarMenuItem component           |
| `NSidebarMenuButtonProps`      | Props for the SidebarMenuButton component         |
| `NSidebarMenuButtonChildProps` | Props for the SidebarMenuButtonChild component    |
| `NSidebarMenuSubProps`         | Props for the SidebarMenuSub component            |
| `NSidebarMenuSubItemProps`     | Props for the SidebarMenuSubItem component        |
| `NSidebarMenuSubButtonProps`   | Props for the SidebarMenuSubButton component      |
| `NSidebarMenuActionProps`      | Props for the SidebarMenuAction component         |
| `NSidebarMenuBadgeProps`       | Props for the SidebarMenuBadge component          |
| `NSidebarMenuSkeletonProps`    | Props for the SidebarMenuSkeleton component       |
| `NSidebarSeparatorProps`       | Props for the SidebarSeparator component          |
| `NSidebarRailProps`            | Props for the SidebarRail component               |
| `NSidebarInsetProps`           | Props for the SidebarInset component              |
| `NSidebarInputProps`           | Props for the SidebarInput component              |
| `NSidebarTriggerProps`         | Props for the SidebarTrigger component            |
| `NSidebarUnaProps`             | UnaUI preset configuration for sidebar components |

## Component Props

### Sidebar Props

| Prop              | Default     | Type                                     | Description                                                      |
| ----------------- | ----------- | ---------------------------------------- | ---------------------------------------------------------------- |
| `sheet`           | `left`      | `'left'` \| `'right'`                    | The side of the sheet. Options are `left` and `right`.           |
| `sidebar`         | `sidebar`   | `'sidebar'` \| `'floating'` \| `'inset'` | The variant of the sidebar.                                      |
| `collapsible`     | `offcanvas` | `'offcanvas'` \| `'icon'` \| `'none'`    | Collapsible behavior.                                            |
| `rail`            | `true`      | `boolean`                                | Whether to display the sidebar rail for resizing.                |
| `class`           | -           | `string`                                 | Additional classes to apply to the sidebar.                      |
| `_sheetContent`   | -           | `object`                                 | Props passed to the sheet content component when in mobile view. |
| `_sidebarContent` | -           | `object`                                 | Props for the SidebarContent component.                          |
| `_sidebarHeader`  | -           | `object`                                 | Props for the SidebarHeader component.                           |
| `_sidebarFooter`  | -           | `object`                                 | Props for the SidebarFooter component.                           |
| `_sidebarRail`    | -           | `object`                                 | Props for the SidebarRail component.                             |
| `una`             | -           | `object`                                 | UnaUI preset configuration options.                              |

### SidebarProvider Props

| Prop          | Default | Type      | Description                                  |
| ------------- | ------- | --------- | -------------------------------------------- |
| `defaultOpen` | `true`  | `boolean` | Default open state of the sidebar.           |
| `open`        | -       | `boolean` | Controlled open state.                       |
| `class`       | -       | `string`  | Additional classes to apply to the provider. |

### SidebarGroup Props

| Prop    | Default | Type     | Description                               |
| ------- | ------- | -------- | ----------------------------------------- |
| `label` | -       | `string` | Label for the group heading.              |
| `class` | -       | `string` | Additional classes to apply to the group. |

### SidebarMenu Props

| Prop      | Default | Type     | Description                              |
| --------- | ------- | -------- | ---------------------------------------- |
| `items`   | -       | `array`  | Array of items to render in the menu.    |
| `itemKey` | `'id'`  | `string` | Property from each item to use as a key. |
| `class`   | -       | `string` | Additional classes to apply to the menu. |

### SidebarMenuButton Props

| Prop       | Default   | Type                            | Description                                        |
| ---------- | --------- | ------------------------------- | -------------------------------------------------- |
| `variant`  | `default` | `'default'` \| `'outline'`      | The variant of the button.                         |
| `size`     | `default` | `'default'` \| `'sm'` \| `'lg'` | The size of the button.                            |
| `isActive` | `false`   | `boolean`                       | Whether the button is in active state.             |
| `tooltip`  | -         | `string` \| `Component`         | Tooltip content to show when sidebar is collapsed. |
| `as`       | `button`  | `string`                        | The element to render as.                          |
| `asChild`  | `false`   | `boolean`                       | Whether to merge props with first child.           |
| `class`    | -         | `string`                        | Additional classes to apply to the button.         |

### SidebarMenuButtonChild Props

| Prop       | Default   | Type                            | Description                                |
| ---------- | --------- | ------------------------------- | ------------------------------------------ |
| `variant`  | `default` | `'default'` \| `'outline'`      | The variant of the button.                 |
| `size`     | `default` | `'default'` \| `'sm'` \| `'lg'` | The size of the button.                    |
| `isActive` | `false`   | `boolean`                       | Whether the button is in active state.     |
| `as`       | `button`  | `string`                        | The element to render as.                  |
| `asChild`  | `false`   | `boolean`                       | Whether to merge props with first child.   |
| `class`    | -         | `string`                        | Additional classes to apply to the button. |

### SidebarMenuSubButton Props

| Prop       | Default | Type             | Description                                |
| ---------- | ------- | ---------------- | ------------------------------------------ |
| `size`     | `md`    | `'sm'` \| `'md'` | The size of the button.                    |
| `isActive` | `false` | `boolean`        | Whether the button is in active state.     |
| `as`       | `a`     | `string`         | The element to render as.                  |
| `asChild`  | `false` | `boolean`        | Whether to merge props with first child.   |
| `class`    | -       | `string`         | Additional classes to apply to the button. |

### SidebarMenuAction Props

| Prop          | Default  | Type      | Description                                |
| ------------- | -------- | --------- | ------------------------------------------ |
| `showOnHover` | `false`  | `boolean` | Whether to show the action only on hover.  |
| `as`          | `button` | `string`  | The element to render as.                  |
| `asChild`     | `false`  | `boolean` | Whether to merge props with first child.   |
| `class`       | -        | `string`  | Additional classes to apply to the action. |

### SidebarMenuSkeleton Props

| Prop       | Default | Type      | Description                                  |
| ---------- | ------- | --------- | -------------------------------------------- |
| `showIcon` | `false` | `boolean` | Whether to show the icon in the skeleton.    |
| `class`    | -       | `string`  | Additional classes to apply to the skeleton. |

### SidebarTrigger Props

| Prop     | Default               | Type      | Description                                 |
| -------- | --------------------- | --------- | ------------------------------------------- |
| `btn`    | `ghost-white`         | `string`  | Button variant.                             |
| `square` | `7`                   | `string`  | Square size of the button.                  |
| `label`  | `i-lucide-panel-left` | `string`  | Icon label for the button.                  |
| `icon`   | `true`                | `boolean` | Whether to render as an icon button.        |
| `class`  | -                     | `string`  | Additional classes to apply to the trigger. |

## Customization

You can customize the sidebar using the following sub components props and `una` prop.

| Name                      | Type                           | Description                                            |
| ------------------------- | ------------------------------ | ------------------------------------------------------ |
| `_sidebarContent`         | `NSidebarContentProps`         | Props for the content component.                       |
| `_sidebarHeader`          | `NSidebarHeaderProps`          | Props for the header component.                        |
| `_sidebarFooter`          | `NSidebarFooterProps`          | Props for the footer component.                        |
| `_sidebarGroup`           | `NSidebarGroupProps`           | Props for the group component.                         |
| `_sidebarGroupContent`    | `NSidebarGroupContentProps`    | Props for the group content component.                 |
| `_sidebarGroupLabel`      | `NSidebarGroupLabelProps`      | Props for the group label component.                   |
| `_sidebarMenu`            | `NSidebarMenuProps`            | Props for the menu container component.                |
| `_sidebarMenuItem`        | `NSidebarMenuItemProps`        | Props for the menu item component.                     |
| `_sidebarMenuButton`      | `NSidebarMenuButtonProps`      | Props for the menu button component.                   |
| `_sidebarMenuButtonChild` | `NSidebarMenuButtonChildProps` | Props for the menu button child component.             |
| `_sidebarMenuSub`         | `NSidebarMenuSubProps`         | Props for the menu sub component.                      |
| `_sidebarMenuSubItem`     | `NSidebarMenuSubItemProps`     | Props for the menu sub item component.                 |
| `_sidebarMenuSubButton`   | `NSidebarMenuSubButtonProps`   | Props for the menu sub button component.               |
| `_sidebarMenuAction`      | `NSidebarMenuActionProps`      | Props for the menu action component.                   |
| `_sidebarMenuBadge`       | `NSidebarMenuBadgeProps`       | Props for the menu badge component.                    |
| `_sidebarMenuSkeleton`    | `NSidebarMenuSkeletonProps`    | Props for the menu skeleton component.                 |
| `_sidebarSeparator`       | `NSidebarSeparatorProps`       | Props for the separator component.                     |
| `_sidebarRail`            | `NSidebarRailProps`            | Props for the rail component.                          |
| `_sidebarInset`           | `NSidebarInsetProps`           | Props for the inset component.                         |
| `_sidebarInput`           | `NSidebarInputProps`           | Props for the input component.                         |
| `_sidebarTrigger`         | `NSidebarTriggerProps`         | Props for the trigger component.                       |
| `una`                     | `NSidebarUnaProps`             | UnaUI preset configuration for all sidebar components. |

## Slots

| Name      | Props | Description                                                               |
| --------- | ----- | ------------------------------------------------------------------------- |
| `default` | -     | The main content of the sidebar, includes the header, content and footer. |
| `header`  | -     | The header content, appears at the top.                                   |
| `content` | -     | The main content of the sidebar.                                          |
| `footer`  | -     | The footer content, appears at the bottom.                                |

## Composables

### useSidebar

The `useSidebar` composable provides reactive access to the sidebar's state.

```js
const {
  isMobile, // Whether the sidebar is in mobile view
  state, // Current state: 'open', 'closed', or 'collapsed'
  openMobile, // Whether the mobile sidebar is open
  setOpenMobile // Function to set the mobile sidebar open state
} = useSidebar()
```

## Presets

@@@ ../packages/preset/src/_shortcuts/sidebar.ts [shortcuts/sidebar.ts]

## Components

:::CodeGroup
::div{label="Sidebar.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sidebar/Sidebar.vue

::
::div{label="SidebarContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sidebar/SidebarContent.vue

::
::div{label="SidebarHeader.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sidebar/SidebarHeader.vue

::
::div{label="SidebarFooter.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sidebar/SidebarFooter.vue

::
::div{label="SidebarMenu.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sidebar/SidebarMenu.vue

::
::div{label="SidebarMenuItem.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sidebar/SidebarMenuItem.vue

::
::div{label="SidebarMenuButton.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sidebar/SidebarMenuButton.vue

::
::div{label="SidebarMenuButtonChild.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sidebar/SidebarMenuButtonChild.vue

::
::div{label="SidebarMenuSubButton.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sidebar/SidebarMenuSubButton.vue

::
::div{label="SidebarMenuSub.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sidebar/SidebarMenuSub.vue

::
::div{label="SidebarMenuSubItem.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sidebar/SidebarMenuSubItem.vue

::
::div{label="SidebarMenuAction.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sidebar/SidebarMenuAction.vue

::
::div{label="SidebarMenuBadge.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sidebar/SidebarMenuBadge.vue

::
::div{label="SidebarGroup.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sidebar/SidebarGroup.vue

::
::div{label="SidebarGroupLabel.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sidebar/SidebarGroupLabel.vue

::
::div{label="SidebarGroupContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sidebar/SidebarGroupContent.vue

::
::div{label="SidebarRail.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sidebar/SidebarRail.vue

::
:::
