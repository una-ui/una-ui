---
description: 'A set of two-state buttons that can be toggled on or off.'
navBadges:
  - value: New
    type: lime
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/toggle-group/ToggleGroup.vue
    target: _blank
  - value: API reference
    to: https://www.reka-ui.com/docs/components/toggle-group
    target: _blank
---

## Examples

### Basic

| Prop           | Default | Type                                        | Description                                                                                      |
| -------------- | ------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `items`        | `[]`    | `Array<T>`                                  | The items to display in the toggle group.                                                        |
| `defaultValue` | -       | `AcceptableValue \| Array<AcceptableValue>` | The default active value of the item(s).                                                         |
| `disabled`     | `false` | `boolean`                                   | When set to `true`, disables user interaction with the toggle group and all its items.           |
| `modelValue`   | -       | `AcceptableValue \| Array<AcceptableValue>` | The controlled value of the active item(s), which can be bind using `v-model`.                   |
| `name`         | -       | `string`                                    | The name of the field. Submitted with its owning form as part of a name/value pair.              |
| `orientation`  | -       | `vertical \| horizontal`                    | The orientation of the component, which determines how focus moves.                              |
| `required`     | -       | `boolean`                                   | When `true`, indicates that the user must set the value before the owning form can be submitted. |
| `rovingFocus`  | `true`  | `boolean`                                   | When `false`, navigating through the items using arrow keys will be disabled.                    |
| `type`         | -       | `single \| multiple`                        | Determines whether a "single" or "multiple" items can be selected at a time.                     |

::alert
The `T` generic extends the array of `NToggleGroupItemProps`, which means that you can use all the props and events from the `NToggleGroupItem` component that extends of [Toggle](/components/toggle#props) component.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueToggleGroupBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toggle-group/ExampleVueToggleGroupBasic.vue
::
:::

:read-more{to="https://www.reka-ui.com/docs/components/toggle-group#root" title="Reka Toggle Group Root API." target="_blank"}

### Orientation

| Prop          | Default      | Type                     | Description                              |
| ------------- | ------------ | ------------------------ | ---------------------------------------- |
| `orientation` | `horizontal` | `horizontal`, `vertical` | Set the orientation of the toggle-group. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueToggleGroupOrientation
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toggle-group/ExampleVueToggleGroupOrientation.vue
::
:::

### Type

| Prop   | Default | Type                 | Description                       |
| ------ | ------- | -------------------- | --------------------------------- |
| `type` | -       | `single`, `multiple` | Set the type of the toggle-group. |

::alert
What is also important is that you can not explicitly define `type` through `prop`, but use a reactive model with an array of values or a single value, and `ToggleGroup` automatically will understand which `type` you want to use.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueToggleGroupType
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toggle-group/ExampleVueToggleGroupType.vue
::
:::

### Variant and Color

| Prop         | Default       | Type                | Description                                      |
| ------------ | ------------- | ------------------- | ------------------------------------------------ |
| `toggle-on`  | `soft-accent` | `{variant}-{color}` | Change the color of the toggle when item is on.  |
| `toggle-off` | `ghost-gray`  | `{variant}-{color}` | Change the color of the toggle when item is off. |

::alert
You can also use the prop `_toggleGroupItem` by specifying options for each element, or you can directly use the props in the object of each element.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueToggleGroupColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toggle-group/ExampleVueToggleGroupColor.vue
::
:::

:read-more{to="/components/button#color" title="Button variant and color section" target="_blank"}

### Size

Adjust the toggle-group size without limits. Use `breakpoints` (e.g., `sm:sm`, `xs:lg`) for responsive sizes or `states` (e.g., `hover:lg`, `focus:3xl`) for state-based sizes.

| Prop                    | Default | Type     | Description                                               |
| ----------------------- | ------- | -------- | --------------------------------------------------------- |
| `size`                  | `sm`    | `string` | Adjusts the overall size of the toggle-group component.   |
| `_toggleGroupItem.size` | `sm`    | `string` | Customizes the size of each item within the toggle-group. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueToggleGroupSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toggle-group/ExampleVueToggleGroupSize.vue
::
:::

## Slots

::alert
It is important that you can also use dynamic slots to customize individual parts of `ToggleGroup`. You also have the option for `item` to use the slot field in the object itself for further dynamic binding.
::

| Name               | Props            | Description                             |
| ------------------ | ---------------- | --------------------------------------- |
| `default`          | `modelValue`     | The default slot, overrides everything. |
| `#{{ item.slot }}` | `item`, `value`  | The item dynamic slot.                  |
| `item`             | `item`, `active` | The item static slot.                   |

:::CodeGroup
::div{label="Preview"}
:ExampleVueToggleGroupSlots
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toggle-group/ExampleVueToggleGroupSlots.vue
::
:::

### Custom Rendering

Use the `default` slot for full control over the toggle-group's structure. This allows you to compose the toggle-group using its individual sub-components (like `NToggleGroup`, `NToggleGroupItem`, listed in the [Components](#components) section), similar to libraries like `shadcn/ui`.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueToggleGroupCustomRendering
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toggle-group/ExampleVueToggleGroupCustomRendering.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/toggle-group.ts [shortcuts/toggle-group.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/toggle-group.ts [types/toggle-group.ts]

## Components

:::CodeGroup
::div{label="ToggleGroup.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/toggle-group/ToggleGroup.vue

::
::div{label="ToggleGroupItem.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/toggle-group/ToggleGroupItem.vue

::
:::
