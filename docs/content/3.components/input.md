---
description: 'Displays a form input field or a component that looks like an input field.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/forms/Input.vue
    target: _blank
---

## Examples

### Basic

| Prop         | Default      | Type                                                                      | Description                                                                                                  |
| ------------ | ------------ | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `type`       | -            | `text`, `password`, `email`, `number`, `tel`, `url`, `search`, `textarea` | The type of input field.                                                                                     |
| `reverse`    | `false`      | `boolean`                                                                 | Swap the position of the leading and trailing icons.                                                         |
| `modelValue` | -            | `any`                                                                     | Value of the input. Can be a string or a number.                                                             |
| `id`         | `randomId()` | `string`                                                                  | Manually set the id attribute. By default, the id attribute is generated randomly for accessibility reasons. |
| `readonly`   | `false`      | `boolean`                                                                 | Make the input readonly.                                                                                     |
| `disabled`   | `false`      | `boolean`                                                                 | Disable the input.                                                                                           |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueInputUsage
::
::div{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputUsage.vue
::
:::

### Variant

| Prop    | Default   | Type        | Description               |
| ------- | --------- | ----------- | ------------------------- |
| `input` | `outline` | `{variant}` | The variant of the input. |

| Variant   | Description                 |
| --------- | --------------------------- |
| `outline` | The default variant.        |
| `solid`   | The solid variant.          |
| `~`       | The unstyle or base variant |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueInputVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputVariant.vue
::
:::

### Color

| Prop    | Default             | Type                | Description             |
| ------- | ------------------- | ------------------- | ----------------------- |
| `input` | `{variant}-primary` | `{variant}-{color}` | The color of the input. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueInputColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputColor.vue
::
:::

### Size

| Prop   | Default | Type     | Description                                 |
| ------ | ------- | -------- | ------------------------------------------- |
| `size` | `md`    | `string` | Allows you to change the size of the input. |

> 🚀 Adjust input size freely using any size, breakpoints (e.g., `sm:sm, xs:lg`), or states (e.g., `hover:lg, focus:3xl`).

::alert{type="warning"}
The **padding**, **icons**, and **text-size** of the input scale are dynamically adjusted based on the **size** property. To customize the **text-size** and **padding** simultaneously, you can use utility classes.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueInputSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputSize.vue
::
:::

### Leading and Trailing Icons

| Prop       | Default | Type     | Description            |
| ---------- | ------- | -------- | ---------------------- |
| `leading`  | -       | `string` | Display leading icon.  |
| `trailing` | -       | `string` | Display trailing icon. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueInputIcon
::
::div{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputIcon.vue
::
:::

:read-more{to="/components/icon" title="Icon component" target="_blank"}

### Loading

| Prop      | Default | Type      | Description            |
| --------- | ------- | --------- | ---------------------- |
| `loading` | -       | `boolean` | Display loading state. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueInputLoading
::
::div{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputLoading.vue
::
:::

### Status

| Prop     | Default | Type                                  | Description                                      |
| -------- | ------- | ------------------------------------- | ------------------------------------------------ |
| `status` | -       | `info`, `success`, `warning`, `error` | Update the input status. Useful for validations. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueInputStatus
::
::div{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputStatus.vue
::
:::

:read-more{to="/components/icon" title="Icon component" target="_blank"}

### Events

| Event       | Description                                      |
| ----------- | ------------------------------------------------ |
| `@leading`  | Emit an event when the leading icon is clicked.  |
| `@trailing` | Emit an event when the trailing icon is clicked. |

::alert{type="warning"}
Leading and trailing icons are wrapped in **pointer-events-none** by default. Use **pointer-events-auto** to remove this behavior.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueInputEvents
::
::div{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputEvents.vue
::
:::

## Slots

| Name       | Props | Description        |
| ---------- | ----- | ------------------ |
| `default`  | -     | The content slot.  |
| `leading`  | -     | The leading slot.  |
| `trailing` | -     | The trailing slot. |

### Leading

Add a leading slot to the input.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueInputLeadingSlot
::
::div{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputLeadingSlot.vue
::
:::

### Trailing

Aad a trailing slot to the input.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueInputTrailingSlot
::
::div{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputTrailingSlot.vue
::
:::

## Expose

| Name       | Type                       | Description                                                    |
| ---------- | -------------------------- | -------------------------------------------------------------- |
| `inputRef` | `Ref<HTMLElement \| null>` | Reference to the native input element for direct manipulation. |
| `focus`    | `() => void`               | Automatically focus the input.                                 |
| `blur`     | `() => void`               | Automatically blur the input.                                  |
| `select`   | `() => void`               | Automatically select the input.                                |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueInputExpose
::
::div{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputExpose.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/input.ts [shortcuts/input.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/input.ts [types/input.ts]

## Components

:::CodeGroup
::div{label="Input.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/Input.vue

::
:::
