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
::div{label="[AppSidebar.vue] via components" icon="i-vscode-icons-file-type-vue"}
@@@ ./components/content/examples/vue/sidebar/ExampleVueSidebarAppSidebar.vue

::
::div{label="[AppSidebar.vue] via slots" icon="i-vscode-icons-file-type-vue"}
@@@ ./components/content/examples/vue/sidebar/ExampleVueSidebarAppSidebarSlot.vue

::
:::

## Examples

### Basic

| Prop          | Default     | Type                         | Description                                            |
| ------------- | ----------- | ---------------------------- | ------------------------------------------------------ |
| `sheet`       | `left`      | `left`,`right`               | The side of the sheet. Options are `left` and `right`. |
| `sidebar`     | `sidebar`   | `sidebar`,`floating`,`inset` | The variant of the sidebar.                            |
| `collapsible` | `offcanvas` | `offcanvas`,`icon`,`none`    | Collapsible behavior.                                  |
| `rail`        | `true`      | `boolean`                    | Whether to display the sidebar rail for resizing.      |

:::CodeGroup
::div{label="Preview" preview}
:CommonBlockPreview{url="/blocks-renderer/sidebar"}

::
::div{label="Dashboard.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ./pages/blocks-renderer/sidebar.vue

::
::div{label="AppSidebar.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ./components/sidebar/basic/AppSidebar.vue

::
::div{label="TeamSwitcher.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ./components/sidebar/basic/TeamSwitcher.vue

::
::div{label="NavMain.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ./components/sidebar/basic/NavMain.vue

::
::div{label="NavProjects.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ./components/sidebar/basic/NavProjects.vue

::
::div{label="NavUser.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ./components/sidebar/basic/NavUser.vue
::
:::

::alert{to="/blocks-renderer/sidebar" target="_blank" icon="lucide:link"}
View the full example in a new tab.
::

### A collapsible nested sidebar

:::CodeGroup
::div{label="Preview" preview}
:CommonBlockPreview{url="/blocks-renderer/collapsible-nested-sidebar"}

::
::div{label="Dashboard.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ./pages/blocks-renderer/collapsible-nested-sidebar.vue

::
::div{label="AppSidebar.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ./components/sidebar/collapsible-nested/AppSidebar.vue

::
::div{label="NavUser.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ./components/sidebar/collapsible-nested/NavUser.vue

::
:::

::alert{to="/blocks-renderer/collapsible-nested-sidebar" target="_blank" icon="lucide:link"}
View the full example in a new tab.
::

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

### useSidebar()

The `useSidebar` composable provides reactive access to the sidebar's state.

```vue [Usage.vue]
<script setup lang="ts">
const {
  isMobile, // Whether the sidebar is in mobile view
  state, // Current state: 'open', 'closed', or 'collapsed'
  openMobile, // Whether the mobile sidebar is open
  setOpenMobile // Function to set the mobile sidebar open state
} = useSidebar()
</script>

<template>
  <div>
    <button @click="setOpenMobile(true)">
      Open Mobile
    </button>
  </div>
</template>
```

@@@ ../packages/nuxt/src/runtime/composables/useSidebar.ts [composables/useSidebar.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/sidebar.ts [types/sidebar.ts]

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
