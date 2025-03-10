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

| Prop          | Default     | Type      | Description                                                                 |
| ------------- | ----------- | --------- | --------------------------------------------------------------------------- |
| `sheet`       | `left`      | `string`  | The side of the sheet. Options are `left` and `right`.                      |
| `sidebar`     | `sidebar`   | `string`  | The variant of the sidebar. Options are `sidebar`, `floating`, and `inset`. |
| `collapsible` | `offcanvas` | `string`  | Collapsible behavior. Options: `offcanvas`, `icon`, `none`.                 |
| `rail`        | `true`      | `boolean` | Whether to display the sidebar rail for resizing.                           |

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

## Component Props

### Sidebar Props

| Prop            | Default     | Type      | Description                                                                 |
| --------------- | ----------- | --------- | --------------------------------------------------------------------------- |
| `sheet`         | `left`      | `string`  | The side of the sheet. Options are `left` and `right`.                      |
| `sidebar`       | `sidebar`   | `string`  | The variant of the sidebar. Options are `sidebar`, `floating`, and `inset`. |
| `collapsible`   | `offcanvas` | `string`  | Collapsible behavior. Options: `offcanvas`, `icon`, `none`.                 |
| `rail`          | `true`      | `boolean` | Whether to display the sidebar rail for resizing.                           |
| `class`         | -           | `string`  | Additional classes to apply to the sidebar.                                 |
| `_sheetContent` | -           | `object`  | Props passed to the sheet content component when in mobile view.            |

### SidebarMenuButton Props

| Prop       | Default   | Type      | Description                                                  |
| ---------- | --------- | --------- | ------------------------------------------------------------ |
| `variant`  | `default` | `string`  | The variant of the button. Options: `default` and `outline`. |
| `size`     | `default` | `string`  | The size of the button. Options: `default`, `sm`, and `lg`.  |
| `isActive` | `false`   | `boolean` | Whether the button is in active state.                       |
| `as`       | `button`  | `string`  | The element to render as.                                    |
| `asChild`  | `false`   | `boolean` | Whether to merge props with first child.                     |

### SidebarMenuButtonChild Props

| Prop       | Default   | Type      | Description                                                  |
| ---------- | --------- | --------- | ------------------------------------------------------------ |
| `variant`  | `default` | `string`  | The variant of the button. Options: `default` and `outline`. |
| `size`     | `default` | `string`  | The size of the button. Options: `default`, `sm`, and `lg`.  |
| `isActive` | `false`   | `boolean` | Whether the button is in active state.                       |
| `as`       | `button`  | `string`  | The element to render as.                                    |
| `asChild`  | `false`   | `boolean` | Whether to merge props with first child.                     |

## Customization

You can customize the sidebar using the following sub components props and `una` prop.

| Name                      | Props | Type     | Description                  |
| ------------------------- | ----- | -------- | ---------------------------- |
| `_sidebarContent`         | -     | `object` | The content props.           |
| `_sidebarHeader`          | -     | `object` | The header props.            |
| `_sidebarFooter`          | -     | `object` | The footer props.            |
| `_sidebarGroup`           | -     | `object` | The group props.             |
| `_sidebarGroupContent`    | -     | `object` | The group content props.     |
| `_sidebarGroupLabel`      | -     | `object` | The group label props.       |
| `_sidebarMenu`            | -     | `object` | The menu container props.    |
| `_sidebarMenuItem`        | -     | `object` | The menu item props.         |
| `_sidebarMenuButton`      | -     | `object` | The menu button props.       |
| `_sidebarMenuButtonChild` | -     | `object` | The menu button child props. |
| `_sidebarMenuSub`         | -     | `object` | The menu sub props.          |
| `una`                     | -     | `object` | The una preset props.        |

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
